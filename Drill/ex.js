
// DRILL JAVASCRIPT --------- Variables, Conditions
let lang = "FR";
let lang2 = "ES";
let lang3 = "EN";

let msg = "Bonjour tout le monde";
let msg2 = "Hola, mundo";
let msg3 = "Hello world";

let choice = prompt("Êtes-vous FR, ES ou EN?");
alert("Vous avez choisi " + choice);


if (choice==="FR"){
    console.log(msg);
} else if (choice==="ES"){
    console.log(msg2);
  } else if (choice==="EN"){
    console.log(msg3);
  }else{
    console.log("La réponse D");
  }

// //////////////////////////////////////////////////////////////

let nbre = 2;
let name = "Lea";
let country = "Portugal";
let work = "Artiste";

let nbre2 = 0;
let name2 = "personne";
let country2 = "dans la rue";
let work2 = "sans emploi";

let astro = prompt("Entrez votre signe astrologique :");
alert("Puisque vous êtes " + astro + ".." )

if (astro=="balance"){
  console.log("Vous serez " + work + " et habiterez au " + country + ", marié à " + name + " avec " + nbre + " enfants");
  } else{
  console.log("Vous serez " + work2 + " et habiterez  " + country2 + ", marié à " + name2 + " avec " + nbre2 + " enfant");
}

//////////////////////////////////////////////////////////////
// DRILL JAVASCRIPT --------- Fonctions

function substract(x, y){
  x = Number(15);
  y = Number(10);
  let result = x - y;
  return result;
}

console.log(substract());

function division(x, y){
  x = Number(10);
  y = Number(2);
  let result = x/y;
  return result;
}
console.log(division());

//////////////////////////////////////////////////////////////
//  DRILL JAVASCRIPT --------- Boucles

// (im)pair
for (var i = 0; i <21; i++) {
    console.log(i);
    if (i % 2 == 1){
      console.log("nb est impair");
    }
    else if (i % 2 == 0){
      console.log("nb est pair");
    }
}

// Grade
let result = ""
let grade = a => {
    if (a > 90){
        result = "A"
    }
    else if (a > 80){
        result = "B"
    }
    else if (a > 70){
        result = "C"
    }
    else if (a > 65){
        result = "D"
    }
    else{
        result = "F"
    }
    console.log("Avec " + a + " points, vous obtenez le grade " + result)
}

for (let i=0;i<=100;i++){
    console.log(grade(i))
}

// Pyramides
let ast = ""
for (let i=1; i<=5; i++){
    ast += "*"
    console.log(ast);
}
////////////////////////////////////////////////////////////
 DRILL JAVASCRIPT --------- Arrays
addition
 let valeur = [1,2,3,4,5,6,7,8,9];
 let somme = 0
 for (let i = 0; i < valeur.length, i++){  //  length= le nombre d'éléments présents dans le tableau
   somme = somme + valeur[i];
   console.log(somme);
 }

 // acteurs
 let actors = ["Al Pacino", "Tom Hardy", "Jake Gyllenhaal"];
 for (let i= 1; i < actors.length; i++){
    console.log("Le numéro " + i  + " est " + actors[i]);
}

// dupliquer & ajouter
let char = ["Mario", "Luigi", "Peach"];
let char2 = char.slice();
let inset = char2.push("Bowser");
console.log(char);
console.log(char2);
