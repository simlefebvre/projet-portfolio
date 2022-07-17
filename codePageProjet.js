let dataProjet;
function initialisation(){
    const nomProjet = localStorage.getItem('nomProjet');
    document.title = nomProjet;
    listElt = document.getElementsByClassName('titre');
    for (let elt of listElt) {
        elt.innerHTML = nomProjet;
    }
    
    fetch(`./${nomProjet}.json`)
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

initialisation();