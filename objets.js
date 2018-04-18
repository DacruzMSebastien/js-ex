console.log("Personnage Non-Joueur");

let nickname = "Madjer";
// let age = parseInt("26",26);
let pnj = {
     name : nickname,
     age : 26,
     items_to_give : ["weapons", "map", "necklace", "crown"],

};

for(let key in pnj){ // boucle
	console.log(typeof key); // affiche le type de key : ici String
	// console.log( key ) // affiche chaque clé de mon objet (name, age, items_to_give)
	console.log( pnj[key] ) // affiche chaque valeur (Madjer,26,weapons,..)
}

let giveItem = () => {
  return pnj.items_to_give[Math.floor(Math.random()*pnj.items_to_give.length)];
}
console.log(giveItem());


///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

console.log("Shop");

let stuff = [];


let sword = {
  title : "longsword",
  physic : 50,
  magic : 5,
  minLevel : 1,
  available : true
};
let dagger = {
  title : "sharpeddagger",
  physic : 40,
  magic : 15,
  minLevel : 1,
  available : false
};
let wand = {
  title : "superwand",
  physic : 10,
  magic : 150,
  minLevel : 10,
  available : true
};

let add = stuff.push(sword,dagger,wand);


// faire une fonction pour afficher tout les objets
let displayStuff = () => {
  for(let items in stuff){
    console.log(stuff[items]);
  }
}
displayStuff();

// faire une fonction pour afficher les objets disponibles
let displayAvailableStuff = () => {
  for(let items in stuff){
    if (stuff[items].available == true){
      console.log(stuff[items]);
    }
  }
}
displayAvailableStuff();

// faire une fonction pour afficher les objets d'au moins lvl 10
function displayLevel(){
  for (let items in stuff){
    if (stuff[items].minLevel >= 10){
      console.log(stuff[items]);
    }
  }
}
displayLevel();

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

console.log("Personnage");

let mainCharacter = {
  name : "X",
  level : 30,
  life : 1500,
  weapon : {
    name : "X Blaster",
    damage : 25,
  },
  attack : function(){
    let power =  this.level * this.weapon.damage;
    // console.log(this.name + " attaque avec " + this.weapon.name + " et inflige " + power + " dégâts à l'adversaire. ");
    return power;
  }
}
console.log(mainCharacter.attack());

///////////////////////////////////////////////////////////////////////////////
              ///////////////////////  BONUS  ////////////////////
///////////////////////////////////////////////////////////////////////////////

console.log("Adversaire(BONUS)");

let character = {
  name : "",
  level : 10,
  life : 50,
  weapon : {
    name : "",
    damage : 25,
  },
  attack : function(){
    let power = this.level * this.weapon.damage;
    return power;
  },
  receiveDamage : function(){
    let hit = this.life - this.level * this.weapon.damage;
    return hit;
  }
}
// console.log(character.attack());
// console.log(character.receiveDamage());
let opponentCharacter = Object.create(character); //

opponentCharacter.name = "Chill Penguin",
opponentCharacter.level = 30,
opponentCharacter.life = 10000,
opponentCharacter.weapon.name = "Icy Shard",
opponentCharacter.weapon.damage = 15,

console.log(opponentCharacter.name +  " possède " + opponentCharacter.life + " de vie")
console.log(mainCharacter.name + " attaque " + opponentCharacter.name);
console.log("avec " + mainCharacter.weapon.name);
console.log("et inflige "+ mainCharacter.attack() + " dégâts");
console.log(opponentCharacter.name + " a maintenant "+ (opponentCharacter.life - mainCharacter.attack()) + " de vie");
