const katalog = [


 {
    kode_barang :"mie-001",
    nama_produk : "indomie goreng",
    harga : 3000,
    stock :  15
},
 {
    kode_barang : "Mie-002",
    nama_produk : "indomie Ayam Bawang",
    harga : 3500,
    stock :  25
},
 {
    kode_barang : "SHP-003",
    nama_produk :"shampo Clear Menthol",
    harga : 8000,
    stock :  40
},
 {
    kode_barang : "SBN-004",
    nama_produk : "sabun",
    harga : 2000,
    stock :  15
},
];
console.log(
    "======================================================================================")
console.log("kode_barang\t\t\tNama_Produkt\t\t\t\tHarga\t\t\tStock");
console.log(
    "======================================================================================");

console.log(
    katalog[0].kode_barang+
    "\t\t\t\t\t"+
    katalog[0].nama_produk+
    "\t\t\t" +
    katalog[0].harga+
    "\t\t\t"+
    katalog[0].stock
) ;
console.log(
    katalog[1].kode_barang+
    "\t\t\t\t\t"+
    katalog[1].nama_produk+
    "\t\t" +
    katalog[1].harga+
    "\t\t\t"+
    katalog[1].stock
) ;
console.log(
    katalog[2].kode_barang+
    "\t\t\t\t\t"+
    katalog[2].nama_produk+
    "\t" +
    katalog[2].harga+
    "\t\t\t"+
    katalog[2].stock
) ;
console.log(
    katalog[3].kode_barang+
    "\t\t\t\t\t"+
    katalog[3].nama_produk+
    "\t\t\t\t\t" +
    katalog[3].harga+
    "\t\t\t"+
    katalog[3].stock
) ;
console.log(
    "=======================================================================================");
