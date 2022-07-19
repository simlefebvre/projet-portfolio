let dataProjet;

document.getElementById('drapeau').addEventListener('click', function(e) {
    window.open(window.location.href.replace("FR","EN"),'_self');
});


function initialisation(nomProjet){
    let titre = nomProjet.replaceAll("%20", " ",);
            titre = titre.replaceAll("%C3%A9", "é");
            titre = titre.replaceAll("%C3%A8", "è");
            titre = titre.replaceAll("%C3%A0", "à");
            titre = titre.replaceAll("%C3%A7", "ç");
            titre = titre.replaceAll("%C3%B4", "ô");
            titre = titre.replaceAll("%C3%B9", "ù");
            titre = titre.replaceAll("%27", "'");
            titre = titre.replaceAll("%C3%A2", "â");
    listElt = document.getElementsByClassName('titre');
    for (let elt of listElt) {
        if(elt.id == "titrePage"){
            

            elt.innerHTML = titre;
            elt.id = "MenuHome";
        }
        else{
            elt.innerHTML = "<strong>" +titre+"</strong>";
        }
    }
    
    fetch(`./json/${nomProjet}.json`)
    .then(function(res) {
        if (res.ok) {
        return res.json();
        }
    })
    .then(function(value) {
        dataProjet = value;
        document.getElementById('lang').innerHTML = document.getElementById('lang').innerHTML.replace('$LANG', dataProjet.language);
        document.getElementById('cont').innerHTML = document.getElementById('cont').innerHTML.replace('$CONT', dataProjet.contexte);
        document.getElementById('nbpart').innerHTML = document.getElementById('nbpart').innerHTML.replace('$NBPART', dataProjet.nombreParticipants);
        document.getElementById('sup').innerHTML = document.getElementById('sup').innerHTML.replace('$SUP', dataProjet.support);
        document.getElementById('dte').innerHTML = document.getElementById('dte').innerHTML.replace('$DTE', dataProjet.date);
        document.getElementById('explication').children[0].innerHTML = dataProjet.desc;
    });   
}

const queryString = location.search.substring(1);
if(!queryString.match(/^([a-zA-Z 0-9%]+)$/)){
    window.open('../404.html','_self');
}else{
    initialisation(queryString);
}

document.getElementById('MenuHome').addEventListener('click', function(e) {
    window.open('./index.html','_self');
});