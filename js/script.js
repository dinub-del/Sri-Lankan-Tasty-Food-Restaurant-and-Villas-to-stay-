// Sri Lankan Tasty Food - Main JavaScript

// Food data with specific extras for each dish
const foodItems = {
    'chicken-curry': {
        name: 'Chicken Curry',
        price: 1500,
        image: 'images/Chicken-Curry.jpg',
        description: 'A rich, aromatic curry made with tender chicken pieces simmered in coconut milk and traditional Sri Lankan spices including cinnamon, cardamom, and curry leaves. Served with steamed rice.',
        extras: [
            { id: 'rice', name: 'Extra Rice', price: 200 },
            { id: 'papadam', name: 'Papadam (4 pieces)', price: 150 },
            { id: 'egg', name: 'Extra Boiled Egg', price: 100 },
            { id: 'sambol', name: 'Coconut Sambol', price: 250 },
            { id: 'dhal', name: 'Dhal Curry', price: 180 },
            { id: 'pickle', name: 'Mango Pickle', price: 120 }
        ]
    },
    'prawns-curry': {
        name: 'Prawns Garlic Curry',
        price: 2200,
        image: 'images/Prawns-Garlic-Curry.jpg',
        description: 'Fresh prawns cooked in a fragrant garlic-infused curry sauce with a perfect blend of coastal spices. A seafood lover\'s dream with hints of tamarind and coconut.',
        extras: [
            { id: 'rice', name: 'Extra Rice', price: 200 },
            { id: 'prawns', name: 'Extra Prawns (3 pieces)', price: 500 },
            { id: 'garlic-bread', name: 'Garlic Bread', price: 300 },
            { id: 'sambol', name: 'Coconut Sambol', price: 250 },
            { id: 'salad', name: 'Green Salad', price: 180 },
            { id: 'lemon', name: 'Extra Lemon Wedges', price: 50 }
        ]
    },
    'lamprais': {
        name: 'Lamprais',
        price: 1800,
        image: 'images/lamprais.jpg',
        description: 'A Dutch-Burgher delicacy featuring yellow rice, meat curry, eggplant pickle, seeni sambol, and boiled egg - all wrapped and baked in banana leaf for an authentic experience.',
        extras: [
            { id: 'egg', name: 'Extra Boiled Egg', price: 100 },
            { id: 'meat', name: 'Extra Meat Curry', price: 350 },
            { id: 'seeni-sambol', name: 'Extra Seeni Sambol', price: 200 },
            { id: 'brinjal', name: 'Extra Brinjal Moju', price: 180 },
            { id: 'frikkadel', name: 'Frikkadel (Meatball)', price: 150 },
            { id: 'cutlet', name: 'Fish Cutlet', price: 200 }
        ]
    },
    'kottu': {
        name: 'Kottu Roti',
        price: 1200,
        image: 'images/Kottu-Roti.jpg',
        description: 'Sri Lanka\'s famous street food with chopped roti, fresh vegetables, egg, and your choice of meat, stir-fried on a hot griddle with aromatic spices. Listen for the rhythmic chopping sound!',
        extras: [
            { id: 'egg', name: 'Extra Egg', price: 100 },
            { id: 'chicken', name: 'Extra Chicken', price: 250 },
            { id: 'cheese', name: 'Cheese Topping', price: 180 },
            { id: 'vegetables', name: 'Extra Vegetables', price: 150 },
            { id: 'gravy', name: 'Extra Curry Gravy', price: 120 },
            { id: 'chili', name: 'Spicy Chili Paste', price: 80 }
        ]
    },
    'devilled': {
        name: 'Devilled Chicken',
        price: 1400,
        image: 'images/Devilled.jpg',
        description: 'Spicy, tangy stir-fried chicken with colorful bell peppers, onions, and chili sauce. A Sri Lankan-Chinese fusion favorite that packs heat and flavor in every bite.',
        extras: [
            { id: 'rice', name: 'Steamed Rice', price: 200 },
            { id: 'fried-rice', name: 'Egg Fried Rice', price: 350 },
            { id: 'noodles', name: 'Noodles', price: 300 },
            { id: 'chicken', name: 'Extra Chicken', price: 250 },
            { id: 'cashew', name: 'Cashew Nuts', price: 200 },
            { id: 'extra-spicy', name: 'Make it Extra Spicy', price: 0 }
        ]
    },
    'biriyani': {
        name: 'Sri Lankan Biriyani',
        price: 1600,
        image: 'images/Biriyani.jpg',
        description: 'Fragrant basmati rice layered with spiced meat, boiled eggs, fried onions, and cashews. Served with mint raita, curry, and pickle - a complete meal in itself.',
        extras: [
            { id: 'egg', name: 'Extra Boiled Egg', price: 100 },
            { id: 'meat', name: 'Extra Meat Portion', price: 400 },
            { id: 'raita', name: 'Extra Raita', price: 150 },
            { id: 'papadam', name: 'Papadam (4 pieces)', price: 150 },
            { id: 'curry', name: 'Extra Curry', price: 200 },
            { id: 'fried-onions', name: 'Fried Onions', price: 100 }
        ]
    }
};

