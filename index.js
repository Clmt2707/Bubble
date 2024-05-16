

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
    bubble.style.setProperty('--left', Math.random() * 100 + '%');
};

//création d'une bulle toutes les 2s
/*setInterval(bubbleMaker, 300);*/

