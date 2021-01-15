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


var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data:{
        labels: ['Serie-1', 'Serie-2', 'Serie-3', 'Serie-4'],
        datasets: [{
            label: 'Mon suivi',
            borderColor: 'rgb(255, 99, 132)',
            data: [12, 10, 10, 8]
        }]
    },

    // Configuration options go here
    options: {}
});




