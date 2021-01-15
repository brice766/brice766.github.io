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

