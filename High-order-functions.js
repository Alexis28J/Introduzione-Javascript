// function sayHello() {
//     console.log('hello');
// }

// const helloHello = () => console.log('hello hello!!'); //questa è una funzione lambda (funzione freccia)

// const superHello = function () {    //questa funzione è anonima perchè non ha un nome
//     console.log('super hello');
// }

// //questi 3 body si equivalgono
// //abbiamo dentro di ognuno un console.log ma nulla mi vieta di farlo fuori

// console.log(helloHello);
// console.log(superHello);
// console.log(sayHello);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //FUNZIONI COME PARAMETRI IN INPUT
// //una funzione può ricevere un'altra funzione come parametro d'ingresso


// const numbers2 = [-100, -30, 20, 11, 1, 40, -21, -15, 3, 9, 300, 5001]; //un array di numeri

// const testArray = ['bo', 'pa', 'pippo', 'pluto', 'paperino', 'paperone', 'qui', 'quo', 'qua']; // un array di stringhe


// //Facciamo una funzione di filtro per tenere solo i numeri positivi

// function keepPositive(nbrArray) {

//     const newArray = [];

//     //ciclo for-of
//     // for (const nbr of nbrArray) { 

//     //     if (nbr >= 0) {
//     //         newArray.push(nbr);   //il metodo .push() in JavaScript viene utilizzato per aggiungere uno o più elementi alla fine di un array, modificando l'array originale.
//     //     }
//     // }
//     // return newArray;

//     //ciclo for normale
//     for (let i = 0; i < nbrArray.length; i++) {

//         const nbr = nbrArray[i];

//         if (nbr >= 0) {
//             newArray.push(nbr);
//         }
//     }
//     return newArray;
// }

// console.log(keepPositive(numbers2));


// //Filtra per tenere i numeri maggiori a 30

// function keepGreaterThan30(nbrArray) {

//     const newArray = [];

//     for (let i = 0; i < nbrArray.length; i++) {

//         const nbr = nbrArray[i];

//         if (nbr > 30) {  //è cambiata solo la condizione
//             newArray.push(nbr);
//         }
//     }
//     return newArray;
// }

// console.log(keepGreaterThan30(numbers2));


// //Filtra per tenere le stringhe più lunghe di 3

// function keepLongerThan3(strArray) {

//     const newArray = [];

//     for (let i = 0; i < strArray.length; i++) {

//         const str = strArray[i];

//         if (str.length > 3) {
//             newArray.push(str);
//         }
//     }
//     return newArray;
// }

// console.log(keepLongerThan3(testArray));


// //Funzione di filtro
// function highFilter(array, conditionFunction) {  
// // la funzione di filtro ha bisogno di due cose per funzionare: un array e una condizione
// //dentro "array" c'è numbers2, dentro "conditionFunction" c'è la funzione "isEven"

//     const newArray = [];

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];

//         if (conditionFunction(element)) { 
//             newArray.push(element);
//         }
//     }
//     return newArray;
// }

// //ipotizziamo se vogliamo tenere solo i numeri pari
// function isEven(nbr) {   //ho creato la condizione  //questo è il corpo della condizione
//     if (nbr % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(highFilter(numbers2, isEven));  //isEven è la condizione  //highFilter è la funzione di filtro
// //nulla mi vieta di farlo con una lambda
// console.log(highFilter(numbers2, (nbr) => nbr % 2 === 0)); //lambda
// console.log(numbers2.filter((nbr) => nbr % 2 === 0)); //funzione .filter standard del linguaggio Javascript


// //facciamo una funzione in cui escluda parole che cominciano con p
// function notStartingWithP(str) {  //ho creato la condizione

//     const firstChar = str[0];
//     const firstLower = firstChar.toLowerCase();

//     if (firstLower !== 'p') {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(highFilter(testArray, notStartingWithP));


// //per condizioni brevi e facili da capire, invece di scriverla in una funzione lo scrivo direttamente
// //come una funzione lambda
// console.log(highFilter(numbers2, (nbr) => nbr < 0));  //condizione che esclude numeri negativi
// console.log(numbers2.filter((nbr) => nbr < 0));  //funziona esattamente uguale a quello di prima ma .filter è una funzione PRESENTE DENTRO il linguaggio

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // MAP

// //Funzione che multiplica x 3
// function multiplyBy3(nbrArray) {

//     const newArray = [];

//     for (let i = 0; i < nbrArray.length; i++) {

//         const nbr = nbrArray[i];

//         const newNbr = nbr * 3;

//         newArray.push(newNbr);
//     }
//     return newArray;
// }

// console.log(multiplyBy3(numbers2));


// //funzione che prende un numero e lo moltiplica per la sua posizione nell'Array

// function multiplyByArrayPosition(nbrArray) {

//     const newArray = [];

//     for (let i = 0; i < nbrArray.length; i++) {

//         const nbr = nbrArray[i];

//         const newNbr = nbr * i; //solo cambia la condizione

//         newArray.push(newNbr);
//     }
//     return newArray;
// }

