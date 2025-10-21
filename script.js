// console.log("Hello world!"); //metodo per stampare qualcosa nella console del browser. "log" significa "registrare" o "annotare".

// Per commentare una singola riga di codice si usa "//" all'inizio della riga

//booleani (vero/falso)
vero = true;
falso = false;

//number (numeri)
intero = 42;
decimale = 3.14;
negativo = -7;
Infinity = Infinity; //rappresenta un valore infinito
//-Infinity = -Infinity; //rappresenta un valore negativo infinito


//NaN = NaN; //Not a Number (non è un numero)
//espressioni matematiche che non producono un risultato numerico valido
zero_diviso_zero = 0 / 0; //risultato: NaN
radice_quadrata_negativa = Math.sqrt(-1); //risultato: NaN

//string (testo)
stringa = "Ciao, mondo!"; //si possono usare sia virgolette doppie che singole
stringa2 = 'Javascript è divertente!';
stringa3 = `Oggi è il ${new Date().getDate()}`; //template literal (consente di includere espressioni all'interno delle stringhe)
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." //stringa lunga
'a' //singolo carattere
''  //stringa vuota


//tipi nulli
//undefined (non definito)
nulla = undefined; //indica che una variabile non ha un valore assegnato

//null (nessun valore)
vuoto = null; //indica l'assenza intenzionale di un valore


//OPERATORI LOGICI
//AND (e) (&&)

//è necessario esprimere la tavola di verità per l'AND. Tutti gli operandi devono essere veri per restituire vero
vero_e_vero = true && true; //risultato: true
vero_e_falso = true && false; //risultato: false
falso_e_falso = false && false; //risultato: false
falspo_e_vero = false && true; //risultato: false

//console.log(true && false); //stampa "false" nella console    
//console.log(true && true); //stampa "true" nella console



//OR (o) (||)
vero_o_falso = true || false; //risultato: true
falso_o_falso = false || false; //risultato: false
falso_o_vero = false || true; //risultato: true
vero_o_vero = true || true; //risultato: true

//console.log(false || false); //stampa "false" nella console
//console.log(false || true); //stampa "true" nella console


//NOT (non) (!)
non_vero = !true; //risultato: false
non_falso = !false; //risultato: true

//console.log(!false); //stampa "true" nella console


//OPERATORI MATEMATICI
//addizione (+)
somma = 5 + 3; //risultato: 8

//sottrazione (-)
differenza = 10 - 4; //risultato: 6 

//moltiplicazione (*)
prodotto = 6 * 7; //risultato: 42

//divisione (/)
quoziente = 20 / 5; //risultato: 4

//potenza (**)
potenza = 2 ** 3; //risultato: 8 (2 elevato alla 3)

//modulo (%) //resto della divisione (non confondere con la divisione)
resto = 10 % 3; //risultato: 1 (resto della divisione di 10 per 3)
resto2 = 15 % 4; //risultato: 3 (resto della divisione di 15 per 4)

//somma di stringhe (concatenazione di stringhe) (+)
saluto = "Ciao, " + "come stai?"; //risultato: "Ciao, come stai?"
saluto2 = "Il numero è: " + 42; //risultato: "Il numero è: 42"
saluto3 =  "divertente " + "imparare " + "Javascript"; //risultato: "divertente imparare Javascript"


//OPERATORI DI CONFRONTO
//uguale (== o ===)
//== confronta solo il valore, === confronta sia il valore che il tipo di dato

uguale = (5 === 5); //risultato: true
non_uguale = (5 === 3); //risultato: false

7 == '7'; //risultato: true (confronta solo il valore)
7 === '7'; //risultato: false (confronta sia il valore che il tipo di dato)

true === true; //risultato: true
true === false; //risultato: false

"pippo" === "pippo"; //risultato: true
"pippo" === "pluto"; //risultato: false

//diverso (!= o !==)
diverso = (5 !== 3); //risultato: true
non_diverso = (5 !== 5); //risultato: false

!(7 === 7); //risultato: false (confronta sia il valore che il tipo di dato)
!(7 !== '7'); //risultato: true (confronta sia il valore che il tipo di dato)

7 !== '7'; //risultato: true (confronta sia il valore che il tipo di dato)
7 != '7'; //risultato: false (confronta solo il valore)

true !== false; //risultato: true
true !== true; //risultato: false

"pippo" !== "pluto"; //risultato: true
"pippo" !== "pippo"; //risultato: false


//maggiore di (>) e maggiore o uguale di (>=)
maggiore = (10 > 5); //risultato: true
non_maggiore = (3 > 7); //risultato: false
maggiore_o_uguale = (5 >= 5); //risultato: true
non_maggiore_o_uguale = (4 >= 6); //risultato: false

