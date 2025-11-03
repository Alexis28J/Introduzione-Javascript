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



//FATTO DAL PROF.

// function sommaFinoAN(nbr) {
//     let counter = 0;

//     for (let i = 0; i <= nbr ; i++) {
//         sum = sum + i;
//     }
//     return nbr;
// }

// console.log(sommaFinoAN(5));
// console.log(sommaFinoAN(50));


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


// FATTO DAL PROF.

// function contaCifre(nbr) { 
//     const nbrToString = string(nbr);   
//     const length = nbrToString.length;  
//     return length;
// }

// console.log(contaCifre(5)); // ->1
// console.log(contaCifre(1245)); // ->4



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


// FATTO DAL PROF.

// function sommaCifre(nbr) {
//     //1245
//     debugger;  //non centra con l'esercizio ma è un tool utile per vedere il funzionamento passo a passo sul browser
//     let nbrToString = String(nbr); //converte il numero in stringa
//     //'1245'
//     let sum = 0;

//     for (let i = 0; i < nbrToString.length; i++) { //gira tante volte la lunghezza dello string
//         //4
//         const numberChar = nbrToString[i];  // le [] indicano il numero di carattere di una stringa
//         //'1'                   //0 (primo giro)  //1 (secondo giro)
//         const n = Number(numberChar);
//         //1
//         sum = sum + n;
//         //1   //0   //1 (primo giro)    //3   //1   //2  (secondo giro)     // 12   //7   //5 (quarto e ultimo giro)
//     }
//     return sum;
//     //12
// }

// console.log(sommaCifre(1245));


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


//FATTO DAL PROF.

//(1 euro = 1.15 dollari)

// function euroToDollar(euro) {
//     const dollaro = euro * 1.15;
//     return dollaro;
// }

// console.log(euroToDollar(5));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 35) Calcolo area rettangolo
// Scrivi una funzione areaRettangolo(base, altezza) che restituisce l’area di un rettangolo.


// let areOfRectangle = (base, height) => base * height;

// console.log(areOfRectangle(5, 10));
// console.log(areOfRectangle(28, 15));


// FATTO DAL PROF.


// function calcolaAreaRettangolo(base, altezza) {
//     const area = base * altezza;

//     return area;
// }

// console.log(calcolaAreaRettangolo(5, 20));




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 36) Calcolo media
// Scrivi una funzione media(a, b, c) che restituisce la media di tre numeri.

// let average = (a, b, c) => (a + b + c) / 3;

// console.log(average(7, 5, 8));
// console.log(average(9, 10, 5));


// FATTO DAL PROF.

// function media(a, b, c) {
//     const sum = a + b + c;
//     const mean = sum / 3;
//     return mean;
// }


// console.log(media(5, 20, 11));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 37) Generatore di password casuale
// Scrivi una funzione generaPasswordCasuale() che restituisce una password di 8 caratteri usando solo lettere maiuscole e numeri (usa Math.random())

// Math.random() serve a generare un numero decimale pseudo-casuale compreso tra 0 (incluso) e 1 (escluso). 
// Per ottenere un indice casuale in JavaScript, si utilizza Math.random() in combinazione con la lunghezza dell'array e Math.floor() per arrotondare per difetto. 
// La formula generale è Math.floor(Math.random() * array.length).



// function generateRandomPass(str) {      // se non inserisco un parametro, la funzione NON parte
//     const character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';   // come è stato chiesto nel problema, ho dichiarato solo lettere maiuscole e numeri.
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



// FATTO DAL PROF.


// function generaPasswordCasuale() {  // NON UTILIZZA NESSUN PARAMETRO

//     const availableCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';   // caratteri che POSSO usare
//                                //012345678..... - posizioni della stringa

//     let password = '';

//     for (let i = 0; i < 8; i++) {

//         const numeroRandomico = Math.random();  // numero casuale

//         const position = numeroRandomico * (availableCharacters.length - 1);  // per scegliere una posizione moltiplica un numero random per la lunghezza di availableCharacters - 1    // se avesse messo Math.floor non sarebbe necessario -1

//         const roundedPosition = Math.round(position);  // Math.round fa lo stesso che Math.floor solo che arrotonda verso il basso o verso l'alto a seconda del numero della virgola è sotto o sopra il 0.5

//         password = password + availableCharacters[roundedPosition];  


//     }
//     return password;
// }

// console.log(generaPasswordCasuale());


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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


// FATTO DAL PROF.

// IL PROF. NON HA CONSIDERATO I NUMERI NEGATIVI PER QUESTE FUNZIONI

// function potenzaCiclo(base, esponente) {

// if (esponente === 0) {   
//     return 1;
// }

//     let pow = 1;

//     for (let i = 0; i < esponente; i++) {
//         pow = pow * base;
//     }
//     return pow;
// }

// console.log(potenzaCiclo(2, 5));


// VERSIONE UN PO' PIù VELOCE

// function potenzaCiclo(base, esponente) {