// Villa data with amenities
const villaData = {
    'talpe': {
        name: 'Villa in Talpe',
        price: 35000,
        image: 'images/Villa-in-Talpe.webp',
        description: 'Beachfront luxury villa with stunning ocean views and direct beach access. Features 3 spacious bedrooms, private infinity pool, fully equipped kitchen, and outdoor dining area. Perfect for romantic getaways or small families.',
        amenities: [
            { id: 'breakfast', name: 'Daily Breakfast', price: 2500 },
            { id: 'airport', name: 'Airport Pickup', price: 5000 },
            { id: 'chef', name: 'Private Chef (per day)', price: 8000 },
            { id: 'spa', name: 'In-Villa Spa Treatment', price: 6500 },
            { id: 'bbq', name: 'BBQ Setup & Service', price: 4000 },
            { id: 'surfing', name: 'Surfing Lessons', price: 3500 }
        ]
    },
    'kandy': {
        name: 'Marabedda Garden Resort, Kandy',
        price: 42000,
        image: 'images/Marabedda-Garden-Resort-Kandy.jpg',
        description: 'Nestled in lush tea plantations with breathtaking mountain views. This 4-bedroom resort villa offers authentic hill country hospitality, traditional architecture, nature trails, and bird watching opportunities.',
        amenities: [
            { id: 'breakfast', name: 'Daily Breakfast', price: 2500 },
            { id: 'airport', name: 'Airport Pickup', price: 7000 },
            { id: 'tea-tour', name: 'Tea Plantation Tour', price: 4500 },
            { id: 'trekking', name: 'Guided Trekking', price: 3000 },
            { id: 'cultural', name: 'Cultural Dance Show', price: 5000 },
            { id: 'cooking', name: 'Cooking Class', price: 4000 }
        ]
    },
    'unawatuna': {
        name: 'Villa in Unawatuna',
        price: 38000,
        image: 'images/Villa-in-Unawatuna.webp',
        description: 'Modern villa just steps away from the golden beaches of Unawatuna. Features 5 bedrooms, large garden with BBQ area, outdoor shower, and spacious living areas. Ideal for families and groups.',
        amenities: [
            { id: 'breakfast', name: 'Daily Breakfast', price: 3000 },
            { id: 'airport', name: 'Airport Pickup', price: 5500 },
            { id: 'bbq', name: 'BBQ Setup & Service', price: 4500 },
            { id: 'snorkeling', name: 'Snorkeling Equipment', price: 2000 },
            { id: 'whale', name: 'Whale Watching Tour', price: 8000 },
            { id: 'massage', name: 'Beach Massage', price: 3500 }
        ]
    },
    'private': {
        name: 'Exclusive Private Villa',
        price: 55000,
        image: 'images/Private-Villa.jpg',
        description: 'Secluded luxury villa with 6 bedrooms, infinity pool, and panoramic views. Complete privacy with personalized butler service, private chef, in-villa spa treatments, and premium amenities throughout.',
        amenities: [
            { id: 'breakfast', name: 'Daily Gourmet Breakfast', price: 4000 },
            { id: 'airport', name: 'Luxury Airport Transfer', price: 10000 },
            { id: 'butler', name: '24/7 Butler Service', price: 12000 },
            { id: 'chef', name: 'Private Chef (3 meals)', price: 15000 },
            { id: 'spa', name: 'Full Spa Package', price: 12000 },
            { id: 'helicopter', name: 'Helicopter Tour', price: 50000 }
        ]
    },
    '98acres': {
        name: '98 Acres Resort & Spa',
        price: 48000,
        image: 'images/98 Acres Resort & Spa.avif',
        description: 'Award-winning eco-resort surrounded by pristine tea estates. Features luxury suites, world-class spa, organic farm-to-table restaurant, guided nature walks, and sustainable tourism practices.',
        amenities: [
            { id: 'breakfast', name: 'Organic Breakfast', price: 3500 },
            { id: 'airport', name: 'Airport Pickup', price: 8000 },
            { id: 'spa', name: 'Spa Treatment Package', price: 9000 },
            { id: 'yoga', name: 'Daily Yoga Sessions', price: 2500 },
            { id: 'nature', name: 'Nature Walk Guide', price: 2000 },
            { id: 'dinner', name: 'Special Dinner Experience', price: 6500 }
        ]
    }
};

