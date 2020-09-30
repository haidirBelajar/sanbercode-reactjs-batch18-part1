// soal nomor 1

var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var gabung = kataPertama + " "+ kataKedua + " "+kataKetiga + " " + kataKeempat;
console.log(gabung);

// soal nomor 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var angka1 = parseInt(kataPertama);
var angka2 = parseInt(kataKedua);
var angka3 = parseInt(kataKetiga);
var angka4 = parseInt(kataKeempat);

var hitung = angka1 + angka2 + angka3 + angka4;
console.log(hitung)

var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4,14);
var kataKetiga = kalimat.substring(14,19);
var kataKeempat = kalimat.substring(19,24)
var kataKelima = kalimat.substring(25,30);

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);


// soal nomor 3.

var nilai = 80;

if (nilai >= 80) {
    console.log("Indeks Nilai : A");
} else if (nilai >= 70 && nilai < 80) {
    console.log("Indeks Nilai : B");
} else if (nilai >= 60 && nilai < 70) {
    console.log("Indeks Nilai : C");
} else if (nilai >= 50 && nilai < 60) {
    console.log("Indeks Nilai : D");
} else  {
    console.log("Indeks Nilai : E");
}

// soal 5

var tanggal = 2;
var bulan = 4;
switch (bulan){
    case 1:{
        bulan ="januari"
        break;
    }
    case 2:{
        bulan = "Februaru";
        break;
    }
    case 3:{
        bulan = "Maret";
        break;
    }
    case 4:{
        bulan = "April"
        break;
    }
    case 5:{
        bulan ="Mei";
        break;
    }
    case 6:{
        bulan = "Juni";
        break;
    }
    case 7:{
        bulan = "Juli";
        break;
    }
    case 8:{
        bulan = "Agustus";
        break;
    }
    case 9:{
        bulan = "September";
        break;
    }
    case 10:{
        bulan ="Oktober";
        break;
    }
    case 11:{
        bulan ="November";
        break;
    }
    case 12:{
        bulan = "Desember";
        break;
    }
}
var tahun = 1995;

console.log(tanggal +" "+ bulan +" "+ tahun);