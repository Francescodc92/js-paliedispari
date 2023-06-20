/*
L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.

RAGIONAMENTO BASE 
1. Richiedere le informazioni dall'utente
  - chiedere all'utente di scegliere pari o dispari con un prompt inizialmente 
  - chiedere all'utente un numero da 1 a 5 
2. creare una funzione che genera un numero random da 1 a 5 per il computer
3. inseriamo il valore inserito dall'utente e il numero random creato per il pc in una funzione che fà la somma dei due numeri 
  - verificare se la somma dei due numeri è pari o dispari (somma % 2 == 0) ritornare se il numero è pari o dispari

4. verifichiamo se il risultato della funzione (che dichiara se il numero è pari o dispari) ha dato lo stesso risultato dell'input dell'utente 
  - se è lo stesso risultato 'l'utente ha vinto'
  - altrimenti il pc ha vinto
*/

const formElement = document.querySelector("#form-element")
const numerUserInput = document.getElementById("user-number")
const predictionUserInput = document.getElementById("user-prediction")

const randomPcNumber = () => {
  const randomNumber = Math.floor(Math.random() * (6 - 1) + 1)
  return randomNumber
}

const sum = (userNumber, pcNumber) => {
  console.log(userNumber + pcNumber)
  return userNumber + pcNumber
}

const isEven = (sumValue) => {
  if (sumValue % 2 == 0) {
    return true
  }
  return false
}

const winner = (userPrediction, isEvenReturn) => {
  if (isEvenReturn && userPrediction == "pari") {
    console.log("è pari ", "giocatore pari", "giocatore ha vinto")
  } else if (!isEvenReturn && userPrediction == "dispari") {
    console.log("è dispari ", "giocatore dispari", "giocatore ha vinto")
  } else if (isEvenReturn && userPrediction == "dispari") {
    console.log("è pari ", "giocatore dispari", "pc ha vinto")
  } else if (!isEvenReturn && userPrediction == "pari") {
    console.log("è dispari ", "giocatore pari", "pc ha vinto")
  }
}

formElement.addEventListener("submit", (e) => {
  e.preventDefault()
  const userPrediction = predictionUserInput.value
  const userNumberString = numerUserInput.value
  const userNumber = parseInt(userNumberString)
  if (!isNaN(userNumber)) {
    const pcNumber = randomPcNumber()
    if (userNumber > 0 && userNumber <= 5) {
      if (userPrediction != "") {
        const sumValue = sum(userNumber, pcNumber)
        const isEvenReturn = isEven(sumValue)
        winner(userPrediction, isEvenReturn)
      } else {
        console.log(" inserisci pari o dispari nell'input")
      }
    } else {
      console.log("inserisci un valore da 1 a 5")
      //cambio il colore del bordo del input
    }
  } else {
    console.log("inserisci un valore valido")
    // cambio il colore del bordo del input
  }
})
