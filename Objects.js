console.log('oggetti!!!');

// nome String

// età Number

// istruzione String

// sesso String

// nazionalità String

// sposato Boolean

// indirizzo String

// interessi Array


// const leonardo = ['leonardo', 'silva', 27, 'maschio', 'perù', false, 'via dodecaneso 16', ['musica', 'pagliaccio', 'bullo']]; //NON SI FA - ARRAY DI DIVERSI TIPI

//Un oggetto è una collezione di coppie chiave-valore. Il valore può essere di qualsiasi tipo, compreso un altro oggetto o un array.

// const leonardo = {
//     name: 'leonardo', //name è la chiave, 'leonardo' è il valore
//     surname: 'silva', 
//     age: 27, 
//     gender: 'maschio', 
//     nationality: 'perù', 
//     isMarried: false, 
//     //address: 'via dodecaneso 16', //address, a sua volta può essere un oggetto
//     address: {
//         street: 'via dodecaneso',
//         civic: 16,
//         city: 'genova',
//         country: 'Italia'
//     },
//     interests: ['musica', 'pagliaccio', ' bullo']
// }

// //ACCEDERE ALLA PROPRIETA'
// console.log(leonardo.name);
// console.log(leonardo.age);
// console.log(leonardo);  //negli Array l'ordine è garantito al printarlo nel browser ma negli oggetti no (non è necessariamente uno svantaggio)
// console.log(leonardo.address.street);
// console.log(leonardo.interests[0]);


// //CAMBIARE, AGGIUNGERE o RIMUOVERE PROPRIETA'

// leonardo.age = 25;  //è stata modificata questa proprietà
// leonardo.address.civic = 30; //è stata modificata questa proprietà che era dentro un oggetto
// leonardo.interests[2] = 'super bullo'; //è stata modificata questa proprietà che era un Array
// leonardo.siblings = 1;  //è stata aggiunta nuova proprietà
// delete leonardo.gender; //è stata eliminata una proprietà
// console.log(leonardo);


// //FUNZIONI COME PROPRIETA'

// function saluta() {  //funzione viene definita fuori e poi viene infilata dentro
//     console.log('ciao sono leonardo!');
// }

// leonardo.blatera = saluta;   //blatera è un nome a caso

