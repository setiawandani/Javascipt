function persegi_panjang (a,b){
    return a*b;
}

function lingkaran(a,b){
    return (22/7)*a*a;
}

// fungsi ekpresi 
const segitiga = function (a,b){
    return (1/2)*a*b;
}
do{
console.log("--APLIKASI KALKULAROT SEDERHANA--");
console.log("=================================");
console.log("Silahkan Pilih Menu Dibawah");
console.log("1. panjang--");
console.log("2. lingkaran--");
console.log("3. segitiga--");
console.log("0. Keluar--");
console.log("==================================");

const menu = prompt("pilih menu: " )
let a,b;switch (menu){
    case "1":
        a =parseInt (prompt("masukan nilai persegi panjang : "))
        b = parseInt(prompt("masukan nilai persegi panjang : "))
        console.log(persegi_panjang(a,b));
        break;


    case "2":

        a = prompt("masukan nilai lingkaran : ");
        console.log(parseInt(lingkaran(a,b)));
        break;

    case "3":

        a = prompt("masukan nilai segitiga : ")
        b = prompt("masukan nilai segitiga : ")
        console.log(parseInt(segitiga(a,b)));
        break;

default :
        alert("menu Yang Anda Piloih Tidak tersedia")
        break;}
   
    lanjut = prompt("Mau Milih Menu Yang lain? (Y/t)");
}while (lanjut === "Y" || lanjut === "y")

console.log("-- PROGRAM SELESAI --")

