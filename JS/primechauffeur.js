function get_salaire_ancienneter_chauffeur(nb_annee){
    if(nb_annee < 4){
        return 0;
    }
    else
        nb_annee -= 4;
        nb_annee = nb_annee * 30 + 300;
        return nb_annee;
}

function get_prime_distance_chauffeur(km){
    let km_total = km *0.01;
    if (km_total >= 900){
        return 900;
    }
    else
        return km_total;
}

function get_total_initial(){
    prime = get_salaire_ancienneter_chauffeur(window.document.getElementById('annee_ancien').value)+
            get_prime_distance_chauffeur(window.document.getElementById('km_parcouru').value); 
   return prime;
}

function get_total_prime_test(nb_accident){
    prime = get_total_initial();
    
    if(nb_accident > 3){
        prime = 0;
        return prime;
    }
    else 
        prime = prime/(nb_accident + 1);
        return prime;
}

function get_total_prime(){
    prime = get_total_prime_test(window.document.getElementById('nb_accident').value);
    if(window.document.getElementById('nb_accident').value === 0){
    window.document.querySelector("#resultat_prime").innerHTML = prime + " €";
}
else 
    window.document.querySelector("#resultat_prime").innerHTML = prime + " € ";
}
window.addEventListener("load", function() {
	window.document.querySelector("#prime").addEventListener("click",get_total_prime );
});


function test(){
    
}
