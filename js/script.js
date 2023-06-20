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

const startButton = document.getElementById("start-button")

const itsPalindrome = (userWord) => {
  const wordArray = userWord.split("")
  console.log(wordArray)
  let reverseWordArray = []
  for (let i = wordArray.length - 1; i >= 0; i--) {
    reverseWordArray.push(wordArray[i])
  }
  let reverseWord = ""
  reverseWordArray.forEach((element) => {
    reverseWord += element
  })

  if (reverseWord == userWord) {
    return reverseWord + " " + "la parola è palindroma"
  }

  return reverseWord + " " + "la parola non è palindroma"
}

startButton.addEventListener("click", () => {
  const userWord = prompt("Digita la parola da verificare")
  console.log(itsPalindrome(userWord))
})