//minore di (<) e minore o uguale di (<=)
minore = (3 < 8); //risultato: true
non_minore = (9 < 2); //risultato: false
minore_o_uguale = (4 <= 4); //risultato: true
non_minore_o_uguale = (7 <= 5); //risultato: false

//parentesi (())
//le parentesi vengono utilizzate per raggruppare espressioni e modificare l'ordine delle operazioni
risultato_senza_parentesi = 2 + 3 * 4; //risultato: 14 (moltiplicazione prima dell'addizione)
risultato_con_parentesi = (2 + 3) * 4; //risultato: 20 (addizione prima della moltiplicazione)
(5 + 3) * (10 - 2); //risultato: 64 (le operazioni all'interno delle parentesi vengono eseguite prima)
((5 + 2) * 2 - (4-3)); //risultato: 13 (le operazioni vengono eseguite seguendo l'ordine delle parentesi)

//Esempi di utilizzo degli operatori
a = 10;
b = 20;
c = 15;     
somma_ab = a + b; //somma di a e b
differenza_bc = b - c; //differenza tra b e c
prodotto_ac = a * c; //prodotto di a e c
quoziente_ba = b / a; //quoziente di b e a

is_a_greater_than_c = (a > c); //verifica se a è maggiore di c
is_b_equal_to_20 = (b === 20); //verifica se b è uguale a 20
is_c_not_equal_to_10 = (c !== 10); //verifica se c è diverso da 10      
console.log("La somma di a e b è: " + somma_ab);
console.log("La differenza tra b e c è: " + differenza_bc);
console.log("Il prodotto di a e c è: " + prodotto_ac);  



//ESERCIZI

// !(true || true); //risultato: false

// (5 + 3) * 2 > 15; //risultato: false

// !(true || ("pippo" === "pluto")); //risultato: false
// //!(true || false); 

// !(true || ("pippo" !== "pluto")); //risultato: true

// // console.log((10 % 3) + (4 * 2)); //risultato: 11  (per testare l'esercizio, consulta la console del browser)

// !((12 % 5) === 3); //risultato: true

// ("ciao mondo" !== ("ciao" + "  " + "mondo")) === false; //risultato: false
// //ATTENZIONE che c'è uno spazio DOPPIO tra "ciao" e "mondo"


//VARIABILI
//una variabile è un contenitore per memorizzare dati. Si crea una variabile usando la parola chiave "let", "const" o "var" seguita dal nome della variabile e, opzionalmente, si assegna un valore usando l'operatore di assegnazione "=".

//var x = 10; //dichiarazione di una variabile "x" e assegnazione del valore 10
//let y = 20; //dichiarazione di una variabile "y" e assegnazione del valore 20

//var firstNumber = 5; //dichiarazione di una variabile "firstNumber" e assegnazione del valore 5
//console.log(firstNumber); //stampa il valore della variabile "firstNumber" nella console
//la notazione camelCase è uno stile di scrittura dei nomi delle variabili in cui la prima parola inizia con una lettera minuscola e ogni parola successiva inizia con una lettera maiuscola, senza spazi o caratteri speciali tra le parole. Ad esempio: myVariableName, totalSum, userAge.

//var secondNumber = 10; //dichiarazione di una variabile "secondNumber" e assegnazione del valore 10

//var sumOfNumbers = firstNumber + secondNumber; //dichiarazione di una variabile "sum" e assegnazione del valore della somma di "firstNumber" e "secondNumber"

//console.log(sumOfNumbers); //stampa il valore della variabile "sum" nella console
//puoi cambiare il valore di una variabile semplicemente riassegnandole un nuovo valore

//var empty;
//console.log(empty); //stampa "undefined" nella console perché la variabile "empty" non ha un valore assegnato


//LET
// let firstNumber = 5; //dichiarazione di una variabile "firstNumber" e assegnazione del valore 5
// console.log(firstNumber); //stampa il valore della variabile "firstNumber" nella console

// let secondNumber = 10; //dichiarazione di una variabile "secondNumber" e assegnazione del valore 10

// let sumOfNumbers = firstNumber + secondNumber; //dichiarazione di una variabile "sumOfNumbers" e assegnazione del valore della somma di "firstNumber" e "secondNumber"

// console.log(sumOfNumbers); //stampa il valore della variabile "sumOfNumbers" nella console

// let empty;
// console.log(empty); //stampa "undefined" nella console perché la variabile "empty" non ha un valore assegnato

