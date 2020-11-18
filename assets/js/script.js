let touche = document.getElementById('touches');
let nombre1 = '' ;
let operation = '';
let screen = document.getElementById('screen');
let verifWriteLeft = true;
let nombre2 ='';
let resultFinal = 0;
let compteurPoint = 0;

function clickMe(e){

    if (verifWriteLeft == true) {
        nombre1 += e.innerHTML; 
        screen.innerHTML = nombre1;
    } else {
        nombre2 += e.innerHTML; 
        screen.innerHTML = nombre1 + operation + nombre2;
    }
}

function calcul(e){
    operation = e.innerHTML;
    screen.innerHTML = nombre1 + operation;
    verifWriteLeft = false;
    compteurPoint--;
}

function result() {

    if(operation == '+'){
        resultFinal = parseFloat(nombre1) + parseFloat(nombre2);
    } else if (operation == '-'){
        resultFinal = parseFloat(nombre1) - parseFloat(nombre2);
    } else if (operation == '*'){
        resultFinal = parseFloat(nombre1) * parseFloat(nombre2);
    } else{
        resultFinal = parseFloat(nombre1) / parseFloat(nombre2);
    }
    screen.innerHTML = resultFinal;
    nombre1=resultFinal;
    nombre2='';
    operation = '';
    verifWriteLeft = true;

}

function reset() { 
    nombre1='';
    nombre2='';
    operation = ''; 
    screen.innerHTML = '';
    compteurPoint--;
}

function buttonPut(){
    if(compteurPoint == 0){
        if(verifWriteLeft == true){
            nombre1 = nombre1 + '.';
            screen.innerHTML = nombre1 + operation + nombre2;
        } else {
            nombre2 = nombre2 + '.';
            screen.innerHTML = nombre1 + operation + nombre2;
        }
        compteurPoint++;
    } else{
        alert('Yen a déja un');
    }
}







































































// const touches = [...document.querySelectorAll('.bouton')];
// const listeKeycode = touches.map(touche => touche.dataset.key);
// const ecran = document.querySelector('.ecran');

// document.addEventListener('keydown', (e) => {
//     const valeur = e.keyCode.toString();
//     calculer(valeur)

// })

// document.addEventListener('click', (e) => {
//     const valeur = e.target.dataset.key;
//     calculer(valeur)

// })

// const calculer = (valeur) => {

//     if (listeKeycode.includes(valeur)) {
//         switch (valeur) {
//             case '8':
//                 ecran.textContent = "";
//                 break;
//             case '13':
//                 const calcul = eval(ecran.textContent);
//                 ecran.textContent = calcul;
//                 break;
//             default:
//                 const indexKeycode = listeKeycode.indexOf(valeur);
//                 const touche = touches[indexKeycode];
//                 ecran.textContent += touche.innerHTML;
//         }
//     }
// }
