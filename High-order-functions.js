function sayHello() {
    console.log('hello');
}

const helloHello = () => console.log('hello hello!!');

const superHello = function () {
    console.log('super hello');
}

//questi 3 body si equivalgono
//abbiamo dentro di ognuno un console.log ma nulla mi vieta di farlo fuori

console.log(helloHello);
console.log(superHello);
console.log(sayHello);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//FUNZIONI COME PARAMETRI IN INPUT
//una funzione può ricevere un'altra funzione come parametro d'ingresso


const numbers2 = [-100, -30, 20, 11, 1, 40, -21, -15, 3, 9, 300, 5001]; //un array di numeri

const testArray = ['bo', 'pa', 'pippo', 'pluto', 'paperino', 'paperone', 'qui', 'quo', 'qua']; // un array di stringhe


//Facciamo una funzione di filtro per tenere solo i numeri positivi

function keepPositive(nbrArray) {

    const newArray = [];

    //ciclo for-of
    // for (const nbr of nbrArray) { 

    //     if (nbr >= 0) {
    //         newArray.push(nbr);   //l metodo .push() in JavaScript viene utilizzato per aggiungere uno o più elementi alla fine di un array, modificando l'array originale.
    //     }
    // }
    // return newArray;

    //ciclo for normale
    for (let i = 0; i < nbrArray.length; i++) {

        const nbr = nbrArray[i];

        if (nbr >= 0) {
            newArray.push(nbr);
        }
    }
    return newArray;
}

console.log(keepPositive(numbers2));


//Filtra per tenere i numeri maggiori a 30

function keepGreaterThan30(nbrArray) {

    const newArray = [];

    for (let i = 0; i < nbrArray.length; i++) {

        const nbr = nbrArray[i];

        if (nbr > 30) {  //è cambiata solo la condizione
            newArray.push(nbr);
        }
    }
    return newArray;
}

console.log(keepGreaterThan30(numbers2));


//Filtra per tenere le stringhe più lunghe di 3

function keepLongerThan3(strArray) {

    const newArray = [];

    for (let i = 0; i < strArray.length; i++) {

        const str = strArray[i];

        if (str.length > 3) {
            newArray.push(str);
        }
    }
    return newArray;
}

console.log(keepLongerThan3(testArray));


//Funzione di filtro
function highFilter(array, conditionFunction) {  //dentro "array" c'è numbers2, dentro "conditionFunction" c'è la funzione "isEven"

    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (conditionFunction(element)) {
            newArray.push(element);
        }
    }
    return newArray;
}

