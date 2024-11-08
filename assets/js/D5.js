/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
for (i = 0; i < pets.length; i++) {
  //console.log(pets[i]);
}
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort();
for (i = 0; i < pets.length; i++) {
  //console.log(pets[i]);
}
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

pets.reverse();
for (i = 0; i < pets.length; i++) {
  //console.log(pets[i]);
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

let firstElement = pets[0];
pets.splice(0, 1);
pets.push(firstElement);

//console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

const arrayLicense = ["abc123", "def456", "ghi789"]

for (i = 0; i < cars.length; i++) {
  cars[i].licensePlate = arrayLicense[i]
}

//console.log(cars)

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const autoNuova = {
  brand: "fiat",
  model: "panda4x4",
  color: "red",
  trims: ["potente", "alpha", "immortale",],
  licensePlate: "lmn123",
}
cars.push(autoNuova);

for (i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}

//console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

for (i = 0; i < cars.length; i++) {
  justTrims[i] = cars[i].trims[0]
}

//console.log(justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt(0) === "b")
    console.log("Fizz");
  else
    console.log("Buzz");

}
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

i = 0

while (numericArray[i] !== 66) {   //ho messo 32 compreso
  console.log(numericArray[i])
  i++
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
const numbersArray = []

for (i = 0; i < charactersArray.length; i++) {
  switch (true) {
    case charactersArray[i] === "a":
      numbersArray.push(1);
      break;
    case charactersArray[i] === "b":
      numbersArray.push(2);
      break;
    case charactersArray[i] === "c":
      numbersArray.push(3);
      break;
    case charactersArray[i] === "d":
      numbersArray.push(4);
      break;
    case charactersArray[i] === "e":
      numbersArray.push(5);
      break;
    case charactersArray[i] === "f":
      numbersArray.push(6);
      break;
    case charactersArray[i] === "g":
      numbersArray.push(7);
      break;
    case charactersArray[i] === "h":
      numbersArray.push(8);
      break;
    case charactersArray[i] === "i":
      numbersArray.push(9);
      break;
    case charactersArray[i] === "l":
      numbersArray.push(10);
      break;
    case charactersArray[i] === "m":
      numbersArray.push(11);
      break;
    case charactersArray[i] === "n":
      numbersArray.push(12);
      break;
    case charactersArray[i] === "o":
      numbersArray.push(13);
      break;
    case charactersArray[i] === "p":
      numbersArray.push(14);
      break;
    case charactersArray[i] === "q":
      numbersArray.push(15);
      break;
    case charactersArray[i] === "r":
      numbersArray.push(16);
      break;
    case charactersArray[i] === "s":
      numbersArray.push(17);
      break;
    case charactersArray[i] === "t":
      numbersArray.push(18);
      break;
    case charactersArray[i] === "u":
      numbersArray.push(19);
      break;
    case charactersArray[i] === "v":
      numbersArray.push(20);
      break;
    case charactersArray[i] === "z":
      numbersArray.push(21);
      break;
  }
}

console.log(numbersArray)