//    if (esponente === 0) {
//        return 1;
//    }

//     for (let i = 1; i < esponente; i++) {
//         pow = pow * base;
//     }
//     return pow;
// }

// console.log(potenzaCiclo(2, 5));

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


// FATTO DAL PROF.

// // facciamo una funzione che condizioni l'inclusione della chicciola
// function constainsAt(email) {   // prima condizione
//     if (email.includes('@')) {
//         return true;
//     } else {
//         return false;
//     }
// }

// //facciamo altra funzione per soddisfare la seconda condizione
// function containsDotAfterAt(email) {   // contiene punto dopo la chiocciola
//     const dotPosition = email.indexOf('.');   // indexOf() restituisce la posizione della prima occorrenza di un valore specificato in una stringa.
//     if (dotPosition === -1) {      // se il punto non esiste nella stringa, indexOf() restituisce -1. Perciò la condizione vuol dire se 'il punto non esiste allora è falsa'.
//         return false;
//     }
//     const atPosition = email.indexOf('@');
//     if (dotPosition > atPosition) {
//         return true;
//     } else {
//         return false;
//     }
// }

// // Funzione per soddisfare la terza condizione
// function firstAndSecondPartlengthIsThreeOrMore(email) {
//     const atPosition = email.indexOf('@');
//     const firstPart = email.substring(0, atPosition);   // .substring () mi permette di tagliare la mia stringa dicendo la prima e l'ultima posizione  // .substring() non prende l'ultimo elemento

//     const dotPosition = email.indexOf('.');
//     const secondPart = email.substring(atPosition + 1, dotPosition);

//     if (firstPart.length >= 3 && secondPart.length >= 3) {     // 3 è il numero minimo di lettere richiesto  //controllo se la lunghezza è maggiore o uguale a 3
//         return true;
//     } else {
//         return false;
//     }

// }


// // Funzione per soddisfare l'ultima condizione
// function lastCharMustBeDifferentFromDot(email) {
    
//         const lastPosition = email.length - 1;  //come partiamo da zero mettiamo - 1
//         const lastChar = email[lastPosition];

//         if (lastChar === '.') {
//             return false;
//         } else {
//             return true;
//         }
// }


// // Funzione principale  // scritta in questo modo (separato) è più leggibile
// function emailValidator(email) {
//     if (!constainsAt(email)) {
//         return false;
//     } else if (!containsDotAfterAt(email)) {
//         return false
//     } else if (!firstAndSecondPartlengthIsThreeOrMore(email)) {
//         return false;
//     } else if (!lastCharMustBeDifferentFromDot(email)) {
//         return false;
//     } else {
//         return true;
//     }
// }


// console.log(emailValidator('ciaociao'));
// console.log(emailValidator('ciao@ciao'));
// console.log(emailValidator('ciao@ciao.'));
// console.log(emailValidator('ci.ao@ciao'));
// console.log(emailValidator('ciao@ci.ao'));
// console.log(emailValidator('jordy88@gmail.com'));





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 40) crea un converitore tra italiano e farfallino(https://it.wikipedia.org/wiki/Alfabeto_farfallino)

//a -> afa
//e -> efe
//i -> ifi
//o -> ofo 
//u -> ufu


// function converterToFarfallino(str) {

//     const vowel = 'aeiouAEIOU';
//     // definisco una costante vowel (vocali) contenente tutte le vocali minuscole e maiuscole per facilitare il controllo.

//     let result = '';   // Inizializzo una stringa vuota che verrà utilizzata per costruire la stringa in farfallino.

//     for (let i = 0; i < str.length; i++) {  // un ciclo che scorre ogni carattere della stringa di input.
//         const char = str[i];  // ottiene il carattere corrente.
//         result += char;  // result = result + char -> aggiunge il carattere corrente al risultato.
//         if (vowel.includes(char)) {  // controllo se il carattere corrente è una vocale.
//             result += 'f' + char;  // result = result + 'f' + char -> se è una vocale, aggiunge una "f" e aggiunge (ripete) la stessa vocale dopo di essa.
//         }
//     }
//     return result;  // restituisce la stringa completa tradotta in farfallino.
// }

// console.log(converterToFarfallino('ciao'));
// console.log(converterToFarfallino('suola'));
// console.log(converterToFarfallino('Albero'));



// FATTO DAL PROF.

function farfallinoTranslator(str) {
    
const vowels = 'aeiou';

let farfallinoStr = '';

for (let i = 0; i < str.length; i++) {
    
    const char = str[i];

    if (vowels.includes(char.toLowerCase())) {
        
        farfallinoStr = farfallinoStr + char + 'f' + char;

    } else {

        farfallinoStr = farfallinoStr + char;

    }
}
return farfallinoStr;
}


console.log(farfallinoTranslator('leonardo'));
console.log(farfallinoTranslator('LEONARDO'));
console.log(farfallinoTranslator('viva la pausa!!'));


