const mahasiswa = ["Andrew ", "Bob", "Clark", "david", "ethan", "Fernando", "Gabriel" ];
    console.log(mahasiswa);

    //menambahkan nama baru 
    mahasiswa.push = ("harold", "Iglesias", "Jackson" );
    console.log(mahasiswa)

    // 
    const mahasiswa1 = mahasiswa.slice(1, 2)
    const mahasiswa2 = mahasiswa.slice(3, 4)
    const mahasiswa3 = mahasiswa.slice(5, 6) 
    console.log(mahasiswa1.join(" "), mahasiswa2.join(" "), mahasiswa3.join(" "))

    //hapus nama jackson
    mahasiswa.pop();
    console.log(mahasiswa)

    //hapus nama andrew
    mahasiswa.shift();
    console.log(mahasiswa)

    //menambahkan nama adndy
    mahasiswa.unshift("andy");
    console.log(mahasiswa)

    //ubah nama fernando ke fransesco
    mahasiswa.splice(5,1, "fransesco");
    console.log(mahasiswa)

    //menghapus nama ethan
    mahasiswa.splice(4,1);
    console.log(mahasiswa)










    


