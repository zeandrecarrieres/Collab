//? Initilisation des données nécéssaires

const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

//? Initialisation des sélecteurs
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const randomBtn = document.querySelector('.random-btn');

const imageContainer = document.querySelector('#person-img');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const comment = document.querySelector('#comment');


//? Setup la review de départ
let currentReview = 0;

function showPerson(person){
    //? Création d'une variable qui pointe vers l'index des reviews
    const review = reviews[person];

    console.log(review);

    //? Utilisation de setters pour remplacer les valeurs HTML avec celles des objets dans reviews
    imageContainer.src =  review.img;
    author.innerText = review.name;
    job.innerText = review.job;
    comment.innerText = review.text;
};

//? Création d'un évènement qui se lance au chargement du DOM
window.addEventListener("DOMContentLoaded",()=>{
    //? Affiche la review en fonction de l'index
    showPerson(currentReview);
    //? Initialisation d'un intervalle de 10s pour afficher la prochaine review
    setInterval(()=>{
      currentReview++;
      //? Création d'une condition qui vérifie que l'incrémentation n'a pas fait l'index currentReview dépasser la taille de l'Array
      if(currentReview > reviews.length - 1){
        //? Si l'incrémentation à fait currentReview dépasser la taille de l'Array, on remplace sa valeur par 0 (pour retourner au début de l'array)
        currentReview = 0;
      }
      showPerson(currentReview);

    },10000)
});

//? Création d'un nouvel évènement 'click' sur le bouton précédent
prevBtn.addEventListener('click',()=>{
    //? Décrémentation de currentReview pour accéder à l'index précédent
    currentReview--;

    //? Création d'une condition qui vérifie que la décrémentation n'a pas rendu l'index négatif.
    if(currentReview < 0){
        //? Si la décrémentation rend l'index négatif, alors on remplace l'index par la valeur d'index de l'élément qui se situe à la fin de l'array.
        currentReview = reviews.length - 1;
    }
    //? Affiche la review en fonction de l'index
    showPerson(currentReview);
});

//? Création d'un nouvel évènement 'click' sur le bouton suivant
nextBtn.addEventListener('click',()=>{
    //? Incrémentation de currentReview pour accéder à l'index suivant
    currentReview++;

    //? Création d'une condition qui vérifie que l'incrémentation n'a pas fait l'index currentReview dépasser la taille de l'Array
    if(currentReview > reviews.length - 1){
        //? Si l'incrémentation à fait currentReview dépasser la taille de l'Array, on remplace sa valeur par 0 (pour retourner au début de l'array)
        currentReview = 0;
    }
    //? Affiche la review en fonction de l'index
    showPerson(currentReview);
});

//? Création d'un nouvel évènement 'click' sur le bouton randomBtn
randomBtn.addEventListener("click",()=>{
    //? Création d'une variable qui va contenir un nombre aléatoire entre 0 et la taille de l'array
    newReview = Math.floor(Math.random()*reviews.length);

    //? Création d'une boucle qui vérifie que tant que le nouveau nombre aléatoire contenu dans la variable est égal à l'index currentReview
    while(currentReview === newReview){
        //? Alors on choisit un nouveau nombre aléatoire
        newReview = Math.floor(Math.random()*reviews.length);
    }
    //? On assigne ce nombre aléatoire a notre index pour exécuter la fonction qui permet d'afficher la review.
    currentReview = newReview;
    //? Affiche la review en fonction de l'index
    showPerson(currentReview);
});