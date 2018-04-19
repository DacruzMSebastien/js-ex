// Exercice 1 : Manipulation de classes

// Sélectionner body, retirer & ajouter une classe
let changeColor = document.body;
changeColor.classList.remove('bg-aqua');
changeColor.classList.add('bg-olive');

/// Sélectionner first-paragraph, retirer classes & ajouter une autre
let firstp = document.getElementById('first-paragraph');
firstp.classList.remove('bg-lime', 'gray');
firstp.classList.add('aqua');

// Sélectionner tous les éléments class bg-silver, les modifier avec bg-teal puis supprimer bg-silver
let modifElem = document.getElementsByClassName('bg-silver');
modifElem = document.getElementsByTagName("blockquote")[0].classList.add('bg-teal');
modifElem = document.getElementsByTagName("blockquote")[0].classList.remove('bg-silver');

// Sélectionner ts les éléments type blockquote & les modif en ajoutant class bg-white
let blockBg = document.getElementsByTagName('blockquote');
blockBg[0].classList.add('bg-white');




// Exercice 2 : Selecteurs CSS

// Sélectionner élément my-table & lui ajouter une class
let purple = document.querySelector('#my-table');
purple.classList.add('bg-purple');

// Sélectionner tous les p ds 'container' & les modif en ajoutant .shadow
// let pContain = document.querySelectorAll('.container p');

let pContain =document.querySelectorAll('.container p')
for (let i = 0; i < pContain.length; i++){
  pContain[i].classList.add('shadow')
}




// Exercice 3 : 

// Sélectionner tous les éléments de type 'pre' et y apporter des modifs
let pre = document.querySelectorAll('pre');
for (let i = 0; i < pre.length; i++){
    pre[i].style.color = "yellow";
    pre[i].style.backgroundColor = "fuchsia";
    pre[i].style.border = ["3px solid red"];
}

// Sélectionner le premier élément de type 'h3' et 'h2' & remplacer html
document.querySelector('h3').innerHTML = '<em>Italic title ! yeah !</em>';
document.querySelector('h2').innerHTML = "<strong>HTML doens't work !</strong>"
let changeOlive = document.querySelector('h2');
changeOlive.classList.add('yellow');



// Exercice 4 : Création d'éléments

// Sélectionner le 1er 'ul' puis créer élement 'li' puis ajouter 'li' à l'élément 'ul'
firstUl = document.querySelector('ul');
createLi = document.createElement('li');
firstUl.appendChild(createLi);
createLi.innerHTML = "Mon meilleur ami est <a href='http://www.google.com'>Google</a>";

// Sélectionner le lien et changer la couleur
createLi.querySelector('a').style.color = "yellow";



// Exercice 5 : Création & suppression de plusieurs éléments

// Sélectionner le premier élément 'ol'  & faire une boucle sur tous les enfants de ce dernier grâce à sa propriété children
// Puis supprimer chaque enfant de 'ol' grâce à removeChild()

firstOl = document.querySelector('ol');
for (let i = firstOl.children.length-1; i >= 0; i--){
    firstOl.removeChild(firstOl.children[i]);
}

// Array
let array = ["Silent Teacher","Code Monkey", "CodeCombat"];

//faire une boucle sur tous les enfants du tableau précédement crée
array.forEach((text) => {                        //  The forEach() method executes a provided function once for each array element.
   let Li =  document.createElement('li');       // pour chaque valeur du tableau crée un élément 'li' crâce à document.createElement()
   Li.innerText = text;                          // ajouter à chaque 'li' la valeur courrante tableau
   firstOl.appendChild(Li);                      // ensuite ajouter chaque 'li' à l'élément 'ol' précédement sélectionné
})




