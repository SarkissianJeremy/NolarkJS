window.addEventListener('load', function () {
 
    let tabInputs = window.document.querySelectorAll('input:not([id="btn_annuler"])');

    for (let i = 0; i < tabInputs.length; i++) {
       
        tabInputs[i].addEventListener('keyup', gestionAlcoolemie);
	    tabInputs[i].addEventListener('change', gestionAlcoolemie);

    }
});


function gestionAlcoolemie() {
    
    let poids = getInt('#num_poids');
    let sexe = getString('#sexe input[type="radio"]:checked');
    let nbVerres = getInt('#num_verre');
    let alcoolemie = getAlcoolemie(sexe, poids, nbVerres);

 
    if (alcoolemie >= 0.5) {
        affiche('h3', 'section', 'alcoolemie', 'Alcoolémie : ' + alcoolemie + ' g/l de sang');
        affiche('h3', 'section', 'amende', 'Amende : ' + getAmende(alcoolemie));
        affiche('h3', 'section', 'sanction', 'Sanction : ' + getSanction(alcoolemie));
    } else {
        affiche('h3', 'section', 'alcoolemie', 'Alcoolémie : ' + alcoolemie + ' g/l de sang');
        supprime('amende');
        supprime('sanction');
    }
}



function affiche(typeEl, cible, id, contenu) {
    let aff = window.document.querySelector('#' + id);
    if (!aff) {
        aff = window.document.createElement(typeEl);
        aff.id = id;
        window.document.querySelector(cible).appendChild(aff);
    }

    aff.innerHTML = contenu;
}


function supprime(id) {
    let el = window.document.querySelector('#' + id);
    if (el) {
        el.remove();
    }
}

function getAlcoolPur(nbVerres) {
    const uniteAlcool = 10;
    return uniteAlcool * nbVerres;
}

    function getCoefDiffusion(sexe) {
    const coefDiffuH = 0.7, coefDiffuF = 0.6;
    if (sexe === 'homme') {
        return coefDiffuH;
    } else {
        return coefDiffuF;
    }
}


function getAlcoolemie(sexe, poids, nbVerres) {
    if (poids > 0) {
        return (getAlcoolPur(nbVerres) / (poids * getCoefDiffusion(sexe))).toFixed(2);
    } else {
        return 0;
    }
}


function getAmende(alcoolemie) {
    const seuil = 0.8;
    if (alcoolemie < seuil) {
        return 'Minorée : 90 € / Forfaitaire : 135 € / Majorée : 375 €';
    } else {
        return '4500 €';
    }
}


function getSanction(alcoolemie) {
    const seuil = 0.8;
    if (alcoolemie < seuil) {
        return '6 points + suspension 3 ans';
    } else {
        return '6 points + 2 ans de prison + suspension 3 ans + stage de sensibilisation';
    }
}


function getInt(id) {
    let valeur = parseInt(window.document.querySelector(id).value);
    if (isNaN(valeur)) {
        window.document.querySelector(id).value = 0;
        return 0;
    } else {
        return valeur;
    }
}


function getString(id) {
    return window.document.querySelector(id).value;
}