//ipotizziamo se vogliamo tenere solo i numeri pari
function isEven(nbr) {   //ho creato la condizione
    if (nbr % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(highFilter(numbers2, isEven));  //isEven è la condizione


//facciamo una funzione in cui escluda parole che cominciano con p
function notStartingWithP(str) {  //ho creato la condizione

    const firstChar = str[0];
    const firstLower = firstChar.toLowerCase();

    if (firstLower !== 'p') {
        return true;
    } else {
        return false;
    }
}

console.log(highFilter(testArray, notStartingWithP));


//per condizioni brevi e facili da capire, invece di scriverla in una funzione lo scrivo direttamente
//come una funzione lambda
console.log(highFilter(numbers2, (nbr) => nbr < 0));  //condizione che esclude numeri negativi
console.log(numbers2.filter((nbr) => nbr < 0));  //funziona esattamente uguale a quello di prima ma .filter è una funzione PRESENTE DENTRO il linguaggio

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// MAP

//Funzione che multiplica x 3
function multiplyBy3(nbrArray) {

    const newArray = [];

    for (let i = 0; i < nbrArray.length; i++) {

        const nbr = nbrArray[i];

        const newNbr = nbr * 3;

        newArray.push(newNbr);
    }
    return newArray;
}

console.log(multiplyBy3(numbers2));


//funzione che prende un numero e lo moltiplica per la sua posizione nell'Array

function multiplyByArrayPosition(nbrArray) {

    const newArray = [];

    for (let i = 0; i < nbrArray.length; i++) {

        const nbr = nbrArray[i];

        const newNbr = nbr * i; //solo cambia la condizione

        newArray.push(newNbr);
    }
    return newArray;
}

console.log(multiplyByArrayPosition(numbers2));


//Funzione che mette in maiuscolo le stringhe di un'Array
function toUpperCaseArray(strArray) {

    const newArray = [];

    for (let i = 0; i < strArray.length; i++) {

        const str = strArray[i];

        const newString = str.toUpperCase();

        newArray.push(newString);
    }
    return newArray;
}

console.log(toUpperCaseArray(testArray));


//Facciamo una funzione che prenderà un array e una transformFunction

function highMap(array, transformFunction) {

    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const newElement = transformFunction(element);
        newArray.push(newElement);
    }
    return newArray;
}

//funzioncina che trasforma 
function multiplyBy3Number(nbr) {
    return nbr * 3;
}

console.log(highMap(numbers2, multiplyBy3Number));
//nulla mi vieta di farlo con una lambda
console.log(highMap(numbers2, (nbr) => nbr * 3)); //lambda
console.log(numbers2.map((nbr) => nbr * 3)); //funzione .map standard del linguaggio Javascript


//secondo esercizio
// function highMap(array, transformFunction){

//     const newArray = [];

//     for (let i = 0; i < array.length; i++) {

//         const element = array[i];

//         const newElement = transformFunction(element, i);  //la funzione è esattamente uguale solo che aggiungo l'indice in questo caso

//         newArray.push(newElement); 
//     }
//     return newArray;
// }

// console.log(highMap(numbers2, (nbr, i) => nbr * i)); 
// console.log(numbers2.map((nbr, i) => nbr * i));


//Transformiamo (per esempio) la funzione "toUpperCase" (terzo esercizio) che abbiamo fatto in una High Map
console.log(highMap(testArray, (str) => str.toUpperCase()));
console.log(testArray.map((str) => str.toUpperCase()));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//REDUCE

//Esempio semplice di una reduce - Funzione che dato un'array di numeri, li sommo tra loro
function sumAll(nbrArray) {

    let sum = 0;

    for (let i = 0; i < nbrArray.length; i++) {

        const nbr = nbrArray[i];

        sum = sum + nbr;

    }

    return sum;

}

console.log(sumAll(numbers2));


//Funzione che prende un'Array di stringhe e mi ritorna il primo carattere

function stringWithFirstChars(strArray) {

    let newString = '';

    for (let i = 0; i < strArray.length; i++) {
        const str = strArray[i];
        const firstChar = str[0];
        newString = newString + firstChar;
    }
    return newString;
}

console.log(stringWithFirstChars(testArray));

//Funzione generica di riduzione
function highReduce(array, reduceFunction, startingValue) {  //la highReduce ha bisogno di tre cose per funzionare
    
    let accumulator = startingValue;  //startingValue = valore di inizio 

    for (let i = 0; i < array.length; i++) {

        const current = array[i];

        accumulator = reduceFunction(accumulator, current, i)
        
    }

    return accumulator;

}

console.log(highReduce(numbers2, (sum, nbr) => sum + nbr, 0));  //sum = accumulator, nbr = current, 0 = startingValue (posizione iniziale)
// Ci sono i 3 parametri: numbers2 = array, (sum, nbr) => sum + nbr = Function (lambda), 0 = startingValue

console.log(numbers2.reduce((sum, nbr) => sum + nbr, 0));  // la funzione .reduce è già inclusa nel linguaggio



function sumFirstChar(acc, curr) {

    const firstChar = curr[0];
    
    return acc + firstChar;
}

console.log(highReduce(testArray, sumFirstChar, ''));
console.log(testArray.reduce(sumFirstChar, '')); //è equivalente al console.log precedente
console.log(testArray.reduce((acc, curr) => acc + curr[0], '')); //uso la lambda e anche questo è equivalente 


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ESERCIZI - VEDI "ESERCIZI-3.JS"


