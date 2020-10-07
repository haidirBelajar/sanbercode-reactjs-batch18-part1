var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

// tulis code disini
//  jawaban soal 1
let time = 10000;
let booksIndeks = 0;

readBooks(time, books[0], function(x){
    readBooks(x, books[1], function(x){
        readBooks(x, books[2], function(x){
            readBooks(x, books[3], function(x){
    
            })
        })
    })
})

function execute(time){
    readBooks(time,books[booksIndeks], function(sisa){
        if (sisa !== 0 ){
            booksIndeks++ ;
            execute(sisa);
        }
    })
}

execute(time)

// jawaban soal 2
