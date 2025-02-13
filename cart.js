let cart = [];

function toggleCart() {
    let cartPopup = document.getElementById("cart-popup");
    cartPopup.style.display = cartPopup.style.display === "flex" ? "none" : "flex";
}

function addToCart(name, price, image) {
    cart.push({ name, price, image, quantity: 1 });
    updateCart();
}

function updateCart() {
    let cartItemsContainer = document.querySelector(".cart-items");
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <h4>${item.name}</h4>
                    <p>$${item.price.toFixed(2)}</p>
                </div>
                <button onclick="removeItem(${index})">🗑</button>
            </div>`;
    });

    document.getElementById("cart-total").innerText = total.toFixed(2);
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}
