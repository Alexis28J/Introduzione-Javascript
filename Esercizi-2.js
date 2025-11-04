// USARE GLI ARRAY 'NUMBERS', 'STRINGS' E 'BOOLEANS' CHE CI SONO IN 'ARRAY.JS'


let numbers = [20, 10, 22, 44, 35, 0, -1, 1.5, 100, 20];  //numeri

let booleans = [true, true, true, false, true];  //booleani

let strings = ['pippo', 'pluto', 'topolino', 'leonardo']  //stringhe


// 43) Trova il Minimo
// Scrivi una funzione trovaMinimo(array) che restituisce il numero più piccolo in un array di numeri.


// function findMin(nbrArray) {
    
//    let min = 0;

//    for (let i = 0; i < nbrArray.length; i++) {
//     const element = nbrArray[i];
    
//    if (element < min) {
//       min = element;
//    }

//    }
// return min;
// }

// console.log(findMin(numbers));


// 44) Inverti Array con un ciclo
// Scrivi una funzione invertiArray(array) che restituisce un nuovo array con gli elementi in ordine inverso.


// function reverseArray(nbrArray) {
    
// let newArray = [];

// for (let i = nbrArray.length - 1; i >= 0; i--) {  
//     //i parte dalla fine dell'array e va a ritroso fino a 0 
//     //i >= 0 perchè l'ultimo elemento dell'array ha indice 0
//     newArray.push(numbers[i]); //aggiungo all'array vuoto gli elementi di numbers partendo dall'ultimo
// }

// return newArray; //restituisco il nuovo array

// }

// console.log(reverseArray(numbers));




// 45) Maiuscolo Tutte le Parole
// Scrivi una funzione maiuscoloTutto(array) che restituisce un nuovo array con tutte le stringhe in maiuscolo.


function allCaps(strArray) {
    
let newArray = [];

for (let i = 0; i < strArray.length; i++) {
    newArray[i] = strArray[i].toUpperCase();
    
}

return newArray;


}

console.log(allCaps(strings));


// 46) Somma Righe Matrice
// Scrivi una funzione sommaRighe(matrice) che restituisce un array con la somma degli elementi di ogni riga.



// 47) Conta Occorrenze
// Scrivi una funzione contaOccorrenze(array, elemento) che conta quante volte un elemento appare in un array



// 48) Filtra indice pari
// Scrivi una funzione filtraIndicePari(array) che tiene tutti gli elementi in posizione dispari



// 49) Somma pari 
// Scrivi una funzione sommaPari(array) che somma tutti i numeri pari


// 50) trova lunghezze
// Scrivi una funzione trovaLunghezzeParola(array) che restituisce un array delle lunghezze(numeri) delle stringhe che compongono l'array in input