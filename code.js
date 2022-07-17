//const elt = document.getElementById('test');
//elt.addEventListener('click', function() {
//    localStorage.setItem('nomProjet', 'Projet1');
//    window.open('./projet.html','_self');
//    });
//
//const elt2 = document.getElementById('test2');
//elt2.addEventListener('click', function() {
//    localStorage.setItem('nomProjet', 'Projet2');
//    window.open('./projet.html','_self');
//    });

function initialisation(){
    fetch('./listeDesProjet.json')
    .then(function(res) {
        if (res.ok) {
        return res.json();
        }})
    .then(function(value) {
        let listeDesProjets = value.data;
        for (let projet of listeDesProjets) {
            //let li = document.createElement('button');
            let div = document.createElement('div');
            let divTitre = document.createElement('div');
            let divDesc = document.createElement('div');
            let h3 = document.createElement('h3');
            let img = document.createElement('img');
            let p = document.createElement('p');

            div.id = projet.nom + '|div';
            divTitre.id = projet.nom + '|Titre';
            divDesc.id = projet.nom + '|Desc';
            h3.id = projet.nom + '|h3';
            img.id = projet.nom + '|img';
            p.id = projet.nom + '|p';


            div.className = 'projet';

            divTitre.className = 'titreProjet';
            divDesc.className = 'descProjet';

            h3.innerHTML = projet.nom;
            img.src = projet.image;
            img.alt = `Une image représentant le ${projet.nom}`;
            img.className = 'imageProjet';
            p.innerHTML = projet.desc;

            divTitre.appendChild(h3);
            divDesc.appendChild(img);
            divDesc.appendChild(p);

            div.appendChild(divTitre);
            div.appendChild(divDesc);

            div.addEventListener('click', function(e) {
                localStorage.setItem('nomProjet', e.target.id.substring(0, e.target.id.indexOf('|')));
                window.open('./projet.html','_self');
            }
            );
            document.getElementById('liste').appendChild(div);
        }
    })
    }
    
initialisation();