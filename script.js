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
-Infinity = -Infinity; //rappresenta un valore negativo infinito


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

!(true || true); //risultato: false

(5 + 3) * 2 > 15; //risultato: false

!(true || ("pippo" === "pluto")); //risultato: false
//!(true || false); 

!(true || ("pippo" !== "pluto")); //risultato: true

// console.log((10 % 3) + (4 * 2)); //risultato: 11  (per testare l'esercizio, consulta la console del browser)

!((12 % 5) === 3); //risultato: true

("ciao mondo" !== ("ciao" + "  " + "mondo")) === false; //risultato: false