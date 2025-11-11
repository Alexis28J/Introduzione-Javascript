//ESERCIZI DI HIGH-ORDER-FUNCTIONS 

function highFilter(array, conditionFunction){

    const newArray = []

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (conditionFunction(element)) {
            newArray.push(element);
        }
        
    }

    return newArray;
}

function highMap(array, transformFunction){

    const newArray = [];

    for (let i = 0; i < array.length; i++) {

        const element = array[i];

        const newElement = transformFunction(element, i);

        newArray.push(newElement); 
    }
    return newArray;
}


function highReduce(array, reduceFunction, startingValue){

    let accumulator = startingValue;

    for (let i = 0; i < array.length; i++) {

        const current = array[i];

        accumulator = reduceFunction(accumulator, current, i)
        
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

//52) Scrivi una funzione che, dato un array di stringhe, crei un array con tutte le stringhe 
// che finiscono con 'a'

//53) Scrivi una funzione che, dato un array di numeri, crei un array con tutti i numeri
// divisibili per 3

// map
//54) Scrivi una funzione che, dato un array di numeri, crei un array con tutti i numeri
// elevati al cubo

//55) Scrivi una funzione che, dato un array di stringhe, crei un array con tutte le stringhe 
// con la prima lettera maiuscola

//56) Scrivi una funzione che, dato un array di numeri, crei un array di stringhe di
//cancelletti lunga quanto il numero originale
// [3, 4, 1, 0] -> ['###', '####', '#', '']

// reduce
//57) Scrivi una funzione che, dato un array di numeri, li moltiplichi tutti tra loro

//58) Scrivi una funzione che, dato un array di stringhe, crei una stringa composta 
// dalle prime tre lettere delle strighe originarie

//59) Scrivi una funzione che, dato un array di numeri, trovi il maggiore

//60) Scrivi una funzione che, dato un array di stringhe, trovi la stringa con più
// volte ripetuta la lettera t;
