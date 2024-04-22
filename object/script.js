const mahasiswa = {
// key-value pair (pasangan kunci-nilai)

nama:"Danisetiawan",
nim:"1025498",
umur :"19",
};
//dikasih "nama" di console.log akan tampil di web hanya nama saja
//menambahkan properti kedalam object
console.log(mahasiswa.nama)
mahasiswa["alamat"] = "karangpawitan";
mahasiswa["no_telpon"] = "08123456789";
mahasiswa["sapa"] = function(){
    console.log("Hallo nama saya Dani Setiawan")
}
    console.log( mahasiswa);
    console.log(mahasiswa.alamat);
    console.log(mahasiswa.sapa());

 //untuk menghapus properti pada object
    delete mahasiswa["umur"]

    console.log(mahasiswa)

    const siswaBLK = [
        {
            nama :"dani Setiawan",
            alamat : "karangpawitan",
            umur:19,
        },
        {
            nama : "Faisl ",
            alamat :"Majalaya",
            usia :37,
        },
        {
            nama : "taopilk",
            alamat :"baduy",
            usia: 23,
        },
    ];
    console.log(
    "Hallo, nama saya " +siswaBLK[1].nama,
    "alamat di" +siswaBLK[1]. alamat,
    "umur saya" +siswaBLK[1]. umur,
)

const kependudukan.sapa(
    

)