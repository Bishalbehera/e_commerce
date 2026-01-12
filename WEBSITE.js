document.addEventListener("DOMContentLoaded", function () {
    const bar = document.getElementById("bar");
    const closeBtn = document.getElementById("close");
    const navbar = document.getElementById("navbar");

    if (bar) {
        bar.addEventListener("click", function () {
            navbar.classList.add("active");
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            navbar.classList.remove("active");
        });
    }

});
const btn = document.getElementById("btn");
if (btn) {
    
    btn.addEventListener("click", () => {
        window.location.href = "shop.html";
    });
}

 const cartIcon = document.getElementById("lg-bag");
    const cartModal = document.querySelector(".cart-modal");
    const closeCart = document.getElementById("close-cart");

    if (cartIcon && cartModal) {
        cartIcon.addEventListener("click", (e) => {
            e.preventDefault();
            cartModal.classList.toggle("active");
        });
    }

    if (closeCart && cartModal) {
        closeCart.addEventListener("click", () => {
            cartModal.classList.remove("active");
        });
    }


    /* ========= ADD TO CART (PRODUCT) ========= */
    const cartButtons = document.querySelectorAll(".cart");

    cartButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            const product = e.target.closest(".pro");
            if (!product) return;

            const name = product.querySelector("h5").textContent;
            const price = product.querySelector("h4").textContent;

            alert(`${name} added to cart for ${price}`);
        });
    });


    /* ========= NEWSLETTER ========= */
    const signUpButton = document.querySelector("#newsletter .normal");
    const emailInput = document.querySelector("#newsletter input");

    if (signUpButton && emailInput) {
        signUpButton.addEventListener("click", () => {
            const email = emailInput.value.trim();
            if (email) {
                alert(`Thank you for signing up, ${email}`);
                emailInput.value = "";
            } else {
                alert("Please enter a valid email");
            }
        });
    }





// cartModal.classList.toggle('active');



// var button = document.getElementById("shop.html");

// button.onclick = function(){
//     button.src=shop.html.src;
// }
// smallimg[1].onclick = function(){
//     mainimg.src=smallimg[1].src;
// }
// smallimg[2].onclick = function(){
//     mainimg.src=smallimg[2].src;
// }
// smallimg[3].onclick = function(){
//     mainimg.src=smallimg[3].src;
// }




// localStorage.setItem('cart', JSON.stringify(cartArray)); 




//         // Wait for the document to be ready
//         document.addEventListener('DOMContentLoaded', function () {

//             // Function to handle mobile menu toggle
//             const menuToggle = document.getElementById('bar');
//             const navbar = document.getElementById('navbar');
//             const closeBtn = document.getElementById('close');
            
//             if (menuToggle) {
//                 menuToggle.addEventListener('click', () => {
//                     navbar.classList.toggle('active');
//                 });
//             }
            
            
//             if (closeBtn) {
//                 closeBtn.addEventListener('click', () => {
//                     navbar.classList.remove('active');
//                 });
//             }

            
//             // Cart functionality - Toggle Cart View
//             const cartIcon = document.getElementById('lg-bag');
//             const cartModal = document.querySelector('.cart-modal'); // Assuming you have a cart modal to show cart items
            
//             if (cartIcon) {
//                 cartIcon.addEventListener('click', () => {
//                     cartModal.classList.toggle('active'); // Toggle the cart modal visibility
//                 });
//             }
            
//             // Add product to cart
//             const cartButtons = document.querySelectorAll('.cart');
//             cartButtons.forEach(button => {
//                 button.addEventListener('click', (event) => {
//                     event.preventDefault();
//                     addToCart(event.target);
//                 });
//             });
            
//             // Function to add an item to the cart
//             function addToCart(button) {
//                 const productName = button.closest('.pro').querySelector('h5').textContent;
//                 const productPrice = button.closest('.pro').querySelector('h4').textContent;
            
//                 // Here, you could store the cart data in localStorage or update a cart display
//                 alert(`${productName} added to cart for ${productPrice}`);
//             }
            
//             // Sign up functionality
//             const signUpButton = document.querySelector('.normal');
//             const emailInput = document.querySelector('input[type="text"]');
            
//             if (signUpButton) {
//                 signUpButton.addEventListener('click', function () {
//                     const email = emailInput.value.trim();
//                     if (email) {
//                         alert(`Thank you for signing up, ${email}!`);
//                         emailInput.value = ''; // Clear the input
//                     } else {
//                         alert('Please enter a valid email address.');
//                     }
//                 });
//             }
            
//             // Handling the "Shop Now" button click (simple navigation example)
//             const shopNowButton = document.querySelector('#hero button');
//             if (shopNowButton) {
//                 shopNowButton.addEventListener('click', () => {
//                     window.location.href = "shop.html"; // Navigate to the Shop page
//                 });
//             }
            
//             // Handle the "Explore More" button in the banner
//             const exploreButton = document.querySelector('#banner .normal');
//             if (exploreButton) {
//                 exploreButton.addEventListener('click', () => {
//                     window.location.href = "shop.html"; // Navigate to the Shop page
//                 });
//             }
            
//             // Handling the cart button for each product
//             const cartIcons = document.querySelectorAll('.fa-cart-shopping');
//             cartIcons.forEach(icon => {
//                 icon.addEventListener('click', (e) => {
//                     const productName = e.target.closest('.pro').querySelector('h5').textContent;
//                     alert(`${productName} added to cart!`);
//                 });
//             });
            
//             // Optional: If you want to close the cart modal when clicking outside
//             window.addEventListener('click', (e) => {
//                 if (e.target === cartModal) {
//                     cartModal.classList.remove('active');
//                 }
//             });
//             });
            