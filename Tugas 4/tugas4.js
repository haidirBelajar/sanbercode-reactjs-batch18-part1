// soal nomor 1 looping pertama

// jawaban nomor 1 looping pertama
console.log('LOOPING PERTAMA')
var angka = 0;
while(angka <= 20 ){
    console.log(angka+' - I Love Coding');
    angka+=2;
}

// jawaban nomor 1 looping kedua
console.log('LOOPING KEDUA');
var x = 20;
while(x > 0) {
    console.log(x + ' - I Will become a frontend developer');
    x-=2;
}

// jawaban nomor 2
for(var x = 1; x <= 20; x++){
    if (x % 2 == 0){
        console.log(x +' Berkualitas');
    } else if (x % 3 ==0 && x % 2 ==1){
        console.log(x + ' I Love Coding');
    } else {
        console.log(x + ' santai');
    }
  }

//   soal nomor 3

// jawaban nomor 3
for (i = 0; i <= 7; i++){
     console.log("#".repeat(i));
}

//  soal nomor 4

// jawaban nomor 4
var str = "saya sangat senang belajar javascript";
var hasil = str.split(" ");
console.log(hasil);

// soal nomor 5

// jawaban nomor 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var urutBuah = daftarBuah.sort();
var i;
for (i = 0; i < daftarBuah.length; i++) {
    console.log(urutBuah[i]);
   }