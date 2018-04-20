// MOUSE -EVENT
// Exercice 1 

// Créer (en HTML) 3 DIV possedant la même classe 'hoverMe' puis

// Faire disparaitre une seule div
// let mouseover = document.querySelector('.hoverMe');
// let event = function(){
//     mouseover.style.visibility = "hidden";
// }
// mouseover.addEventListener('mouseover', event);
 
// Faire disparaitre toutes les divs
let mouseover = document.querySelectorAll('.hoverMe');
 for (let i = mouseover.length-1; i >= 0; i--){
        mouseover[i].addEventListener('mouseover', function(){
            mouseover[i].style.visibility = "hidden";
        });
}
// // Exercice 2

// // Les faire réapparaître 
let reset = document.querySelector('#reset');
reset.onclick = function(){
for (let i = mouseover.length-1; i >= 0; i--){
    mouseover[i].style.visibility= "visible";
  }
}

// // Exercices 3

// // Crée (en HTML) 2 DIV avec une id chacune 'axe-x' et 'axe-y' puis

// // Faire en sorte que lorsque l'on bouge la souris dans la fenêtre, la position soit affichée dans les divs associées

let x = document.querySelector('#axe-x');
let y = document.querySelector('#axe-y');

let abscisse = function(axeX){
    x.innerHTML = "Coordonnées de l'axe X : " + axeX.clientX   // clientX retourne les coordonnées de l'axe x (horizontale)
}
window.addEventListener('mousemove',abscisse);

let ordonee = function(axeY){
    y.innerHTML = "Coordonnées de l'axe Y :" + axeY.clientY  // clientY retourne les coordonées de l'axe y (verticale)
}
window.addEventListener('mousemove', ordonee);





// KEYBOARD - EVENT

// Exercices 1

// Crée (en HTML) une DIV avec l'id "character"
// Faire changer de couleur de fond la DIV à chaque fois qu'on appuie sur une numéro de 0 à 9 sur le clavier
let char = document.querySelector('#character');
let bgColor = ''
let color = ''


let changeColor = function(event) {  
    switch (event.key) {
        case '0':
            bgColor = 'purple'
            color = 'white'
            break;

        case '1':
            bgColor = 'indigo'
            break;
        
        case '2':
            bgColor = 'blue'
            break;
            
        case '3':
            bgColor = 'lightblue'
            break;

        case '4':
            bgColor = 'lightgreen'
            break;

        case '5':
            bgColor = 'green'
            break;
        
        case '6':
            bgColor = 'yellow'
            break;

         case '7':
            bgColor = 'orange'
            break;

        case '8':
            bgColor = 'red'
            break;
        
        case '9':
            bgColor = 'fuchsia'
            break;

    }

    char.style.backgroundColor = bgColor;
    char.style.color = color;
}

window.addEventListener('keypress', changeColor);







