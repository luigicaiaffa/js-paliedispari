// ! Pari e Dispari
// * L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// * Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// * Sommiamo i due numeri
// * Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// * Dichiariamo chi ha vinto.

// # Elaborazione

/**
 * Funzione che chiede all'utente di inserire una tra le parole accettate ('pari', 'dispari')
 * @param {string} acceptedChoices lista delle parole accettate
 * @returns parola scelta dall'utente
 */
function askUserChoice(acceptedChoices = []) {
  // chiedi all'utente di scegliere tra pari e dispari
  let userChoice = prompt("inserisci 'pari' o 'dispari'");

  // FINCHE' l'utente non scrive le parole accettate
  while (!acceptedChoices.includes(userChoice)) {
    // chiedi all'utente di scegliere tra pari e dispari
    userChoice = prompt("inserisci 'pari' o 'dispari'");
  }

  return userChoice;
}

/**
 * Funzione che chiede un numero da 1 a 5 in un prompt
 * @param {number} min valore minimo
 * @param {number} max valore massimo
 * @returns {number} numero scelto dall'utente
 */
function askUserNumber(min, max) {
  // chiedo all'utente un numero da 1 a 5
  let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));

  // FINCHE' non inserisce il valore correttamente
  while (isNaN(userNumber) || userNumber < min || userNumber > max) {
    // chiedo all'utente un numero da 1 a 5
    userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
  }

  return userNumber;
}

/**
 * Funzione che genera un numero casuale da 1 a 5
 * @param {number} max
 */
function genRandomNum(max) {
  // genero numero random da 1 a 5 per il computer
  const randomNum = Math.ceil(Math.random() * max);

  return randomNum;
}

/**
 * Funzione che stabilisce se un numero è pari o dispari
 * @param {number} num
 * @returns
 */
function isNumberEven(num) {
  return num % 2 === 0;
}

/**
 * Funzione che stabilisce se l'utente è il vincitore
 * @param {string} userChoice scelta dell'utente
 * @param {number} userNumber numero dell'utente
 * @param {number} pcNumber numero del pc
 * @returns
 */
function isUserWinner(userChoice, userNumber, pcNumber) {
  // fai la somma tra numero dell'utente numero del pc
  const sum = userNumber + pcNumber;

  // stabilisci le due condizioni per cui l'utente è il vincitore
  const userWinConditionEven = userChoice === "pari" && isNumberEven(sum);
  const userWinConditionOdd = userChoice === "dispari" && !isNumberEven(sum);

  return userWinConditionEven || userWinConditionOdd;
}

// scelta dell'utente
const userChoice = askUserChoice(["pari", "dispari"]);

// numero dell'utente
const userNumber = askUserNumber(1, 5);

// numero generato per il computer
const pcNumber = genRandomNum(5);

// variabile risultato
let gameResult = isUserWinner(userChoice, userNumber, pcNumber);

// debug log
console.log(`
    userChoice: ${userChoice}
    userNumber: ${userNumber}
    pcNumber: ${pcNumber}
    isUserWinner: ${gameResult}
`);

// # Output
// SE  l'utente è il vincitore
if (gameResult) {
  // stampa messagio di vittoria
  gameResult = `
    - La tua scelta: ${userChoice}
    - Il tuo numero: ${userNumber}
    - Il numero del pc: ${pcNumber}

    Hai vinto!`;
}

// ALTRIMENTI
else {
  // stampa messaggio di sconfitta
  gameResult = `
    - La tua scelta: ${userChoice}
    - Il tuo numero: ${userNumber}
    - Il numero del pc: ${pcNumber}

    Hai Perso :(`;
}

// stampa messaggio di output con un alert
alert(gameResult);
