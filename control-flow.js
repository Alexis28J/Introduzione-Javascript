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

const candy = prompt("Quante caramelle hai?");
const candyNumber = Number(candy);


if (candyNumber === 0) {
    alert("Sei a dieta?");
} else if (candyNumber < 5) {
    alert("Molto bravo!!! Poche caramelle fanno bene alla salute.");
} else if (candyNumber < 20) {
    alert("Hai lavato i denti?")
} else if (candyNumber < 100) {
    alert("Ti verrà il diabete!");
} else {
    alert("Hai fatto scorta per l'inverno?");
}
//Nell'esempio sopra, il programma chiede all'utente quante caramelle ha e risponde in base al numero inserito. Se l'utente ha 0 caramelle, viene visualizzato un messaggio specifico. Se ne ha meno di 5, viene visualizzato un altro messaggio, e così via. Se nessuna delle condizioni precedenti è vera, viene eseguito il codice all'interno del blocco else finale.


const age = prompt("Quanti anni hai?");
const ageNumber = Number(age);

if (ageNumber === 0) {
    alert("Sei appena nato/a? Benvenuto/a nel mondo!");
}else if (ageNumber < 18) {
    alert("Sei minorenne. Beato te!");
}else if (ageNumber < 35) {
    alert("Stai invecchiando. Goditi la giovinezza finché puoi.");
}else if (ageNumber < 55) {
    alert("La mezza età. L'inizio della saggezza...e dei dolori articolari.");
}else if (ageNumber < 75) {
    alert("Sei un saggio/a ma anziano/a.");
}else {
    alert("Sei inmortale?");
}



//COMPITI
//Vedi repository del Prof per i compiti.