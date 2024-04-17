//carabikin array di js
    const angka = new Array(1,3,5,7,9);
    console.log(angka);

//cara kedua

const angka2 =new Array(5);
console.log(angka2);

//cara ketiga
const angka3 = [2,4,6,8.10];
console.log(angka3)

//cara memnampilakn isi arayy
console.log(angka [0])//1
console.log(angka[1])//3

//cara menamilkan array part 2

for (let i = 0 ; i < angka.lenght; i++){
console.log("index ke-" + i + " = " + angka [i])}

//cara menambahkan isi ke dalam array

angka2[0] = 5
angka2[1] = 12
angka2[2] = 17
angka2[3] = 21
angka2[4] = 28

console.log(angka2);


//cara menghapus elemen array 
//pake "undefined"

angka3[2] = undefined 
angka3[4] = undefined



//cara kedua menghapus array 
// pake keyword "delete"

delete angka3[0];
delete angka3[1];
delete angka3[3];
console.log(angka3)


//funtion

/*const s1 = 8;
const s2 = 5;

const volumeS1 = s1 * s1 * s1; 
const volumeS2 = s2 * s2 * s2;
const volumeS3 = s3 * s3 * s3;
const volumeS4 = s4 * s4 * s4;
const volumeS5 = s5 * s5 * s5;
const volumeS6 = s6 * s6 * s6;

let total = volumeS1 + volumeS2;
console.log(total)

//part2

function namafungsi(a , b){
    console.log( a + " suka " + b);
}

namafungsi("manusia" , "orang")*/

//part3
function penjumlahan(a,b){
    const c = a + b
    return c
}

const total = penjumlahan(9,5) + penjumlahan(8,5);
console.log(total);