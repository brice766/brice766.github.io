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







