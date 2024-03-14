// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Definisco delle variabili con le seguenti scelte
// dopodichè devo dire che l'utente vince solo se la somma
// dei due numeri rispecchia a livello matematico ciò che ha scelto
// quindi o pari o dispari
// nel caso del pari possiamo ragionare come se il risultato finale diviso per 2 dà come resto 0
// altrimenti è dispari

let userNum = parseInt(prompt('Inserisci il tuo numero'));
console.log(userNum);

let userPc = Math.floor((Math.random() * 4) + 1);;
console.log(userPc);