// Sri Lankan Tasty Food - Main JavaScript

// Food data
const foodItems = {
    'chicken-curry': {
        name: 'Chicken Curry',
        price: 1500,
        image: 'images/Chicken-Curry.jpg',
        description: 'A rich, aromatic curry made with tender chicken pieces simmered in coconut milk and traditional Sri Lankan spices including cinnamon, cardamom, and curry leaves. Served with steamed rice.'
    },
    'prawns-curry': {
        name: 'Prawns Garlic Curry',
        price: 2200,
        image: 'images/Prawns-Garlic-Curry.jpg',
        description: 'Fresh prawns cooked in a fragrant garlic-infused curry sauce with a perfect blend of coastal spices. A seafood lover\'s dream with hints of tamarind and coconut.'
    },
    'lamprais': {
        name: 'Lamprais',
        price: 1800,
        image: 'images/lamprais.jpg',
        description: 'A Dutch-Burgher delicacy featuring yellow rice, meat curry, eggplant pickle, seeni sambol, and boiled egg - all wrapped and baked in banana leaf for an authentic experience.'
    },
    'kottu': {
        name: 'Kottu Roti',
        price: 1200,
        image: 'images/Kottu-Roti.jpg',
        description: 'Sri Lanka\'s famous street food with chopped roti, fresh vegetables, egg, and your choice of meat, stir-fried on a hot griddle with aromatic spices. Listen for the rhythmic chopping sound!'
    },
    'devilled': {
        name: 'Devilled Chicken',
        price: 1400,
        image: 'images/Devilled.jpg',
        description: 'Spicy, tangy stir-fried chicken with colorful bell peppers, onions, and chili sauce. A Sri Lankan-Chinese fusion favorite that packs heat and flavor in every bite.'
    },
    'biriyani': {
        name: 'Sri Lankan Biriyani',
        price: 1600,
        image: 'images/Biriyani.jpg',
        description: 'Fragrant basmati rice layered with spiced meat, boiled eggs, fried onions, and cashews. Served with mint raita, curry, and pickle - a complete meal in itself.'
    }
};

// Villa data
const villaData = {
    'talpe': {
        name: 'Villa in Talpe',
        price: 35000,
        image: 'images/Villa-in-Talpe.webp',
        description: 'Beachfront luxury villa with stunning ocean views and direct beach access. Features 3 spacious bedrooms, private infinity pool, fully equipped kitchen, and outdoor dining area. Perfect for romantic getaways or small families.'
    },
    'kandy': {
        name: 'Marabedda Garden Resort, Kandy',
        price: 42000,
        image: 'images/Marabedda-Garden-Resort-Kandy.jpg',
        description: 'Nestled in lush tea plantations with breathtaking mountain views. This 4-bedroom resort villa offers authentic hill country hospitality, traditional architecture, nature trails, and bird watching opportunities.'
    },
    'unawatuna': {
        name: 'Villa in Unawatuna',
        price: 38000,
        image: 'images/Villa-in-Unawatuna.webp',
        description: 'Modern villa just steps away from the golden beaches of Unawatuna. Features 5 bedrooms, large garden with BBQ area, outdoor shower, and spacious living areas. Ideal for families and groups.'
    },
    'private': {
        name: 'Exclusive Private Villa',
        price: 55000,
        image: 'images/Private-Villa.jpg',
        description: 'Secluded luxury villa with 6 bedrooms, infinity pool, and panoramic views. Complete privacy with personalized butler service, private chef, in-villa spa treatments, and premium amenities throughout.'
    },
    '98acres': {
        name: '98 Acres Resort & Spa',
        price: 48000,
        image: 'images/98 Acres Resort & Spa.avif',
        description: 'Award-winning eco-resort surrounded by pristine tea estates. Features luxury suites, world-class spa, organic farm-to-table restaurant, guided nature walks, and sustainable tourism practices.'
    }
};

// Cart management
let cart = [];
let currentFood = null;

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Load cart from storage
    loadCart();
    
    // Set active nav link
    setActiveNavLink();
    
    // Smooth scrolling for anchor links
    initSmoothScroll();
    
    // Initialize date constraints for villa booking
    initDateConstraints();
    
    // Add event listeners to extra checkboxes
    initExtraCheckboxes();
});

// Set active navigation link based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || 
            (currentPage === 'index.html' && href === 'index.html') ||
            (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Food modal functions
function openFoodModal(foodId) {
    currentFood = foodItems[foodId];
    const modal = document.getElementById('foodModal');
    
    if (!modal || !currentFood) return;
    
    document.getElementById('modalFoodImage').src = currentFood.image;
    document.getElementById('modalFoodName').textContent = currentFood.name;
    document.getElementById('modalFoodDescription').textContent = currentFood.description;
    document.getElementById('modalFoodPrice').textContent = `LKR ${currentFood.price.toLocaleString()}`;
    document.getElementById('quantityValue').textContent = '1';
    
    // Uncheck all extras
    document.querySelectorAll('.extra-item input[type="checkbox"]').forEach(cb => cb.checked = false);
    
    updateModalTotal();
    modal.style.display = 'block';
}

function closeFoodModal() {
    const modal = document.getElementById('foodModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function increaseQuantity() {
    const quantityEl = document.getElementById('quantityValue');
    let quantity = parseInt(quantityEl.textContent);
    quantity++;
    quantityEl.textContent = quantity;
    updateModalTotal();
}

function decreaseQuantity() {
    const quantityEl = document.getElementById('quantityValue');
    let quantity = parseInt(quantityEl.textContent);
    if (quantity > 1) {
        quantity--;
        quantityEl.textContent = quantity;
        updateModalTotal();
    }
}

function updateModalTotal() {
    if (!currentFood) return;
    
    const quantity = parseInt(document.getElementById('quantityValue').textContent);
    let total = currentFood.price * quantity;
    
    // Add extras
    document.querySelectorAll('.extra-item input[type="checkbox"]:checked').forEach(checkbox => {
        total += parseInt(checkbox.value) * quantity;
    });
    
    document.getElementById('modalTotal').textContent = `LKR ${total.toLocaleString()}`;
}

function initExtraCheckboxes() {
    document.querySelectorAll('.extra-item input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', updateModalTotal);
    });
}

