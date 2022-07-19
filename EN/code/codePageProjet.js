let dataProjet;


document.getElementById('drapeau').addEventListener('click', function(e) {
    window.open(window.location.href.replace("EN","FR"),'_self');
});

function initialisation(nomProjet){
    document.title = nomProjet;
    listElt = document.getElementsByClassName('titre');
    for (let elt of listElt) {
        if(elt.id == "titrePage"){
            elt.innerHTML = nomProjet;
            elt.id = "MenuHome";
        }
        else{
            elt.innerHTML = "<strong>" +nomProjet+"</strong>";
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
if(!queryString.match(/^([a-zA-Z 0-9]+)$/)){
    window.open('../404.html','_self');
}else{
    initialisation(queryString);
}

document.getElementById('MenuHome').addEventListener('click', function(e) {
    window.open('./index.html','_self');
});