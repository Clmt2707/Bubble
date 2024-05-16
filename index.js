//Création d'une bulle de taille aléatoire

const bubble = document.createElement('span');
document.body.appendChild(bubble);
bubble.classList.add('bubble');

//Random sort un chiffre entre 0 et 1
//Taille de bulles entre 100 et 300px
const size = Math.random() * 200 + 100 + "px";
bubble.style.height = size;
bubble.style.width = size;