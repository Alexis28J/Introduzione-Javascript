//ESERCIZI DI HIGH-ORDER-FUNCTIONS 
//Una funzione di alto ordine è una funzione che può accettare altre funzioni come argomenti o restituire una funzione come risultato. 
//Questo permette di creare codice più modulare, riusabile e flessibile.

function highFilter(array, conditionFunction) {   //funzione di filtro

    const newArray = []

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (conditionFunction(element, i, array)) {   //la condizione è esterna alla funzione, viene passata come argomento
            newArray.push(element);
        }

    }

    return newArray;
}

function highMap(array, transformFunction) {  //funzione di mappatura

    const newArray = [];

    for (let i = 0; i < array.length; i++) {

        const element = array[i];

        const newElement = transformFunction(element, i); //la trasformazione è esterna alla funzione, viene passata come argomento

        newArray.push(newElement);
    }
    return newArray;
}


function highReduce(array, reduceFunction, startingValue) {  //funzione di riduzione

    let accumulator = startingValue;

    for (let i = 0; i < array.length; i++) {

        const current = array[i];

        accumulator = reduceFunction(accumulator, current, i) //la riduzione è esterna alla funzione, viene passata come argomento

    }

    return accumulator;
}

const numberArray = [2, 4, 8, 112, 156, 22, -61.5, 6, -11.5, 4, 44, 8, 4];

const stringArray = ['pizza', 'spaghetti', 'frittata', 'lasagne'];


//Risolvere questi esercizi in tre modi:
// - senza high order functions
// - con le HOF create da noi
// - con le HOF di JS

// filter
//51) Scrivi una funzione che, dato un array di numeri, crei un array con tutti i numeri
// maggiori di 100

//const numberArray = [2, 4, 8, 112, 156, 22, -61.5, 6, -11.5, 4, 44, 8, 4];

//SENZA HIGH ORDER FUNCTIONS (FUNZIONE STANDARD - FUNZIONE A BASSO LIVELLO)
function numberGreaterThan100(nbr) {
    const newArray = [];

    for (let i = 0; i < nbr.length; i++) {   //VEDI REPOSITORY DEL PROF. LUI LO HA FATTO COL FOR-OF
        const element = nbr[i];

        if (element > 100) {
            newArray.push(element);
        }
    }
    return newArray
}

console.log(numberGreaterThan100(numberArray));



//CON HIGH ORDER FUNCTIONS

function highFilter(array, conditionFunction) {

    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (conditionFunction(element, i, array)) {   //la condizione è esterna alla funzione, viene passata come argomento
            newArray.push(element);
        }
    }
    return newArray;
}

function biggerThan100(nbr) {
    if (nbr > 100) {    // questo è uguale a "return nbr > 100" che è una maniera più concisa di scriverla
        return true;
    } else {
        return false;
    }
}

console.log(highFilter(numberArray, biggerThan100));


//HIGH ORDER FUNCTIONS DI JS

console.log(numberArray.filter(biggerThan100));  //filter è una funzione di ordine superiore: prende un’altra funzione come argomento e restituisce un nuovo array con gli elementi che soddisfano la condizione.
console.log(numberArray.filter((nbr) => nbr > 100)); //questa è la versione lambda della condizione "biggerThan100"
//nbr è l'elemento dell'array che viene passato alla funzione di filtro 
//nbr è un nome di variabile che può essere cambiato a piacere

console.log(numberArray.filter((nbr) => {   //funziona esattamente uguale a quello di prima "console.log(numberArray.filter((nbr) => nbr > 100));"
    if (nbr > 100) {                        //anche se lo rende più lunga ma nulla ci vieta di farlo così
        return true;
    } else {
        return false;
    }
}));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//52) Scrivi una funzione che, dato un array di stringhe, crei un array con tutte le stringhe 
// che finiscono con 'a'

//const stringArray = ['pizza', 'spaghetti', 'frittata', 'lasagne'];

//FUNZIONE STANDARD (FUNZIONE A BASSO LIVELLO)
function wordsEndingWithA(array) {

    const newArray = [];
    for (let i = 0; i < array.length; i++) {  //VEDI REPOSITORY DEL PROF. LUI LO HA FATTO COL FOR-OF
        const str = array[i];
        const lastChar = str[str.length - 1];  //per esempio se una stringa è lunga 4 (composta da 4 caratteri), l'ultimo carattere sarà nella posizione 3 perchè si conta dalla posizione 0

        if (lastChar === 'a') {
            newArray.push(str);
        }

    }
    return newArray;
}