// Cart management
let cart = [];
let currentFood = null;
let currentVilla = null;

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
    
    // Build extras dynamically for this specific dish
    const extrasContainer = document.querySelector('.extras-section');
    let extrasHTML = '<h4 style="color: #003049; margin-bottom: 1rem;">Add Extra Items:</h4>';
    
    currentFood.extras.forEach((extra, index) => {
        extrasHTML += `
            <div class="extra-item">
                <input type="checkbox" id="extra${index}" value="${extra.price}" data-name="${extra.name}">
                <label for="extra${index}">${extra.name}</label>
                <span class="extra-price">${extra.price > 0 ? '+LKR ' + extra.price.toLocaleString() : 'Free'}</span>
            </div>
        `;
    });
    
    extrasContainer.innerHTML = extrasHTML;
    
    // Re-attach event listeners to new checkboxes
    document.querySelectorAll('.extra-item input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', updateModalTotal);
    });
    
    updateModalTotal();
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeFoodModal() {
    const modal = document.getElementById('foodModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
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

function addToCart() {
    const quantity = parseInt(document.getElementById('quantityValue').textContent);
    const extras = [];
    
    document.querySelectorAll('.extra-item input[type="checkbox"]:checked').forEach(checkbox => {
        extras.push({
            name: checkbox.dataset.name,
            price: parseInt(checkbox.value)
        });
    });

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
    
    // Show success message with details
    let extrasText = extras.length > 0 ? '\nExtras: ' + extras.map(e => e.name).join(', ') : '';
    alert(`✅ ${currentFood.name} added to cart!\n\nQuantity: ${quantity}${extrasText}\n\nTotal: LKR ${totalPrice.toLocaleString()}`);
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
    currentVilla = villaData[villaId];
    const modal = document.getElementById('villaModal');
    
    if (!modal || !currentVilla) return;
    
    document.getElementById('modalVillaImage').src = currentVilla.image;
    document.getElementById('modalVillaName').textContent = currentVilla.name;
    document.getElementById('modalVillaDescription').textContent = currentVilla.description;
    document.getElementById('modalVillaPrice').textContent = `LKR ${currentVilla.price.toLocaleString()} / night`;
    
    // Build amenities dynamically for this specific villa
    const amenitiesContainer = document.getElementById('villaAmenities');
    if (amenitiesContainer) {
        let amenitiesHTML = '<h4 style="color: #003049; margin-bottom: 1rem; margin-top: 1.5rem;">Add Extra Services & Amenities:</h4>';
        
        currentVilla.amenities.forEach((amenity, index) => {
            amenitiesHTML += `
                <div class="extra-item">
                    <input type="checkbox" id="amenity${index}" value="${amenity.price}" data-name="${amenity.name}">
                    <label for="amenity${index}">${amenity.name}</label>
                    <span class="extra-price">${amenity.price > 0 ? '+LKR ' + amenity.price.toLocaleString() : 'Included'}</span>
                </div>
            `;
        });
        
        amenitiesContainer.innerHTML = amenitiesHTML;
        
        // Add event listeners to amenity checkboxes
        document.querySelectorAll('#villaAmenities input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', updateVillaTotal);
        });
    }
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    const checkinDate = document.getElementById('checkinDate');
    const checkoutDate = document.getElementById('checkoutDate');
    
    if (checkinDate && checkoutDate) {
        checkinDate.min = today;
        checkoutDate.min = today;
        checkinDate.value = '';
        checkoutDate.value = '';
    }
    
    updateVillaTotal();
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function updateVillaTotal() {
    if (!currentVilla) return;
    
    const checkinDate = document.getElementById('checkinDate').value;
    const checkoutDate = document.getElementById('checkoutDate').value;
    
    let nights = 1;
    if (checkinDate && checkoutDate) {
        const checkin = new Date(checkinDate);
        const checkout = new Date(checkoutDate);
        nights = Math.max(1, Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24)));
    }
    
    let total = currentVilla.price * nights;
    
    // Add amenities cost (per stay, not per night)
    document.querySelectorAll('#villaAmenities input[type="checkbox"]:checked').forEach(checkbox => {
        total += parseInt(checkbox.value);
    });
    
    const totalEl = document.getElementById('villaTotal');
    const nightsEl = document.getElementById('villaEstimatedNights');
    
    if (totalEl) {
        totalEl.textContent = `LKR ${total.toLocaleString()}`;
    }
    if (nightsEl) {
        nightsEl.textContent = `${nights} night${nights > 1 ? 's' : ''}`;
    }
}

