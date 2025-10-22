//IF 

// if (condition) {
//     // codice da eseguire se la condizione è vera
// }

// const pippo = 5;
// const pluto = 3;

// if (pippo > pluto) {
//     console.log("evivva!!! Pippo è maggiore di Pluto");
// }

// const pippo = 5;
// const pluto = 8;

// if (pippo > pluto) {
//     console.log("evivva!!! Pippo è maggiore di Pluto");
// }
//se la condizione è falsa, non succede nulla, quindi non viene eseguito nessun codice. Invece, se vogliamo eseguire del codice quando la condizione è falsa, possiamo usare l'else


//IF...ELSE

// const pippo = 5;
// const pluto = 3;

// if (pippo < pluto) {
//     console.log("evivva!!! Pippo è maggiore di Pluto");
// } else {
//     console.log("Peccato!!! Pippo non è maggiore di Pluto");
// }
//se la condizione è vera, viene eseguito il codice all'interno del blocco if, altrimenti viene eseguito il codice all'interno del blocco else.


//IF...ELSE IF...ELSE

// if (condition1) {
//     // codice da eseguire se la condizione1 è vera
// } else if (condition2) {
//     // codice da eseguire se la condizione2 è vera
// } else {
//     // codice da eseguire se nessuna delle condizioni precedenti è vera
// }

// const candy = prompt("Quante caramelle hai?");
// const candyNumber = Number(candy);


// if (candyNumber === 0) {
//     alert("Sei a dieta?");
// } else if (candyNumber < 5) {
//     alert("Molto bravo!!! Poche caramelle fanno bene alla salute.");
// } else if (candyNumber < 20) {
//     alert("Hai lavato i denti?")
// } else if (candyNumber < 100) {
//     alert("Ti verrà il diabete!");
// } else {
//     alert("Hai fatto scorta per l'inverno?");
// }
// //Nell'esempio sopra, il programma chiede all'utente quante caramelle ha e risponde in base al numero inserito. Se l'utente ha 0 caramelle, viene visualizzato un messaggio specifico. Se ne ha meno di 5, viene visualizzato un altro messaggio, e così via. Se nessuna delle condizioni precedenti è vera, viene eseguito il codice all'interno del blocco else finale.


// const age = prompt("Quanti anni hai?");
// const ageNumber = Number(age);

// if (ageNumber === 0) {
//     alert("Sei appena nato/a? Benvenuto/a nel mondo!");
// }else if (ageNumber < 18) {
//     alert("Sei minorenne. Beato te!");
// }else if (ageNumber < 35) {
//     alert("Stai invecchiando. Goditi la giovinezza finché puoi.");
// }else if (ageNumber < 55) {
//     alert("La mezza età. L'inizio della saggezza...e dei dolori articolari.");
// }else if (ageNumber < 75) {
//     alert("Sei un saggio/a ma anziano/a.");
// }else {
//     alert("Sei inmortale?");
// }


// SWITCH

// const response = prompt("Come ti senti oggi?");

// switch (response) {
//     case "felice":
//         alert("Bene, sono felice di sentirlo!")
//         break;
//     case "triste":
//         alert("Su con il morale, oggi è una splendida giornata!")
//         break;
//     case "euforico":
//         alert("Bene ma datti una calmata!")
//         break;
//     case "arrabbiato":
//         alert("Accidenti, raccontaci cosa è successo!")
//     default:
//         alert("E' molto interessante!")
//         break;
// }


//stesso esempio con else if

// if (response === "felice") {
//     alert("Bene sono felice di sentirlo!")
// }else if(response === "triste"){
//     alert("su con il morale, oggi è una splendida giornata!")}
// else if(response === "euforico"){
//     alert("Bene ma datti una calmata!")
// }else if(response === "arrabbiato"){
//     alert("Accidenti, raccontaci cosa è successo!")
// }else {
//     alert("E' molto interessante")
// }




//COMPITI
//Vedi repository del Prof per i compiti.




//CICLI
//While


// while (condition){

// }

// let counter = 0

// while (counter < 20){
//     console.log('ciao!' + counter); // il + counter è per vedere ogni contatore nella console 
//     counter++; //contattore - ogni volta che la condizione si avvera si aggiunge un numero al contatore così fino arrivare a 20 dove, in questo caso, finisce il ciclo.
// }

// console.log("sono uscito dal while");



// let outputString = '';

// while (outputString.length < 100){     // Condizione: numero di lettere minore a 100 - proprietà length
//     outputString = outputString + 'pippo';
// }

// console.log(outputString);




//While (true): ciclo che non finisce mai


// while (true) { //programmino per indovinare un numero tante volte
//     const number = prompt('indovina il numero che ho pensato');
//     const numberConverted = Number(number);

//     if (numberConverted === 20) {      //il 20 è il numero corretto
//         alert('hai vinto');           //se il numero indovinato è 20 allora appare la frase
//         break;                       //break interrompe immediatamente un ciclo (for, while, do...while) o un blocco switch quando viene incontrata. L'esecuzione del codice riprende dalla prima istruzione che segue la struttura interrotta. 
//                                        Viene usato per uscire anticipatamente da un ciclo quando viene raggiunta una condizione specifica. 
//     }else{
//         alert('hai perso, prova di nuovo');
//     }
// }

// console.log('gioco finito!');



//Do while - usato poco MA si usa questo invece di while solo nel caso particolare che ho bisogno che si esegua il codice almeno una volta anche se la condizione non è valida

// let counter = 0;

// do {
//     console.log('ciao! ' + counter);
//     counter++;
    
// } while (counter < 20);

// console.log('sono uscito dal do while');


//For - riunisce dichiarazione, condizione e conseguenza --> meno codice rispetto al while

// for (let i = 19; i < 20; i--) {  //i sta per index(indice) che è il contattore //per il momento non useremo le array
    
//     console.log('ciao! ' + i);
    
// }

// console.log('sono uscito dal ciclo for');


//esempio di fare lista di numeri pari
// for (let i = 0; i <=100; i+= 2) { //aggiunge 2 numeri all'index se è minore uguale a 100
//     console.log(i);   
// }

//il break si può usare nel for

// for (;;){}   // notazione per un for infinito
   


//Nulla ci vieta di scrivere un ciclo dentro un'altro ciclo

for (let i = 0; i < 5; i++) {    //stamperà da 0 fino a 4 
    for (let j = 0; j < 5; j++) {  //si mette j perchè viene dopo di i ma in realtà è solo un nome --  si può usare x,ecc
    console.log("riga: " + j + "colonna: " + i);
    }
}