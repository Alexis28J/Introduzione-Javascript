
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

// for (let i = prompt("Inserisca un numero"); i > 0; i--) {
//    console.log(i); 
// }


//11)

// NON VA!
// for (let i = prompt("Inserisca un numero"); i > 0; i--) {
//     for (let j = prompt("Inserisca un altro numero"); j < i; j++) {
//          if (i % 2 === 0, j % 2 === 0) {
//             console.log(i, j);
//                   }
// }
// }

// NON VA!
// let i = prompt("Inserisca un numero");
// let j = prompt("Inserisca un altro numero");

// if (i % 2 === 0, j % 2 === 0) {
//                console.log(i, j);
               
// } else {
//                console.log();
            
// }

// CORREZIONE IN CLASSE:

// const number1 = prompt("Inserisci il primo numero");
// const convertedNumber1 = Number(number1);

// const number2 = prompt("Inserisci il secondo numero")
// const convertedNumber2 = Number(number2);

// for (let i = convertedNumber1 ; i <= covertedNumber2; i++) {
//     console.log(i);
    
// } //NON FUNZIONA IN TUTTI I CASI MA PER ORA NON IMPORTA 


//12)

// let age = Number(prompt("Quanti anni hai?"))

// const hours = age * 365 * 24;

// console.log("Hai sprecato" + hours + " ore");





// ESERCIZI DEL LIBRO

//1) Looping a triangle
//Write a loop that makes seven calls to console.log to output the following triangle:
//TRADUZIONE: Ciclo di un triangolo. Scrivi un ciclo che esegua sette chiamate a console.log per generare il seguente triangolo:

// #
// ##
// ###
// ####
// #####
// ######
// #######

//It may be useful to know that you can find the length of a string by writing .length after it.
//TRADUZIONE: Potrebbe essere utile sapere che è possibile trovare la lunghezza di una stringa scrivendo .length dopo di essa.

// let abc = "abc";
// console.log(abc.length);
// // → 3


//Most exercises contain a piece of code that you can modify to solve the exercise. Remember that you can click code blocks to edit them.
//TRADUZIONE: La maggior parte degli esercizi contiene un frammento di codice che puoi modificare per risolverli. Ricorda che puoi cliccare sui blocchi di codice per modificarli.

//VEDI REPOSITORY (SINCRONIZZARE FORK) DEL PROF MA PROVARE A FARLO PRIMA.



//2) FizzBuzz
// (PRIMO STEP) Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
// TRADUZIONE: Scrivi un programma che utilizzi console.log per stampare tutti i numeri da 1 a 100, con due eccezioni. Per i numeri divisibili per 3, stampa "Fizz" al posto del numero, e per i numeri divisibili per 5 (e non per 3), stampa "Buzz".

// (SECONDO STEP) When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
//TRADUZIONE: Una volta che tutto funziona, modifica il tuo programma in modo che stampi "FizzBuzz" per i numeri divisibili sia per 3 che per 5 (e stampi comunque "Fizz" o "Buzz" per i numeri divisibili solo per uno di questi).

// (This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)
// TRADUZIONE: (In realtà, si dice che questa sia una domanda da colloquio che elimina una percentuale significativa di candidati programmatori. Quindi, se hai risposto correttamente, il tuo valore sul mercato del lavoro è appena aumentato.)


// IL PROBLEMA è DIVISO IN DUE STEP. //CONSIGLI: CONTROLLARE L'ORDINE DELLE ISTRUZIONI PERCHE' IL PROGRAMMA FUNZIONI CORRETTAMENTE. PUOI USARE && PER UNIRE 2 CONDIZIONI.
// VEDI REPOSITORY (SINCRONIZZARE FORK) DEL PROF MA PROVARE A FARLO PRIMA. IL PROF LO HA FATTO IN 3 MANIERE DIVERSE: FACILE, MEDIO E DIFFICILE (VA BENE QUALSIASI DEI 3).



//3) ChessBoard 
//PRIMO STEP: Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
//Passing this string to console.log should show something like this:
//TRADUZIONE: Scrivi un programma che crei una stringa che rappresenti una griglia 8×8, utilizzando caratteri di nuova riga per separare le righe. In ogni posizione della griglia è presente uno spazio o un carattere "#". I caratteri dovrebbero formare una scacchiera.
//Passando questa stringa a console.log dovrebbe apparire qualcosa di simile a questo:


//  # # # #               //QUESTO è UNA GRIGLIA 8X8  ->  4 SPAZI CON CANCELLETTO E 4 SPAZI VUOTI    // LINEA0: SE SI OSSERVA BENE LA RIGA PARTE DA ZERO (SPAZIO VUOTO)
// # # # #                //LINEA 1 PARTE DA UNO (SPAZIO CON CANCELLETTO) E COSì VIA   // ALLORA DIVIAMOLI IN LINEE PARI E DISPARI
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #

//SECONDO STEP: When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
//TRADUZIONE: Quando si dispone di un programma che genera questo modello, definire una dimensione di binding = 8 e modificare il programma in modo che funzioni per qualsiasi dimensione, producendo una griglia con la larghezza e l'altezza specificate.

// VEDI REPOSITORY (SINCRONIZZARE FORK) DEL PROF MA PROVARE A FARLO PRIMA. IL PROF LO HA FATTO IN 4 MANIERE DIVERSE: FACILE, MEDIO, DIFFICILE E DIFFICILE CON MENO IF (VA BENE QUALSIASI DEI 4).