// secondNumber = 20; //riassegnazione di un nuovo valore alla variabile "secondNumber"

// let newSumOfNumbers = firstNumber + secondNumber; //dichiarazione di una nuova variabile "newSumOfNumbers" e assegnazione del valore della somma di "firstNumber" e "secondNumber"

// console.log(newSumOfNumbers); //stampa il valore della variabile "newSumOfNumbers" nella console


//Le variabi non vanno tra virgolette, perché altrimenti verrebbero interpretate come stringhe e non come nomi di variabili. Solo i dati di tipo stringa vanno tra virgolette.
//Esempio: 
// let nome = "Jordy"; //corretto
// let cognome = 'Trebejo'; //corretto
// let eta = 25; //corretto
// let città = Roma; //sbagliato, perché "Roma" verrebbe interpretato come una variabile non definita. Dovrebbe essere scritto come: let città = "Roma";

// let firtName = "Jordy"; //dichiarazione di una variabile "firstName" e assegnazione del valore "Jordy"
// let hello = "Ciao" + " " + firstName; //dichiarazione di una variabile "hello" e assegnazione del valore della concatenazione di "Ciao" e il valore della variabile "firstName"
// console.log(hello); //stampa il valore della variabile "hello" nella console


//DIFFERENZA TRA VAR E LET (IMPORTANTE)
//la differenza principale tra "var" e "let" riguarda l'ambito (scope) delle variabili dichiarate con queste parole chiave. Le variabili dichiarate con "var" hanno un ambito di funzione, mentre le variabili dichiarate con "let" hanno un ambito di blocco.


// let pluto = pippo + 30; //Javascript cerca il valore di "pippo", che viene definito nella riga precedente. Quindi pluto vale 5 + 30, che risulta in 35. Javascript può usare la variabile perché essa è già definita
// // la variabile "pluto" viene calcolata dopo che "pippo" è stata definita. JAVASCRIPT SEGNALA UN ERRORE SE SI CERCA DI USARE UNA VARIABILE PRIMA CHE SIA STATA DEFINITA.
// let pippo = 5;
// console.log(pluto); //stampa 35 nella console

// var paperoga = paperino + 30; //javascript cerca il valore di "paperino", che viene definito nella riga successiva. Javascript esegue il codice in modo sincrono, quindi quando arriva a questa riga "paperino" è ancora undefined. Quindi paperoga vale undefined + 30, che risulta in NaN (Not a Number).
// // Javascript può usare la variabile ma essa è ancora undefined
// var paperino = 5;
// console.log(paperoga); //stampa 35 nella console



//CONST
//le variabili dichiarate con "const" non possono essere riassegnate dopo la loro iniziale assegnazione. Devono essere inizializzate al momento della dichiarazione.
// const pi = 3.14; //dichiarazione di una costante "pi" e assegnazione del valore 3.14
// console.log(pi); //stampa il valore della costante "pi" nella console

//pi = 3.14159; //sbagliato, perché non si può riassegnare un nuovo valore a una costante

// const qui = true; //dichiarazione di una costante "qui" e assegnazione del valore true
// const quo = false; //dichiarazione di una costante "quo" e assegnazione del valore false
// const qua = qui && !quo; //dichiarazione di una costante "qua" e assegnazione del valore della espressione logica "qui AND NOT quo"

// qui = false; //sbagliato, perché non si può riassegnare un nuovo valore a una costante. Javascript segnala un errore peroché si sta cercando di riassegnare un nuovo valore a "qui"

// console.log(qua); //stampa il valore della costante "qua" nella console


//typeof
//l'operatore "typeof" viene utilizzato per determinare il tipo di dato di una variabile o di un'espressione. Restituisce una stringa che rappresenta il tipo di dato.

// const variabileUno = 3; //variabile di tipo "number"
// console.log(typeof variabileUno); //stampa "number" nella console

// const variabileDue = true; //variabile di tipo "boolean"
// console.log(typeof variabileDue); //stampa "boolean" nella console

// const variabileTre = "Ciao"; //variabile di tipo "string"
// console.log(typeof variabileTre); //stampa "string" nella console

// const variabileQuattro = null; //variabile di tipo "object" (null è considerato un oggetto in Javascript)
// console.log(typeof variabileQuattro); //stampa "object" nella console

// const variabileCinque = undefined; //variabile di tipo "undefined"
// console.log(typeof variabileCinque); //stampa "undefined" nella console 

