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


const arr = [3,5,7,9,11]

// lenght = menampilkan jumlah isi dari array
console.log(arr.length)

// join = menampilakn isi array menjadi sebuah sting
const word = ['K', 'A', 'T', 'A']
const word2 = ["selamat", "datang", "di", "BLK"]
console.log(word.join(""))
console.log(word2.join(""))

// push = menambahkan elemen array di bagian terakhir
arr.push(13, 15, 17)
word.push("B", "E", "R", "A", "C", "U", "N")
word2.push("karawang")

console.log(arr)
console.log(word.join(" " + "\n" + word2.join(" ")));

// pop = menghapus elem terakhir array
arr.pop()
console.log(arr)

// unshift = menambahkan elemen pada di awal array
//[1,3,5,9,11,13,15]
arr.unshift(1)
console.log(arr)

//shift = menghapus elemen pertama di array
word.shift()
console.log(word.join(""))

//slite(idxawal, idakhir)
const siswa = ["Maulana", "naufal", "Faisal", "Topik", "Rian"]

//slice = akan menghasilakn array baru
const siswa2 = siswa.slice(2, 4);
console.log(siswa2);

//splice = menyisipkan elemen di index tertentu
// splice(idwawal, mau dihapus berapa elemen1, elemen2,...)
  siswa.splice(2,0, "yudha", "jabbar", "dani")
console.log(siswa);

//foreach = sama kaya perulangan "for"
const nilai= [70, 75, 82, 65, 58];

nilai.forEach(function (e, i){
    console.log("index ke-" + i + " = " + e);
})

// sort mengurutkan array dari kecil sampai terbesar
console.log(nilai.sort())

//map untuk memetakan
const dikalidua= nilai.map(function (e){ 
return e * 2
})

console.log(dikalidua)

// filter & find
const bilanganbulat = [2, 3, 4, 7, 6, 9, 11, 8];

const bilbul = bilanganbulat.filter(function(e){
    return e< 5
});

const bilbul2 = bilanganbulat.filter(function(e){
    return e< 5
});

console.log(bilbul);
console.log(bilbul2);
