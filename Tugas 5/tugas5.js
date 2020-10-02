// soal 1
// Tulislah sebuah function dengan nama halo() yang mengembalikan nilai “Halo Sanbers!” yang kemudian dapat ditampilkan di console.


// jawaban soal nomor 1
    function halo(){
        return "Halo Sanbers!";
    }
console.log('========== 1 ==========') 
console.log(halo()); // "Halo Sanbers!" 
console.log('=======================') 
//soal nomor 2

// jawaban nomor 2

function kalikan(num1,num2){
   return num1 * num2;
}
 
var num1 = 12
var num2 = 4
 
var hasilKali = kalikan(num1, num2)
console.log('========== 2 ==========');
console.log(hasilKali) // 48
console.log('=======================')

// soal nomor 3

// jawaban nomor 3
var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"

function introduce(name,age,address,hobby){
    return "Nama saya " + name +", "+ "umur Saya " + age + " tahun, " + "alamat Saya di" + address + ", "
    + "dan saya punya hobby yaitu " + hobby ;
}
var perkenalan = introduce(name,age,address,hobby);
console.log('========== 3 ==========');
console.log(perkenalan);
console.log('=======================');
// soal nomor 4

// jawaban nomor4

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]

objectpeserta= {
    nama : arrayDaftarPeserta[0],
    jenkel : arrayDaftarPeserta[1],
    hobi : arrayDaftarPeserta[2],
    thn_lahir : arrayDaftarPeserta[3]
}
console.log('========== 4 ==========');
console.log(objectpeserta);
console.log('=======================');
// soal nomor 5

// jawaban nomor 5
var buah = [{
    nama :"strawberry",
    warna : "merah",
    'ada bijinya' : "tidak",
    harga : 9000
},
{
    nama : "jeruk",
    warna : "oranye",
    'ada bijinya': "ada",
    harga : 8000  
},
{
    nama: "Semangka",
    warna: "Hijau & Merah",
    'ada bijinya' : "ada",
    harga: 10000
},
{
    nama : "Pisang",
    warna : "Kuning",
    'ada bijinya' : "tidak",
    harga: 5000
}
]
console.log('========== 5 ==========');
console.log(buah[0]);
console.log('======================');
var dataFilm = [];
function addFilm(nama,durasi,genre,tahun){
    dataFilm.push({
    nama : nama,
    durasi : durasi,
    genre : genre,
    tahun : tahun
});
    return dataFilm;
}

addFilm("cupangmu_cupangku_cupang_kita_semua.3gp","30menit","panas","2001");
console.log('========== 6 ==========');
console.log(dataFilm);
console.log('=======================');