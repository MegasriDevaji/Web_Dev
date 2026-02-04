// ========================================
// BookHub - Main JavaScript File
// Complete E-commerce Platform
// ========================================

// Global Variables
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let users = JSON.parse(localStorage.getItem('users')) || [];
let books = JSON.parse(localStorage.getItem('books')) || [];
let orders = JSON.parse(localStorage.getItem('orders')) || [];
let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
let coupons = JSON.parse(localStorage.getItem('coupons')) || [];

// Initialize with sample data if empty
function initializeSampleData() {
    if (books.length === 0) {
        books = [
            { id: 1, isbn: '978-0743273565', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'Fiction', price: 12.99, discountPrice: 9.99, rating: 4.5, reviews: 320, stock: 50, description: 'A classic American novel about the Jazz Age', image: 'book1', published: 1925, language: 'English' },
            { id: 2, isbn: '978-0061120084', title: 'To Kill a Mockingbird', author: 'Harper Lee', category: 'Fiction', price: 14.99, discountPrice: 11.99, rating: 4.8, reviews: 450, stock: 45, description: 'A gripping tale of racial injustice and growing up', image: 'book2', published: 1960, language: 'English' },
            { id: 3, isbn: '978-0451524935', title: '1984', author: 'George Orwell', category: 'Fiction', price: 13.99, discountPrice: 10.99, rating: 4.6, reviews: 380, stock: 40, description: 'A dystopian masterpiece about totalitarianism', image: 'book3', published: 1949, language: 'English' },
            { id: 4, isbn: '978-0141439518', title: 'Pride and Prejudice', author: 'Jane Austen', category: 'Romance', price: 11.99, discountPrice: 8.99, rating: 4.7, reviews: 410, stock: 55, description: 'A timeless romance of manners and wit', image: 'book4', published: 1813, language: 'English' },
            { id: 5, isbn: '978-0316769174', title: 'The Catcher in the Rye', author: 'J.D. Salinger', category: 'Fiction', price: 12.99, discountPrice: 9.99, rating: 4.2, reviews: 290, stock: 35, description: 'A coming-of-age story of teenage angst', image: 'book5', published: 1951, language: 'English' },
            { id: 6, isbn: '978-0143039990', title: 'Jane Eyre', author: 'Charlotte Brontë', category: 'Romance', price: 13.99, discountPrice: 10.99, rating: 4.6, reviews: 360, stock: 42, description: 'A Gothic romance with a strong female protagonist', image: 'book6', published: 1847, language: 'English' },
            { id: 7, isbn: '978-0547928227', title: 'The Hobbit', author: 'J.R.R. Tolkien', category: 'Fantasy', price: 15.99, discountPrice: 12.99, rating: 4.9, reviews: 520, stock: 60, description: 'An epic fantasy adventure in Middle Earth', image: 'book7', published: 1937, language: 'English' },
            { id: 8, isbn: '978-0062316097', title: 'Sapiens', author: 'Yuval Noah Harari', category: 'Non-Fiction', price: 18.99, discountPrice: 14.99, rating: 4.4, reviews: 340, stock: 38, description: 'A sweeping history of humankind', image: 'book8', published: 2011, language: 'English' },
            { id: 9, isbn: '978-0735211292', title: 'Atomic Habits', author: 'James Clear', category: 'Non-Fiction', price: 16.99, discountPrice: 13.99, rating: 4.7, reviews: 480, stock: 70, description: 'Build better habits through tiny changes', image: 'book9', published: 2018, language: 'English' },
            { id: 10, isbn: '978-0062693662', title: 'The Girl on the Train', author: 'Paula Hawkins', category: 'Mystery', price: 14.99, discountPrice: 11.99, rating: 4.3, reviews: 350, stock: 48, description: 'A psychological thriller with unreliable narrators', image: 'book10', published: 2015, language: 'English' },
            { id: 11, isbn: '978-0134685991', title: 'Clean Code', author: 'Robert C. Martin', category: 'Science', price: 32.99, discountPrice: 24.99, rating: 4.8, reviews: 420, stock: 30, description: 'A handbook of agile software craftsmanship', image: 'book11', published: 2008, language: 'English' },
            { id: 12, isbn: '978-0321125215', title: 'Design Patterns', author: 'Gang of Four', category: 'Science', price: 54.99, discountPrice: 44.99, rating: 4.5, reviews: 220, stock: 25, description: 'Elements of reusable object-oriented software', image: 'book12', published: 1994, language: 'English' },
            { id: 13, isbn: '978-1491927281', title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', category: 'Science', price: 29.99, discountPrice: 22.99, rating: 4.3, reviews: 280, stock: 35, description: 'The essential guide to JavaScript programming', image: 'book13', published: 2008, language: 'English' },
            { id: 14, isbn: '978-0134685991', title: 'The Pragmatic Programmer', author: 'Andrew Hunt', category: 'Science', price: 49.99, discountPrice: 39.99, rating: 4.7, reviews: 310, stock: 28, description: 'Your journey to mastery in software development', image: 'book14', published: 1999, language: 'English' },
            { id: 15, isbn: '978-0262033848', title: 'Introduction to Algorithms', author: 'Cormen, Leiserson', category: 'Science', price: 89.99, discountPrice: 69.99, rating: 4.6, reviews: 190, stock: 20, description: 'The definitive computer science algorithms textbook', image: 'book15', published: 1990, language: 'English' }
        ];
        localStorage.setItem('books', JSON.stringify(books));
    }
    
    if (coupons.length === 0) {
        coupons = [
            { code: 'WELCOME10', discount: 10, type: 'percentage', validTill: '2026-12-31', minPurchase: 20 },
            { code: 'SAVE15', discount: 15, type: 'percentage', validTill: '2026-12-31', minPurchase: 50 },
            { code: 'FLAT5', discount: 5, type: 'fixed', validTill: '2026-12-31', minPurchase: 15 }
        ];
        localStorage.setItem('coupons', JSON.stringify(coupons));
    }
    
    if (users.length === 0) {
        users = [
            { id: 1, name: 'John Doe', email: 'john@example.com', password: 'password123', addresses: [{ type: 'shipping', street: '123 Main St', city: 'New York', zip: '10001' }] },
            { id: 2, name: 'Jane Smith', email: 'jane@example.com', password: 'secure456', addresses: [] }
        ];
        localStorage.setItem('users', JSON.stringify(users));
    }
}

// ========================================
// 1. DOCUMENT READY - Initialize on page load
// ========================================
$(document).ready(function() {
    console.log('BookHub initialized');
    
    // Initialize sample data
    initializeSampleData();
    
    // Initialize cart display
    updateCartCount();
    
    // Check if user is logged in
    if (currentUser) {
        updateUserIcon();
    }
    
    // Add to Cart Event Handler
    $(document).on('click', '.btn-add-cart', function() {
        const bookId = $(this).attr('data-book-id');
        if (bookId) {
            const book = books.find(b => b.id == bookId);
            if (book) addToCartBook(book);
        } else {
            addToCart(this);
        }
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

function addToCartBook(book) {
    // Add book from book object
    const cartItem = {
        id: book.id,
        title: book.title,
        author: book.author,
        price: book.discountPrice,
        quantity: 1
    };
    
    // Check if book already in cart
    const existingItem = cart.find(item => item.id === cartItem.id);
    
    if (existingItem) {
        existingItem.quantity++;
        showNotification(book.title + ' quantity updated!', 'info');
    } else {
        cart.push(cartItem);
        showNotification(book.title + ' added to cart!', 'success');
    }
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

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
                    <div style="flex: 1;">
                        <strong>${item.title}</strong><br>
                        ${item.author}<br>
                        $${item.price.toFixed(2)} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}
                        <div style="margin-top: 5px;">
                            <button onclick="updateQuantity(${index}, ${item.quantity - 1})" style="padding: 3px 8px; margin-right: 5px;">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="updateQuantity(${index}, ${item.quantity + 1})" style="padding: 3px 8px; margin-left: 5px;">+</button>
                        </div>
                    </div>
                    <button onclick="removeFromCart(${index})" style="background-color: #e74c3c; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">Remove</button>
                </div>
            `;
        });
        cartHTML += '</div>';
        
        // Cart summary with discount
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const tax = subtotal * 0.1; // 10% tax
        let discount = 0;
        
        cartHTML += `
            <div style="margin-top: 20px;">
                <div style="margin-bottom: 10px;">
                    <label>Coupon Code:</label><br>
                    <input type="text" id="couponInput" placeholder="Enter coupon code" style="width: 70%; padding: 8px; margin-right: 5px; border: 1px solid #ccc; border-radius: 4px;">
                    <button onclick="applyCoupon()" style="padding: 8px 15px; background-color: #3498db; color: white; border: none; border-radius: 4px; cursor: pointer;">Apply</button>
                </div>
                <div id="couponMessage" style="margin-bottom: 10px; color: #27ae60; display: none;"></div>
            </div>
            
            <div style="margin-top: 20px; border-top: 2px solid #333; padding-top: 10px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <span>Subtotal:</span>
                    <span>$${subtotal.toFixed(2)}</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <span>Tax (10%):</span>
                    <span>$${tax.toFixed(2)}</span>
                </div>
                <div id="discountLine" style="display: none; justify-content: space-between; margin-bottom: 8px;">
                    <span>Discount:</span>
                    <span id="discountAmount">-$0.00</span>
                </div>
                <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: 18px;">
                    <span>Total:</span>
                    <span id="totalPrice">$${(subtotal + tax).toFixed(2)}</span>
                </div>
                <button onclick="proceedToCheckout()" style="width: 100%; background-color: #27ae60; color: white; border: none; padding: 12px; border-radius: 4px; cursor: pointer; font-size: 16px; margin-top: 15px;">Proceed to Checkout</button>
            </div>
        `;
    }
    
    showModal(cartHTML);
}

function updateQuantity(index, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(index);
    } else {
        cart[index].quantity = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        viewCart();
    }
}

function applyCoupon() {
    const code = $('#couponInput').val().toUpperCase().trim();
    if (!code) {
        showNotification('Please enter a coupon code', 'error');
        return;
    }
    
    const coupon = coupons.find(c => c.code === code);
    if (!coupon) {
        $('#couponMessage').html('❌ Invalid coupon code').css('color', '#e74c3c').show();
        return;
    }
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (subtotal < coupon.minPurchase) {
        showNotification(`Minimum purchase of $${coupon.minPurchase} required`, 'error');
        return;
    }
    
    localStorage.setItem('appliedCoupon', JSON.stringify(coupon));
    let discount = coupon.type === 'percentage' ? (subtotal * coupon.discount / 100) : coupon.discount;
    
    $('#discountLine').show();
    $('#discountAmount').text('-$' + discount.toFixed(2));
    $('#couponMessage').html('✓ Coupon applied successfully').css('color', '#27ae60').show();
    
    const tax = subtotal * 0.1;
    const total = subtotal + tax - discount;
    $('#totalPrice').text('$' + total.toFixed(2));
    
    setTimeout(() => $('#couponMessage').fadeOut(), 3000);
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
        processPayment(address, city, zipcode);
    });
}

function processPayment(address, city, zipcode) {
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
    setTimeout(() => {
        const orderId = 'ORD' + Date.now();
        const transactionId = 'TXN' + Date.now();
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const tax = subtotal * 0.1;
        
        // Create order
        const order = {
            id: orderId,
            userId: currentUser.id,
            date: new Date(),
            items: cart.map(item => ({
                id: item.id,
                title: item.title,
                author: item.author,
                price: item.price,
                quantity: item.quantity
            })),
            shippingAddress: {
                street: address,
                city: city,
                zip: zipcode
            },
            subtotal: subtotal,
            tax: tax,
            total: subtotal + tax,
            transactionId: transactionId,
            status: 'Pending',
            shippingMethod: $('input[name="shipping"]:checked').val() || 'standard'
        };
        
        orders.push(order);
        localStorage.setItem('orders', JSON.stringify(orders));
        
        paymentSuccess({
            success: true,
            orderId: orderId,
            transactionId: transactionId,
            message: 'Payment processed successfully'
        });
    }, 1500);
}

function paymentSuccess(response) {
    const orderId = response.orderId || 'ORD' + Date.now();
    const transactionId = response.transactionId || 'TXN' + Date.now();
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    closeModal();
    
    let confirmationHTML = `
        <div style="text-align: center; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <h2 style="color: #27ae60; font-size: 48px;">✓</h2>
            <h2>Order Confirmed!</h2>
            <p style="font-size: 18px; margin: 20px 0;">Thank you for your purchase!</p>
            
            <div style="background: #f9f9f9; padding: 30px; border-radius: 8px; margin: 20px 0; text-align: left;">
                <p><strong>Order ID:</strong> ${orderId}</p>
                <p><strong>Transaction ID:</strong> ${transactionId}</p>
                <p><strong>Total Amount:</strong> $${(subtotal * 1.1).toFixed(2)}</p>
                <p><strong>Status:</strong> <span style="color: #27ae60;">✓ Pending</span></p>
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
        <div id="modal-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.6); z-index: 9999; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(4px);">
            <div id="modal-content" style="background: white; padding: 40px; border-radius: 12px; max-width: 600px; width: 90%; max-height: 85vh; overflow-y: auto; position: relative; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);">
                <button onclick="closeModal()" style="position: absolute; top: 15px; right: 15px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 8px 12px; border-radius: 6px; cursor: pointer; font-size: 20px; font-weight: 300; transition: all 0.3s;">×</button>
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

function showLoginForm() {
    const loginHTML = `
        <h2 style="margin-bottom: 25px; color: #2c3e50;">Login to BookHub</h2>
        <form id="loginForm" class="auth-form">
            <div class="error-message" id="loginError"></div>
            <div class="form-group">
                <label for="loginEmail">Email Address</label>
                <input type="email" id="loginEmail" placeholder="your@email.com" required>
            </div>
            <div class="form-group password-toggle">
                <label for="loginPassword">Password</label>
                <input type="password" id="loginPassword" placeholder="••••••••" required>
                <button type="button" class="toggle-btn" onclick="togglePasswordVisibility('loginPassword')">👁️</button>
            </div>
            <div class="form-group" style="margin-bottom: 5px;">
                <input type="checkbox" id="rememberMe"> <label for="rememberMe" style="display: inline; margin: 0; font-weight: normal;">Remember me</label>
            </div>
            <button type="submit" class="auth-button auth-button-primary">Login</button>
            <div class="toggle-form">
                Don't have an account? <a onclick="switchToRegister()">Sign Up</a>
            </div>
        </form>
    `;
    showModal(loginHTML);
    
    $(document).off('submit', '#loginForm').on('submit', '#loginForm', function(e) {
        e.preventDefault();
        handleLogin();
    });
}

function handleLogin() {
    const email = $('#loginEmail').val().trim();
    const password = $('#loginPassword').val();
    const rememberMe = $('#rememberMe').is(':checked');
    
    // Validation
    if (!email || !password) {
        showErrorMessage('Please fill in all fields', 'loginError');
        return;
    }
    
    // Find user
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        // Successful login
        currentUser = {
            id: user.id,
            name: user.name,
            email: user.email
        };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        if (rememberMe) {
            localStorage.setItem('rememberMe', 'true');
        }
        
        closeModal();
        showNotification('Welcome back, ' + user.name + '!', 'success');
        updateUserIcon();
    } else {
        showErrorMessage('Invalid email or password', 'loginError');
    }
}

function showRegisterForm() {
    const registerHTML = `
        <h2 style="margin-bottom: 25px; color: #2c3e50;">Create BookHub Account</h2>
        <form id="registerForm" class="auth-form">
            <div class="error-message" id="registerError"></div>
            <div class="success-message" id="registerSuccess"></div>
            <div class="form-group">
                <label for="registerName">Full Name</label>
                <input type="text" id="registerName" placeholder="John Doe" required>
            </div>
            <div class="form-group">
                <label for="registerEmail">Email Address</label>
                <input type="email" id="registerEmail" placeholder="your@email.com" required>
            </div>
            <div class="form-group password-toggle">
                <label for="registerPassword">Password</label>
                <input type="password" id="registerPassword" placeholder="••••••••" required>
                <button type="button" class="toggle-btn" onclick="togglePasswordVisibility('registerPassword')">👁️</button>
                <div class="password-strength" id="passwordStrength"></div>
            </div>
            <div class="form-group password-toggle">
                <label for="registerConfirmPassword">Confirm Password</label>
                <input type="password" id="registerConfirmPassword" placeholder="••••••••" required>
                <button type="button" class="toggle-btn" onclick="togglePasswordVisibility('registerConfirmPassword')">👁️</button>
            </div>
            <div class="form-group">
                <input type="checkbox" id="agreeTerms" required> <label for="agreeTerms" style="display: inline; margin: 0; font-weight: normal;">I agree to the Terms & Conditions</label>
            </div>
            <button type="submit" class="auth-button auth-button-secondary">Create Account</button>
            <div class="toggle-form">
                Already have an account? <a onclick="switchToLogin()">Login</a>
            </div>
        </form>
    `;
    showModal(registerHTML);
    
    // Password strength indicator
    $(document).off('input', '#registerPassword').on('input', '#registerPassword', function() {
        checkPasswordStrength($(this).val());
    });
    
    $(document).off('submit', '#registerForm').on('submit', '#registerForm', function(e) {
        e.preventDefault();
        handleRegister();
    });
}

function handleRegister() {
    const name = $('#registerName').val().trim();
    const email = $('#registerEmail').val().trim();
    const password = $('#registerPassword').val();
    const confirmPassword = $('#registerConfirmPassword').val();
    const agreeTerms = $('#agreeTerms').is(':checked');
    
    // Validation
    if (!name || !email || !password || !confirmPassword) {
        showErrorMessage('Please fill in all fields', 'registerError');
        return;
    }
    
    if (!agreeTerms) {
        showErrorMessage('You must agree to the Terms & Conditions', 'registerError');
        return;
    }
    
    if (password !== confirmPassword) {
        showErrorMessage('Passwords do not match', 'registerError');
        return;
    }
    
    if (password.length < 6) {
        showErrorMessage('Password must be at least 6 characters', 'registerError');
        return;
    }
    
    // Check if email already exists
    if (users.find(u => u.email === email)) {
        showErrorMessage('Email already registered', 'registerError');
        return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showErrorMessage('Please enter a valid email address', 'registerError');
        return;
    }
    
    // Create new user
    const newUser = {
        id: Date.now(),
        name: name,
        email: email,
        password: password
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Clear form and show success message
    $('#registerError').hide();
    $('#registerForm')[0].reset();
    $('#registerSuccess').html('✓ Account created successfully! Logging you in...').show();
    
    setTimeout(() => {
        currentUser = {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email
        };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        closeModal();
        showNotification('Welcome to BookHub, ' + name + '!', 'success');
        updateUserIcon();
    }, 1500);
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
// 9. AUTHENTICATION HELPER FUNCTIONS
// ========================================

function updateUserIcon() {
    if (currentUser) {
        // User is logged in
        $('.user-icon').html('👤 ' + currentUser.name.split(' ')[0]);
    } else {
        // User is not logged in
        $('.user-icon').html('👤');
    }
}

function toggleUserMenu() {
    if (currentUser) {
        showUserProfile();
    } else {
        showAuthMenu();
    }
}

function showAuthMenu() {
    const menuHTML = `
        <div style="position: absolute; top: 60px; right: 20px; background: white; border: 1px solid #bdc3c7; border-radius: 4px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); z-index: 1000; width: 200px;">
            <a href="javascript:void(0)" onclick="showLoginForm()" style="display: block; padding: 12px 20px; text-decoration: none; color: #333; border-bottom: 1px solid #eee; transition: background-color 0.3s;" onmouseover="this.style.backgroundColor='#f5f5f5'" onmouseout="this.style.backgroundColor='white'">🔐 Login</a>
            <a href="javascript:void(0)" onclick="showRegisterForm()" style="display: block; padding: 12px 20px; text-decoration: none; color: #333; border-bottom: 1px solid #eee; transition: background-color 0.3s;" onmouseover="this.style.backgroundColor='#f5f5f5'" onmouseout="this.style.backgroundColor='white'">📝 Sign Up</a>
            <a href="javascript:void(0)" onclick="viewWishlist()" style="display: block; padding: 12px 20px; text-decoration: none; color: #333; transition: background-color 0.3s;" onmouseover="this.style.backgroundColor='#f5f5f5'" onmouseout="this.style.backgroundColor='white'">❤️ Wishlist</a>
        </div>
    `;
    
    $('body').append(menuHTML);
    
    // Close menu when clicking elsewhere
    $(document).one('click', function() {
        $('body > div:last').fadeOut(200, function() {
            $(this).remove();
        });
    });
}

function showUserProfile() {
    const profileHTML = `
        <div class="user-profile" style="max-width: 600px; margin: 0 auto;">
            <div class="user-profile-pic">👤</div>
            <h2>${currentUser.name}</h2>
            <p style="color: #7f8c8d; margin-bottom: 20px;">${currentUser.email}</p>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
                <button onclick="showOrderHistory()" style="padding: 12px; background-color: #3498db; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">📦 Order History</button>
                <button onclick="showUserAddresses()" style="padding: 12px; background-color: #9b59b6; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">📍 Addresses</button>
                <button onclick="viewWishlist()" style="padding: 12px; background-color: #f39c12; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">❤️ Wishlist</button>
                <button onclick="showEditProfile()" style="padding: 12px; background-color: #27ae60; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">✏️ Edit Profile</button>
            </div>
            
            <button onclick="handleLogout()" class="logout-button" style="width: 100%; padding: 12px;">🚪 Logout</button>
        </div>
    `;
    
    showModal(profileHTML);
}

function showOrderHistory() {
    const userOrders = orders.filter(o => o.userId === currentUser.id);
    
    let orderHTML = '<h2>Order History</h2>';
    
    if (userOrders.length === 0) {
        orderHTML += '<p>No orders yet. <a href="javascript:void(0)" onclick="closeModal()">Start shopping</a></p>';
    } else {
        orderHTML += '<div style="max-height: 500px; overflow-y: auto;">';
        userOrders.forEach(order => {
            orderHTML += `
                <div style="border: 1px solid #ddd; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                        <strong>Order #${order.id}</strong>
                        <span style="background: ${getStatusColor(order.status)}; color: white; padding: 5px 10px; border-radius: 4px; font-size: 12px;">${order.status}</span>
                    </div>
                    <p style="color: #7f8c8d; font-size: 12px; margin-bottom: 10px;">
                        Date: ${new Date(order.date).toLocaleDateString()}<br>
                        Items: ${order.items.length}
                    </p>
                    <p><strong>Total: $${order.total.toFixed(2)}</strong></p>
                    <button onclick="showOrderDetails(${order.id})" style="padding: 8px 15px; background-color: #3498db; color: white; border: none; border-radius: 4px; cursor: pointer;">View Details</button>
                </div>
            `;
        });
        orderHTML += '</div>';
    }
    
    closeModal();
    setTimeout(() => showModal(orderHTML), 300);
}

function showOrderDetails(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;
    
    const detailsHTML = `
        <h2>Order Details #${order.id}</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                <span><strong>Status:</strong></span>
                <span style="background: ${getStatusColor(order.status)}; color: white; padding: 5px 10px; border-radius: 4px;">${order.status}</span>
            </div>
            <div style="margin-bottom: 10px;">
                <strong>Shipping Address:</strong><br>
                ${order.shippingAddress.street}<br>
                ${order.shippingAddress.city}, ${order.shippingAddress.zip}
            </div>
            <div style="margin-bottom: 10px;">
                <strong>Order Date:</strong> ${new Date(order.date).toLocaleDateString()}
            </div>
        </div>
        
        <h3>Items Ordered</h3>
        <div style="max-height: 300px; overflow-y: auto; margin-bottom: 20px;">
            ${order.items.map(item => `
                <div style="border-bottom: 1px solid #eee; padding: 10px 0;">
                    <div style="display: flex; justify-content: space-between;">
                        <strong>${item.title}</strong>
                        <span>$${item.price.toFixed(2)} x ${item.quantity}</span>
                    </div>
                </div>
            `).join('')}
        </div>
        
        <div style="border-top: 2px solid #333; padding-top: 15px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                <span>Subtotal:</span>
                <span>$${(order.total / 1.1).toFixed(2)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                <span>Tax:</span>
                <span>$${(order.total / 1.1 * 0.1).toFixed(2)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 18px; font-weight: bold;">
                <span>Total:</span>
                <span>$${order.total.toFixed(2)}</span>
            </div>
        </div>
        
        <button onclick="downloadInvoice(${order.id})" style="width: 100%; padding: 12px; background-color: #3498db; color: white; border: none; border-radius: 4px; cursor: pointer; margin-top: 20px;">📄 Download Invoice</button>
    `;
    
    closeModal();
    setTimeout(() => showModal(detailsHTML), 300);
}

function getStatusColor(status) {
    const colors = {
        'Pending': '#f39c12',
        'Processing': '#3498db',
        'Shipped': '#9b59b6',
        'Delivered': '#27ae60'
    };
    return colors[status] || '#95a5a6';
}

function downloadInvoice(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;
    
    let invoiceContent = `
BOOKHUB - ORDER INVOICE
=======================
Order ID: ${order.id}
Date: ${new Date(order.date).toLocaleDateString()}
Customer: ${currentUser.name}
Email: ${currentUser.email}

ITEMS:
${order.items.map(item => `${item.title} - $${item.price.toFixed(2)} x ${item.quantity}`).join('\n')}

SHIPPING ADDRESS:
${order.shippingAddress.street}
${order.shippingAddress.city}, ${order.shippingAddress.zip}

TOTALS:
Subtotal: $${(order.total / 1.1).toFixed(2)}
Tax (10%): $${(order.total / 1.1 * 0.1).toFixed(2)}
Total: $${order.total.toFixed(2)}

Status: ${order.status}
Thank you for your purchase!
    `;
    
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(invoiceContent));
    element.setAttribute('download', `invoice-${order.id}.txt`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    showNotification('Invoice downloaded!', 'success');
}

function showUserAddresses() {
    const user = users.find(u => u.id === currentUser.id);
    if (!user) return;
    
    let addressHTML = '<h2>Saved Addresses</h2>';
    
    if (!user.addresses || user.addresses.length === 0) {
        addressHTML += '<p>No saved addresses. Add one now!</p>';
    } else {
        addressHTML += '<div style="max-height: 400px; overflow-y: auto; margin-bottom: 20px;">';
        user.addresses.forEach((addr, index) => {
            addressHTML += `
                <div style="border: 1px solid #ddd; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                    <strong>${addr.type === 'shipping' ? '📍 Shipping Address' : '💳 Billing Address'}</strong>
                    <p>${addr.street}<br>${addr.city}, ${addr.zip}</p>
                    <button onclick="deleteAddress(${index})" style="padding: 5px 10px; background-color: #e74c3c; color: white; border: none; border-radius: 4px; cursor: pointer;">Delete</button>
                </div>
            `;
        });
        addressHTML += '</div>';
    }
    
    addressHTML += `
        <button onclick="addNewAddress()" style="width: 100%; padding: 12px; background-color: #27ae60; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">+ Add New Address</button>
    `;
    
    closeModal();
    setTimeout(() => showModal(addressHTML), 300);
}

function addNewAddress() {
    const addressForm = `
        <h2>Add New Address</h2>
        <form id="addressForm" style="max-width: 400px; margin: 0 auto;">
            <div style="margin-bottom: 15px;">
                <label>Street Address:</label>
                <input type="text" id="street" placeholder="123 Main Street" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label>City:</label>
                <input type="text" id="city" placeholder="New York" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label>Zip Code:</label>
                <input type="text" id="zip" placeholder="10001" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
            </div>
            <button type="submit" style="width: 100%; padding: 12px; background-color: #27ae60; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">Save Address</button>
        </form>
    `;
    
    closeModal();
    setTimeout(() => showModal(addressForm), 300);
    
    $(document).off('submit', '#addressForm').on('submit', '#addressForm', function(e) {
        e.preventDefault();
        
        const user = users.find(u => u.id === currentUser.id);
        if (!user.addresses) user.addresses = [];
        
        user.addresses.push({
            type: 'shipping',
            street: $('#street').val(),
            city: $('#city').val(),
            zip: $('#zip').val()
        });
        
        localStorage.setItem('users', JSON.stringify(users));
        closeModal();
        showNotification('Address saved successfully!', 'success');
        setTimeout(() => showUserAddresses(), 1500);
    });
}

function deleteAddress(index) {
    if (confirm('Are you sure you want to delete this address?')) {
        const user = users.find(u => u.id === currentUser.id);
        user.addresses.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(users));
        showNotification('Address deleted', 'info');
        showUserAddresses();
    }
}

function showEditProfile() {
    const editHTML = `
        <h2>Edit Profile</h2>
        <form id="editProfileForm" style="max-width: 400px; margin: 0 auto;">
            <div style="margin-bottom: 15px;">
                <label>Full Name:</label>
                <input type="text" id="editName" value="${currentUser.name}" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label>Email:</label>
                <input type="email" id="editEmail" value="${currentUser.email}" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label>New Password (leave blank to keep current):</label>
                <input type="password" id="editPassword" placeholder="••••••••" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
            </div>
            <button type="submit" style="width: 100%; padding: 12px; background-color: #3498db; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">Save Changes</button>
        </form>
    `;
    
    closeModal();
    setTimeout(() => showModal(editHTML), 300);
    
    $(document).off('submit', '#editProfileForm').on('submit', '#editProfileForm', function(e) {
        e.preventDefault();
        
        const user = users.find(u => u.id === currentUser.id);
        user.name = $('#editName').val();
        user.email = $('#editEmail').val();
        if ($('#editPassword').val()) {
            user.password = $('#editPassword').val();
        }
        
        currentUser.name = user.name;
        currentUser.email = user.email;
        
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUserIcon();
        
        closeModal();
        showNotification('Profile updated successfully!', 'success');
        setTimeout(() => showUserProfile(), 1500);
    });
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('rememberMe');
    closeModal();
    updateUserIcon();
    showNotification('You have been logged out', 'info');
}

function switchToLogin() {
    closeModal();
    setTimeout(() => showLoginForm(), 300);
}

function switchToRegister() {
    closeModal();
    setTimeout(() => showRegisterForm(), 300);
}

function togglePasswordVisibility(inputId) {
    const input = $('#' + inputId);
    const btn = input.siblings('.toggle-btn');
    
    if (input.attr('type') === 'password') {
        input.attr('type', 'text');
        btn.text('🙈');
    } else {
        input.attr('type', 'password');
        btn.text('👁️');
    }
}

function checkPasswordStrength(password) {
    const strengthDiv = $('#passwordStrength');
    let strength = 0;
    let strengthText = '';
    let strengthClass = '';
    
    if (!password) {
        strengthDiv.hide();
        return;
    }
    
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;
    
    if (strength < 2) {
        strengthText = '⚠️ Weak password';
        strengthClass = 'strength-weak';
    } else if (strength < 3) {
        strengthText = '⚠️ Fair password';
        strengthClass = 'strength-fair';
    } else if (strength < 4) {
        strengthText = '✓ Good password';
        strengthClass = 'strength-good';
    } else {
        strengthText = '✓ Strong password';
        strengthClass = 'strength-strong';
    }
    
    strengthDiv.removeClass('strength-weak strength-fair strength-good strength-strong')
        .addClass(strengthClass)
        .html(strengthText)
        .show();
}

function showErrorMessage(message, elementId) {
    const errorDiv = $('#' + elementId);
    errorDiv.html(message).show();
    
    setTimeout(() => {
        errorDiv.fadeOut();
    }, 5000);
}

// ========================================
// 11. ADMIN DASHBOARD
// ========================================

function openAdminDashboard() {
    // Check if user is admin (for now, any logged-in user can access demo admin)
    if (!currentUser) {
        showNotification('Please login to access admin panel', 'info');
        showLoginForm();
        return;
    }
    
    const adminHTML = `
        <h2>Admin Dashboard</h2>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin-bottom: 30px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px; text-align: center;">
                <h3>${books.length}</h3>
                <p>Total Books</p>
            </div>
            <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 20px; border-radius: 8px; text-align: center;">
                <h3>${orders.length}</h3>
                <p>Total Orders</p>
            </div>
            <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; padding: 20px; border-radius: 8px; text-align: center;">
                <h3>${users.length}</h3>
                <p>Total Users</p>
            </div>
            <div style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); color: white; padding: 20px; border-radius: 8px; text-align: center;">
                <h3>$${orders.reduce((sum, o) => sum + o.total, 0).toFixed(2)}</h3>
                <p>Total Revenue</p>
            </div>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
            <button onclick="adminBooks()" style="padding: 15px; background-color: #3498db; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">📚 Book Management</button>
            <button onclick="adminOrders()" style="padding: 15px; background-color: #9b59b6; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">📦 Order Management</button>
            <button onclick="adminUsers()" style="padding: 15px; background-color: #e74c3c; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">👥 User Management</button>
            <button onclick="adminAnalytics()" style="padding: 15px; background-color: #f39c12; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">📊 Analytics & Reports</button>
        </div>
    `;
    
    showModal(adminHTML);
}

function adminBooks() {
    let booksHTML = '<h2>Book Management</h2>';
    booksHTML += `<button onclick="showAddBook()" style="margin-bottom: 20px; padding: 10px 20px; background-color: #27ae60; color: white; border: none; border-radius: 4px; cursor: pointer;">+ Add New Book</button>`;
    
    booksHTML += '<div style="max-height: 500px; overflow-y: auto;">';
    booksHTML += '<table style="width: 100%; border-collapse: collapse;">';
    booksHTML += '<tr style="background-color: #f5f5f5;"><th style="border: 1px solid #ddd; padding: 10px;">Title</th><th style="border: 1px solid #ddd; padding: 10px;">Author</th><th style="border: 1px solid #ddd; padding: 10px;">Price</th><th style="border: 1px solid #ddd; padding: 10px;">Stock</th><th style="border: 1px solid #ddd; padding: 10px;">Actions</th></tr>';
    
    books.forEach(book => {
        booksHTML += `
            <tr style="border-bottom: 1px solid #ddd;">
                <td style="border: 1px solid #ddd; padding: 10px;">${book.title}</td>
                <td style="border: 1px solid #ddd; padding: 10px;">${book.author}</td>
                <td style="border: 1px solid #ddd; padding: 10px;">$${book.discountPrice}</td>
                <td style="border: 1px solid #ddd; padding: 10px;">${book.stock}</td>
                <td style="border: 1px solid #ddd; padding: 10px;">
                    <button onclick="editBook(${book.id})" style="padding: 5px 10px; background-color: #3498db; color: white; border: none; border-radius: 4px; cursor: pointer; margin-right: 5px;">Edit</button>
                    <button onclick="deleteBook(${book.id})" style="padding: 5px 10px; background-color: #e74c3c; color: white; border: none; border-radius: 4px; cursor: pointer;">Delete</button>
                </td>
            </tr>
        `;
    });
    
    booksHTML += '</table></div>';
    
    closeModal();
    setTimeout(() => showModal(booksHTML), 300);
}

function showAddBook() {
    const formHTML = `
        <h2>Add New Book</h2>
        <form id="addBookForm" style="max-width: 500px; margin: 0 auto;">
            <div style="margin-bottom: 15px;">
                <label>Title:</label>
                <input type="text" id="bookTitle" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label>Author:</label>
                <input type="text" id="bookAuthor" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label>ISBN:</label>
                <input type="text" id="bookISBN" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label>Price:</label>
                <input type="number" id="bookPrice" step="0.01" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label>Category:</label>
                <select id="bookCategory" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
                    <option>Fiction</option>
                    <option>Non-Fiction</option>
                    <option>Science</option>
                    <option>Fantasy</option>
                    <option>Romance</option>
                    <option>Mystery</option>
                </select>
            </div>
            <div style="margin-bottom: 15px;">
                <label>Stock:</label>
                <input type="number" id="bookStock" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
            </div>
            <button type="submit" style="width: 100%; padding: 12px; background-color: #27ae60; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">Add Book</button>
        </form>
    `;
    
    closeModal();
    setTimeout(() => showModal(formHTML), 300);
    
    $(document).off('submit', '#addBookForm').on('submit', '#addBookForm', function(e) {
        e.preventDefault();
        
        const newBook = {
            id: Math.max(...books.map(b => b.id), 0) + 1,
            isbn: $('#bookISBN').val(),
            title: $('#bookTitle').val(),
            author: $('#bookAuthor').val(),
            category: $('#bookCategory').val(),
            price: parseFloat($('#bookPrice').val()),
            discountPrice: parseFloat($('#bookPrice').val()) * 0.85,
            rating: 0,
            reviews: 0,
            stock: parseInt($('#bookStock').val()),
            description: 'A great book for readers',
            image: 'book-' + Math.random(),
            published: new Date().getFullYear(),
            language: 'English'
        };
        
        books.push(newBook);
        localStorage.setItem('books', JSON.stringify(books));
        closeModal();
        showNotification('Book added successfully!', 'success');
        setTimeout(() => adminBooks(), 1500);
    });
}

function deleteBook(bookId) {
    if (confirm('Are you sure you want to delete this book?')) {
        books = books.filter(b => b.id !== bookId);
        localStorage.setItem('books', JSON.stringify(books));
        showNotification('Book deleted', 'info');
        adminBooks();
    }
}

function adminOrders() {
    let ordersHTML = '<h2>Order Management</h2>';
    ordersHTML += '<div style="max-height: 500px; overflow-y: auto;">';
    ordersHTML += '<table style="width: 100%; border-collapse: collapse;">';
    ordersHTML += '<tr style="background-color: #f5f5f5;"><th style="border: 1px solid #ddd; padding: 10px;">Order ID</th><th style="border: 1px solid #ddd; padding: 10px;">Customer</th><th style="border: 1px solid #ddd; padding: 10px;">Total</th><th style="border: 1px solid #ddd; padding: 10px;">Status</th><th style="border: 1px solid #ddd; padding: 10px;">Actions</th></tr>';
    
    orders.forEach(order => {
        const customer = users.find(u => u.id === order.userId);
        ordersHTML += `
            <tr style="border-bottom: 1px solid #ddd;">
                <td style="border: 1px solid #ddd; padding: 10px;">${order.id}</td>
                <td style="border: 1px solid #ddd; padding: 10px;">${customer ? customer.name : 'Unknown'}</td>
                <td style="border: 1px solid #ddd; padding: 10px;">$${order.total.toFixed(2)}</td>
                <td style="border: 1px solid #ddd; padding: 10px;">
                    <select onchange="updateOrderStatus(${order.id}, this.value)" style="padding: 5px; border: 1px solid #ccc; border-radius: 4px;">
                        <option ${order.status === 'Pending' ? 'selected' : ''}>Pending</option>
                        <option ${order.status === 'Processing' ? 'selected' : ''}>Processing</option>
                        <option ${order.status === 'Shipped' ? 'selected' : ''}>Shipped</option>
                        <option ${order.status === 'Delivered' ? 'selected' : ''}>Delivered</option>
                    </select>
                </td>
                <td style="border: 1px solid #ddd; padding: 10px;">
                    <button onclick="showOrderDetailsAdmin(${order.id})" style="padding: 5px 10px; background-color: #3498db; color: white; border: none; border-radius: 4px; cursor: pointer;">View</button>
                </td>
            </tr>
        `;
    });
    
    ordersHTML += '</table></div>';
    
    closeModal();
    setTimeout(() => showModal(ordersHTML), 300);
}

function updateOrderStatus(orderId, newStatus) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = newStatus;
        localStorage.setItem('orders', JSON.stringify(orders));
        showNotification(`Order status updated to ${newStatus}`, 'success');
    }
}

function showOrderDetailsAdmin(orderId) {
    const order = orders.find(o => o.id === orderId);
    const customer = users.find(u => u.id === order.userId);
    
    const detailsHTML = `
        <h2>Order Details - ${order.id}</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p><strong>Customer:</strong> ${customer.name} (${customer.email})</p>
            <p><strong>Order Date:</strong> ${new Date(order.date).toLocaleDateString()}</p>
            <p><strong>Status:</strong> ${order.status}</p>
            <p><strong>Shipping Address:</strong> ${order.shippingAddress.street}, ${order.shippingAddress.city} ${order.shippingAddress.zip}</p>
        </div>
        <h3>Items</h3>
        ${order.items.map(item => `<p>${item.title} - $${item.price.toFixed(2)} x ${item.quantity}</p>`).join('')}
        <h3>Total: $${order.total.toFixed(2)}</h3>
    `;
    
    closeModal();
    setTimeout(() => showModal(detailsHTML), 300);
}

function adminUsers() {
    let usersHTML = '<h2>User Management</h2>';
    usersHTML += '<div style="max-height: 500px; overflow-y: auto;">';
    
    users.forEach(user => {
        const userOrders = orders.filter(o => o.userId === user.id);
        usersHTML += `
            <div style="border: 1px solid #ddd; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <h4>${user.name}</h4>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Orders:</strong> ${userOrders.length}</p>
                <p><strong>Total Spent:</strong> $${userOrders.reduce((sum, o) => sum + o.total, 0).toFixed(2)}</p>
            </div>
        `;
    });
    
    usersHTML += '</div>';
    
    closeModal();
    setTimeout(() => showModal(usersHTML), 300);
}

function adminAnalytics() {
    const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
    const topBooks = books.sort((a, b) => b.reviews - a.reviews).slice(0, 5);
    const topCategory = ['Fiction', 'Non-Fiction', 'Science', 'Fantasy', 'Romance'].map(cat => ({
        category: cat,
        count: books.filter(b => b.category === cat).length
    }));
    
    let analyticsHTML = '<h2>Analytics & Reports</h2>';
    analyticsHTML += `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div>
                <h3>Revenue Analytics</h3>
                <p><strong>Total Revenue:</strong> $${totalRevenue.toFixed(2)}</p>
                <p><strong>Average Order Value:</strong> $${(totalRevenue / (orders.length || 1)).toFixed(2)}</p>
                <p><strong>Total Orders:</strong> ${orders.length}</p>
            </div>
            <div>
                <h3>Top Books by Reviews</h3>
                ${topBooks.map(b => `<p>${b.title}: ${b.reviews} reviews</p>`).join('')}
            </div>
        </div>
    `;
    
    closeModal();
    setTimeout(() => showModal(analyticsHTML), 300);
}

// ========================================
// 10. BOOK DETAILS & REVIEWS
// ========================================

function showBookDetails(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) return;
    
    const bookReviews = reviews.filter(r => r.bookId === bookId);
    const avgRating = bookReviews.length > 0 
        ? (bookReviews.reduce((sum, r) => sum + r.rating, 0) / bookReviews.length).toFixed(1)
        : book.rating;
    
    let detailsHTML = `
        <div class="modal-details-grid">
            <div>
                <div class="modal-book-cover">
                    📖 ${book.title}
                </div>
                <button onclick="addToCart(this)" data-book-id="${book.id}" class="btn-add-cart" style="width: 100%; padding: 12px;">Add to Cart</button>
            </div>
            <div class="modal-book-info">
                <h2>${book.title}</h2>
                <p class="modal-book-author">by ${book.author}</p>
                <div class="modal-rating">
                    ⭐ ${avgRating} (${bookReviews.length} reviews)
                </div>
                
                <div class="modal-price-section">
                    <div style="margin-bottom: 10px;">
                        <span class="modal-price-original">$${book.price.toFixed(2)}</span>
                        <span class="modal-price-current">$${book.discountPrice.toFixed(2)}</span>
                        <span class="modal-discount-badge">
                            ${Math.round((1 - book.discountPrice / book.price) * 100)}% OFF
                        </span>
                    </div>
                    <p class="modal-stock-info"><strong>Stock Available:</strong> ${book.stock} units</p>
                </div>
                
                <div class="modal-description">
                    <h3>Description</h3>
                    <p>${book.description}</p>
                    <div class="modal-meta-info">
                        <strong>ISBN:</strong> ${book.isbn}<br>
                        <strong>Published:</strong> ${book.published}<br>
                        <strong>Language:</strong> ${book.language}<br>
                        <strong>Category:</strong> ${book.category}
                    </div>
                </div>
            </div>
        </div>
        
        <div class="modal-reviews-section">
            <h2>Customer Reviews</h2>
            <button onclick="showReviewForm(${book.id})" class="modal-review-write-btn">Write a Review</button>
            
            ${bookReviews.length === 0 ? '<p>No reviews yet. Be the first to review!</p>' : ''}
            
            <div class="reviews-container">
                ${bookReviews.map(review => `
                    <div class="review-item">
                        <div class="review-header">
                            <span class="review-author">${review.userName}</span>
                            <span class="review-rating">⭐ ${review.rating}</span>
                        </div>
                        <p class="review-date">${new Date(review.date).toLocaleDateString()}</p>
                        <p class="review-text">${review.text}</p>
                        <button onclick="helpfulReview(${review.id})" class="review-helpful-btn">
                            👍 Helpful (${review.helpful || 0})
                        </button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    closeModal();
    setTimeout(() => showModal(detailsHTML), 300);
}

function showReviewForm(bookId) {
    if (!currentUser) {
        showNotification('Please login to write a review', 'info');
        showLoginForm();
        return;
    }
    
    const reviewHTML = `
        <h2>Write a Review</h2>
        <form id="reviewForm" style="max-width: 500px; margin: 0 auto;">
            <div style="margin-bottom: 20px;">
                <label>Rating:</label>
                <div id="ratingInput" style="font-size: 24px; margin: 10px 0;">
                    ${[1,2,3,4,5].map(i => `<span class="rating-star" onclick="setRating(${i})" data-rating="${i}" style="cursor: pointer; color: #ccc; margin-right: 10px;">★</span>`).join('')}
                </div>
            </div>
            <div style="margin-bottom: 20px;">
                <label>Your Review:</label>
                <textarea id="reviewText" placeholder="Share your thoughts about this book..." style="width: 100%; height: 150px; padding: 10px; border: 1px solid #ccc; border-radius: 4px; font-family: Arial;" required></textarea>
            </div>
            <button type="submit" style="width: 100%; padding: 12px; background-color: #3498db; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 16px; font-weight: bold;">Submit Review</button>
        </form>
    `;
    
    closeModal();
    setTimeout(() => showModal(reviewHTML), 300);
    
    let selectedRating = 0;
    window.setRating = function(rating) {
        selectedRating = rating;
        $('.rating-star').each(function(index) {
            if (index < rating) {
                $(this).css('color', '#f39c12');
            } else {
                $(this).css('color', '#ccc');
            }
        });
    };
    
    $(document).off('submit', '#reviewForm').on('submit', '#reviewForm', function(e) {
        e.preventDefault();
        
        if (selectedRating === 0) {
            showNotification('Please select a rating', 'error');
            return;
        }
        
        const review = {
            id: Date.now(),
            bookId: bookId,
            userId: currentUser.id,
            userName: currentUser.name,
            rating: selectedRating,
            text: $('#reviewText').val(),
            date: new Date(),
            helpful: 0,
            verified: true
        };
        
        reviews.push(review);
        localStorage.setItem('reviews', JSON.stringify(reviews));
        closeModal();
        showNotification('Review submitted successfully!', 'success');
        setTimeout(() => showBookDetails(bookId), 1500);
    });
}

function helpfulReview(reviewId) {
    const review = reviews.find(r => r.id === reviewId);
    if (review) {
        review.helpful = (review.helpful || 0) + 1;
        localStorage.setItem('reviews', JSON.stringify(reviews));
        showNotification('Thanks for your feedback!', 'success');
    }
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
