console.log("Minimum & Maximum");
let minValue = Math.min(7, 5, -12, 6, 32, 18, 14, -2);
console.log(minValue);
let maxValue = Math.max(-3, 9, 21, 36, 27, 54, 17, 35);
console.log(maxValue);
let add = minValue + maxValue;
console.log(add);


console.log("Aléatoire 1");
let floatBateau = 10.4;
console.log(floatBateau);
let couleBateau = Math.floor(floatBateau);
console.log(couleBateau);
let voleBateau = Math.ceil(floatBateau);
console.log(voleBateau);


console.log("Aléatoire 2"); // compris entre 50 et 100
function getRandomArbitrary(min, max) {
  return Math.random() * (100 - 50) + 50;
}
console.log(getRandomArbitrary());

function getRandomIntInclusive(min, max) { // compris entre 0 & 10 inclus
  min = Math.ceil(0);
  max = Math.floor(10);
  return Math.floor(Math.random() * (10 - 0 +1)) + 0;
}
console.log(getRandomIntInclusive());


console.log("Aléatoire 3"); // Choisis aléatoirement un personnage
let char = ["Goro", "Johnny Cago", "Kano", "Liu Kano", "Raiden", "Reptil", "Scorpion", "Shang Tsun", "Sonya", "Sub-Zero"];
randomChar = char[Math.floor(Math.random()*10)]; // var rand = myArray[Math.floor(Math.random() * myArray.length)];


console.log(randomChar);

// Transformation
//parseFloat() parseInt()
