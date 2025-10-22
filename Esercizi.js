
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

for (let i = 1; i <= 100; i++) {   //o scrivere < 101
   const square = i ** 2;
   console.log(square);
}


//7) fai un ciclo che per i numeri di 1 al 100 stampi pari se il numero è pari e dispari se il numero è dispari

for (let i = 1; i < 101 ; i++) {

   if (i % 2 === 0) {
    console.log("pari")

   } else {
    console.log("dispari")
    
   }
    
}


// COMPITI 

//8) Usando un ciclo logga i numeri da 1 a 100 mettendo un asterisco vicino ai multipli di 7
//9) Usando un ciclo logga i numeri da 1 a 100 mettendo un asterisco vicino ai quadrati perfetti