let display = document.getElementById("affichage");  
let score = 0;

let click = document.getElementById("clic");
let multiplicateur = 1; // compteur de clics
let costMultiplicateur = 10; // 1er multiplicateur coûte 10 score
let produit = document.getElementById("multiplier");
let auto = document.getElementById("autoclicker");
let getBonus = document.getElementById("bonus");
let time = 30;
let dispBonus = document.getElementById("afficherBonus");





let addScore  = function(){
    if (score >= 0){
        score = score + multiplicateur;
        display.innerHTML = "You drew " + score + " Harvey's"; 
    }   
}
click.addEventListener("click", addScore);


produit.onclick = function augmenterMultiplicateur(){ 
    if (score >= costMultiplicateur){
        multiplicateur = multiplicateur *2;
        score = (score - costMultiplicateur) ;
        costMultiplicateur = costMultiplicateur *4; // augmentation du coût du multiplicateur (etape 9)
        produit.value =" *" + multiplicateur + "  Your next manual will cost " + costMultiplicateur + " Harvey's";
    }
}


auto.onclick = function autoclick(){ // setInterval("instructions", délai)
    if (score >= 500){
        score = score - 500; 
        setInterval(addScore, 1000);
        // désactive le bouton 
            }      
            auto.disabled = true;
}
display.innerHTML = "You drew " + score + " harvey's";


// Bonus 200%
function addBonus(){
    score = score - 10;    
    bonusClic = multiplicateur;
    multiplicateur = multiplicateur * 2; 
}


getBonus.onclick =  function(){
    if (score >=5000){ 
        addBonus();
    setInterval(function timeUp() {
      time--;
       if (time >= 0) {
          dispBonus.innerHTML = time + ' seconds remaining';
       }
       if (time == 0) {
        // clearTimeout(test);  ARRETER LE BONUS ? 
          alert("Time's up, your bonus is over");
          clearInterval(time);
        } 
      }, 1000);
        
    }
 }
























// EN fct° du nombre de bieres brassées -> changer l'opacaité du background
// à X bières brassees, afficher un alert "drunk"