console.log(wordsEndingWithA(stringArray));


//HIGH ORDER FUNCTIONS

function highFilter(array, conditionFunction) {

    const newArray = []

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (conditionFunction(element)) {   //la condizione è esterna alla funzione, viene passata come argomento
            newArray.push(element);
        }
    }
    return newArray;
}

function lastCharIsA(str) {   //conditionFunction = lastCharIsA
    const lastChar = str[str.length - 1]; //[str.length - 1] prende l'ultimo carattere della stringa
    if (lastChar === 'a') {  //l'if è una funzione che funziona come condizione
        return true;
    } else {                 //return str[str.length - 1] === 'a' | return lastChar === 'a' | return str.endsWith('a')
        return false;        // sarebbero modi piuù brevi di accorciare la funzione
    }
}
console.log(highFilter(stringArray, lastCharIsA)); //highFilter è la funzione di filtro che prende come argomento la condizione "lastCharIsA"


//HIGH ORDER FUNCTIONS DI JS
console.log(stringArray.filter(lastCharIsA));
console.log(stringArray.filter((str) => str[str.length - 1] === 'a'));   //questa è la versione lambda della condizione "lastCharIsA"
//stringArray.filter(...) è una funzione di ordine superiore: prende un’altra funzione come argomento e restituisce un nuovo array con gli elementi che soddisfano la condizione.


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//53) Scrivi una funzione che, dato un array di numeri, crei un array con tutti i numeri
// divisibili per 3

//const numberArray = [2, 4, 8, 112, 156, 22, -61.5, 6, -11.5, 4, 44, 8, 4];

//FUNZIONE STANDARD (FUNZIONE A BASSO LIVELLO)

function numberDivisibleBy3(nbr) {

    const newArray = [];

    for (let i = 0; i < nbr.length; i++) {    //VEDI REPOSITORY DEL PROF. LUI LO HA FATTO COL FOR-OF
        const element = nbr[i];

        if (element % 3 === 0) {
            newArray.push(element);
        }
    }
    return newArray;
}

console.log(numberDivisibleBy3(numberArray));


//HIGH ORDER FUNCTIONS

function highFilter(array, conditionFunction) {

    const newArray = []

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (conditionFunction(element)) {   //la condizione è esterna alla funzione, viene passata come argomento
            newArray.push(element);
        }
    }
    return newArray;
}

function IsDivisibleBy3(nbr) {
    if (nbr % 3 === 0) {       // return nbr % 3 === 0 (più breve)
        return true;
    } else {
        return false;
    }
}

console.log(highFilter(numberArray, IsDivisibleBy3));


//HIGH ORDER FUNCTIONS DI JS

console.log(numberArray.filter(IsDivisibleBy3));
console.log(numberArray.filter((number) => number % 3 === 0));  //number è un nome a caso che ho messo alla variabile


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// map
//54) Scrivi una funzione che, dato un array di numeri, crei un array con tutti i numeri
// elevati al cubo

//const numberArray = [2, 4, 8, 112, 156, 22, -61.5, 6, -11.5, 4, 44, 8, 4];

//FUNZIONE STANDARD (FUNZIONE A BASSO LIVELLO)

function numberCubed(nbr) {

    const newArray = [];

    for (let i = 0; i < nbr.length; i++) {       //VEDI REPOSITORY DEL PROF. LUI LO HA FATTO COL FOR-OF
        const element = nbr[i];
        newArray.push(element ** 3);
    }
    return newArray;
}

console.log(numberCubed(numberArray));

//HIGH ORDER FUNCTIONS

function highMap(array, transformFunction) {  //funzione di mappatura

    const newArray = [];

    for (let i = 0; i < array.length; i++) {

        const element = array[i];

        const newElement = transformFunction(element, i); //la trasformazione è esterna alla funzione, viene passata come argomento

        newArray.push(newElement);
    }
    return newArray;
}

function powerOfThree(nbr) {
    return nbr ** 3;
}

console.log(highMap(numberArray, powerOfThree));



//HIGH ORDER FUNCTIONS DI JS

console.log(numberArray.map(powerOfThree));
console.log(numberArray.map((number) => number ** 3));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//55) Scrivi una funzione che, dato un array di stringhe, crei un array con tutte le stringhe
// con la prima lettera maiuscola

//const stringArray = ['pizza', 'spaghetti', 'frittata', 'lasagne'];

