let guessWord = ["B","O","N","J","O","U","R"];
let guessed = ["","","","","","",""]; // Mot partiellement deviné


let guessLetter = () => {
  let letter = prompt("Entez une lettre");
  letter.toUpperCase(); // retourne la valeur de la chaine en courante, convertie en maj


  for (let i = 0; i <= guessWord.length; i++){

     if(guessWord[i] == letter){
       guessed[i] = letter;
       console.log("Bravo ", guessed);
     }
}


  if(guessed.indexOf("") >= 0){ // "" = Valeur recherchée, >= 0 renvoie  guessWord.length
    guessLetter()
  }else{
  console.log("Gagné!");
  }
}

guessLetter(); //Appel de la fct°
