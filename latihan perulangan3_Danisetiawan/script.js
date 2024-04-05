const ayam = parseInt (prompt("masukan berapa ekor anak ayam yang kamu mau"))
console.log("ayam " + ayam)

for (let  i = ayam; i > 0 ; i--  ){
if (i > 1){
console.log ("Anak ayam turun " + i + "mati satu, tinggal "+ (i-1))
}else{
console.log("anak ayam turun 1  mati satu, tingal induknya" );
}
}