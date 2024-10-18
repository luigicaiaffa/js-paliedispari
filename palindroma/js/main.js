// ! Palindroma
// * Chiedere all’utente di inserire una parola
// * Creare una funzione per capire se la parola inserita è palindroma

// # Elaborazione
/**
 * funzione che chiede all'utente una parola e controlla che sia palindroma
 * @param {string} userWord la parola inserita dall'utente
 * @returns se la parola inserita è palindroma o no
 */
function isUserWordPalindrome(userWord) {
  // chiedi all'utente di inserire una parola
  userWord = prompt("Inserisci una parola");

  // dividi la parola in lettere e inseriscila in un array
  let lettersUserWord = userWord.split("");

  // inverti l'ordine delle lettere
  lettersUserWord = lettersUserWord.reverse();

  // riporta le lettere in parola
  const invertedUserWord = lettersUserWord.join("");

  // controlla se la parola inserita dall'utente e uguale a se stessa inverita
  let isPalindrome = invertedUserWord === userWord;

  // SE la parola è palindroma
  if (isPalindrome) {
    // stampa messagio di output
    return `E' una parola palindroma`;
  }

  // ALTRIMENTI
  else {
    // stampa messagio di output
    return `Non è una parola palindroma`;
  }
}

// # Output
alert(isUserWordPalindrome());
