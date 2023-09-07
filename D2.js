/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
const num = 3
let n = 5

if (num > n) {
  console.log('è maggiore', num)
} else if (num < n) {
  console.log('è maggiore', n)
} else {
  console.log('i numeri sono uguali')
} 

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const number = 10

if (number !== 5) {
  console.log('not equal')
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 
  (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const a = 45

if (a % 5 === 0) {
  console.log('divisibile per 5')
} 

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro 
  addizione/sottrazione sia uguale a 8.
*/

const x = 8
const y = 3
 if (x === 8 || y === 8) {
  console.log('il valore del numero è 8')
 } else if (x + y === 8 || x - y === 8 || y - x) {
  console.log('il valore della somma/sottrazione è 8')
 }

 const x1 = 8
 const x2 = 2
 
 if (x === 8 || y === 8 || y + x === 8 || y - x === 8 || x - y) {
  console.log('verificato')
 }

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile 
  "totalShoppingCart". C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla 
  spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShopping = 60
let cost = 10
if (totalShopping < 50) {
  cost += totalShopping
  console.log(' da pagare', cost)
} else if (totalShopping >= 50) {
  console.log('da pagare', totalShopping)
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima 
  se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let totalShopping1 = 45
let const1 = 10
let const2 = 0.8

if(totalShopping1 < 50) {
  const2 = totalShopping1 * const2
  const1 += const2
}  console.log('totale:', const1)

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

const c = 1
const d = 2
const e = 3

if (c > d && c >e){
  if(d > e){
  console.log(c, d , e)
}else if (e > d){
  console.log(c, e, d)
}} else if (e > c && e > d) {
  if (d > c){
    console.log(e, d , c)
  } else if (c > d){
    console.log(e, c, d)
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore 
  di ricerca "typeof").
*/

const nun = 2
if (typeof nun === 'number') {
  console.log('its a number')
} else {
   console.log('its a string')
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su 
  un motore di ricerca)
*/

const alfa = 9 
if(alfa % 2 === 0) {
  console.log('il numero è pari')
} else if (alfa % 2 === 1) {
  console.log('il numero è dispari')
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
    console.log("Meno di 10");
  }  else {
    console.log("Uguale a 10 o maggiore");
  }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
/*
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
} */

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto'
console.log(me)


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della 
  proprietà "skills".
*/

me.skills.pop()
console.log(me.skills)
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const array = []
array.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(array)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

array.pop()
array.push(100)
console.log(array)
 /* oppure

 array[9] = 100
 console.log(array)
