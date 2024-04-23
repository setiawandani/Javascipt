console.log(
  "======================================================================================="
);
console.log("KODE BARANG\t\tNAMA PRODUK\t\tHARGAT\t\tSTOCK");
console.log(
  "======================================================================================="
);

let lanjut;
do {
  let kode_barang = prompt("MASUKAN KODE BARANG");
  let NAMA_PRODUK = prompt("MASUKAN NAMA BARANG");
  let harga = parseFloat(prompt("MASUKAN HARGA BARANG"));
  let stock = prompt("MASUKAN STOCK BARANG");
  console.log(
    kode_barang + "\t\t\t" + NAMA_PRODUK + "\t\t\t" + harga + "\t\t" + stock
  );
  lanjut = prompt("apakah mau lanjut mengisi daftar?(Y/T");
} while (lanjut === "Y" || lanjut === "y");
