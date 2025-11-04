console.log('è il momento degli Array');


// ARRAY  - scatola che contiene tanti dati contemporaneamente

//let numbers = [20, 10, 22, 44, 35, 0, -1, 1.5, 100, 20];  //numeri

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



//COMPITO PER DOMANI (MARTEDì 4 NOVEMBRE)  - ESERCIZI DI MAPPING 

//const pippo = [1, 2, 4, 56, 78, 11, -123, 3, -23, 2, 22, 4];

//41) Creare una funzione che dato un array di numeri li eleva tutti al quadratto

// function squareArray(nbrArray) {

//     const square = [];

//     for (let i = 0; i < nbrArray.length; i++) {
//         const element = nbrArray[i];
//         const squaredElement = element ** 2;
//         square.push(squaredElement);
//     }
//     return square;
// }

// console.log(squareArray(pippo));  // mi aspetto -> [1, 4, 16, 3136, ...]


//FATTO DAL PROF. USANDO FOR...OF

// function squareArray(nbrArray) {

//     const newArray = [];

//     for (const nbr of nbrArray) {
//         const square = nbr ** 2;
//         newArray.push(square);
//     }

//     return newArray
// }

// console.log(squareArray(pippo));  // mi aspetto -> [1, 4, 16, 3136, ...] 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//42) Creare una funzione che dato un array di numeri li eleva al quadratto solo i numeri dispari

//const pippo = [1, 2, 4, 56, 78, 11, -123, 3, -23, 2, 22, 4];

//Un numero negativo dispari diviso per 2 darà sempre un resto di -1. Questo perché, per definizione, un numero dispari (sia esso positivo o negativo) non è divisibile esattamente per 2. 
// La divisione di un numero negativo dispari per 2 risulterà sempre in un quoziente intero più un resto di -1.

// function squareOddArray(nbrArray) {

//     //debugger;

//     const square = [];

//     for (let i = 0; i < nbrArray.length; i++) {

//         const element = nbrArray[i];

//         if (nbrArray[i] % 2 === 1        
//           ||nbrArray[i] % 2 === -1) {    //Invece di aggiungere quest'altra condizione, per essere più CONCISO aggiungo Math.abs(nbrArray[i])
//             const squaredElement = element ** 2;
//             square.push(squaredElement);

//         }else{
//             square.push(element);
//         }
//     }
//     return square;

// }

// console.log(squareOddArray(pippo));  // mi aspetto -> [1, 2, 4, 56, 78, 121, 15129, 9, 529, 2, 22, 4]


// FATTO DAL PROF. - PRATICAMENTE UGUALE AL MIO

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//43) Creare una funzione che dato un array di numeri moltiplichi per 2 quelli positivi e divida per due i negativi

//const pippo = [1, 2, 4, 56, 78, 11, -123, 3, -23, 2, 22, 4];

// function multiplyPositiveAndDivideNegative(nbrArray) {

//     //debugger;

//     const sum = [];

//     for (let i = 0; i < nbrArray.length; i++) {

//         const element = nbrArray[i];

//         if (element >= 0) {
//             multiplyPositive = element * 2;
//             sum.push(multiplyPositive);   //Ricorda che .push viene utilizzato per aggiungere uno o più elementi alla fine di un array.

//         } else {
//             divideNegative = element / 2;
//             sum.push(divideNegative);
//         }
//     }

//     return sum;
// }

// console.log(multiplyPositiveAndDivideNegative(pippo));  // mi aspetto -> [2, 4, 8, 112, 156, 22, -61.5, 6, -11.5, 4, 44, 8]

// FATTO DAL PROF. - PRATICAMENTE UGUALE AL MIO


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//ALTRO PATTERN DEGLI ARRAY -> FILTER - Decide quali degli elementi dell'array tenere


//1) Scrivere una funzione che rimuove dall'Array tutti i numeri dispari
// let numbers = [20, 10, 22, 44, 35, 0, -1, 1.5, 100, 20];  //numeri

// function removeOdd(nbrArray) {  //funzione che rimuove i numeri dispari dell'Array numbers

//     const newArray = [];

//     for (let i = 0; i < nbrArray.length; i++) {
//         const element = nbrArray[i];

//         if (element % 2 === 0) {
//             newArray.push(element);
//         }
//     }

//     return newArray
// }

