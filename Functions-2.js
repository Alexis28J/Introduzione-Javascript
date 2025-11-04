
// function stringBuilder(s1, s2, s3) {
//     return s1 + s2 + s3;
// }

// console.log(stringBuilder('leonardo', 'leo', 'nardo'));
// console.log(stringBuilder('leonardo', 'leo'));  //si spetta che metta 2 parametri ma nulla mi vieta di mettere solo 2 e i parametri mancanti sono undefined
// console.log(stringBuilder('leonardo', 'leo', 'nardo', 'onar'));  //e se ci sono di più la funzione li ignora 


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function pow(base, exponent) {
//     if (exponent == undefined) {
//         exponent = 2; 
//     }
//     return base ** exponent;
// }

//NOTAZIONE PIù VELOCE per questo esempio
// function pow(base = 0, exponent = 2); {
//     return base ** exponent;
// }


// console.log(pow(3, 3)); 
// console.log(pow(3)); //in questo caso che c'è solo un parametro la funzione fa 3 elevato alla undefine = Nan, per evitare questo mettiamo un if
// console.log(pow());

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//SCOPE

// let number = 5;

// if (number > 3) {

// const number2 = number + 5; //lo scope interno accede alle variabili dello scope esterno

// console.log(number2);

//    if (number2 > 7) {   // nulla mi vieta di avere uno scope "nipote"

//     const number3 = number + number2; 
//     console.log(number3);

//    }

//  console.log(number3); //lo scope esterno non accede alle variabili dello scope interno

// }

// const number3 = number2 + 5; //lo scope esterno non accede alle variabili dello scope interno

// console.log(number3);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//CLOJURE
//le funzioni mantengono in vita le variabili che usano anche al di fuori del loro scope
// const isOpen = true;

// let myFunction;   //variabile vuota che conterrà la mia funzione

// if (isOpen) {
//     let counter = 0;

//     myFunction = () => {  //()senza parametri d'ingresso
//         counter++;
//         console.log(counter);
//     }

//     // myFunction(); //aumenta di 1 ogni volta che chiamo la funzione
//     // myFunction();
//     // myFunction();
//     // myFunction(); //a questo punto ho 4 //non c'è limite di quantità di volte che posso chiamare
// }


// myFunction();  //se li porto fuori dello scoope del 'papà', funzione comunque perchè la funzione rimane 'viva' - questo si chiama Clojure
// myFunction();
// myFunction();
// myFunction();


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//RECURSIONI    //li posso usare finchè rimane in un numero ragionevole, la ricursione eccessiva può saturare (e lo farà) la memoria dello stack
//Fattoriale:
//fact(0)=1;
//fact(1)=1;
//fact(n)=n*fact(n-1);

// function fact(n) {
//     if (n === 0) {
//         return 1;
//     }else{
//         return n * fact(n-1);
//     }
// }

// console.log(fact(0));
// console.log(fact(1));
// console.log(fact(2));
// console.log(fact(3));
// console.log(fact(4));
// console.log(fact(5));
// console.log(fact(6));
// console.log(fact(7));



// function isEven(n) {   //is Even = è pari. Funzione per sapere se un numero è pari --  questa funzione non funziona con numeri negativi
//     if (n === 0) {
//         return true;
//     }else if (n === 1){
//         return false; 
//     }else{
//         return isEven(n-2); // col parametro 5, arriva fino a return isEven(5-2) allora riparte da capo come n=3 e così via fino a che mi dia risultato true o false
//     }
// }

// console.log(isEven(5));
// console.log(isEven(4));
// console.log(isEven(3));



// function isEven(n) { 
//     if (n === 0) {   
//         return true;
//     } else {
//         return isOdd(n-1)
//     }
// }

// function isOdd(n) {   //Funzione per sapere se un numero è dispari
//     if (n === 0) {     
//         return false;  
//     } else {
//         return isEven(n-1);
//     }
// }

// console.log(isEven(3));
// console.log(isOdd(3));



////////////////////////////////////////////////////////////////////////////////////

//TASK
//1) se ci sono, rimuovere gli spazi prima e dopo
//2) aggiungere la stringa pippo in fondo
//3) mettere tutto maiusculo
//4) ripeterla per il numero di volte del moltiplicatore
//5) aggiungerli in fondo la sua lunghezza
//6) rimuovere tutte le p

// function strangeStringFunction(str, multiplier) {

//     const strWithoutSpaces = str.trim();   // funzione .trim() toglie lo spazio in mezzo alla stringa (1)
//     console.log('senza spazi', strWithoutSpaces);  //così controllo che ogni task che ho fatto funzioni bene

//     const strWithPippo = strWithoutSpaces + 'pippo';  // per aggiungere pippo in fondo (2)
//     console.log('aggiunto pippo', strWithPippo);

//     const strUpper = strWithPippo.toUpperCase();  //funzione .toUpperCase() per mettere tutto in maiuscola (3)
//     console.log('maiuscola', strUpper);

//     const strMultiplied = strUpper.repeat(multiplier);
//     console.log('moltiplicata->', strMultiplied);

//     const strWithLength = strMultiplied + strMultiplied.length;
//     console.log('con lunghezza->', strWithLength);


// let strWithoutP = '';                              //(6)

// for (let i = 0; i < strWithLength; i++) {
//     const char = strWithLength.charAt(i);

//     if(char !== 'P'){
//         strWithoutP += char;
//     }

// }

// console.log('senza p->', strWithoutP);

// }

// strangeStringFunction(' leonardo bullo! ', 4);


//////////////////////////////////////////////////////////////////////////////

//Esercizio per casa: libro "Eloquent Javascript" - capitolo 3 Functions

// Bean counting

// You can get the Nth character, or letter, from a string by writing [N] after the string (for example, string[2]). The resulting value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

// Write a function called countBs that takes a string as its only argument and returns a number that indicates how many uppercase B characters there are in the string.

// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase B characters). Rewrite countBs to make use of this new function.


//TRADUZIONE

//Conteggio dei fagioli

// È possibile ottenere l'ennesimo carattere, o lettera, da una stringa scrivendo [N] dopo la stringa (ad esempio, string[2]). Il valore risultante sarà una stringa contenente un solo carattere (ad esempio, "b"). Il primo carattere ha posizione 0, il che fa sì che l'ultimo si trovi alla posizione string.length - 1. In altre parole, una stringa di due caratteri ha lunghezza 2 e i suoi caratteri hanno posizioni 0 e 1.

// Scrivi una funzione chiamata countBs che accetti una stringa come unico argomento e restituisca un numero che indica quanti caratteri B maiuscoli sono presenti nella stringa.

// Successivamente, scrivi una funzione chiamata countChar che si comporti come countBs, tranne per il fatto che accetta un secondo argomento che indica il carattere da contare (invece di contare solo i caratteri B maiuscoli). Riscrivi countBs per utilizzare questa nuova funzione.


//In JavaScript, string[n] significa accedere al carattere che si trova alla posizione n della stringa, dove la prima posizione è 0. Questo metodo è noto come indicizzazione di stringa ed è un modo comune per estrarre singoli caratteri da una stringa.

//Fatto da Selma

// function countBs(str) {
//     let counter = 0;

//     for (let i = 0; i < str.length; i++) {  //'let i=0': ricorda che si comincia a contare da ZERO non da uno 
//         //'i < str.length': il contatore si ferma dopo aver contato tutte i caratteri della string che gli abbiamo dato
//         const selectedChar = str[i];
//         const lowerChar = selectedChar.toLowerCase(); //funzione .toLowerCase() per trasformare le lettere maiscole in minuscole perché altrimenti la nostra funzione non lo considera 

//         if (selectedChar === 'b') {
//             counter++;
//         }
//     }
//     return counter;
// }

// console.log(countBs('babbeo'));  // -> 3  //6 caratteri 
// console.log(countBs('leonardo')); // -> 0 //8 caratteri
// console.log(countBs('BAMBINO')); // -> 2  //7 caratteri





// function countChar(str, char) {
//      let counter = 0;

//     for (let i = 0; i < str.length; i++) {
//         const selectedChar = str[i];  //variabile i è la posizione dentro del ciclo

//         const selectedLower = selectedChar.toLowerCase(); //funzione .toLowerCase() per trasformare le lettere maiscole in minuscole perché altrimenti la nostra funzione non lo considera 
//         const charLower = char.toLowerCase(); //dobbiamo aggiungere

//         if (selectedChar === charLower) {
//             counter++;
//         }
//     }
//     return counter;
// }

// console.log(countChar('mammamia', 'm')); // -> 4
// console.log(countChar('mammamia', 'i')); // -> 1
// console.log(countChar('leonardo', 'L')); // -> 1 ma la console, ci torna 0 perciò *



//TASK AGGIUNTIVO - is Sensitive (se voglio che si distingua se il carattere è maiuscolo e minuscolo)
//In JavaScript, "case sensitive" significa che il linguaggio distingue tra lettere maiuscole e minuscole nei nomi di variabili, funzioni e altre istruzioni.
//Perciò, se il codice ha un errore di battitura, anche solo cambiando la capitalizzazione, l'esecuzione non avverrà correttamente.


// function countCharSensitive(str, char, isSensitive) {   

//     let counter = 0;

//     for (let i = 0; i < str.length; i++) {

//         let selectedChar = str[i];

//         if (!isSensitive) {
//             selectedChar = selectedChar.toLowerCase();
//             char = char.toLowerCase();
//         }
//         if (selectedChar === char) {
//             counter++;
//         }
//     }

//     return counter;
// }

// console.log(countCharSensitive('leonardo', 'L', false));  // -> 1
// console.log(countCharSensitive('leonardo', 'L', true)); // -> 0





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Esercizi in clase

//24) Inversione di un numero
//Scrivi una funzione invertiNumero che prenda un numero come parametro e restituisca il numero con le cifre invertite (es. 123 → 321).

//fatto con Evelyn :)
// function changeCharOrder(n) {
//     let toChange = n.toString().split('').reverse().join('');
//     return toChange;
// }

// console.log(changeCharOrder(598));


//fatto dal Prof.

// function reverseNumber(nbr) {   //La forma più furba è transformarlo in stringa

//     const nbrToString = String(nbr);

//     let reversed = '';

//     //le stringhe si possono 'ciclare' - ma facciamo un for al CONTRARIO

//     for (let i = nbrToString.length - 1; i >= 0 ; i--) {

//         const char = nbrToString[i];
//         reversed += char;

//     }

//     const reversedToNumber = Number(reversed); //devo riconvertirlo in numero o mi ritornerà come stringa (ERRORE)
//     return reversedToNumber;

// }

// console.log(reverseNumber(123345));  


//25) Tabellina
//Scrivi una funzione tabellina che prenda un numero come parametro e stampi in console la tabellina di quel numero fino a 10.


//fatto con Evelyn :)
// function littleTab(n1) {


// for (let i = 1; i <= 10; i++) {

//   const risultato = n1 * i;

//   console.log(n1 + 'x' + i + '=' + risultato);
// }

// }

// console.log(littleTab(5));  


//fatto dal Prof.

//MODO PIù BRUTTO DA FARLO MA NULLA CI VIETA DI FARLO (è lecito) :)
// function tabellina(nbr) {
//     console.log(nbr * 1);
//     console.log(nbr * 2);
//     console.log(nbr * 3);
//     console.log(nbr * 4);
//     console.log(nbr * 5);
//     console.log(nbr * 6);
//     console.log(nbr * 7);
//     console.log(nbr * 8);
//     console.log(nbr * 9);
//     console.log(nbr * 10);

// }

// tabellina(3);
// tabellina(10);


//MODO 'CORRETTO'

// function tabellinaEvolution(nbr) {
//     for (let i = 0; i < 11; i++) {
//         console.log(nbr * i);  
//     }
// }

// tabellinaEvolution(3); //  NON SERVE FARE IL CONSOLE.LOG OGNI VOLTA SE è GIà STATO FATTO PRIMA
// tabellinaEvolution(10); //  NON SERVE FARE IL CONSOLE.LOG OGNI VOLTA SE è GIà STATO FATTO PRIMA


// UNA TABELLA STRING (ALTRO ESERCIZIO)

// function tabellinaString(nbr) {

//     let tabellinaStr = '';

//     for (let i = 1; i < 11; i++) {
//         const result = nbr * i; 
//         tabellinaStr += result;
//         tabellinaStr += '';  //perché le parole non stiano appiccicate

//     }

//     return tabellinaStr;
// }

// for (let i = 1; i < 11; i++) {
//     console.log(tabellinaString(i));
// }


//26) Fibonacci
//Scrivi una funzione fibonacci che prenda un numero N come parametro e restituisca l’N-esimo numero della sequenza di Fibonacci.

//fatto dal Prof.

// function fibonacci(pos) {   //pos sta per position

// let first = 0;
// let second= 1;

// if (pos === 1) {
//     return first;
// }else if(pos === 2){
//     return second;
// }else if(pos > 2){

// let fib;

//     for (let i = 3; i <= pos; i++) {  //si comincia dalla posizione 3
//         fib = first + second;   //la terza posizione = la prima + il secondo
//         first = second;
//         second = fib;
//     }

//      return fib;

// }else{
//     console.log('ERRORE!!!');  // in caso si inserisca un parametro negativo

// }

// }

// console.log(fibonacci(7));


//FUNZIONE RICORSIVA (VERSIONE RICORSIVA - è più 'elegante')

// function fiboRecursive(pos) {

//     if (pos === 0) {
//         return 0;
//     } else if (pos === 1) {
//         return 1;
//     } else {
//         return fiboRecursive(pos - 1) + fiboRecursive(pos - 2);  //se metto 3: fiboRecursive(2) + fiboRecursive(1)
//     }
// }







//27)  Conteggio vocali
//Scrivi una funzione contaVocali che prenda una stringa come parametro e restituisca il numero di vocali presenti.

//fatto con Evelyn :)
// function contaVocali(str) {
//     let counter = 0;
//     const vowel = 'aeiouAEIOU';
//     for (let i = 0; i < str.length; i++) {
//         if (vowel.includes(str[i])) {
//             counter++;
//         }

//     }
//     return counter;
// }


// console.log(contaVocali('meleebanane'));


//fatto dal Prof.

// function countVowels(str) {
//     let counter = 0;

//     for (let i = 0; i < str.length; i++) {  //ricorda che si comincia a contare da ZERO non da uno

//         const selectedChar = str[i];
//         const lowerChar = selectedChar.toLowerCase(); //funzione .toLowerCase() per trasformare le lettere maiscole in minuscole perché altrimenti la nostra funzione non lo considera 

//         if (lowerChar === 'a' 
//             || lowerChar === 'e'
//             || lowerChar === 'i'
//             || lowerChar === 'o'
//             || lowerChar === 'u'
//             ) {
//             counter++;
//         }
//     }
//     return counter;
// }

// console.log(countVowels('aiuola'));  // -> 5 vocali



//28) Sconto
//Scrivi una funzione applicaSconto che prenda due numeri come parametri (prezzo e percentuale di sconto) e restituisca il prezzo scontato.

//fatto con Evelyn :)
// function applicaSconto(price, percentage) {
//     let percentageFloat = percentage / 100;
//     let discount = price * percentageFloat;
//     let result = price - discount;
//     return result;
// }

// console.log(applicaSconto(100, 5));



//fatto dal Prof.

// function applySale(price, salePercent) {

//     const sale = price / 100 * salePercent;
//     const priceWithSale = price - sale;

//     return priceWithSale;
// }

// console.log(applySale(100, 20));


//29) Conversione gradi
//Scrivi una funzione convertiGradi che prenda un numero come parametro (gradi Celsius) e restituisca la conversione in Fahrenheit


//fatto con Evelyn :)
//(5 °C × 9/5) + 32 = 41 °F

// function convertiGradi(c) {
//     let fahrenheit = (c * (9/5)) + 32;
//     return fahrenheit;
// }

// console.log(convertiGradi(5) + '°F') ;


//fatto dal Prof. 
//PRATICAMENTE UGUALE

// function celsiusToFahrenheit(c) {
//     const f = (c * (9/5)) + 32;
//     return f;
// }

// console.log(celsiusToFahrenheit(30));


//30) Verifica password
//Scrivi una funzione verificaPassword che prenda una stringa e restituisca true se:
// - Ha almeno 8 caratteri
// - Contiene almeno una lettera maiuscola
// - Contiene almeno un carattere speciale tra questi '!#@$%'
// - Non contiene la parola 'cacca'

//fatto dal Prof.

// function checkPasword(password) {
//     if (password.length > 8) {  //la password deve almeno avere 8 caratteri
//         return false;
//     } else {
//         if (password.toLowerCase() === password) {
//             return false;  //la password deve avere almeno UNA lettera maiuscola
//         } else {
//             if (password.includes("!")   //la password deve avero almeno UNO di questi caratteri speciali
//                 || password.includes('#')
//                 || password.includes('@')
//                 || password.includes('$')
//                 || password.includes('%')) {

//                 if (password.includes('cacca')) {  //la password NON deve includere la parola 'cacca'
//                     return false;
//                 } else {
//                     return true;
//                 }
//             } else {
//                 return false;
//             }
//         }
//     }

// }



// console.log(checkPasword('caccacaccacacca'));
// console.log(checkPasword('leonardo'));



//COME POSSIAMO MIGLIORARE IL NOSTRO CODICE? FACCIAMO UN 'REFACTOR'


// function checkSpecialCharacters(str) {
//     if (str.includes("!")   //la password deve avero almeno UNO di questi caratteri speciali
//                 || str.includes('#')
//                 || str.includes('@')
//                 || str.includes('$')
//                 || str.includes('%')) {
//                        return true;
//     }else{
//         return false;
//     }
// }


// function containUppercaseChar(str) {
//     if (str.toLowerCase() === str) {
//         return false;
//     }else{
//         return true;
//     }
// }


// function isTooShort(str) {
//     if (str.length < 8) {
//         return true;
//     } else {
//         return false;
//     }
// }


// function containsCacca(str) {
//     if (str.includes('cacca')) {
//         return true;
//     } else {
//         return false;
//     }
// }


//function checkPasword(password) {
    // if (password.length > 8) {  //la password deve almeno avere 8 caratteri
    //     return false;
    // } else {
    //     if (password.toLowerCase() === password) {
    //         return false;  //la password deve avere almeno UNA lettera maiuscola
    //     } else {
    //         if (checkSpecialCharacters(password)) {
    //             if (password.includes('cacca')) {  //la password NON deve includere la parola 'cacca'
    //                 return false;
    //             } else {
    //                 return true;
    //             }
    //         } else {
    //             return false;
    //         }
    //     }
    // }

// if (isTooShort(password)) {
//     return false;
// }else if(!containUppercaseChar(password)){
//     return false;
// }else if(!checkSpecialCharacters(password)){  //'altrimenti: non ha caratteri speciali allora ritorna falso'
//     return false;
// }else if(containsCacca(password)){
//     return false;
// }else{
//     return true;
// }
    
// }


// console.log(checkPasword('caccacaccacacca'));
// console.log(checkPasword('Leonardo!'));