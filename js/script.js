/*
Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

RAGIONAMEMTO BASE
1. chiedere all'utente (prima tramite un prompt poi tramite un form) di inserire una parola

2. creare una funzione che riceve come argomento la parola inserita 
  - prendere la parola inserita dall'utente 
  - dividerla usando lo split(che ritorna un array di caratteri)
  - concatenare i caratteri dal'ultimo al primo 
  - confrontare l'input dell'utente con la stringa concatenata 
    - se sono uguali ritornare 'la parola è palindroma
    - se sono differenti ritornare ' la parola non è palindroma
  - inserire il risultato al principio in un console.log poi in un elemento nell'html

3. dare inizio alla funzione al click di un button per evitare che la funzione parta con valore undefined 
*/

const formElement = document.getElementById("form-element")
const inputUserWord = document.getElementById("user-word")
const displayElement = document.getElementById("display")
const itsPalindrome = (userWord) => {
  // il replace non è farina del mio sacco , ho fatto la domanda a chatgpt , ho capito cosa ha fatto dalla spiegazione ma francamente non avrei saputo farlo da solo
  const userWordString = String(userWord)
    .toLowerCase()
    .replace(/[àáâãäå]/g, "a")
    .replace(/[èéêë]/g, "e")
    .replace(/[ìíîï]/g, "i")
    .replace(/[òóôõö]/g, "o")
    .replace(/[ùúûü]/g, "u")
    .replace(/[ç]/g, "c")
    .replace(/\s/g, "")

  const wordArray = userWordString.split("")
  let reverseWordArray = []
  for (let i = wordArray.length - 1; i >= 0; i--) {
    reverseWordArray.push(wordArray[i])
  }
  let reverseWord = ""
  reverseWordArray.forEach((element) => {
    reverseWord += element
  })

  if (reverseWord == userWordString) {
    return userWord + " " + "è una parola palindroma"
  }

  return userWord + " " + "non è una parola palindroma"
}

formElement.addEventListener("submit", (e) => {
  e.preventDefault()
  const userWord = inputUserWord.value
  const verificateUserWord = parseInt(inputUserWord.value)
  if (isNaN(verificateUserWord) && userWord != "") {
    displayElement.innerHTML = itsPalindrome(userWord)
    displayElement.style.color = "#000"
  } else {
    displayElement.innerHTML = "inserisci una parola valida"
    displayElement.style.color = "red"
  }
})
