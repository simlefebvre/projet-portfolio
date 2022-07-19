document.getElementById('drapeau').addEventListener('click', function(e) {
    window.open(window.location.href.replace("FR","EN"),'_self');
});


function initialisation(){
    fetch('./json/listeDesProjet.json')
    .then(function(res) {
        if (res.ok) {
        return res.json();
        }})
    .then(function(value) {
        let listeDesProjets = value.data;
        for (let projet of listeDesProjets) {
            let div = document.createElement('div');
            let divTitre = document.createElement('div');
            let divDesc = document.createElement('div');
            let p3 = document.createElement('p');
            let img = document.createElement('img');
            let p = document.createElement('p');

            div.id = projet.nom + '|div';
            divTitre.id = projet.nom + '|Titre';
            divDesc.id = projet.nom + '|Desc';
            p3.id = projet.nom + '|h3';

            p3.className = 'TitreProjet';

            img.id = projet.nom + '|img';
            p.id = projet.nom + '|p';


            div.className = 'projet';

            divTitre.className = 'titreProjet';
            divDesc.className = 'descProjet';

            p3.innerHTML = projet.nom;
            img.src = projet.image;
            img.alt = `Une image représentant le ${projet.nom}`;
            img.className = 'imageProjet';
            p.innerHTML = projet.desc;

            divTitre.appendChild(p3);
            divDesc.appendChild(img);
            divDesc.appendChild(p);

            div.appendChild(divTitre);
            div.appendChild(divDesc);

            div.addEventListener('click', function(e) {
                window.open(`./projet.html?${e.target.id.substring(0, e.target.id.indexOf('|'))}`,'_self');
            }
            );
            document.getElementById('liste').appendChild(div);
        }
    })
    }
    
initialisation();

document.getElementById('MenuHome').addEventListener('click', function(e) {
    window.open('./index.html','_self');
});