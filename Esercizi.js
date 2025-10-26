
//Compiti per mercoledì 22.10.2025

//1) chiedete all'utente il nome e fategli gli auguri di compleanno
//2) chiedete all'utente la base e l'esponente e calcolate la potenza
//3) chiedete all'utente un numero e ditegli se è pari o dispari (operatore modulo)
//4) fate inserire all'utente l'età e se è maggiore o uguale a 18 rispondete "puoi entrare"
//5) fate inserire all'utente una stringa e convertitela in maiuscolo (cercare su internet)


//1)

// const nome = prompt("Come ti chiami?");
// const nomeString = String(nome);

// if(nomeString === "Alexis") {
// alert("Tanti auguri a te, Alexis!");
// }else{
//     alert("Scusa, pensavo fossi Alexis");
// }

// CORREZIONE

//const firstName = prompt ("Come ti chiami?");  //abituarsi a mettere delle parole in inglese e non nella propria lingua
// alert ("Tanti Auguri a " + firstName); // bastava così, non c'era bisogno di complicarsi la vita


// --------------------------------------------------------------

//2)

// const base = prompt("Inserisci la base della potenza");
// const baseNumber = Number(base);

// const exponent = prompt("Inserisci l'esponente della potenza");
// const exponentNumber = Number(exponent);

// const power = baseNumber ** exponentNumber;
// alert("Il risultato della potenza è: " + power);

//----------------------------------------------------------------

//3)

// const valore = prompt("Dimmi un numero e ti dirò se è pari o dispari");
// const valoreNumber = Number(valore);

// const remainder = valoreNumber % 2;
// const remainderNumber = Number(remainder);

// //Per un numero dispari: numero % 2 restituirà sempre 1
// //Per un numero pari: numero % 2 restituirà sempre 0

// if (remainderNumber === 0){
//     alert("Il numero è PARI");
// }else{
//     alert("Il numero è DISPARI");
// }


//--------------------------------------------------------------------

//4)

// const age = prompt("Quanti anni hai?");
// const ageNumber = Number(age); 

// if (ageNumber >= 18){
//     alert("Puoi entrare");
// }else{
//     alert("ACCESSO NEGATO");
// }

//In questo caso else non è necessario, solo basta l'if.


//---------------------------------------------------------------------

//5)

// const word = prompt("Inserisci una frase");
// const wordMaiusc = word.toUpperCase();

// alert(wordMaiusc);


//Per convertire la stringa in maiuscolo, si usa il metodo toUpperCase();
//Esempio:
// let stringaOriginale = "ciao mondo";
// let stringaMaiuscola = stringaOriginale.toUpperCase();
// // stringaMaiuscola ora contiene "CIAO MONDO"



// -----------------------------------------------------------------------------------------


//ESERCIZI IN CLASSE

//6) fai un ciclo for che stampi il quadrato dei numeri da 1 a 100 

// col ciclo for:

// for (let i = 1; i <= 100; i++) {   //o scrivere < 101
//    const square = i ** 2;
//    console.log(square);
// }


// col ciclo while:

// let numberOne = 1;
// while (numberOne < 101) {
//     console.log(numberOne ** 2);
//     numberOne++;   }



//7) fai un ciclo che per i numeri di 1 al 100 stampi pari se il numero è pari e dispari se il numero è dispari


// Col ciclo for:
// for (let i = 1; i < 101 ; i++) {

//    if (i % 2 === 0) {
//     console.log("pari")

//    } else {
//     console.log("dispari")
    
//    }
    
// }


// Col ciclo while: 
// let numberX = 1; 
 
// while (numberX < 101) {
//    if (numberX % 2 === 0) {
//     console.log("Pari");
//     numberX++;
//    }else{
//     console.log("Dispari");
//     numberX++;
//    }
// }


// COMPITI 

//8) Usando un ciclo logga i numeri da 1 a 100 mettendo un asterisco vicino ai multipli di 7
//9) Usando un ciclo logga i numeri da 1 a 100 mettendo un asterisco vicino ai quadrati perfetti
//10) chiedi all'utente un numero (positivo) di partenza e poi logga tutti i numeri dal numero dato fino a 0
//11) chiedi all'utente due numeri e logga tutti i numeri pari compresi tra i numeri forniti dall'utente
//12) chiedi all'utente quanti anni ha e digli quante ore ha gia' vissuto


//8) 

// COL CICLO FOR:
// for (let i = 1; i <=100 ; i++) {
//     if (i % 7 === 0) {  
//         //I multipli di un numero sono ottenuti moltiplicando quel numero per un qualsiasi numero intero. Un numero è considerato un multiplo di 7 se è divisibile per 7, ovvero se il resto della divisione per 7 è 0.
//         console.log(i + "*");
//     }else{
//         console.log(i);
//     }
// }


//COL CICLO WHILE:
// let numberX = 1;

// while (numberX <= 100) {
//     if (numberX % 7 === 0) {
//         console.log(numberX + "*");
//         numberX++;
//     }else{
//         console.log(numberX);
//         numberX++;
//         }
// }



//9) 

//Un quadrato perfetto è un numero intero che può essere espresso come il prodotto di un numero intero moltiplicato per se stesso.
//Per verificare se un numero è un quadrato perfetto in JavaScript, si può calcolare la sua radice quadrata usando Math.sqrt() e poi controllare se il risultato è un numero intero.

//CICLO FOR:
// for (let i = 1; i < 101; i++) {
//     const squareRoot = Math.sqrt(i);  // squareRoot è la radice quadrata di i e perciò deve essere un numero intero
//     if (squareRoot % 1 === 0) {     // se la radice quadrata è un numero intero allora il resto che si ottiene quando diviso da 1 deve essere 0, al contrario di quello che succede coi numeri decimali.
//         console.log(i + "*");
//     } else {
//         console.log(i);
//     }
// }

//COL CICLO WHILE NON MI VIENE!!!
// let numberOne = 1;
// let numberTwo = Math.sqrt(numberOne);   // numberTwo è la radice quadrata di numberOne e perciò deve essere un numero intero
// while (numberOne < 101) {
//        if (numberTwo > 0, numberTwo % 1 === 0) {
//         console.log(numberOne + "*");
//         numberOne++;
//        } else {
//         console.log(numberOne);
//         numberOne++;
//        }
// }

//10) 

const numberX = Number(prompt("Inserisca un numero"));

if (numberX > 0) {
    while (numberX >= 0){
        console.log(numberX); 
        numberX--; }
} 

else if (numberX < 0) {
    console.log(prompt("Non ammesso. Il numero deve essere positivo"));
}
