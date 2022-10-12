function get_salaire_ancienneter(numero_ancien) {
const fixe = 1100;
if (numero_ancien >=5 && numero_ancien < 10) {
	let salaire_anciennete = fixe + (fixe * 3/100) ;
	return salaire_anciennete;
} else if (numero_ancien >= 10) {
	let salaire_anciennete = fixe + (fixe * 6/100);
	return salaire_anciennete;
}
else return fixe;
};

function get_commission_XSp_S20(num_S20) {
let commission_S20_total = 2.8 * num_S20;
return commission_S20_total;
}

function get_commission_XSp(numX_Sp){
if (numX_Sp === 50) {
	let commission_XSp_total = 21;
	return commission_XSp_total;
} else if (numX_Sp > 50) {
	let commission_XSp_total = 21 * (numX_Sp - 50);
	return commission_XSp_total;
}
else return 0;
}

function get_commission_Multitec(num_Mult){
if (num_Mult <= 20) {
	let commission_Multitec_total = 7.2 * num_Mult;
	return commission_Multitec_total;
} 
else if (21 <= num_Mult && num_Mult <= 50) {
	let commission_Multitec_total = (20 * 7.2) + 10.8 * (num_Mult - 20);
	return commission_Multitec_total;
} 
else if (num_Mult > 50) {
	let commission_Multitec_total = (20 * 7.2) + (50 * 10.8) + 18 * (num_Mult - 50);
	return commission_Multitec_total;
}
}
function get_indem_km(indem_km){
let indem_km_total = indem_km * 0.15;
if (indem_km_total >= 350) {
	return 350;
}
else
return indem_km_total;
}

function get_total() {
remuneration = get_salaire_ancienneter(window.document.getElementById('num_ancien').value)
+ get_commission_XSp_S20(window.document.getElementById('num_S20').value)
+ get_commission_XSp(window.document.getElementById('numX-Sp').value)
+ get_commission_Multitec(window.document.getElementById('num_Mult').value)
+ get_indem_km(window.document.getElementById('indem_km').value);

window.document.querySelector("#resultat_remun").innerHTML = remuneration + " €";
};

window.addEventListener("load", function() {
	window.document.querySelector("#remuneration").addEventListener("click", get_total);
});

