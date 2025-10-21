
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
//     alert("Puoi entrare. PREGO");
// }else{
//     alert("ACCESSO NEGATO");
// }

//---------------------------------------------------------------------

//5)

const word = prompt("Inserisci una frase");
const wordString = String(word);
const wordMaiusc = word.toUpperCase();

alert(wordMaiusc);


//Per convertire la stringa in maiuscolo, si usa il metodo toUpperCase();
//Esempio:
// let stringaOriginale = "ciao mondo";
// let stringaMaiuscola = stringaOriginale.toUpperCase();
// // stringaMaiuscola ora contiene "CIAO MONDO"