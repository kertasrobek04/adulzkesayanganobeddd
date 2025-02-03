let cart = [];
let total = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    total += productPrice;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Rp ${item.price.toLocaleString()}`;
        cartItems.appendChild(li);
    });
    cartTotal.textContent = total.toLocaleString();
}

function checkout() {
    if (cart.length === 0) {
        alert("Keranjang belanja Anda kosong!");
    } else {
        alert(`Terima kasih! Total pembayaran: Rp ${total.toLocaleString()}`);
        cart = [];
        total = 0;
        updateCart();
    }
}