// 31) Somma dei numeri fino a n
// Scrivi una funzione sommaFinoAN(n) che restituisce la somma dei numeri da 1 a n.
// sommaFinoAN(5) -> 1 + 2 + 3 + 4 + 5 -> 15

//La somma dei numeri da 1 a un numero n si calcola con una formula scoperta da Gauss da bambino:
// Somma = n(n+1) / 2

// function sommaFinoAN(n) {
//     let sum = n*(n+1) / 2;
//     return sum;
// }

// console.log(sommaFinoAN(5));
// console.log(sommaFinoAN(10));
// console.log(sommaFinoAN(100));


//FORMA LAMBDA
// let sommaFinoANLambda = n => n*(n+1) / 2;   //Se il corpo della funzione contiene una sola istruzione, puoi omettere le parentesi graffe e la parola chiave return.

// console.log(sommaFinoANLambda(100));


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 32) Conteggio cifre
// Scrivi una funzione contaCifre(num) che restituisce il numero di cifre di un numero
// contaCifre(5) -> 1
// contaCifre(1245) -> 4

// function contaCifre(num) {
//     let convertedToString = num.toString();
//     if (num < 0) {
//         return num.length - 1;  // -1 perché riduca di 1 il contatore di cifre 
//         // un altro modo è usare la funzione Math.abs() che serve a calcolare e restituire il valore assoluto di un numero, ovvero il numero senza il suo segno.
//     }else{
//         return num.length; 
//     }
// }

// console.log(contaCifre(113));  // SE NON LO METTO COME STRINGA MI LOGGA COME UNDEFINED!
// console.log(contaCifre('1000')); //HO CERCATO DI RICONVERTIRLO A NUMERO MA NON FUNZIONA LO STESSO
// USARE LA FORMA LAMBDA NON CI CONSENTIREBBE DI ACCORCCIARLA PIù DI COSì SECONDO ME


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 33) Somma delle cifre
// Scrivi una funzione sommaCifre(num) che restituisce la somma delle cifre di un numero
// sommaCifre(5) -> 5
// sommaCifre(1245) -> 12


// function sommaCifre(num) {
//     //Il ciclo While è utile quando non si sa in anticipo quante volte il ciclo dovrà essere eseguito
//     num = Math.abs(num);  //Math.abs() serve a restituire il valore assoluto di un numero, ovvero il numero senza il suo segno.
//     let sum = 0;
//     while (num > 0) {  // il ciclo continua finché il numero è maggiore di 0
//         let digit = num % 10;  //per ottenere l'ultima cifra del numero perché il resto della divisione di un numero per 10 è semplicemente l'ultima cifra del numero stesso.
//         sum += digit; // sum = sum + lastDigit; //aggiungo la cifra a una variabile che ho chiamata sum 
//         num = Math.floor(num / 10);  //Math.floor() serve per arrotondare un numero per difetto all'intero più vicino minore o uguale al numero stesso.
//     }
// return sum;  // il return deve essere FUORI dal ciclo 

// }

// console.log(sommaCifre(-95));
// console.log(sommaCifre(7));
// console.log(sommaCifre(45));
// console.log(sommaCifre(684));
// console.log(sommaCifre(9756));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 34) Conversione valuta
// Scrivi una funzione euroToDollaro(euro) che converte un importo in euro in dollari (1 euro = 1.1 dollari).

// function euroToDollar(euro) {
//     let convertToDollar = 0;
//     if (euro > 0) {     // aggiungo questa condizione solo nel caso voglio escludere valori negativi 
//         convertToDollar = euro * 0.9;
//     }else{
//         return 'ERROR'
//     }
//     return convertToDollar;

// }

// console.log(euroToDollar(60));
// console.log(euroToDollar(75));
// console.log(euroToDollar(-6));


// FORMA LAMBDA

// let euroToDollaroLambda = euro => euro * 0.9;

// console.log(euroToDollaroLambda(80));
// console.log(euroToDollaroLambda(-43));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 35) Calcolo area rettangolo
// Scrivi una funzione areaRettangolo(base, altezza) che restituisce l’area di un rettangolo.


// let areOfRectangle = (base, height) => base * height;

// console.log(areOfRectangle(5, 10));
// console.log(areOfRectangle(28, 15));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 36) Calcolo media
// Scrivi una funzione media(a, b, c) che restituisce la media di tre numeri.

// let average = (a, b, c) => (a + b + c) / 3;

// console.log(average(7, 5, 8));
// console.log(average(9, 10, 5));




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 37) Generatore di password casuale
// Scrivi una funzione generaPasswordCasuale() che restituisce una password di 8 caratteri usando solo lettere maiuscole e numeri (usa Math.random())

// Math.random() serve a generare un numero decimale pseudo-casuale compreso tra 0 (incluso) e 1 (escluso). 
// Per ottenere un indice casuale in JavaScript, si utilizza Math.random() in combinazione con la lunghezza dell'array e Math.floor() per arrotondare per difetto. 
// La formula generale è Math.floor(Math.random() * array.length).



// function generateRandomPass(str) {      // se non inserisco un parametro, la funzione NON parte
//     const character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';   // come è stato chiesto nel problemo, ho dichiarato solo lettere maiuscole e numeri.
//     let pass = ' ';

