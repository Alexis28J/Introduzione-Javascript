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


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 45) Maiuscolo Tutte le Parole
// Scrivi una funzione maiuscoloTutto(array) che restituisce un nuovo array con tutte le stringhe in maiuscolo.


// function allCaps(strArray) {

// let newArray = [];

// for (let i = 0; i < strArray.length; i++) {
//     newArray[i] = strArray[i].toUpperCase();
// }

// return newArray;

// }

// console.log(allCaps(strings));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 46) Somma Righe Matrice // matrice = array di array
// Scrivi una funzione sommaRighe(matrice) che restituisce un array con la somma degli elementi di ogni riga.

// const superArray = [[1, 2, 3],
// [1, 1, 1],
// [3, 2, 1]];

//griglia 3x3 si usa per rappresentare matrici e tabelle  
// la matrice ha 3 righe e 3 colonne


//Questo è un array che contiene altri array:
//arrayDiArray (riga)[0] → [1, 2, 3]  //1 è l'elemento alla riga 0, colonna 0 // 2 è l'elemento alla riga 0, colonna 1 // 3 è l'elemento alla riga 0, colonna 2
//arrayDiArray (riga)[1] → [1, 1, 1]  //1 è l'elemento alla riga 1, colonna 0 // 1 è l'elemento alla riga 1, colonna 1 // 1 è l'elemento alla riga 1, colonna 2
//arrayDiArray (riga)[2] → [3, 2, 1] //3 è l'elemento alla riga 2, colonna 0 // 2 è l'elemento alla riga 2, colonna 1 // 1 è l'elemento alla riga 2, colonna 2


// function sumOfRow(matrix) {

//     let result = [];  //array vuoto dove andrò a mettere le somme delle righe

//     for (let rowNumber = 0; rowNumber < superArray.length; rowNumber++) {
//         //superArray è l'array principale che contiene gli altri array (le righe)
//         //superArray.length = numero di righe della matrice
//         //rowNumber = indice della riga corrente
//         let sum = 0;   //numero neutro per la somma

//         for (let columnNumber = 0; columnNumber < superArray[rowNumber].length; columnNumber++) {
//             //superArray[rowNumber] è l'array della riga corrente
//             //superArray[rowNumber].length = numero di elementi (colonne) nella riga corrente
//             //columnNumber = indice della colonna corrente

//             sum = sum + superArray[rowNumber][columnNumber];
//             //sommo l'elemento alla riga 'rowNumber' e colonna 'columnNumber' alla somma totale, in questo modo sommo tutti gli elementi della matrice
//             //superArray[rowNumber][columnNumber] = elemento alla riga 'rowNumber' e colonna 'columnNumber'
//             //Usando la notazione array[i][j], si accede a un elemento specifico all'interno di questa struttura, come se fosse una riga (i) e una colonna (j), 
//             // perciò viene spesso visualizzato come una griglia o matrice
//         }
//         result.push(sum); //aggiungo la somma della riga corrente all'array 'result'
//     }
//       return result;
// }


// console.log(sumOfRow(superArray));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 47) Conta Occorrenze
// Scrivi una funzione contaOccorrenze(array, elemento) che conta quante volte un elemento appare in un array


// function countOcurrences(nbrArray, elementOfArray) {

//     let counter = 0;

//     for (let i = 0; i < nbrArray.length; i++) {  //utilizzo un ciclo for per scorrere ogni elemento dell'array
//         if (nbrArray[i] === elementOfArray) {  //vuole dire che sto confrontando l'elemento corrente dell'array con l'elemento passato come argomento alla funzione
//             counter++;  //se sono uguali incremento il contatore di 1    
//         }
//     }
//     return counter;
// }


// console.log(countOcurrences(numbers, 20));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 48) Filtra indice pari
// Scrivi una funzione filtraIndicePari(array) che tiene tutti gli elementi in posizione dispari


// function filterEvenIndex(nbrArray) {

//      //Il metodo .filter() in JavaScript è un metodo degli array che crea un nuovo array contenente solo gli elementi che soddisfano una condizione specificata da una funzione di callback. 
//     // La funzione di callback viene eseguita per ogni elemento dell'array originale; se restituisce true, l'elemento viene incluso nel nuovo array, altrimenti viene ignorato.

//     return nbrArray.filter((_, index) => {  //La callback riceve due parametri: l'elemento corrente (che qui ignoriamo usando _) e il suo indice.
//         return index % 2 !== 0;  //funzione di callback che restituisce true se l'indice è dispari (index % 2 !== 0), quindi l'elemento viene incluso nel nuovo array
//     }) 
// }

// console.log(filterEvenIndex(numbers));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 49) Somma pari
// Scrivi una funzione sommaPari(array) che somma tutti i numeri pari

function sumOfEvens(nbrArray) {

    let sum = 0;

    for (let i = 0; i < nbrArray.length; i++) {
        if (nbrArray[i] % 2 === 0) {     //verifica se l’elemento CORRENTE (nbrArray[i]) è pari. L’operatore modulo % restituisce il resto della divisione per 2; se è zero, il numero è pari.
            sum = sum + nbrArray[i];
        }
    }
    return sum;
}

console.log(sumOfEvens(numbers));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 50) trova lunghezze
// Scrivi una funzione trovaLunghezzeParola(array) che restituisce un array delle lunghezze(numeri) delle stringhe che compongono l'array in input

function findLengthWord(strArray) {
    


}