// console.log(multiplyByArrayPosition(numbers2));


// //Funzione che mette in maiuscolo le stringhe di un'Array
// function toUpperCaseArray(strArray) {

//     const newArray = [];

//     for (let i = 0; i < strArray.length; i++) {

//         const str = strArray[i];

//         const newString = str.toUpperCase();

//         newArray.push(newString);
//     }
//     return newArray;
// }

// console.log(toUpperCaseArray(testArray));


// //Facciamo una funzione che prenderà un array e una transformFunction

// function highMap(array, transformFunction) {

//     const newArray = [];

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         const newElement = transformFunction(element);
//         newArray.push(newElement);
//     }
//     return newArray;
// }

// //funzioncina che trasforma 
// function multiplyBy3Number(nbr) {
//     return nbr * 3;
// }

// console.log(highMap(numbers2, multiplyBy3Number));
// //nulla mi vieta di farlo con una lambda
// console.log(highMap(numbers2, (nbr) => nbr * 3)); //lambda


// // high order function di js
// console.log(numbers2.map((nbr) => nbr * 3)); //funzione .map standard del linguaggio Javascript


// //secondo esercizio
// // function highMap(array, transformFunction){

// //     const newArray = [];

// //     for (let i = 0; i < array.length; i++) {

// //         const element = array[i];

// //         const newElement = transformFunction(element, i);  //la funzione è esattamente uguale solo che aggiungo l'indice in questo caso

// //         newArray.push(newElement); 
// //     }
// //     return newArray;
// // }

// // console.log(highMap(numbers2, (nbr, i) => nbr * i)); 
// // console.log(numbers2.map((nbr, i) => nbr * i));


// //Transformiamo (per esempio) la funzione "toUpperCase" (terzo esercizio) che abbiamo fatto in una High Map
// console.log(highMap(testArray, (str) => str.toUpperCase()));
// console.log(testArray.map((str) => str.toUpperCase()));


// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //REDUCE

// //Esempio semplice di una reduce - Funzione che dato un'array di numeri, li sommo tra loro
// function sumAll(nbrArray) {

//     let sum = 0;

//     for (let i = 0; i < nbrArray.length; i++) {

//         const nbr = nbrArray[i];

//         sum = sum + nbr;

//     }

//     return sum;

// }

// console.log(sumAll(numbers2));


// //Funzione che prende un'Array di stringhe e mi ritorna il primo carattere

// function stringWithFirstChars(strArray) {

//     let newString = '';

//     for (let i = 0; i < strArray.length; i++) {
//         const str = strArray[i];
//         const firstChar = str[0];
//         newString = newString + firstChar;
//     }
//     return newString;
// }

// console.log(stringWithFirstChars(testArray));

// //Funzione generica di riduzione
// function highReduce(array, reduceFunction, startingValue) {  //la highReduce ha bisogno di tre cose per funzionare
    
//     let accumulator = startingValue;  //startingValue = valore di inizio 

//     for (let i = 0; i < array.length; i++) {

//         const current = array[i];

//         accumulator = reduceFunction(accumulator, current, i)
        
//     }

//     return accumulator;

// }

// console.log(highReduce(numbers2, (sum, nbr) => sum + nbr, 0));  //sum = accumulator, nbr = current, 0 = startingValue (posizione iniziale)
// // Ci sono i 3 parametri: numbers2 = array, (sum, nbr) => sum + nbr = Function (lambda), 0 = startingValue

// console.log(numbers2.reduce((sum, nbr) => sum + nbr, 0));  // la funzione .reduce è già inclusa nel linguaggio



// function sumFirstChar(acc, curr) {

//     const firstChar = curr[0];
    
//     return acc + firstChar;
// }

// console.log(highReduce(testArray, sumFirstChar, ''));
// console.log(testArray.reduce(sumFirstChar, '')); //è equivalente al console.log precedente
// console.log(testArray.reduce((acc, curr) => acc + curr[0], '')); //uso la lambda e anche questo è equivalente 


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //ESERCIZI - VEDI "ESERCIZI-3.JS"

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //FOR-EACH
// //non è particolarmente utile


// const students = ['luis', 'alexander', 'stefania', 'eros', 'daniel', 'salma'];
// const numbers3 = [30, 12, 5, 11, 300, 400, 1];

// for (let i = 0; i < students.length; i++) {  //ciclo for normale

//     const student = students[i];
    
//     console.log(student);
// }


// for (const student of students) {  //ciclo for of - funziona uguale a quello di prima
//     console.log(student);
// }

// students.forEach((student) => console.log(student));  //for each - funziona esattamente uguale a quelli di prima
// students.forEach((student, i) => console.log(i, student));  //volendo si può aggiungere la i e ti stamperà anche la i (indice)
// // 0 luis 
// // 1 alexander 
// // 2 stefania 
// // 3 eros 
// // 4 daniel 
// // 5 salma

// students.forEach((pippo, pluto) => console.log(pluto, pippo));


// //FIND

