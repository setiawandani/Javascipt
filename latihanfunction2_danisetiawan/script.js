//punya dany
function vol_kubus (a){
    return (a*3);
}
function vol_balok(a1,a2,a3){
    return (a1*a2*a3);
}
function vol_tabung(n1,n2){
    return (22/7)*n1*n2;
}
function vol_bola(a,b){
    return (4/3)*a*b;
}
function vol_kerucut (a,b){
    return (1/3)*(22/7)*a*b;
}
let lanjut;
do{
    console.log("--APLIKASI KALKULAROT SEDERHANA--");
    console.log("=================================");
    console.log("Silahkan Pilih Menu Dibawah");
    console.log("1. vol kubus--");
    console.log("2. vol balok--");
    console.log("3. vol tabung--");
    console.log("4. vol bola--");
    console.log("5. vol kerucut--");
    console.log("0. Keluar--");
    console.log("==================================");
    
    const menu = prompt("pilih menu: " )
    let a,b,c,a1,a2,a3,n1,n2;switch (menu){
        case "1":
            a = parseInt(prompt("masukan nilai vol kubus : "))  
            console.log("Hasil dari nilai volume kubus adalah "+ vol_kubus(a));
            break;
    
        case "2":
            a1 = prompt("masukan nilai vol balok : ");
            a2= prompt("masukan nilai vol balok : ");
            a3= prompt("masukan nilai vol balok : ");
            console.log("Hasil dari nilai volume balok adalah "+parseInt(vol_balok(a1,a2,a3)));
            break;
    
        case "3":
            n1 = prompt("masukan nilai vol tabung : ")
            n2 = prompt("masukan nilai vol tabung : ")
            console.log("Hasil dari nilai volume tabung adalah "+parseInt(vol_tabung(n1,n2)));
            break;

        case "4":
            a = prompt("masukan nilai vol bola : ")
            b = prompt("masukan nilai vol bola : ")
            console.log("Hasil dari nilai volume bola adalah "+parseInt(vol_bola(a,b)));
            break;

        case "5":
            a = prompt("masukan nilai vol kerucut : ")
            b = prompt("masukan nilai vol kerucut : ")
            console.log("Hasil dari nilai volume kerucut adalah "+parseInt(vol_kerucut(a,b)));
            break;
    
    default :
            alert("menu Yang Anda Pilih Tidak tersedia")
            break;}
       
        lanjut = prompt("Mau pilih Menu Yang lain? (Y/t)");
    }while (lanjut === "Y" || lanjut === "y")
    
    console.log("-- PROGRAM SELESAI --")
    
    