// leonardo.blatera();


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const leonardo = {
//     name: 'leonardo',
//     surname: 'silva',
//     yob: 1998,
//     marks: [5, 8, 10, 7],
// }

// const evelyn = {
//     name: 'evelyn',
//     surname: 'medina',
//     yob: 1984,
//     marks: [9, 8, 10, 9],
// }

// const luis = {
//     name: 'luis',
//     surname: 'amoretti',
//     yob: 2004,
//     marks: [10, 10, 8, 5],
// }

// const students = [leonardo, evelyn, luis];

// console.log(students[0].name);

// //Facciamo un ciclo col nome e cognome

// for (let i = 0; i < students.length; i++) {
//     const student = students[i];

//     console.log(student.name, student.surname, calculateMean(student.marks));
// }

// //Aggiungiamo nome e cognome alla media dei voti

// function calculateMean(nbrArray) {  //abbiamo fatto questa funzione della media in 'Array.js'

//         let sum = 0;

//     for (let i = 0; i < nbrArray.length; i++) {

//         const element = nbrArray[i];

//         sum = sum + element;
        
//     }

//     const mean = sum / nbrArray.length;

//     return mean;

//     }

///////////////////////////////////////////////////////////////////////////////////////////////////////

//FOR IN - Invece di ciclare gli Array, ci permette di ciclare gli oggetti


    // const ariel = {
      
    //     name: 'Ariello',
    //     age: 4,
    //     race: 'border collie',
    //     type: 'dog',
    //     peggiorNemico: 'husky',
    //     //'pegggior nemico': 'husky' //se la proprietà ha lo spazio bisogna metterla tra virgolette (come stringa)
    // }

    // for (const key in ariel) {  //key cicla (va a leggere) tutte le chiavi (proprietà)
        
    //     const value = ariel[key];
        
    //     //console.log(key);  //mi printerà tutte le proprietà (ma solo le proprietà)
        
    //     console.log(key + ': ' + value); //mi printerà sia tutte le key (proprietà) che i value (valore assocciato alla proprietà) 
    // }


    // UN'ALTRA MANIERA DI SCRIVERLO

    // let emptyString = '';

    //  for (const key in ariel) {  
        
    //     const value = ariel[key];

    //     emptyString = emptyString + key + ': ' + value + '\n'
        
    // }

    // console.log(emptyString);


//NOTAZIONE CON PARENTESI QUADRE
// console.log(ariel.name);
// console.log(ariel['name']);

//console.log(ariel.peggiorNemico);
//console.log(ariel['peggior nemico']); //se la proprietà è con spazio bisogna usare le parentesi quadre


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// JSON (JavaScript Object Notation) - è un formato di testo per la memorizzazione e lo scambio di dati. È ampiamente utilizzato per la comunicazione tra client e server nelle applicazioni web. JSON è leggero, facile da leggere e scrivere sia per gli esseri umani che per le macchine.

// const leonardo = {
//     name: 'leonardo', //name è la chiave, 'leonardo' è il valore
//     surname: 'silva', 
//     age: 27, 
//     gender: 'maschio', 
//     nationality: 'perù', 
//     isMarried: false, 
//     //address: 'via dodecaneso 16', //address, a sua volta può essere un oggetto
//     address: {
//         street: 'via dodecaneso',
//         civic: 16,
//         city: 'genova',
//         country: 'Italia'
//     },
//     interests: ['musica', 'pagliaccio', ' bullo']
// }

//  console.log(leonardo);

//  const leoString = JSON.stringify(leonardo); //converte l'oggetto in una stringa JSON
//  console.log(leoString);
//  //{"name":"leonardo","surname":"silva","age":27,"gender":"maschio","nationality":"perù","isMarried":false,"address":{"street":"via dodecaneso","civic":16,"city":"genova","country":"Italia"},"interests":["musica","pagliaccio"," bullo"]}


// const dataString = '{"name": "Andrea", "surname": "Asioli", "yob": 1978, "isMarried": false}' //stringa JSON
// console.log(dataString);

// const data = JSON.parse(dataString); //converte la stringa JSON in un oggetto JavaScript
// console.log(data); //adesso è un oggetto
// console.log(data.name); //posso accedere alle proprietà dell'oggetto



//Anche se due oggetti hanno lo stesso contenuto, in JavaScript sono considerati diversi se sono istanze separate.

// const obj1 = { a: 1, b: 2 };
// const obj2 = { a: 1, b: 2 };  //due oggetti diversi 
//le due variabili puntano a due oggetti diversi in memoria
//l'indirizzo di memoria è diverso perché sono stati creati separatamente
//stack e heap sono due aree di memoria diverse 

// console.log(obj1 === obj2); //false perché sono due oggetti diversi

//a meno che non si faccia un riferimento esplicito allo stesso oggetto
// const obj3 = obj1; //adesso obj3 punta allo stesso oggetto di obj1


//Anche se gli oggetti JavaScript e JSON sembrano simili, ci sono alcune differenze importanti tra i due formati:
//1. Sintassi: In JSON, le chiavi devono essere racchiuse tra virgolette doppie (" "), mentre in JavaScript le chiavi possono essere scritte senza virgolette se sono nomi validi di identificatori.
//2. Tipi di dati: JSON supporta solo un sottoinsieme di tipi di dati rispetto a JavaScript. Ad esempio, JSON non supporta funzioni, undefined o simboli.
//3. Commenti: JSON non consente commenti all'interno dei dati, mentre JavaScript li supporta.
//4. Formato: JSON è un formato di testo puro, mentre gli oggetti JavaScript sono strutture di dati in memoria.