function closeVillaModal() {
    const modal = document.getElementById('villaModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function bookVilla(event) {
    event.preventDefault();
    const checkin = document.getElementById('checkinDate').value;
    const checkout = document.getElementById('checkoutDate').value;
    const guests = document.getElementById('numGuests').value;
    const name = event.target.querySelector('input[type="text"]').value;
    
    // Get selected amenities
    const selectedAmenities = [];
    document.querySelectorAll('#villaAmenities input[type="checkbox"]:checked').forEach(checkbox => {
        selectedAmenities.push(checkbox.dataset.name);
    });
    
    // Calculate nights
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);
    const nights = Math.max(1, Math.ceil((checkoutDate - checkinDate) / (1000 * 60 * 60 * 24)));
    
    const total = document.getElementById('villaTotal').textContent;
    
    let amenitiesText = selectedAmenities.length > 0 ? '\n\nSelected Services:\n• ' + selectedAmenities.join('\n• ') : '';
    
    alert(`🏖️ Villa Booking Request Submitted!\n\n${currentVilla.name}\n\nGuest: ${name}\nCheck-in: ${checkin}\nCheck-out: ${checkout}\nNights: ${nights}\nGuests: ${guests}${amenitiesText}\n\nEstimated Total: ${total}\n\nWe will contact you shortly to confirm your reservation!`);
    
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
}

// Initialize date constraints for villa booking
function initDateConstraints() {
    const checkinDate = document.getElementById('checkinDate');
    const checkoutDate = document.getElementById('checkoutDate');
    
    if (checkinDate) {
        checkinDate.addEventListener('change', function() {
            if (checkoutDate) {
                const checkin = new Date(this.value);
                checkin.setDate(checkin.getDate() + 1);
                checkoutDate.min = checkin.toISOString().split('T')[0];
                updateVillaTotal();
            }
        });
    }
    
    if (checkoutDate) {
        checkoutDate.addEventListener('change', function() {
            updateVillaTotal();
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
