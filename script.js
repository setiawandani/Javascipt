let a = 3
let b = 2

const c = a + b
console.log(c);

a = 6
b = 3

 d = a = b;
console.log(d);

//augmented

let x = 3
let y = 9

console.log(x-=y);
console.log(x+=y);
console.log()

//operator unary 
let k =5;
console.log(k++);
console.log(k++);
console.log(k++);
console.log(k--);
console.log(k--);


//operator per 2bandingan

let angka1 = 10
if (angka1 % 2 === 0)
    console.log("ini bilangan genap");

    //operator string

    const kata1 = "selamat"
    const kata2 = "datang"

    console.log(kata1+" "+kata2)

    const kata3 = "selamat datang"
    const kata4 = "di karawang"

    console.log(kata3+" "+kata4)

    //oprator ternary
    let angka2 = 40
    const ganjilgenap =
     angka2 % 2  === 0 ? "ini bilangan genap" : "ini bilangan ganjil";

   console.log(ganjilgenap);


//===================

// 1. Penjumlahan
let kalku1 = 7
let kalku2 = 3

let gab = kalku1 + kalku2;
console.log(gab);

//2.pengurangan
let pengurangan1 = 7
let pengurangan2 = 2

let pengurangan = pengurangan1 - pengurangan2;
console.log(pengurangan);

//3.perkalian
let perkalian1 = 3
let perkalian2 = 5

let perkalian = perkalian1 * perkalian2;
console.log(perkalian);

//4.permbagian
let pembagian1 = 5
let pembagian2 = 2

let pembagian = pembagian1 / pembagian2;
console.log(pembagian);  


//operator aritmatika
// +,-,/,,*,**,%

let panjajng = 20
let lebar = 30

//operator unary
//+,-,++,--

let i = 10

i++// incremenet (menbahkan 1 angka ke dalam angka seblumnya)
i++
++i
i--// decrement (mengurangi 1 dari nagka seblumny FALSE ANSa)



//operator logika
// &&(AND). || (OR) , ! (NEGASI  = TRUE/FALSE


console.log(10 % 2=== 2 || 10/5 === 2);
console.log(true);

//LOGIKA AND
// TRUE AND TTRUE = TRUE
// TRUE AND FALSE = FALSE 
// FALSE AND TRUE = FALSE
// FALSE AND FALSE = FALSE

//operator ternary
const password = "luwakwhitecoffee"

const islogin = (password === "luwakwhitecoffee")

let alas = prompt("masukan alas: ")

console.log("alas segitiga "+alas)

let tinggi = prompt("masukan tinggi ")

console.log("tinggi segitiga; "+tinggi)
let segitiga = (alas * tinggi) /2

console.log("luas segitiga: "+segitiga)