// function isGreaterThan100(nbr) {  //condition function
//     return nbr > 100;
// }
// function isGreaterThan5000(nbr) {  //condition function
//     return nbr > 5000;
// }

// console.log(numbers3.filter(isGreaterThan100));

// console.log(numbers3.find(isGreaterThan100)); //è uguale a quello di prima
// //console.log(numbers.filter(isGreaterThan100)[0]); //si può avere lo stesso risultato con filter ma è più macchinoso


// //SOME

// console.log(numbers3.some(isGreaterThan100));  //true
// console.log(numbers3.some(isGreaterThan5000)); //false


// //SORT
// //Mette in ordine le cose, principalmente gli Array

// numbers3.sort();
// console.log(numbers3); 
// //stampa: Array(7) [ 1, 11, 12, 30, 300, 400, 5 ] - gli ordina come se fossero delle stringhe e non va bene

// students.sort();
// console.log(students);
// //stampa: Array(6) [ "alexander", "daniel", "eros", "luis", "salma", "stefania" ] - qui va bene


// function compareNumbers(n1, n2) {  //SEGUO UNA LOGICA
    
// if (n1 > n2) { //se il primo numero è più grande del secondo
//      return 1; //ritorno un numero POSITIVO
// } else if (n2 > n1) { //invece se il primo numero è più piccolo del secondo
//      return -1; //ritorno un numero NEGATIVO
// } else {
//      return 0;
// }
// }

// numbers3.sort(compareNumbers);  //per ordine DECRESCENTE, scrivere "-compareNumbers" per invertire l'ordine. è come fare il "return -1" al posto del "return 1"
// console.log(numbers3);
// //Ora stampa: Array(7) [ 1, 5, 11, 12, 30, 300, 400 ] - i numeri sono ordinati grazie alla funzione


// //SE SCRIVO:
// // function compareNumbers(n1, n2) {
// //     return n1 - n2;                  //è un riassunto della funzione prima e funziona uguale comunque
// // }


// function compareNumbersDescending(n1, n2) {  // PER L'ORDINE DISCENDENTE
//     return n2 - n1;  //è un riassunto della funzione prima e funziona uguale comunque. Significa che se n2 è più grande di n1, ritorna un numero positivo
// }



// function compareStringAscending(s1, s2) {
//     return s1.localeCompare(s2)  //è un metodo che confronta due stringhe in ordine lessicografico cioè in ordine alfabetico
// }  //se s1 viene prima di s2 ritorna un numero negativo, se s1 viene dopo s2 ritorna un numero positivo, se sono uguali ritorna 0.
//    //questo vuol dire che se s1 viene prima di s2, allora s1 è "minore" di s2 e quindi viene prima nell'ordinamento.

// function compareStringDescending(s1, s2) {
//     //return -s1.localeCompare(s2);
//     return s2.localeCompare(s1)   
// }
// //Il metodo .localeCompare() di JavaScript serve a confrontare due stringhe tenendo conto delle regole di ordinamento di una specifica lingua (locale), restituendo un valore numerico che indica se la prima stringa viene prima <0, dopo >0 o è uguale a 0 la seconda. 
// // È utile per ordinare stringhe alfabeticamente in modo culturalmente corretto, specialmente quando si gestiscono dati internazionali, poiché tiene conto di accenti, maiuscole/minuscole e ordine alfabetico specifico di una lingua



// numbers3.sort(compareNumbersDescending);
// console.log(numbers3);

// students.sort(compareStringDescending);
// console.log(students);


// //ESERCIZIO DI ESEMPIO - paragoniamo macchine

// const cars = [
//     {
//         model: "g-wagon",
//         producer: "mercedes",
//         maxSpeed: 180,
//     },
//     {
//         model: "cla",
//         producer: "mercedes",
//         maxSpeed: 225,
//     },
//     {
//         model: "panda",
//         producer: "fiat",
//         maxSpeed: 150,
//     },
//     {
//         model: "bravo",
//         producer: "fiat",
//         maxSpeed: 180,
//     },
//     {
//         model: "a4",
//         producer: "audi",
//         maxSpeed: 225,
//     }
    
// ];

// function compareCarsBySpeedDescending(car1, car2) {  
//     return car2.maxSpeed - car1.maxSpeed;
// }

// cars.sort(compareCarsBySpeedDescending);
// console.log(cars);


// function compareCarsByModelAscending(car1, car2) {  //il model è una stringa
//     return car1.model.localeCompare(car2.model);
// }

// cars.sort(compareCarsByModelAscending);
// console.log(cars);


// function compareCarsBySpeedDescendingAndModelAscending(car1, car2) {  
//     if (car1.maxSpeed > car2.maxSpeed) {
//         return -1;
//     } else if (car2.maxSpeed > car1.maxSpeed) {
//         return 1;
//     } else {
//         return car1.model.localeCompare(car2.model);
//     }
//     }

//     cars.sort(compareCarsBySpeedDescendingAndModelAscending);
//     console.log(cars);
    










