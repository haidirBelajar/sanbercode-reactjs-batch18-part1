// soal 1
// jawaban 1

class Animal {
    constructor(name){
        this.name = name;
        this._legs = 4;
        this._cold_blooded = "false";
    }

    get AnimalName() {
        return this.name;
    }

    get animalLegs(){
        return this._legs;
    }

    set animalLegs(x) {
        this._legs = x;
    }

    get animalBlood (){
        return this._cold_blooded;
    }

    set animalBlood(x) {
        return this._cold_blooded = x;
    }

    set AnimalName (x){
        this._animalname = x;
    }


}

var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.animalLegs) // 4
console.log(sheep.animalBlood) // false

class Frog extends Animal {
    constructor (name) {
        super(name);
    }
    
    jump(){
        return "hop hop";
    }
}

var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 
kodok.animalBlood = "true";
kodok.animalLegs = 2;
console.log(kodok);


class Ape extends Animal {
    constructor(name){
        super(name);
    }
    
    yell(){
        return "Auoo" ;
    }
}

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
sungokong.animalLegs = 2;
sungokong.animalBlood = "true";
console.log(sungokong);

// soal 2

// jawaban 2

class Clock {
    constructor({template}){
        this._template = template;
        this.timer ;
    }
    render() {
        var date = new Date();
        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
        var output = this._template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
        console.log(output);
    } 
   
    stop() {
        clearInterval(this.timer);
    };

    start(){
        this.render();
        this.timer = setInterval(()=>this.render(), 1000);
    };
}

var clock = new Clock({template: 'h:m:s'});
clock.start(); 
