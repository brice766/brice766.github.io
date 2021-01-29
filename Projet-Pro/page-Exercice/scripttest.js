window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0)
});


const menuToggle = document.getElementById("toggleMenu");
const navigation = document.getElementById("navigation");

function toggleMenu(){

console.log('ok')
menuToggle.classList.toggle('active');
navigation.classList.toggle('active');
}





// const parallaxx = document.getElementById('banner');

// window.addEventListener('scroll', () => {
//     banner.style.backgroundPositionY = -window.scrollY / 3 + "px"
    // parallaxx.style.backgroundPositionY =   (-window.scrollY / 1.4) +3000 + "px";
    // parallaxx.style.backgroundPositionY = -100 + (window.scrollY/(document.body.scrollHeight - window.innerHeight)) *100 + "px";
// });


imagesArray = [
    "../assets/img/image1.jpg",
    "../assets/img/image2.jpg",
    "../assets/img/image3.jpg",
    "../assets/img/image4.jpg",
    "../assets/img/image5.jpg",
    "../assets/img/sport1.jpg",
    "../assets/img/sport2.jpg",
    "../assets/img/sport3.jpg",
    "../assets/img/pexels-andrea-piacquadio-3775599.jpg",
    "../assets/img/meat.jpg",
    "../assets/img/pexels-estudio-polaroid-3112004.jpg",
    "../assets/img/pexels-leon-martinez-1552252.jpg",
    "../assets/img/pexels-lukas-669582.jpg",
    "../assets/img/pexels-lukas-669584.jpg",
    "../assets/img/workout2.jpg",
    "../assets/img/workout4.jpg",
    "../assets/img/workout5.jpg",
    "../assets/img/workout7.jpg",
    "../assets/img/workout8.jpg",
    "../assets/img/workout9.jpg",
    "../assets/img/workout10.jpg",
    "../assets/img/workout12.jpg",
    "../assets/img/food1.jpg",
    "../assets/img/food2.jpg",
    "../assets/img/food3.jpg",
    "../assets/img/food4.jpg",
    "../assets/img/food5.jpg",
    "../assets/img/food7.jpg",
    "../assets/img/food8.jpg",
    "../assets/img/food9.jpg",
    "../assets/img/food10.jpg",
];



numberMemoryArray = [];
let allImage = document.querySelectorAll(".image");

for (let i = 0; i < allImage.length; i++) {
    // on crée un nombre random entre et 0 et la taille du tableau 
     let randomNumber = Math.floor(Math.random() * imagesArray.length);

    // while = tant que 
    // tant que le random number est inclu dans numberMemoryArray ça veux dire qu'il est existe déjà donc on recommence le random
    while (numberMemoryArray.includes(randomNumber)) { 
        randomNumber = Math.floor(Math.random() * imagesArray.length);
    }
     // dès que le numéro est unique donc n'est pas dans le tab numberMemoryArray on change la sources du fichier
    if(!numberMemoryArray.includes(randomNumber)) {
        allImage[i].src = imagesArray[randomNumber];
        numberMemoryArray[i] = randomNumber;
    }
}

let allBgImage = document.querySelectorAll(".bgImage");

for (let i = 0; i < allBgImage.length; i++) {
    // on crée un nombre random entre et 0 et la taille du tableau 
     let randomNumber = Math.floor(Math.random() * imagesArray.length);

    // while = tant que 
    // tant que le random number est inclu dans numberMemoryArray ça veux dire qu'il est existe déjà donc on recommence le random
    while (numberMemoryArray.includes(randomNumber)) { 
        randomNumber = Math.floor(Math.random() * imagesArray.length);
    }
     // dès que le numéro est unique donc n'est pas dans le tab numberMemoryArray on change la sources du fichier
    if(!numberMemoryArray.includes(randomNumber)) {
        allBgImage[i].style.backgroundImage = "url("+imagesArray[randomNumber]+")";
        numberMemoryArray[i] = randomNumber;
    }
}



//selection de photo pour les image d'acceuil de page


imagesArrayBg = [
    "../assets/img/image1.jpg",
    "../assets/img/image5.jpg",
    "../assets/img/sport2.jpg",
    "../assets/img/sport3.jpg",
    "../assets/img/pexels-andrea-piacquadio-3775599.jpg",
    "../assets/img/pexels-lukas-669582.jpg",
    "../assets/img/pexels-lukas-669584.jpg",
];


numberMemoryArrayBis = [];

let allBgImageBis = document.querySelectorAll(".bgImageBis");

for (let i = 0; i < allBgImageBis.length; i++) {
    // on crée un nombre random entre et 0 et la taille du tableau 
     let randomNumber = Math.floor(Math.random() * imagesArrayBg.length);

    // while = tant que 
    // tant que le random number est inclu dans numberMemoryArray ça veux dire qu'il est existe déjà donc on recommence le random
    while (numberMemoryArrayBis.includes(randomNumber)) { 
        randomNumber = Math.floor(Math.random() * imagesArraybg.length);
    }
     // dès que le numéro est unique donc n'est pas dans le tab numberMemoryArray on change la sources du fichier
    if(!numberMemoryArrayBis.includes(randomNumber)) {
        allBgImageBis[i].style.backgroundImage = "url("+imagesArrayBg[randomNumber]+")";
        numberMemoryArrayBis[i] = randomNumber;
    }
}