console.log('è il momento degli Array');


// ARRAY  - scatola che contiene tanti dati contemporaneamente

// let numbers = [20, 10, 22, 44, 35, 0, -1, 1.5, 100, 20];  //numeri

// console.log(numbers.length); //-> 10    //in questo caso il .length mi butta quanti dati ci sono dentro l'array

// console.log(numbers[0]);    //-> 20  //le notazione con le quadre mi permette di prendere un elemento - in questo caso la posizione 0 è 20
// console.log(numbers[3]);  //-> 44


// let booleans = [true, true, true, false, true];  //booleani


// console.log(numbers.length); //-> 5    

// console.log(numbers[3]);  //-> false


// let strings = ['pippo', 'pluto', 'topolino', 'leonardo']  //stringhe

// console.log(numbers.length); //-> 4

// console.log(numbers[3]);  //-> 'leonardo'


// let strangeArray = [34, false, 'leonardo', 2, 4, 'leonardo']  //tipi diversi  --  NON FARLO MAI! MAI E POI MAI!!!

// console.log(numbers.length); //-> 6

// console.log(numbers[3]);  //-> 2


//CICLO FOR
// for (let i = 0; i < numbers.length; i++) {   //numbers è il nome dell'array che voglio ciclare con for

//     const element = numbers[i];

//     console.log(element);
// }


//CICLO WHILE
// let i = 0; 

// while (i < numbers.length) {     //otteniamo lo stesso risultato come con il for
//     const element = numbers[i];
//     console.log(element);
//     i++;
// }


//CICLO FOR...OF

// for (const element of numbers) {   //scriviamo forof e usiamo l'autocompletamento  
//     console.log(element);  //non si deve chiamare per forza element
// }

// // La differenza tra for e for of è che con for of non dobbiamo gestire l'indice (i) manualmente.

// for (const stringa of strings) {
//     console.log(stringa); 
// }


//AGGIUNGERE ELEMENTI

//Per aggiungere un elemento IN FONDO - metto 'push'
// strings.push('paperone');  //push aggiunge in fondo
// console.log(strings);

// //Per aggiungere un elemento IN CIMA - metto 'unshift'
// strings.unshift('paperino');  //unshift aggiunge all'inizio
// console.log(strings);



//RIMUOVERE ELEMENTI


//Per togliere l'ultimo elemento - 'pop'

// strings.pop();   //toglie l'ultimo elemento
// console.log(strings);

// const rimosso = strings.pop(); 
// console.log('ho tolto ' + rimosso);


// //Per togliere invece il primo elemento - 'shift'
// const rimosso2 = strings.shift(); //toglie il primo elemento
// console.log(strings);
// console.log('ho tolto ' + rimosso2);


// //Per togliere in mezzo - 'splice'
// const rimosso3 = strings.splice(2,1);  //splice toglie in mezzo e restituisce un array con quello che ha tolto   
//2 sta per cancellare 'topolino' che è in posizione 2 ('parte dal secondo posto') e 1 (default) sta per 'quanti vuoi cancellare?' 
// console.log(strings);
// console.log('Ho tolto ' + rimosso3);

// const rimosso4 = numbers.splice(1,3);  
// console.log(numbers);
// console.log('Ho tolto ' + rimosso4);



//CAMBIARE GLI ELEMENTI

// strings[0] = 'superpippo';  //0 sta per la prima posizione (posizione nella stringa)
// console.log(strings);

// strings[3] = 'super' + strings[3]
// console.log(strings);

// numbers[4] = 2;  
// console.log(numbers);

// numbers[8] = numbers[8] * 2; 
// console.log(numbers);



//PATTERN DEGLI ARRAY - è un modo di lavorare con gli array che si ripete spesso

//FILTERING - Prendere solo gli elementi che rispettano una certa condizione
//MAPPING - Prendere tutti gli elementi e trasformarli in qualcos'altro
//REDUCING - Prendere tutti gli elementi e ridurli ad un unico valore finale (somma, prodotto, concatenazione, ecc)

//ESEMPI:

// MAP -> modifica di tutti o parte degli elementi di un array 
//1) Trasforma tutte le stringhe dell'array al maiusculo

// for (let i = 0; i < strings.length; i++) {

//      strings[i] = strings[i].toUpperCase();

// }

// console.log(strings);

//ORA PROVIAMOLO A SCRIVERLA COME UNA FUNZIONE GENERICA

// function arrayToUppercase(stringArray) {

//     debugger;

//          const newArray = [];  //quadre senza niente è un array vuoto

//          for (let i = 0; i < stringArray.length; i++) {

//             const element = stringArray[i];

//             const elementUpper = element.toUpperCase();

//             newArray.push(elementUpper);

//          }

//          return newArray;
// }

// console.log(arrayToUppercase(strings));



//2) Moltiplica per due tutti i numeri in un array


// function multiplyBy2Array(numberArray) {

//     debugger;  // non è necessario, solo per controllare come funziona la funzione

//          const newArray = [];  //quadre senza niente è un array vuoto

//          for (let i = 0; i < numberArray.length; i++) {

//             const element = numberArray[i];

//             const doubleElement = element * 2;

//             newArray.push(doubleElement);

//          }

//          return newArray;
// }

// console.log(multiplyBy2Array(numbers));


//3) Rendere maiuscole le parole che iniziano con p

// function arrayToUppercaseWordsStartingWithP(stringArray) {

//     const newArray = [];  //quadre senza niente è un array vuoto

//     for (let i = 0; i < stringArray.length; i++) {

//         const element = stringArray[i];

//         if (element[0] === 'p') {
//             const elementUpper = element.toUpperCase();
//             newArray.push(elementUpper); //metto l'elemento trasformandolo in maiuscolo
//         } else {
//             newArray.push(element);   //metto l'elemento senza cambiarlo
//         }

//     }

//     return newArray;
// }

// console.log(arrayToUppercaseWordsStartingWithP(strings));



//COMPITO PER DOMANI (MARTEDì 4 NOVEMBRE)

const pippo = [1, 2, 4, 56, 78, 11, -123, 3, -23, 2, 22, 4];

//41) Creare una funzione che dato un array di numeri li eleva tutti al quadratto

function squareArray(nbrArray) {
    
}

console.log(squareArray('pippo'));  // mi aspetto -> [1, 4, 16, 3136, ...]


//42) Creare una funzione che dato un array di numeri li eleva al quadratto solo i numeri dispari

function squareOddArray(nbrArray) {
    
}

console.log(squareOddArray('pippo'));  // mi aspetto -> [1, 2, 4, 56, 78, 121, 15129, 9, 529, 2, 22, 4]


//43) Creare una funzione che dato un array di numeri moltiplichi per 2 quelli positivi e divida per due i negativi
function multiplyPositiveAndDivideNegative(nbrArray) {
    
}

console.log(multiplyPositiveAndDivideNegative('pippo'));  // mi aspetto -> [2, 4, 8, 112, 156, 22, -61.5, 6, -11.5, 4, 44, 8]
