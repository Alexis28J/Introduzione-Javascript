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
//     let multipliedString = '';     // Inizializzo una stringa vuota per contenere il risultato

//     //FACCIAMO UN CICLO

//     for (let i = 0; i < multiplier; i++) {   // Un ciclo for con un "index" si riferisce a una struttura di programmazione che ripete un blocco di codice un numero predefinito di volte, utilizzando una variabile indice per tenere traccia di ogni iterazione. In sintesi, l'indice è una variabile che cambia a ogni passaggio, consentendo di accedere a elementi specifici di una sequenza (come array, liste, stringhe) e controllando la durata del ciclo.
//         multipliedString += inputString      //equivale a scrivere -> multipliedString = multipliedString + inputString
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

// function checkInteger(n) {
//     //qualsiasi numero diviso tra 1 deve dare resto 0
//     const isInteger = n % 1 === 0;
//     return isInteger;
// }


//LAMBDA

// const checkIntegerLambda = n => n % 1 === 0;


//PROVIAMO SE FUNZIONANO BENE

// const res9 = checkInteger(3);
// console.log(res9);

// const res10 = checkIntegerLambda(3.14);
// console.log(res10);

// const res11 = checkInteger(30);
// console.log(res11);

// const res12 = checkIntegerLambda(0.5);
// console.log(res12);


//COMPITO

//4) Scrivere una funzione che dati in input due numeri ritorni il maggiore

//FUNCTION


// function biggerNumber(n1, n2) {
//          if (n1 > n2) {
//            return n1;
//          } else {
//            return n2;
//          } 
// }

// const pippo = biggerNumber(7, 8);
// console.log(pippo);

// const pluto = biggerNumber(17, 5);
// console.log(pluto);



// LAMBDA

// const biggerNumberLambda = (n1, n2) => {
//    if (n1 > n2) {
//       return n1;
//    } else { 
//       return n2
//    }
// }

// const paperino = biggerNumberLambda (12.5, 12.6);
// console.log(paperino);

// const paperone = biggerNumberLambda (-60, -5);
// console.log(paperone);


//5) Scrivere una funzione che date in input due stringhe ritorni la più corta

//FUNCTION

// function shorterString(string1, string2) {
//     if (string1.length > string2.length) {   //La proprietà.length in JavaScript restituisce il numero di elementi in un array o il numero di caratteri in una stringa.
//       return string2;
//     } else {
//       return string1;
//     }
// }

// const s1 = shorterString('deserto', 'foglio');  // ricordare sempre di mettere le stringhe tra virgolette
// console.log(s1);

// const s2 = shorterString('cielo', 'ospedale');
// console.log(s2);


//LAMBDA


// const shorterStringLambda = (string1, string2) => {
//    if (string1.length > string2.length) {
//        return string2;
//    } else {
//        return string1;
//    }
// }

// const s3 = shorterStringLambda('inferno', 'paradiso');   // ricordare sempre di mettere le stringhe tra virgolette
// console.log(s3);

// const s4 = shorterStringLambda('gatto', 'cane');   // ricordare sempre di mettere le stringhe tra virgolette
// console.log(s4);



//6) Scrivere una funzione che data in input una stringa ritorni la sua iniziale

// let stringa1 = 'maglietta';                         
// let firstLetter = stringa1[0];    //Questo è il metodo più comune e diretto per sapere la prima lettera di una parola: Sintassi -> stringa[0]
// console.log(firstLetter);     // verrà stampata la lettera m

// stringa[0] rappresenta il primo carattere di una stringa, poiché l'indicizzazione inizia da 0. Se la stringa è vuota, non esiste un indice 0 e tentare di accedervi può generare un errore a seconda del linguaggio


//FUNCTION

// function firstLetter(word) {
//          const initial = word[0];
//          return initial;
// }

// const i1 = firstLetter('smartphone');    // ricordare sempre di mettere le stringhe tra virgolette
// console.log(i1);

// const i2 = firstLetter('computer');       // ricordare sempre di mettere le stringhe tra virgolette
// console.log(i2);


//LAMBDA 

// const firstLetterLambda = word => {
//   const initial = word[0];
//   return initial;
// }

// const i3 = firstLetterLambda('pecora');
// console.log(i3);

// const i4 = firstLetterLambda('farfalla');
// console.log(i4);




//7) Scrivere una funzione che dati in input una stringa e un numero, logghi la stringa tante volte quante il numero dato

//FUNCTION

// function multiplyWord(inputWord, multiplier) {
//    let multipliedWord = '';            // Inizializzo una stringa vuota per contenere il risultato

//    for (let i = 0; i < multiplier; i++) {
//       multipliedWord += inputWord; //multipliedWord = multipliedWord + inputWord; 
//    }
//    return multipliedWord;
// }

// let m1 = multiplyWord('nome', 7);
// console.log(m1);

// let m2 = multiplyWord('lavoro', 4);
// console.log(m2);                                 // NON è QUESTO L'OBBIETTIVO

//PROVO DI NUOVO


// function multiplyWord(inputWord, multiplier) {

//    let multipliedWord = ' ';                // Inizializzo una stringa vuota per contenere il risultato

//    for (let i = 0; i < multiplier; i++) {   // faccio un ciclo 
//       multipliedWord += inputWord + '\n';   // \n è una sequenza di escape che rappresenta un carattere di nuova riga (andare a capo) all'interno di una stringa e deve essere tra virgolette perché considerata una stringa. Se lo scrivo senza le virgolette, Javascript me lo segna come errore// multipliedWord = multipliedWord + inputword + '\n'
//    }
//    return multipliedWord;
// }

// let m1 = multiplyWord('acQua', 7);
// console.log(m1);

// let m2 = multiplyWord('terrA', 4);
// console.log(m2);


//LAMBDA   //  NON VA A CAPO!

let multiplyWordLambda = (inputWord, multiplier) => inputWord.repeat(multiplier) + '\n';

let m3 = multiplyWordLambda('testa', 6);
console.log(m3);

let m4 = multiplyWordLambda('occhio', 10);
console.log(m4);


//    {
//    let multipliedWord = '';
//    for (let i = 0; i < multiplier; i++) {
//       const element = array[i];
      
//    }
// }