//FUNZIONE STANDARD (FUNZIONE A BASSO LIVELLO)

function wordToUpperCase(str) {

    const newArray = [];

    for (let i = 0; i < str.length; i++) {
        const element = str[i];   //invece di creare element potrei aver messo direttamente str[0]
        newArray.push(element[0].toUpperCase() + element.slice(1));     //VEDI REPOSITORY DEL PROF. LUI LO HA FATTO UN PO' DIVERSO MA CON LO STESSO RISULTATO
        //str.slice(1): Restituisce una nuova stringa che contiene tutti i caratteri a partire dal secondo (l'indice 1) fino alla fine.
    }
    return newArray;
}

console.log(wordToUpperCase(stringArray));


//HIGH ORDER FUNCTIONS

function highMap(array, transformFunction) {  //funzione di mappatura

    const newArray = [];

    for (let i = 0; i < array.length; i++) {

        const element = array[i];

        const newElement = transformFunction(element, i); //la trasformazione è esterna alla funzione, viene passata come argomento

        newArray.push(newElement);
    }
    return newArray;
}

function firstCharToUpperCase(str) {
    return str[0].toUpperCase() + str.slice(1);

}

console.log(highMap(stringArray, firstCharToUpperCase));


//HIGH ORDER FUNCTIONS DI JS

console.log(stringArray.map(firstCharToUpperCase));
console.log(stringArray.map((str) => str[0].toUpperCase() + str.slice(1)));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//56) Scrivi una funzione che, dato un array di numeri, crei un array di stringhe di
//cancelletti lunga quanto il numero originale
// [3, 4, 1, 0] -> ['###', '####', '#', '']

//const numberArray = [2, 4, 8, 112, 156, 22, -61.5, 6, -11.5, 4, 44, 8, 4];

//FUNZIONE STANDARD (FUNZIONE A BASSO LIVELLO)

function numberToHashtag(nbr) {

    const newArray = [];

    for (let i = 0; i < nbr.length; i++) {
        const element = nbr[i];
        if (element > 0) {
            newArray.push('#'.repeat(element));   //potevo mettere nbr[i] direttamente senza aver creato element
        } else if (element < 0 || element === 0) {
            newArray.push('');
        }
    }
    return newArray;
}

console.log(numberToHashtag(numberArray));


//HIGH ORDER FUNCTIONS

function highMap(array, transformFunction) {  //funzione di mappatura

    const newArray = [];

    for (let i = 0; i < array.length; i++) {

        const element = array[i];

        const newElement = transformFunction(element, i); //la trasformazione è esterna alla funzione, viene passata come argomento

        newArray.push(newElement);
    }
    return newArray;
}

function toHashtag(nbr) {
    if (nbr > 0) {
        return '#'.repeat(nbr);   //potevo mettere nbr[i] direttamente senza aver creato element
    } else if (nbr < 0 || nbr === 0) {  //nbr <= 0
        return '';
    }
}

console.log(highMap(numberArray, toHashtag));


//HIGH ORDER FUNCTIONS DI JS

console.log(numberArray.map(toHashtag));
console.log(numberArray.map((number) => number > 0 ? '#'.repeat(number) : ''));   //lambda con operatore ternario


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// reduce
//57) Scrivi una funzione che, dato un array di numeri, li moltiplichi tutti tra loro

//const numberArray = [2, 4, 8, 112, 156, 22, -61.5, 6, -11.5, 4, 44, 8, 4];

//FUNZIONE STANDARD (FUNZIONE A BASSO LIVELLO)

function multiplyBetweenThem(nbr) {

    let product = 1;  //valore neutro nella moltiplicazione

    for (let i = 0; i < nbr.length; i++) {    //VEDI REPOSITORY DEL PROF. LUI LO HA FATTO COL FOR-OF e COL FOR NORMALE MA SENZA VALORE NEUTRO
        const element = nbr[i];
        product = product * element;
    }
    return product;
}

console.log(multiplyBetweenThem(numberArray));


//HIGH ORDER FUNCTIONS
//FATTO DAL PROF.

function highReduce(array, reduceFunction, startingValue) {  //funzione di riduzione

    let accumulator = startingValue;

    for (let i = 0; i < array.length; i++) {

        const current = array[i];

        accumulator = reduceFunction(accumulator, current, i) //la riduzione è esterna alla funzione, viene passata come argomento

    }

    return accumulator;
}

function multiplyAll(accumulator, current) {   //REDUCE FUNCTION
    return accumulator * current;
}

