
// function stringBuilder(s1, s2, s3) {
//     return s1 + s2 + s3;
// }

// console.log(stringBuilder('leonardo', 'leo', 'nardo'));
// console.log(stringBuilder('leonardo', 'leo'));  //si spetta che metta 2 parametri ma nulla mi vieta di mettere solo 2 e i parametri mancanti sono undefined
// console.log(stringBuilder('leonardo', 'leo', 'nardo', 'onar'));  //e se ci sono di più la funzione li ignora 


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function pow(base, exponent) {
//     if (exponent == undefined) {
//         exponent = 2; 
//     }
//     return base ** exponent;
// }

//NOTAZIONE PIù VELOCE per questo esempio
// function pow(base = 0, exponent = 2); {
//     return base ** exponent;
// }


// console.log(pow(3, 3)); 
// console.log(pow(3)); //in questo caso che c'è solo un parametro la funzione fa 3 elevato alla undefine = Nan, per evitare questo mettiamo un if
// console.log(pow());

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//SCOPE

// let number = 5;

// if (number > 3) {

// const number2 = number + 5; //lo scope interno accede alle variabili dello scope esterno

// console.log(number2);

//    if (number2 > 7) {   // nulla mi vieta di avere uno scope "nipote"

//     const number3 = number + number2; 
//     console.log(number3);

//    }

//  console.log(number3); //lo scope esterno non accede alle variabili dello scope interno

// }

// const number3 = number2 + 5; //lo scope esterno non accede alle variabili dello scope interno

// console.log(number3);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//CLOJURE
//le funzioni mantengono in vita le variabili che usano anche al di fuori del loro scope
const isOpen = true;

let myFunction;   //variabile vuota che conterrà la mia funzione

if (isOpen) {
    let counter = 0;

    myFunction = () => {  //()senza parametri d'ingresso
        counter++;
        console.log(counter);
    }

    // myFunction(); //aumenta di 1 ogni volta che chiamo la funzione
    // myFunction();
    // myFunction();
    // myFunction(); //a questo punto ho 4 //non c'è limite di quantità di volte che posso chiamare
}


myFunction();  //se li porto fuori dello scoope del 'papà', funzione comunque perchè la funzione rimane 'viva' - questo si chiama Clojure
myFunction();
myFunction();
myFunction();


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//RECURSIONI
//Fattoriale:
//fact(0)=1;
//fact(1)=1;
//fact(n)=n*fact(n-1);

function fact(n) {
    if (n === 0) {
        return 1;
    }else{
        return n * fact(n-1);
    }
}

console.log(fact(0));
console.log(fact(1));
console.log(fact(2));
console.log(fact(3));
console.log(fact(4));
console.log(fact(5));
console.log(fact(6));
console.log(fact(7));
