const counterDisplay = document.querySelector("h3");
let counter = 0;


const bubbleMaker = () => {
    //Création d'une bulle de taille aléatoire 
    const bubble = document.createElement('span');
    document.body.appendChild(bubble);
    bubble.classList.add('bubble');

    //Random sort un chiffre entre 0 et 1
    //Taille de bulles entre 100 et 300px
    const size = Math.random() * 200 + 100 + "px";
    bubble.style.height = size;
    bubble.style.width = size;

    //Position aléatoire de la bulle/ apparition vers le bas de la page
    bubble.style.top = Math.random() * 100 + 50 + '%';
    bubble.style.left = Math.random() * 100 + '%';

    //Déplacement aléatoire
    //position de départ neg ou pos une fois sur deux
    const plusMinus = Math.random() > 0.5 ? 1 : -1;
    bubble.style.setProperty('--left', Math.random() * 100 + plusMinus + '%');

    //Suppression des bulles au clic
    bubble.addEventListener('click', () => {
        counter++;
        counterDisplay.textContent = counter;
        bubble.remove();
    });

    //Suppression des bulles après l'animation
    setTimeout(() => {
        bubble.remove()
    }, 8000);
    
};

//création d'une bulle toutes les 1s
setInterval(bubbleMaker, 1000);