console.log(highReduce(numberArray, multiplyAll, 1));  //1 è lo starting value


//HIGH ORDER FUNCTIONS DI JS

console.log(numberArray.reduce(multiplyAll, 1));
console.log(numberArray.reduce((acc, curr) => acc * curr, 1));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//58) Scrivi una funzione che, dato un array di stringhe, crei una stringa composta
// dalle prime tre lettere delle strighe originarie

//FATTO DAL PROF.
//FUNZIONE STANDARD

function stringConcatFirst3(strArray) {

    let accumulator = '';

    for (const current of strArray) {

        const first3 = current.slice(0, 3);

        accumulator = accumulator + first3;
    }
    return accumulator;
}

console.log(stringConcatFirst3(stringArray));



//HIGH ORDER FUNCTIONS

function highReduce(array, reduceFunction, startingValue) {  //funzione di riduzione

    let accumulator = startingValue;

    for (let i = 0; i < array.length; i++) {

        const current = array[i];

        accumulator = reduceFunction(accumulator, current, i) //la riduzione è esterna alla funzione, viene passata come argomento

    }

    return accumulator;
}

function concatFirst3(accumulator, current) {  
    const first3 = current.slice(0,3);
    return accumulator + first3;
}

console.log(highReduce(stringArray, concatFirst3, ''));

//HIGH ORDER FUNCTIONS DI JS

console.log(stringArray.reduce(concatFirst3, ''));
console.log(stringArray.reduce((acc, curr) => acc + curr.slice(0, 3), ''));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//59) Scrivi una funzione che, dato un array di numeri, trovi il maggiore

//FATTO DAL PROF.
//FUNZIONE STANDARD

function maxArray(nbrArray) {  

    let accumulator = -Infinity;  //il valore -Infinity (meno infinito) rappresenta un numero più piccolo di qualsiasi altro numero possibile.
    //Lo scopo è avere un valore di partenza più piccolo di qualsiasi numero possibile, così che il primo confronto (current > accumulator) risulti sempre vero per il primo elemento dell’array.

    for (const current of nbrArray) {
        //Il ciclo for...of scorre tutti i numeri dell’array.
       
        if (current > accumulator) {
            accumulator = current;
        }
        //Ogni volta che trova un numero (current) più grande del valore salvato in accumulator, lo aggiorna.
    }
    return accumulator;
}

console.log(maxArray(numberArray));


// O IN QUESTO MODO
function maxArrayV2(nbrArray) {

    let accumulator = nbrArray[0];

    for (let i = 1; i < nbrArray.length; i++) {
        const current = nbrArray[i];

        if (current > accumulator) {
            accumulator = current;
        }

    }
    return accumulator;
}

console.log(maxArrayV2(numberArray));

//HIGH ORDER FUNCTIONS

function highReduce(array, reduceFunction, startingValue) {  //funzione di riduzione

    let accumulator = startingValue;

    for (let i = 0; i < array.length; i++) {

        const current = array[i];

        accumulator = reduceFunction(accumulator, current, i) //la riduzione è esterna alla funzione, viene passata come argomento

    }

    return accumulator;
}


function max(acc, curr) {
    if (curr > acc) {
        return curr;
    } else {
        return acc;
    }
}

console.log(highReduce(numberArray, max, -Infinity));


//HIGH ORDER FUNCTIONS DI JS

console.log(numberArray.reduce(max, -Infinity));
//O 
console.log(numberArray.reduce(max));  //-Infinity non è necessario
console.log(numberArray.reduce((acc, curr) => curr > acc ? curr : acc));  //forma lambda
//O
console.log(numberArray.reduce((acc, curr) => {
    if (curr > acc) {  //forma lambda MA SENZA operatore ternario
        return curr;
    } else {
        return acc;
    }
}));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//60) Scrivi una funzione che, dato un array di stringhe, trovi la stringa con più
// volte ripetuta la lettera t;

//FATTO DAL PROF.
//FUNZIONE STANDARD (FUNZIONE A BASSO LIVELLO)

function countT(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const upperChar = char.toUpperCase();

        if (upperChar === 'T') {
            count++;
        }
    }
    return count;
}

function findTheStringWithMoreT(strArray) {  //spezzo la funzione cioè faccio una funzione in più (funzione countT)

    let accumulator = '';

    let accumulatorTcount = 0;

    for (const current of strArray) {

        const currentTcount = countT(current);

        if (currentTcount > accumulatorTcount) {
            accumulator = current;
            accumulatorTcount = currentTcount;
        }
    }
    return accumulator;
}

