// soal 1 

//  jawaban 1
const luasLingkaran = () => {
    let jari2 = 17;
    let phi = 3.14;
    return phi * jari2 * jari2 ;
}

const kelilingLingkaran = () => {
    let jari2 = 17;
    let phi = 3.14; 
    return phi * jari2 * 2 ;
}
console.log('=================================== nomor 1 ==========================================');
console.log('Luas Lingkaran adalah : ' + luasLingkaran());
console.log('keliling Lingkaran adalah : ' + kelilingLingkaran());
console.log('======================================================================================') ;

// soal 2
// jawaban 2 cara 1

let kata1= "Saya";
let kata2= "adalah";
let kata3= "seorang";
let kata4= "frontend";
let kata5= "developer";

const gabungKata = `${kata1} ${kata2} ${kata3} ${kata4} ${kata5}` 


// jawaban 2 cara 2 pilih aja mana yang bener gatau saya juga wkwkkww
let kalimat =new Array() ;
const tambahKata = (kata) => {
    return kalimat.push(kata);
}
tambahKata("saya");
tambahKata("adalah");
tambahKata("seorang");
tambahKata("frontend");
tambahKata("developer");
console.log('=================================== nomor 2 ==========================================');
console.log(kalimat);
console.log(gabungKata);
console.log('======================================================================================');

// soal 3
// jawaban 3
const newFunction = function literal(firstName, lastName){
    return {
      firstName,
      lastName,
      fullName(){
        console.log(firstName + " " + lastName)
        return 
      }
    }
  }
   
  //Driver Code 
  console.log('=================================== nomor 3 ==========================================');
  newFunction("William", "Imoh").fullName()
  console.log('======================================================================================'); 
//soal nomor 4
// jawaban nomor 4

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const { firstName, lastName, destination, occupation, spell} = newObject ;
console.log('=================================== nomor 4 ==========================================');
console.log(firstName, lastName, destination, occupation, spell);
console.log('======================================================================================');

// soal nomor 5
// jawaban nomor 5

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]

let gabunginArray = [ ...west, ...east];
console.log('=================================== nomor 5 ==========================================');
console.log(gabunginArray);
console.log('=======================================================================================');