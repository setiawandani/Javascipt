/*function penjumlahan (a,b){
    return a + b;
}

function pengurangan(a,b){
    return a - b;
}

// fungsi ekpresi 
const pembagian = function (a,b){
    return a/b;

}*/


do{
console.log("--APLIKASI KALKULAROT SEDERHANA--");
console.log("=================================");
console.log("Silahkan Pilih Menu Dibawah");
console.log("1. Penjumlahan--");
console.log("2. Pengurangan--");
console.log("3. Perkailan--");
console.log("4. Pembagian--");
console.log("0. Keluar--");
console.log("==================================");

const menu = prompt("pilih menu: " )
let a,b;
switch (menu){
    case "1":
        a =parseInt (prompt("masukan nilai a : "))
        b = parseInt(prompt("masukan nilai b : "))
        console.log(penjumlahan(a,b));
        break;


    case "2":

        a = prompt("masukan nilai a : ");
        b =prompt("masukan nilai b : ")
        console.log(parseInt(pengurangan(a,b)));
        break;

    case "3":

        a = prompt("masukan nilai a : ")
        b = prompt("masukan nilai b : ")
        console.log(parseInt(perkalian(a,b)));
        break;
      
    case "4" :   
        a =prompt("masukan nilai a : ")
        b = prompt("masukan nilai b : ")
        console.log(parseInt(pembagian(a,b)));



        default :
        alert("menu Yang Anda Piloih Tidak tersedia")
        break;
}   
    lanjut = prompt("Mau Milih Menu Ynag lain? (Y/t)")
}while (lanjut === "Y" || lanjut === "y")

console.log("-- PROGRAM SELESAI --")
