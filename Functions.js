console.log('Finalmente le FUNZIONI!!');


// const multiplyBy2 = function (n) {
//     const result = n * 2;
//     return result;
// }

// const pippo = multiplyBy2(100);

// console.log(pippo);


// const pluto = multiplyBy2(300);
// console.log(pluto);




// function multiplyBy3(n) {
//     const result = n*3;
//     return result;
// }

// const paperino = multiplyBy3(5);
// console.log(paperino);



// //LA MANIERA PIù USATA (SINTASSI LAMBDA O ARROW FUNCTION)

// const multiplyBy4 = (n) => {
//     const result = n * 4;
//     return result;
// }

// const paperone = multiplyBy4(3);
// console.log(paperone);


// //O


// // const multiplyBy5 = (n) => {
// //     return n*5;
// // }

// const multiplyBy5 = (n) => n*5; 



// function checkMultiple(n1, n2) {
//     const isMultiple = n1 % n2 === 0;   // il primo è multiplo del secondo? la risposta sarà di tipo booleana (true o false)
// }

// const qui = checkMultiple(10, 5);
// console.log(qui);   // true


// const quo = checkMultiple(12, 5);
// console.log(quo);   // false



// // SINTASSI MULTIPLE LAMBDA
// const checkMultipleLambda = (n1, n2) => {
//     const isMultiple = n1 % n2 === 0;
//     return isMultiple;
// }


// // SINTASSI MULTIPLE LAMBDA SHORT

// const checkMultipleLambdaShort = (n1, n2) => n1 % n2 === 0;


// // SINTASSI LAMDBA SHORT CON 0 ARGOMENTI

// function getNow() {
//     const now = new Date();
//     return now;
// }

// const qua = getNow()
// console.log(qua);   //NONOSTANTE NON ABBIA PARAMETRI DI INGRESSI COMUNQUE HA UNA USCITA



// function logUpperCase(inputString) {
//     const inputStringUpperCase = inputString.toUpperCase();
//     console.log(inputStringUpperCase);
// }                // QUESTA FUNZIONE NON HANNO RETURN ANZI HANNO RETURN UNDEFINED


// const paperinik = logUpperCase('Ciao Ciao');  // MA SE LANCIO UNA PAROLA
// console.log(paperinik);    // COME NON C'è RETURN PAPERINIK RITORNA COME UNDEFINED
// logUpperCase('viva le funzioni!')



// ESERCIZI

//1) Scrivere una funzione che mi dice se un numero è pari;
//Scriverlo sia con versione function che lambda

// //FUNCTION
// function checkEven(inputNumber) {
//     const isEven = inputNumber % 2 === 0; 
//     return isEven;
// }

// //LAMBDA
// const checkEvenLambda = (inputNumber) => inputNumber % 2 === 0; // VOLENDO POSSO TOGLIERE LE PARENTESI TONDE A INPUTNUMBER


// //VEDIAMO SE FUNZIONANO CON FUNCTION
// const res1 = checkEven(22);
// console.log(res1);


// const res2 = checkEven(21);
// console.log(res2);


// // VEDIAMO SE FUNZIONANO CON LAMBDA
// const res3 = checkEvenLambda(221);
// console.log(res3);


// const res4 = checkEvenLambda(212);
// console.log(res4);




//2) Scrivere una funzione che moltiplichi una stringa per un numero
// es: se inserisco 'cacca' e 3, l'output sarà 'caccacaccacacca'


//FUNCTION

// function multiplyString(inputString, multiplier) {
//     let multipliedString = '';

//     //FACCIAMO UN CICLO

//     for (let i = 0; i < multiplier; i++) {
//         multipliedString += inputString  //equivale a scrivere -> multipliedString = multipliedString + inputString
//     }

//     return multipliedString;
// }

// const res5 = multiplyString('pippo', 3);
// console.log(res5);

// const res6 = multiplyString('cacca', 100);
// console.log(res6);



// //LAMBDA

// const multipliedStringLambda = (inputString, multiplier) => inputString.repeat(multiplier);

// const res7 = multipliedStringLambda('basta', 5);
// console.log(res7);

// const res8 = multipliedStringLambda('incubo', 8);
// console.log(res8);



//3) Scrivi una funzione che dato un numero mi dice se è intero oppure no (Esercizio 9 di Esercizi.js)

//FUNCTION

function checkInteger(n) {
    //qualsiasi numero diviso tra 1 deve dare resto 0
    const isInteger = n % 1 === 0;
    return isInteger;
}


//LAMBDA

const checkIntegerLambda = n => n % 1 === 0;

const res9 = checkInteger(3);
console.log(res9);

const res10 = checkIntegerLambda(3.14);
console.log(res10);

const res11 = checkInteger(30);
console.log(res11);

const res12 = checkIntegerLambda(0.5);
console.log(res12);


//COMPITO

//4) Scrivere una funzione che dati in input due numeri ritorni il maggiore
//5) Scrivere una funzione che date in input due stringhe ritorni la più corta
//6) Scrivere una funzione che data in input una stringa ritorni la sua iniziale
//7) Scrivere una funzione che dati in input una stringa e un numero, logghi la stringa tante volte quante il numero dato
