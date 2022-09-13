const fixe = 1100;
const xspirit = 350;
const multitec = 180;
const s20 = 140;



let nbancien = ParseInt(window.document.querySelector("#ancien").value);
 if (nbancien >= 5) {
     fixe = fixe * 1.03;
 }
 else if (nbancien >10){
     fixe = fixe * 1.06;
 }
 
 let nbsVingt = ParseInt(window.document.querySelector("#nbs20").value);
 let comS20 = nbsVingt * s20 *0.02; 
 fixe += comS20; 
 
 let nbxspirit = ParseInt(window.document.querySelector("#nbx-spirit").value);
 if(nbxspirit >=50){
     let comxspirit = nbxspirit * xspirit * 0.06;
     fixe += comxspirit;
 }
 
 let nbmultitec = ParseInt(window.document.querySelector("#nbmultitec").value);
 if(nbmultitec <=20){
     let commultitec = nbmultitec * multitec * 0.04;
     fixe += commultitec;
 }
 else if 