const sr = ScrollReveal({
    duration: 1000,
    reset: true
});

sr.reveal('h1', {
    delay: 600
});

sr.reveal('.lead', {
    delay: 600
});

sr.reveal('#card1', {
    delay: 700
}, 50);

sr.reveal('#card2', {
    delay: 850
}, 50);

sr.reveal('#card3', {
    delay: 1050
}, 50);

sr.reveal('#card4', {
    delay: 1200
}, 50);

sr.reveal('#card5', {
    delay: 1400
}, 50);

sr.reveal('#card6', {
    delay: 1600
}, 50);

sr.reveal ('#anim1' , {
    delay: 500
})

sr.reveal ('#anim2' , {
    delay: 700
})

sr.reveal ('#anim3' , {
    delay: 1000
})

sr.reveal ('#anim4' , {
    delay: 1300
})
const allCross = document.querySelectorAll('.visible-pannel img');
console.log(allCross);


allCross.forEach(element => {

    element.addEventListener('click', function () {

        const height = this.parentNode.parentNode.childNodes[3].scrollHeight;

        const currentChoice = this.parentNode.parentNode.childNodes[3];

        // console.log(this.src);
        if (this.src.includes('angle-down-solid')) {
            this.src = 'assets/img/angle-up-solid.svg';
            gsap.to(currentChoice, {
                duration: 0.2,
                height: height + 40,
                opacity: 1,
                padding: '20px 15px'
            })
        } else if (this.src.includes('angle-up-solid')) {
            this.src = 'assets/img/angle-down-solid.svg';
            gsap.to(currentChoice, {
                duration: 0.2,
                height: 0,
                opacity: 0,
                padding: '0px 15px'
            })
        }
    })
})

const parallaxx = document.getElementById('parallax');


window.addEventListener('scroll', () => {
    if(window.matchMedia("(min-width:767px)").matches) {
        parallaxx.style.backgroundPositionY = (-window.scrollY / 1) + 3900 + "px";
    }
    else{
    console.log(scrollY)
    parallaxx.style.backgroundPositionY = (-window.scrollY / 1) + 7600 + "px";
    // parallaxx.style.backgroundPositionY = -100 + (window.scrollY/(document.body.scrollHeight - window.innerHeight)) *100 + "px";
 
}
});

// Fin de Partie brice

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Merci pour votre achat !')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}


function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '€' + total
}


function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('Cet objet est déjà dans ton panier :(')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">RETIRER</button>
        </div>`
    cartRow.innerHTML += cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

document.addEventListener('DOMContentLoaded', function () {
    window.onscroll = function (ev) {
        document.getElementById("cRetour").className = (window.pageYOffset > 100) ? "cVisible" : "cInvisible";
    };
});
