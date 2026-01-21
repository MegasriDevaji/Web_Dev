// ========================================
// BookHub - Main JavaScript File
// ========================================

// Global Variables
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

// ========================================
// 1. DOCUMENT READY - Initialize on page load
// ========================================
$(document).ready(function() {
    console.log('BookHub initialized');
    
    // Initialize cart display
    updateCartCount();
    
    // Add to Cart Event Handler
    $(document).on('click', '.btn-add-cart', function() {
        addToCart(this);
    });
    
    // Wishlist Event Handler
    $(document).on('click', '.btn-wishlist', function() {
        toggleWishlist(this);
    });
    
    // Search functionality (AJAX)
    $('.search-bar input').on('keyup', function() {
        searchBooks($(this).val());
    });
    
    // Filter handlers
    $('.filter-group select').change(function() {
        filterBooks();
    });
    
    // Cart icon click
    $('.cart-icon').click(function() {
        viewCart();
    });
    
    // User icon click
    $('.user-icon').click(function() {
        toggleUserMenu();
    });
    
    // Start Shopping button
    $('.hero button').click(function() {
        $('html, body').animate({scrollTop: $('.filters').offset().top}, 500);
    });
});

// ========================================
// 2. SHOPPING CART FUNCTIONS
// ========================================

function addToCart(button) {
    // Get book details from card
    const bookCard = $(button).closest('.book-card');
    const book = {
        id: Date.now(),
        title: bookCard.find('.book-title').text(),
        author: bookCard.find('.book-author').text(),
        price: parseFloat(bookCard.find('.book-price').text().replace('$', '')),
        quantity: 1
    };
    
    // Check if book already in cart
    const existingItem = cart.find(item => item.title === book.title);
    
    if (existingItem) {
        existingItem.quantity++;
        showNotification(book.title + ' quantity updated!', 'info');
    } else {
        cart.push(book);
        showNotification(book.title + ' added to cart!', 'success');
    }
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    // Animate button
    $(button).css('background-color', '#27ae60');
    $(button).text('Added ✓');
    setTimeout(() => {
        $(button).css('background-color', '#3498db');
        $(button).text('Add to Cart');
    }, 2000);
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    $('.cart-count').text(totalItems);
}

function viewCart() {
    let cartHTML = '<h3>Shopping Cart</h3>';
    
    if (cart.length === 0) {
        cartHTML += '<p>Your cart is empty</p>';
    } else {
        cartHTML += '<div style="max-height: 400px; overflow-y: auto;">';
        cart.forEach((item, index) => {
            cartHTML += `
                <div style="border-bottom: 1px solid #eee; padding: 10px 0; display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <strong>${item.title}</strong><br>
                        ${item.author}<br>
                        $${item.price.toFixed(2)} x ${item.quantity}
                    </div>
                    <button onclick="removeFromCart(${index})" style="background-color: #e74c3c; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">Remove</button>
                </div>
            `;
        });
        cartHTML += '</div>';
        
        // Total calculation
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartHTML += `
            <div style="margin-top: 20px; border-top: 2px solid #333; padding-top: 10px;">
                <h4>Total: $${total.toFixed(2)}</h4>
                <button onclick="proceedToCheckout()" style="width: 100%; background-color: #27ae60; color: white; border: none; padding: 12px; border-radius: 4px; cursor: pointer; font-size: 16px;">Proceed to Checkout</button>
            </div>
        `;
    }
    
    showModal(cartHTML);
}

function removeFromCart(index) {
    const item = cart[index];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(item.title + ' removed from cart', 'info');
    viewCart();
}

// ========================================
// 3. WISHLIST FUNCTIONS
// ========================================