function addToCart() {
    const quantity = parseInt(document.getElementById('quantityValue').textContent);
    const extras = [];
    
    document.querySelectorAll('.extra-item input[type="checkbox"]:checked').forEach(checkbox => {
        extras.push({
            name: checkbox.nextElementSibling.textContent,
            price: parseInt(checkbox.value)
        });
    });
}

// Initialize date constraints for villa booking
function initDateConstraints() {
    const checkinDate = document.getElementById('checkinDate');
    
    if (checkinDate) {
        checkinDate.addEventListener('change', function() {
            const checkoutDate = document.getElementById('checkoutDate');
            if (checkoutDate) {
                const checkin = new Date(this.value);
                checkin.setDate(checkin.getDate() + 1);
                checkoutDate.min = checkin.toISOString().split('T')[0];
            }
        });
    }
}

// Cart persistence using in-memory storage
function saveCart() {
    // Store cart in memory (could be enhanced with API calls)
    window.cartData = cart;
}

function loadCart() {
    // Load cart from memory
    if (window.cartData) {
        cart = window.cartData;
    }
    updateCart();
}

    const totalPrice = parseInt(document.getElementById('modalTotal').textContent.replace(/[^0-9]/g, ''));

    cart.push({
        id: Date.now(),
        name: currentFood.name,
        quantity: quantity,
        basePrice: currentFood.price,
        extras: extras,
        total: totalPrice
    });

    saveCart();
    updateCart();
    closeFoodModal();
    
    // Show success message
    alert(`${currentFood.name} added to cart!`);
}

function updateCart() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotalAmount');

    if (!cartCount || !cartItems || !cartTotal) return;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Your cart is empty</p>';
        cartCount.textContent = '0';
        cartTotal.textContent = 'LKR 0';
        return;
    }

    cartCount.textContent = cart.length;

    let cartHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.total;
        cartHTML += `
            <div class="cart-item">
                <h4>${item.name} x${item.quantity}</h4>
                <p style="font-size: 0.9rem; color: #666;">Base: LKR ${(item.basePrice * item.quantity).toLocaleString()}</p>
                ${item.extras.length > 0 ? '<p style="font-size: 0.85rem; color: #666;">Extras: ' + item.extras.map(e => e.name).join(', ') + '</p>' : ''}
                <p style="color: #D62828; font-weight: 600;">LKR ${item.total.toLocaleString()}</p>
                <button onclick="removeFromCart(${item.id})" style="background: #D62828; color: white; border: none; padding: 0.5rem 1rem; border-radius: 5px; cursor: pointer; margin-top: 0.5rem;">Remove</button>
            </div>
        `;
    });

    cartItems.innerHTML = cartHTML;
    cartTotal.textContent = `LKR ${total.toLocaleString()}`;
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    updateCart();
}

function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    if (sidebar) {
        sidebar.classList.toggle('open');
    }
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    alert('Proceeding to checkout... Total: ' + document.getElementById('cartTotalAmount').textContent + '\n\nThank you for your order! We will contact you shortly to confirm your order.');
    cart = [];
    saveCart();
    updateCart();
    toggleCart();
}

// Villa modal functions
function openVillaModal(villaId) {
    const villa = villaData[villaId];
    const modal = document.getElementById('villaModal');
    
    if (!modal || !villa) return;
    
    document.getElementById('modalVillaImage').src = villa.image;
    document.getElementById('modalVillaName').textContent = villa.name;
    document.getElementById('modalVillaDescription').textContent = villa.description;
    document.getElementById('modalVillaPrice').textContent = `LKR ${villa.price.toLocaleString()} / night`;
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    const checkinDate = document.getElementById('checkinDate');
    const checkoutDate = document.getElementById('checkoutDate');
    
    if (checkinDate && checkoutDate) {
        checkinDate.min = today;
        checkoutDate.min = today;
    }
    
    modal.style.display = 'block';
}

function closeVillaModal() {
    const modal = document.getElementById('villaModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function bookVilla(event) {
    event.preventDefault();
    const checkin = document.getElementById('checkinDate').value;
    const checkout = document.getElementById('checkoutDate').value;
    const guests = document.getElementById('numGuests').value;
    
    alert(`Villa booking request submitted!\n\nCheck-in: ${checkin}\nCheck-out: ${checkout}\nGuests: ${guests}\n\nWe will contact you shortly to confirm your reservation.`);
    closeVillaModal();
    event.target.reset();
}

// Contact form
function submitContact(event) {
    event.preventDefault();
    alert('Thank you for contacting us! We will get back to you within 24 hours.');
    event.target.reset();
}

// Close modal when clicking outside
window.onclick = function(event) {
    const foodModal = document.getElementById('foodModal');
    const villaModal = document.getElementById('villaModal');
    
    if (event.target === foodModal) {
        closeFoodModal();
    }
    if (event.target === villaModal) {
        closeVillaModal();
    }
}

// Smooth scrolling for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
