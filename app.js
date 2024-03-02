document.addEventListener('DOMContentLoaded', function() {
    const cartButton = document.getElementById('cart');
    const addToCartButtons = document.querySelectorAll('.button');
    const cartValue = document.getElementById('cart-value');
    let cartItems = {};

    // Add click event listeners to all "Add" buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemId = button.id;
            if (cartItems[itemId]) {
                cartItems[itemId]++;
            } else {
                cartItems[itemId] = 1;
            }
            updateCartValue();
        });
    });

    // Update cart value in the UI
    function updateCartValue() {
        let totalCount = 0;
        for (const key in cartItems) {
            totalCount += cartItems[key];
        }
        cartValue.textContent = totalCount;
    }

    // Add click event listener to cart button
    cartButton.addEventListener('click', function() {
        console.log("Cart Items:");
        for (const key in cartItems) {
            console.log(`${getItemName(key)}: ${cartItems[key]}`);
        }
        console.log("Total Amount:"); // Add logic to calculate total amount
    });

    // Function to get item name based on its ID
    function getItemName(itemId) {
        const itemElement = document.getElementById(itemId);
        if (itemElement) {
            return itemElement.querySelector('h3').textContent;
        }
        return "Unknown Item";
    }
});
