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
const resultDisplay = document.getElementById("result-display")
const numerUserInput = document.getElementById("user-number")
const predictionUserInput = document.getElementById("user-prediction")
const predictionHelper = document.querySelector(".user-prediction")
const numberHelper = document.querySelector(".user-number")
const randomPcNumber = () => {
  const randomNumber = Math.floor(Math.random() * (6 - 1) + 1)
  return randomNumber
}

const sum = (userNumber, pcNumber) => {
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
    resultDisplay.style.color = "green"
    return "giocatore ha vinto"
  } else if (!isEvenReturn && userPrediction == "dispari") {
    resultDisplay.style.color = "green"
    return "giocatore ha vinto"
  } else if (isEvenReturn && userPrediction == "dispari") {
    resultDisplay.style.color = "red"
    return "pc ha vinto"
  } else if (!isEvenReturn && userPrediction == "pari") {
    resultDisplay.style.color = "red"
    return "pc ha vinto"
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
        resultDisplay.innerHTML = ""
        resultDisplay.innerHTML =
          "la somma è" +
          " " +
          sumValue +
          " " +
          winner(userPrediction, isEvenReturn)
        predictionUserInput.style.border = "1px solid #ccc"
        predictionHelper.style.color = "black"
      } else {
        predictionUserInput.style.border = "1px solid red"
        predictionHelper.style.color = "red"
        //cambio il colore del bordo del input
      }
      numerUserInput.style.border = "1px solid #ccc"
      numberHelper.style.color = "black"
    } else {
      numerUserInput.style.border = "1px solid red"
      numberHelper.style.color = "red"
      //cambio il colore del bordo del input
    }
  } else {
    numerUserInput.style.border = "1px solid red"
    numberHelper.style.color = "red"
    // cambio il colore del bordo del input
  }
})