// const variabileSei = typeof variabileTre; //variabile di tipo "string" (perché typeof restituisce una stringa)
// // console.log(typeof variabileSei); //stampa "string" nella console
// console.log("il contenuto della variabile 6 è: " + variabileTre + " e il suo tipo è: " + typeof variabileTre); //stampa "string" nella console. 
// // console.log concatena più valori in una singola stringa da stampare nella console (può contenere sia stringhe che variabili di altri tipi di dato anche se sono complessi)


// const variabileSette = 5 > 6; //variabile di tipo "boolean" (risultato dell'espressione di confronto)
// console.log(typeof variabileSette); //stampa "boolean" nella console

// const variabileOtto; //variabile di tipo "undefined" (perché non ha un valore assegnato)
// var variabileNove; //corretto, perché "var" permette di dichiarare una variabile senza inizializzarla

// let variabileDieci = null; //variabile di tipo "object" (null è considerato un oggetto in Javascript)

// let variabileUndici = NaN; //tipo number???? variabile di tipo "number" (NaN è considerato un numero in Javascript)


// //Esempio di variabile che cambia tipo di dato. Javascript è un linguaggio a tipizzazione dinamica, quindi una variabile può cambiare tipo di dato durante l'esecuzione del programma.
// //Javascript è dinamicamente "tipato", il che significa che le variabili possono cambiare tipo di dato durante l'esecuzione del programma e le variabili prendono il tipo del contenuto che viene loro assegnato.

// let dynamic; //variabile di tipo "undefined"
// console.log(typeof dynamic); //stampa "undefined" nella console

// dynamic = 5; //ora dynamic è di tipo "number"
// console.log(typeof dynamic); //stampa "number" nella console

// dyanmic = "Pippo"; //ora dynamic è di tipo "string"
// console.log(typeof dynamic); //stampa "string" nella console


//ALERT
// //alert(); //mostra una finestra di avviso (alert) con un messaggio vuoto
// alert("Benvenuto nel corso di Javascript!"); //mostra una finestra di avviso (alert) con il messaggio "Benvenuto nel corso di Javascript!"

// const birthdayGirl = "Jordy";
// alert("Auguri " + birthdayGirl); //mostra una finestra di avviso (alert) con il messaggio "Auguri Jordy"


//PROMPT
// prompt("Quanti anni hai?"); //mostra una finestra di prompt che chiede all'utente "Quanti anni hai?" e attende l'input dell'utente
//In JavaScript, prompt() è un metodo che visualizza una finestra di dialogo (popup) con un messaggio e un campo di testo per l'utente.
//ma dov'è memorizzato l'input dell'utente? Non viene memorizzato in nessuna variabile, quindi non possiamo usarlo successivamente nel codice

// const age = prompt("Quanti anni hai?"); //mostra una finestra di prompt che chiede all'utente "Quanti anni hai?" e memorizza l'input dell'utente nella variabile "age"
// console.log(age); //stampa nella console il valore inserito dall'utente
// // console.log("L'utente ha " + age + " anni."); //stampa nella console il messaggio con l'età inserita dall'utente

// console.log(age); //"123" (stringa)
// console.log(typeof age); //string


// DIFFERENZA TRA ALERT E PROMPT
//La differenza principale è che alert() mostra un messaggio all'utente e non restituisce alcun valore, mentre prompt() mostra un messaggio e una casella di input, consentendo all'utente di inserire un valore che la funzione poi restituisce. In sintesi, alert() è per comunicare, prompt() è per richiedere e ottenere un input dall'utente. 



//CALCOLATRICE BASE
//chiede all'utente di inserire due numeri e poi calcola e mostra la somma, la differenza, il prodotto e il quoziente di questi numeri

// const first= prompt("Inserisci il primo numero:"); //chiede all'utente di inserire il primo numero
// const second = prompt("Inserisci il secondo numero:"); //chiede all'utente di inserire il secondo numero

// //convertire le stringhe in numeri
// const firstNumber = Number(first); //converte la stringa "first" in un numero
// const secondNumber = Number(second); //converte la stringa "second" in un numero

// //per riconvertire i numeri in stringhe
// //const sumString = String(firstNumber); //converte il numero "sum" in una stringa

// const sum = firstNumber + secondNumber; //calcola la somma dei due numeri
// alert("La somma è: " + sum); //mostra un alert con il risultato della somma

// const difference = firstNumber - secondNumber; //calcola la differenza dei due numeri
// const product = firstNumber * secondNumber; //calcola il prodotto dei due numeri
// const quotient = firstNumber / secondNumber; //calcola il quoziente dei due numeri

// console.log(first); //stampa il primo numero inserito dall'utente
// console.log(second); //stampa il secondo numero inserito dall'utente