// console.log(removeOdd(numbers));


//2) Scrivere una funzione che rimuova da un Array di stringhe tutte quelle che iniziano per p
//let strings = ['pippo', 'pluto', 'topolino', 'leonardo']  //stringhe

// function removeStartingWithP(strArray) {

//     const newArray = [];

//     for (let i = 0; i < strArray.length; i++) {
//         const element = strArray[i];
//         const firstChar = element[0];
//         const firstCharLower = firstChar.toLowerCase();

//         if (firstCharLower !== 'p') {
//             newArray.push(element);
//         }
//     }

//     return newArray;

// }

// console.log(removeStartingWithP(strings));


//3)  Scrivere una funzione che rimuove i numeri negativi da un array di numeri
// let numbers = [20, 10, 22, 44, 35, 0, -1, 1.5, 100, 20];  //numeri


// function keepPositive(nbrArray) {

//     const newArray = [];

//     for (let i = 0; i < nbrArray.length; i++) {
//         const element = nbrArray[i];

//         if (element >= 0) {
//             newArray.push(element);
//         }
//     }

//     return newArray
// }

// console.log(keepPositive(numbers));


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ALTRO PATTERN DELL'ARRAY -> REDUCE - Trasforma l'Array producendo un risultato che dipende dai componenti dell'Array

// 1) Scrivere una funzione che somma tutti i numeri di un Array di numeri
// let numbers = [20, 10, 22, 44, 35, 0, -1, 1.5, 100, 20];  //numeri

// function sumAll(nbrArray) {

//     let sum = 0;  // questa variabile conterrà il risultato finale della somma e si chiama "accumulatore"
//     // ricorda che 0 è il valore neutro della somma  

//     for (let i = 0; i < nbrArray.length; i++) {
//         const element = nbrArray[i];
//         sum = sum + element;

//     }

//     return sum;

// }

// console.log(sumAll(numbers));


// 2) Scrivere una funzione che calcola la media di un Array di numeri
// let numbers = [20, 10, 22, 44, 35, 0, -1, 1.5, 100, 20];  //numeri

// function calculateMean(nbrArray) {

//     let sum = 0;  // questa variabile conterrà il risultato finale della somma e si chiama "accumulatore"
//     // ricorda che 0 è il valore neutro della somma  

//     for (let i = 0; i < nbrArray.length; i++) {
//         const element = nbrArray[i];
//         sum = sum + element;
//     }

//     const mean = sum / nbrArray.length;

//     return mean;

// }

// console.log(calculateMean(numbers));  


// UN'ALTRA FORMA DI FARE LA FUNZIONE DELLA MEDIA DELL'ARRAY DEI NUMERI
// Come abbiamo già fatto la funzione della somma, allora potevamo e possiamo sfruttarla per fare la funzione della media
// function calculateMean2(nbrArray) {

//     const sum = sumAll(nbrArray);  //Funzione della somma dell'Array (sumAll). Il bello delle funzioni è che possiamo richiamarli all'infinito

//     const mean = sum / nbrArray.length;

//     return mean;
// }

// console.log(calculateMean2(numbers));


// 3) Scrivere una funzione che genera una stringa composta dalle iniziali delle stringhe contenute in un Array

// let strings = ['pippo', 'pluto', 'topolino', 'leonardo']  //stringhe


// function concatFirstChar(strArray) {

//     let newString = '';    //In questo esercizio devo generare una stringa, NON un Array

//     for (let i = 0; i < strArray.length; i++) {

//         const element = strArray[i];

//         const firstChar = element[0];

//         newString = newString + firstChar; // Per appiccicare una stringa devo concatenarle. Non devo usare .push come succede con le Array

//     }

//     return newString;
// }

// console.log(concatFirstChar(strings));


// 4) Scrivere una funzione che restituisce una somma delle lunghezze delle stringhe di un Array

//let strings = ['pippo', 'pluto', 'topolino', 'leonardo']  //stringhe

// function sumLength(strArray) {

//     let sumOfLengths = 0;

//     for (let i = 0; i < strArray.length; i++) {
//         const element = strArray[i];
//         const length = element.length;
//         sumOfLengths = sumOfLengths + length;
//     }
//     return sumOfLengths

// }

//console.log(sumLength(strings));


//A volte la REDUCE non fa operazioni matematiche ma cerca degli elementi
// 5) Scrivere una funzione che trova il numero più grande in un Array

