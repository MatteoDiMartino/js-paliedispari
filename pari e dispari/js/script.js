// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Definisco delle variabili con le seguenti scelte
// Se l'utente sceglie pari, ed il risultato della somma è pari
// avrà vinto altrimenti se sceglierà dispari ed il risultato della somma
// è dispari allora avrà vinto altrimenti avrà perso

const pari = 'Pari';
const dispari = 'Dispari';


let puntataUser = prompt('Pari o dispari');
console.log(puntataUser);

let userNum = parseInt(prompt('Inserisci il tuo numero'));
console.log(userNum);

let userPc = Math.floor((Math.random() * 4) + 1);
console.log(userPc);

let sum = userNum + userPc;
console.log (sum);

let risultatoFinale;

if (sum % 2 === 0 && puntataUser === pari) {
    risultatoFinale = sum + ' hai vinto'
} else if (sum % 2 != 0 && puntataUser === dispari) {
    risultatoFinale = sum + ' hai vinto'
}else {
    risultatoFinale = sum + ' hai perso'
}

console.log (risultatoFinale);