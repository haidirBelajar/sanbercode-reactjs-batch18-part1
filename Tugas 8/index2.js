var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise 
let time = 10000;
let booksIndeks = 0;

function execute(time) {
    readBooksPromise(time, books[booksIndeks]).then(
        function(sisa){
            if(sisa !== 0){
                booksIndeks++ ;
                execute(sisa);
            }
        }
    ).catch(function(error){

    });
}

execute(time);