function toggleWishlist(button) {
    const bookCard = $(button).closest('.book-card');
    const bookTitle = bookCard.find('.book-title').text();
    
    const existingItem = wishlist.find(item => item === bookTitle);
    
    if (existingItem) {
        wishlist = wishlist.filter(item => item !== bookTitle);
        $(button).css('background-color', '#ecf0f1');
        $(button).css('color', '#e74c3c');
        showNotification('Removed from wishlist', 'info');
    } else {
        wishlist.push(bookTitle);
        $(button).css('background-color', '#e74c3c');
        $(button).css('color', 'white');
        showNotification('Added to wishlist!', 'success');
    }
    
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

// ========================================
// 4. SEARCH & FILTER FUNCTIONS (AJAX)
// ========================================

function searchBooks(query) {
    if (query.length === 0) {
        $('.book-card').show();
        return;
    }
    
    // Simulate AJAX search
    $.ajax({
        type: 'GET',
        url: 'api/search',
        data: { query: query },
        timeout: 500,
        success: function(data) {
            filterBooksBySearch(query);
        },
        error: function() {
            // Fallback to client-side search
            filterBooksBySearch(query);
        }
    });
}

function filterBooksBySearch(query) {
    const lowerQuery = query.toLowerCase();
    
    $('.book-card').each(function() {
        const title = $(this).find('.book-title').text().toLowerCase();
        const author = $(this).find('.book-author').text().toLowerCase();
        
        if (title.includes(lowerQuery) || author.includes(lowerQuery)) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}

function filterBooks() {
    const category = $('select').eq(0).val();
    const price = $('input[type="range"]').val();
    const rating = $('select').eq(1).val();
    
    // Simulate AJAX filter request
    $.ajax({
        type: 'POST',
        url: 'api/filter',
        data: JSON.stringify({ category: category, price: price, rating: rating }),
        contentType: 'application/json',
        timeout: 500,
        success: function(data) {
            console.log('Filter applied:', data);
        },
        error: function() {
            console.log('Using local filter');
        }
    });
}

// ========================================
// 5. CHECKOUT & PAYMENT FUNCTIONS
// ========================================

function proceedToCheckout() {
    closeModal();
    
    let checkoutHTML = `
        <h2>Checkout</h2>
        <div style="max-width: 600px; margin: 0 auto;">
            <!-- Order Summary -->
            <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <h3>Order Summary</h3>
                <div style="max-height: 300px; overflow-y: auto; margin-bottom: 15px;">
                    ${cart.map((item, index) => `
                        <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee;">
                            <span>${item.title} x${item.quantity}</span>
                            <span>$${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    `).join('')}
                </div>
                <div style="border-top: 2px solid #333; padding-top: 10px;">
                    <h4>Total: $${(cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)).toFixed(2)}</h4>
                </div>
            </div>
            
            <!-- Delivery Address -->
            <div style="margin-bottom: 20px;">
                <h3>Delivery Address</h3>
                <input type="text" id="address" placeholder="Enter your address" style="width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px;">
                <input type="text" id="city" placeholder="City" style="width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px;">
                <input type="text" id="zipcode" placeholder="Zip Code" style="width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px;">
            </div>
            
            <!-- Shipping Method -->
            <div style="margin-bottom: 20px;">
                <h3>Shipping Method</h3>
                <label style="display: block; margin-bottom: 10px;">
                    <input type="radio" name="shipping" value="standard" checked> Standard (5-7 days) - Free
                </label>
                <label style="display: block; margin-bottom: 10px;">
                    <input type="radio" name="shipping" value="express"> Express (2-3 days) - $9.99
                </label>
                <label style="display: block;">
                    <input type="radio" name="shipping" value="overnight"> Overnight (Next day) - $24.99
                </label>
            </div>
            
            <!-- Proceed to Payment -->
            <button onclick="proceedToPayment()" style="width: 100%; background-color: #27ae60; color: white; border: none; padding: 12px; border-radius: 4px; cursor: pointer; font-size: 16px; font-weight: bold;">Proceed to Payment</button>
        </div>
    `;
    
    showModal(checkoutHTML);
}

function proceedToPayment() {
    // Validate address
    const address = $('#address').val();
    const city = $('#city').val();
    const zipcode = $('#zipcode').val();
    
    if (!address || !city || !zipcode) {
        showNotification('Please fill in all address fields', 'error');
        return;
    }
    
    closeModal();
    
    let paymentHTML = `
        <h2>Payment Details</h2>
        <div style="max-width: 600px; margin: 0 auto;">
            <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <h4>Order Total: $${(cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)).toFixed(2)}</h4>
            </div>
            
            <form id="paymentForm">
                <div style="margin-bottom: 20px;">
                    <label>Cardholder Name</label>
                    <input type="text" id="cardName" placeholder="John Doe" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
                </div>
                
                <div style="margin-bottom: 20px;">
                    <label>Card Number</label>
                    <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" maxlength="19" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
                    <div>
                        <label>Expiry Date</label>
                        <input type="text" id="cardExpiry" placeholder="MM/YY" maxlength="5" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
                    </div>
                    <div>
                        <label>CVV</label>
                        <input type="text" id="cardCVV" placeholder="123" maxlength="3" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
                    </div>
                </div>
                
                <button type="submit" style="width: 100%; background-color: #e74c3c; color: white; border: none; padding: 12px; border-radius: 4px; cursor: pointer; font-size: 16px; font-weight: bold;">Complete Payment</button>
            </form>
            
            <p style="text-align: center; margin-top: 20px; color: #7f8c8d; font-size: 12px;">
                This is a MOCK payment system for learning purposes.<br>
                Use test card: 4242 4242 4242 4242
            </p>
        </div>
    `;
    
    showModal(paymentHTML);
    
    // Payment form submission
    $(document).off('submit', '#paymentForm').on('submit', '#paymentForm', function(e) {
        e.preventDefault();
        processPayment();
    });
}

function processPayment() {
    const cardName = $('#cardName').val();
    const cardNumber = $('#cardNumber').val();
    const cardExpiry = $('#cardExpiry').val();
    const cardCVV = $('#cardCVV').val();
    
    // Validate
    if (!cardName || !cardNumber || !cardExpiry || !cardCVV) {
        showNotification('Please fill in all payment details', 'error');
        return;
    }
    
    if (cardNumber.replace(/\s/g, '').length !== 16) {
        showNotification('Card number must be 16 digits', 'error');
        return;
    }
    
    if (cardCVV.length !== 3) {
        showNotification('CVV must be 3 digits', 'error');
        return;
    }
    
    // Show loading
    showNotification('Processing payment...', 'info');
    
    // Simulate AJAX payment request
    $.ajax({
        type: 'POST',
        url: '/api/process-payment',
        data: JSON.stringify({
            cardName: cardName,
            cardNumberLast4: cardNumber.slice(-4),
            amount: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            orderId: 'ORD' + Date.now()
        }),
        contentType: 'application/json',
        timeout: 2000,
        success: function(response) {
            paymentSuccess(response);
        },
        error: function() {
            // Simulate success even if API fails (mock payment)
            const orderId = 'ORD' + Date.now();
            const transactionId = 'TXN' + Date.now();
            paymentSuccess({ 
                success: true, 
                orderId: orderId,
                transactionId: transactionId,
                message: 'Payment processed successfully'
            });
        }
    });
}

function paymentSuccess(response) {
    const orderId = response.orderId || 'ORD' + Date.now();
    const transactionId = response.transactionId || 'TXN' + Date.now();
    
    closeModal();
    
    let confirmationHTML = `
        <div style="text-align: center; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <h2 style="color: #27ae60; font-size: 48px;">✓</h2>
            <h2>Order Confirmed!</h2>
            <p style="font-size: 18px; margin: 20px 0;">Thank you for your purchase!</p>
            
            <div style="background: #f9f9f9; padding: 30px; border-radius: 8px; margin: 20px 0; text-align: left;">
                <p><strong>Order ID:</strong> ${orderId}</p>
                <p><strong>Transaction ID:</strong> ${transactionId}</p>
                <p><strong>Total Amount:</strong> $${(cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)).toFixed(2)}</p>
                <p><strong>Status:</strong> <span style="color: #27ae60;">✓ Success</span></p>
                <p><strong>Estimated Delivery:</strong> 5-7 business days</p>
            </div>
            
            <div style="background: #e8f5e9; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                <p>A confirmation email has been sent to your registered email address.</p>
            </div>
            
            <button onclick="completeOrder()" style="width: 100%; background-color: #3498db; color: white; border: none; padding: 12px; border-radius: 4px; cursor: pointer; font-size: 16px; font-weight: bold;">Continue Shopping</button>
        </div>
    `;
    
    showModal(confirmationHTML);
    
    // Clear cart
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function completeOrder() {
    closeModal();
    location.reload();
}

// ========================================
// 6. UI UTILITY FUNCTIONS
// ========================================

function showNotification(message, type = 'info') {
    const bgColor = {
        'success': '#27ae60',
        'error': '#e74c3c',
        'info': '#3498db',
        'warning': '#f39c12'
    };
    
    const notification = $(`
        <div style="position: fixed; top: 20px; right: 20px; background-color: ${bgColor[type]}; color: white; padding: 15px 20px; border-radius: 4px; z-index: 10000; animation: slideIn 0.3s ease-out;">
            ${message}
        </div>
    `);
    
    $('body').append(notification);
    
    setTimeout(() => {
        notification.fadeOut(300, function() {
            $(this).remove();
        });
    }, 3000);
}

function showModal(html) {
    // Remove existing modal
    closeModal();
    
    const modal = $(`
        <div id="modal-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); z-index: 9999; display: flex; align-items: center; justify-content: center;">
            <div id="modal-content" style="background: white; padding: 30px; border-radius: 8px; max-width: 600px; width: 90%; max-height: 80vh; overflow-y: auto; position: relative;">
                <button onclick="closeModal()" style="position: absolute; top: 10px; right: 10px; background: #e74c3c; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 18px;">×</button>
                ${html}
            </div>
        </div>
    `);
    
    $('body').append(modal);
    
    // Close modal on overlay click
    $('#modal-overlay').click(function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
}

function closeModal() {
    $('#modal-overlay').fadeOut(300, function() {
        $(this).remove();
    });
}

function toggleUserMenu() {
    const userMenu = $(`
        <div style="position: absolute; top: 60px; right: 20px; background: white; border: 1px solid #bdc3c7; border-radius: 4px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); z-index: 1000;">
            <a href="javascript:void(0)" onclick="showLoginForm()" style="display: block; padding: 10px 20px; text-decoration: none; color: #333; border-bottom: 1px solid #eee;">Login</a>
            <a href="javascript:void(0)" onclick="showRegisterForm()" style="display: block; padding: 10px 20px; text-decoration: none; color: #333; border-bottom: 1px solid #eee;">Register</a>
            <a href="javascript:void(0)" onclick="viewWishlist()" style="display: block; padding: 10px 20px; text-decoration: none; color: #333;">My Wishlist</a>
        </div>
    `);
    
    $('body').append(userMenu);
    
    // Close menu when clicking elsewhere
    $(document).one('click', function() {
        userMenu.fadeOut(200, function() {
            $(this).remove();
        });
    });
}

function showLoginForm() {
    const loginHTML = `
        <h2>Login to BookHub</h2>
        <form style="max-width: 400px; margin: 0 auto;">
            <div style="margin-bottom: 15px;">
                <label>Email</label>
                <input type="email" placeholder="your@email.com" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label>Password</label>
                <input type="password" placeholder="••••••••" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
            </div>
            <button type="submit" style="width: 100%; background-color: #3498db; color: white; border: none; padding: 10px; border-radius: 4px; cursor: pointer;">Login</button>
        </form>
    `;
    showModal(loginHTML);
}

function showRegisterForm() {
    const registerHTML = `
        <h2>Register with BookHub</h2>
        <form style="max-width: 400px; margin: 0 auto;">
            <div style="margin-bottom: 15px;">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label>Email</label>
                <input type="email" placeholder="your@email.com" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label>Password</label>
                <input type="password" placeholder="••••••••" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label>Confirm Password</label>
                <input type="password" placeholder="••••••••" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
            </div>
            <button type="submit" style="width: 100%; background-color: #27ae60; color: white; border: none; padding: 10px; border-radius: 4px; cursor: pointer;">Register</button>
        </form>
    `;
    showModal(registerHTML);
}

function viewWishlist() {
    closeModal();
    let wishlistHTML = '<h3>My Wishlist</h3>';
    
    if (wishlist.length === 0) {
        wishlistHTML += '<p>Your wishlist is empty</p>';
    } else {
        wishlistHTML += '<ul style="list-style: none; padding: 0;">';
        wishlist.forEach(item => {
            wishlistHTML += `<li style="padding: 10px 0; border-bottom: 1px solid #eee;">📖 ${item}</li>`;
        });
        wishlistHTML += '</ul>';
    }
    
    showModal(wishlistHTML);
}

// ========================================
// 7. ANIMATIONS
// ========================================

// Add CSS animation
$('head').append(`
    <style>
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    </style>
`);

// ========================================
// 8. FORMAT CARD NUMBER INPUT
// ========================================

$(document).on('input', '#cardNumber', function() {
    let value = $(this).val().replace(/\s/g, '');
    let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
    $(this).val(formattedValue);
});

$(document).on('input', '#cardExpiry', function() {
    let value = $(this).val().replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    $(this).val(value);
});

// ========================================
// Console Log for debugging
// ========================================

console.log('Cart:', cart);
console.log('Wishlist:', wishlist);