//     for (let i = 0; i < str; i++) {  // il ciclo continua a generare un carattere fino a soddisfare il numero del parametro (str) inserito.
//         let random = Math.floor(Math.random() * character.length);   
//         // Math.floor() in JavaScript viene utilizzato per arrotondare un numero decimale per difetto.
//         // Math.random(): Genera un numero decimale casuale tra 0 (incluso) e 1 (escluso).
//         // array.length: Restituisce il numero totale di elementi in un array o una stringa. 
//         // pass += character [random];   // pass = pass + character[random];
//         //Le parentesi quadre vengono usate anche per definire i set di caratteri da cercare in una stringa, ad esempio /[a-z]/ cerca una singola lettera minuscola.
//     }

//     return pass;

// }

// console.log(generateRandomPass(8));
// console.log(generateRandomPass(5));




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 38) Potenza con ciclo
// Scrivi una funzione potenzaCiclo(base, esponente) che calcola la potenza usando un ciclo.


// function powerCycle(base, exponent) {

//     let result = 1; 
//     const positiveExponent = Math.abs(exponent);   // perché il ciclo funzioni dobbiamo assicurarci che l'esponente non sia negativo

//     for (let i = 0; i < positiveExponent; i++) {   // il ciclo eseguirà l'operazione (result x base) fino a soddisfare il numero del positiveExponent (condizione)
//        result *= base;    // result = result * base;
//     }

//    return exponent >= 0? result : 1/result;   // mettiamo questa condizione (domanda) per poter includere gli esponenti negativi.
//    // Operatore Ternario (? :): È una scorciatoia per le istruzioni if...else e viene utilizzato per assegnare un valore a una variabile in base a una condizione. 
//    // La sintassi è condizione ? valore_se_vero : valore_se_falso.
// }


// console.log(powerCycle(2, 3));
// console.log(powerCycle(4, 4));
// console.log(powerCycle(4, -4)); // gli esponenti negativi non sono considerati dalla funzione a causa della condizione i < exponent essendo i = 0.
// console.log(powerCycle(2, -3));
// console.log(powerCycle(5, 0));
// console.log(powerCycle(5, 2));




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 39) Scrivi un validatore di email con queste regole:
// -deve contenere una @ 
// -deve contenere un punto posizionato dopo la @ 
// -le parti di testo prima della @ e tra la @ e il punto devono almeno avere tre lettere
// -il punto non può essere l'ultimo carattere


// function emailValidator(email) {
//     // const regex = /^ [^\s@] + @ [^\s@] + \. + [^\s@] + $/;
//     const pattern = /^ [^\s@]{3,} + @ [^\s@]{3,} + \. [^\s@.]{2,} + $/;
//     // ^: Indica l'inizio della stringa.
//     // \s sta per spazio  //@ sta per chiocciola, simbolo obbligatorio che separa la parte locale dal dominio.
//     // All'interno di parentesi quadre [] (una classe di caratteri), il caret ^ inverte il significato della classe, indicando la negazione. 
//     // Per esempio, [^0-9] corrisponde a qualsiasi carattere che non sia una cifra.
//     // Corrisponde letteralmente a un punto (il backslash \ è necessario per fare l'escape del punto, che altrimenti ha un significato speciale in regex).
//     // $: Indica la fine della stringa
//     // Le parentesi graffe {} in una regex specificano il numero di ripetizioni di un carattere o di un gruppo di caratteri che lo precede. Si possono usare tre sintassi: 
//     // {n} per un numero esatto di ripetizioni, {n,} per almeno n ripetizioni, e {n,m} per un numero compreso tra n e m ripetizioni.

//     return pattern.test(email);
//     // Il metodo .test() in JavaScript viene usato per eseguire un test su una stringa utilizzando un'espressione regolare (regex). 
//     // Restituisce un valore booleano: true se l'espressione regolare trova una corrispondenza nella stringa, altrimenti false. 
//     // Viene impiegato per verificare la validità di dati, come ad esempio controllare se una stringa corrisponde a un certo formato.
// }

// console.log(emailValidator("esempio@email.com"));   // FALSE, DOVREBBE VENIRE TRUE!
// console.log(emailValidator("jordy18@gmail.com"));   // SEMPRE FALSE
// console.log(emailValidator('invalid-email.'));



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 40) crea un converitore tra italiano e farfallino(https://it.wikipedia.org/wiki/Alfabeto_farfallino)

//a -> afa
//e -> efe
//i -> ifi
//o -> ofo 
//u -> ufu


function converterToFarfallino(str) {

    const vowel = 'aeiouAEIOU';
    // definisco una costante vowel (vocali) contenente tutte le vocali minuscole e maiuscole per facilitare il controllo.

    let result = '';   // Inizializzo una stringa vuota che verrà utilizzata per costruire la stringa in farfallino.

    for (let i = 0; i < str.length; i++) {  // un ciclo che scorre ogni carattere della stringa di input.
        const char = str[i];  // ottiene il carattere corrente.
        result += char;  // result = result + char -> aggiunge il carattere corrente al risultato.
        if (vowel.includes(char)) {  // controllo se il carattere corrente è una vocale.
            result += 'f' + char;  // result = result + 'f' + char -> se è una vocale, aggiunge una "f" e aggiunge (ripete) la stessa vocale dopo di essa.
        }
    }
    return result;  // restituisce la stringa completa tradotta in farfallino.
}

console.log(converterToFarfallino('ciao'));
console.log(converterToFarfallino('suola'));
console.log(converterToFarfallino('Albero'));


