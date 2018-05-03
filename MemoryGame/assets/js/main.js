// The difference between let and const is that once you bind a value/object to a variable using const,
// you can't reassign to that variable

let cardsArray = [{
    'name': 'ours',
    'img': 'assets/img/oursbaby.jpg',
  },
  {
    'name': 'lionne',
    'img': 'assets/img/lionnegraou.jpg',
  },
  {
    'name': 'ane',
    'img': 'assets/img/anehihan.jpg',
  },
  {
    'name': 'chat',
    'img': 'assets/img/chatminou.jpg',
  },
  {
    'name': 'chien',
    'img': 'assets/img/chientoutou.jpg',
  },
  {
    'name': 'lama',
    'img': 'assets/img/lamacrachat.jpg',
  },
  {
    'name': 'lapin',
    'img': 'assets/img/lapinscrottes.jpg',
  },
  {
    'name': 'tigre',
    'img': 'assets/img/tigresumatra.jpg', 
  },
];


let duplicateCards = cardsArray.concat(cardsArray); // step 2, remplacer cardsArray par duplicateCards ligne 49
duplicateCards.sort(() => 0.5 - Math.random());

let attempta = '';
let attemptb = '';
let count = 0;
let previousAttempt = null;

const game = document.getElementById('plateau');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

duplicateCards.forEach(item => { // Pour chaque objet dans le tableau..
  const card = document.createElement('div'); // on crée une div
  card.classList.add('card');
  card.dataset.name = item.name; // Data attribute permet de stocker plusieurs données dans un élément html
  
  const front = document.createElement('div');
  front.classList.add('front');

  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${item.img})`;

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});


const sameCards = () => {
  let selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
  card.classList.add('sameCards');
  card.style.visibility = "hidden";
  });
};

const resetAttempt = () => {
 let attempta = '';
 let attemptb = '';
 let count = 0;

 let selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
  card.classList.remove('selected');
  });
};

let delay = 1000;


grid.addEventListener('click', function(event){
  let clicked = event.target;
  if (clicked.nodeName == 'SECTION' || clicked == previousAttempt || clicked.parentNode.classList.contains('selected')){  // permet de selectionner les divs (donc les cartes) au lieu du plateau de jeu tt entier
    // contains() de l'interface DOMTokenList renvoie un Boolean (booléen) — true (vrai) si la liste sous-jacente contient le symbole donné, sinon false (faux)
    return;
     }

     if (count < 2){
      count++;
      if (count == 1){
        attempta = clicked.parentNode.dataset.name; // Première tentative
        // console.log(attempta);
        clicked.parentNode.classList.add('selected'); /// & ajout de parentNode
      } else {
        attemptb = clicked.parentNode.dataset.name; // Deuxième tentative
        // console.log(attemptb);
        clicked.parentNode.classList.add('selected');
      }
      if (attempta != '' && attemptb != ''){ // S'ils ne sont pas vides..
        if (attempta == attemptb){ // et qu'ils correspondent
          setTimeout(sameCards, delay);
          setTimeout(resetAttempt, delay);
         } else {
          setTimeout(resetAttempt, delay);
         }
      }  
      previousAttempt = clicked;
    }
});