// let numbers = [20, 10, 22, 44, 35, 0, -1, 1.5, 100, 20];  //numeri


// function findMax(nbrArray) {

//     let max = 0;

//     for (let i = 0; i < nbrArray.length; i++) { 
//         const element = nbrArray[i];

//         if (element > max) {  //'se l'elemento è maggiore del massimo ATTUALE'
//             max = element;  //se la condizione è vera allora sostituisco il valore della variabile 'max' con quello dell'elemento'
//         }

//     }
//     return max;
// }

// console.log(findMax(numbers));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// COSTRUTTORE DI ARRAY  ---  Probabilmente non li useremo mai

// const pluto = new Array(); //questa notazione equivale a dire 'const pluto = []'
// console.log(pluto);


// const pippo = new Array(3, 5, 8); //'const pippo = [3, 5, 8]'
// console.log(pippo);


// const paperino = new Array(10); // 'const paperino = [ , , , , , , , , , ]'  -> array di 10 posizioni VUOTE 
// console.log(paperino);

// //Questo Array paperino lo posso ciclare

// for (const element of paperino) {
//     console.log(element);  // tutti undefined 
// }


//INDEXOF (IndexOf) -> mi da la posizione di un elemento rispetto a un Array

//let numbers = [20, 10, 22, 44, 35, 0, -1, 1.5, 100, 20];  //numeri

//console.log(numbers.indexOf(100));
//console.log(numbers.indexOf(9999)); //se l'elemento NON è nell'Array restituisce -1


// INCLUDES (.includes) -> ci dice se un elemento è contenuto o meno

//let numbers = [20, 10, 22, 44, 35, 0, -1, 1.5, 100, 20];  //numeri

//console.log(numbers.includes(100));  // mi darà true perché effettivamente lo include
//console.log(numbers.includes(9999)); //in questo caso, invece, mi darà false perché non lo include


// CONCAT (.concat) -> ci permette di unire 2 array, creando a sua volta un nuovo array

// const topogigio = ['leonardo', 'mattia', 'daniel'];

// const paperina = ['evelyn', 'salma', 'stefania']

// const gastone = topogigio.concat(paperina);

// console.log(gastone);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// FUNZIONI MULTI PARAMETRICHE

// function sumAllParams(a, b, c) {   //3 parametri

//     const sum = a + b + c;

//     return sum;

// }


// function sumAllParams2(a, b, c, d) {   //4 parametri

//     const sum = a + b + c + d;

//     return sum;

// }

//C'è una forma per fare una funzione con vari parametri --- si userà poco ma è meglio saperlo riconoscere
// function sumAllParams(...params) {  // params è un array che contiene tutti i parametri passati alla funzione

//     let result = 0;

//     for (let i = 0; i < params.length; i++) {
//         const element = params[i];
//         result = result + element;
//     }
//     return result;
// }

// console.log(sumAllParams(2, 5, 6, 7));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// ARRAY DI ARRAY 

//const superArray = [[1, 2, 3], [1, 1, 1], [3, 2, 1]]; //ci sono 3 elementi dentro 'superArray'


//console.log(superArray.length);
//console.log(superArray[0]); //primo elemento del 'superArray'

//const arrayInterno = superArray[0];
//const elemento0dellArrayInterno = arrayInterno[0];  //primo elemento del primo elemento (Array) dentro 'superArray'

//console.log(elemento0dellArrayInterno);  // quindi mi printa 1 
//console.log(superArray[0][0]); //stessa cosa ma in una riga sola, ma lo printa una sola volta perché lo stesso valore


const superArray = [[1, 2, 3],  //esattamente lo stesso 'superArray' di prima ma messo in colonne  
                    [1, 1, 1],  // il prof. lo ha ordinato in questa forma per fare un piccolo esempio col ciclo for
                    [3, 2, 1]];

for (let rowNumber = 0; rowNumber < superArray.length; rowNumber++) { //ciclo righe
    const row = superArray[rowNumber];

    
    for (let columnNumber = 0; columnNumber < row.length; columnNumber++) { //ciclo colomne
        const cell = row[columnNumber];
        console.log(cell);  //stampa tutti i numeri uno alla volta
        //printa 1 solo una volta perché il valore è lo stesso (si ripete)
    }
}



