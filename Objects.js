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


const leonardo = {
    name: 'leonardo',
    surname: 'silva',
    yob: 1998,
    marks: [5, 8, 10, 7],
}

const evelyn = {
    name: 'evelyn',
    surname: 'medina',
    yob: 1984,
    marks: [9, 8, 10, 9],
}

const luis = {
    name: 'luis',
    surname: 'amoretti',
    yob: 2004,
    marks: [10, 10, 8, 5],
}

const students = [leonardo, evelyn, luis];

console.log(students[0].name);

//Facciamo un ciclo col nome e cognome

for (let i = 0; i < students.length; i++) {
    const student = students[i];

    console.log(student.name, student.surname);
}