console.log(findTheStringWithMoreT(stringArray));



//POSSIAMO ACCORCIARLA - FARLA PIù CONCISA

function findTheStringWithMoreTV2(strArray) {  

    let accumulator = '';

    for (const current of strArray) {

        if (countT(current) > countT(accumulator)) {

            accumulator = current;

        }   
    }
    return accumulator;
}

console.log(findTheStringWithMoreTV2(stringArray));


//HIGH ORDER FUNCTIONS

function highReduce(array, reduceFunction, startingValue) {  //funzione di riduzione

    let accumulator = startingValue;

    for (let i = 0; i < array.length; i++) {

        const current = array[i];

        accumulator = reduceFunction(accumulator, current, i) //la riduzione è esterna alla funzione, viene passata come argomento

    }

    return accumulator;
}

function compareTNumber(acc, curr) {
    if (countT(curr) > countT(acc)) {
        return curr;
    }
    return acc;
}

console.log(highReduce(stringArray, compareTNumber, ''));


//HIGH ORDER FUNCTIONS DI JS

console.log(stringArray.reduce(compareTNumber, ''));
//IL PROF. NON HA FATTO LA FORMA LAMBDA PERCHé SAREBBE TROPPO COMPLICATA PER NOI


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//COMPITO PER LUNEDì 17.11.2025
//VEDI REPOSITORY DEL PROF.

const prodotti = [
  { id: 1, nome: "Mela", categoria: "Frutta", prezzo: 1.20, scadenza: "2025-11-15", peso: 0.2, biologico: true },
  { id: 2, nome: "Pasta", categoria: "Pasta e Riso", prezzo: 0.80, scadenza: "2026-05-10", peso: 0.5, biologico: false },
  { id: 3, nome: "Latte", categoria: "Latticini", prezzo: 1.10, scadenza: "2025-11-14", peso: 1, biologico: true },
  { id: 4, nome: "Pane", categoria: "Pane e Sostituti", prezzo: 1.50, scadenza: "2025-11-12", peso: 0.3, biologico: false },
  { id: 5, nome: "Yogurt", categoria: "Latticini", prezzo: 0.60, scadenza: "2025-11-20", peso: 0.125, biologico: true },
  { id: 6, nome: "Riso", categoria: "Pasta e Riso", prezzo: 1.30, scadenza: "2027-02-20", peso: 1, biologico: false },
  { id: 7, nome: "Pomodoro", categoria: "Ortaggi", prezzo: 0.90, scadenza: "2025-11-18", peso: 0.3, biologico: true },
  { id: 8, nome: "Acqua", categoria: "Bevande", prezzo: 0.30, scadenza: "2026-12-31", peso: 1.5, biologico: false },
  { id: 9, nome: "Biscotti", categoria: "Dolci", prezzo: 2.00, scadenza: "2026-03-01", peso: 0.2, biologico: false },
  { id: 10, nome: "Uova", categoria: "Uova", prezzo: 2.50, scadenza: "2025-11-30", peso: 0.6, biologico: true },
  { id: 11, nome: "Caffè", categoria: "Bevande", prezzo: 3.00, scadenza: "2026-10-01", peso: 0.25, biologico: false },
  { id: 12, nome: "Formaggio", categoria: "Latticini", prezzo: 4.50, scadenza: "2025-12-10", peso: 0.2, biologico: true },
  { id: 13, nome: "Carote", categoria: "Ortaggi", prezzo: 0.70, scadenza: "2025-11-25", peso: 1, biologico: true },
  { id: 14, nome: "Tonno", categoria: "Conserve", prezzo: 1.80, scadenza: "2027-01-15", peso: 0.16, biologico: false },
  { id: 15, nome: "Cioccolato", categoria: "Dolci", prezzo: 1.70, scadenza: "2026-04-30", peso: 0.1, biologico: false }
];


//61) mettere in ordine l'array di prodotti per prezzo dal più costoso in giù

function pricesDescending(product1, product2) {
    return product2.prezzo - product1.prezzo;
}

prodotti.sort(pricesDescending);
console.log(prodotti);


//62) mettere in ordine per nome discendente
//63) mettere in ordine per categoria ascendente, e se uguali per peso dal più pesante
//64) mettere in ordine per anno di scadenza dal più vicino
//65) mettere in ordine per categoria discendente, se uguali per peso dal più piccolo, se uguali per nome ascendente

