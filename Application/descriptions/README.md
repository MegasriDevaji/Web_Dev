# BookHub - Online Book Store

A complete e-commerce platform for buying and selling books online, built with HTML, CSS, JavaScript, and jQuery.

## 🎯 Project Overview

BookHub is a fully-featured online book store with customer-facing and admin features. The application uses browser's localStorage for data persistence, making it work without a backend server.

## 📋 Features Implemented

### 1. **Customer Features**

#### A. Homepage & Navigation
- ✅ Header with logo, search bar, shopping cart icon, user profile menu
- ✅ Navigation menu (Home, Books, Categories, About, Contact)
- ✅ Hero section with featured books
- ✅ Best sellers section
- ✅ Footer with links, contact info, social media

#### B. Book Browsing & Discovery
- ✅ Browse books in grid view
- ✅ Category filtering (Fiction, Non-Fiction, Science, History, Romance, etc.)
- ✅ Search functionality (title, author)
- ✅ Advanced filters (price range, rating)
- ✅ Sort options (by price, rating, etc.)
- ✅ Book details page with full information

#### C. Shopping Cart
- ✅ Add/remove books from cart
- ✅ Update quantities
- ✅ Real-time price calculation
- ✅ Cart summary with subtotal, tax, discount
- ✅ Apply coupon codes
- ✅ Persistent storage using localStorage

#### D. Wishlist/Favorites
- ✅ Add books to wishlist
- ✅ View saved books
- ✅ Move from wishlist to cart
- ✅ Remove from wishlist

#### E. User Authentication & Profile
- ✅ User registration with email, password, name
- ✅ User login with email/password
- ✅ Remember me functionality
- ✅ User dashboard with order history
- ✅ Saved addresses management
- ✅ Edit profile and change password
- ✅ Multiple delivery addresses

#### F. Reviews & Ratings
- ✅ 5-star rating system
- ✅ Customer reviews with text
- ✅ Helpful votes on reviews
- ✅ Verified purchase flag
- ✅ Display review count and average rating

#### G. Checkout Process
- ✅ Review cart items
- ✅ Select delivery address
- ✅ Choose shipping method (Standard, Express, Overnight)
- ✅ Review order summary
- ✅ Mock payment processing
- ✅ Order confirmation with order ID and transaction ID

#### H. Order Management
- ✅ View order history
- ✅ Track order status (Pending → Processing → Shipped → Delivered)
- ✅ Download invoice/receipt
- ✅ View detailed order information
- ✅ Order tracking

### 2. **Payment System (Mock)**
- ✅ Card details validation
- ✅ Transaction ID generation
- ✅ Order confirmation with receipt
- ✅ Payment data storage

### 3. **Admin Features**

#### A. Book Management
- ✅ Add new books (title, author, ISBN, price, category, stock)
- ✅ Edit book details
- ✅ Delete books
- ✅ Track inventory levels
- ✅ View book list with filters

#### B. Order Management
- ✅ View all customer orders
- ✅ Filter orders by status
- ✅ Update order status
- ✅ View order details and customer info
- ✅ Monitor shipments

#### C. Sales Analytics & Reports
- ✅ Total revenue calculation
- ✅ Top-selling books
- ✅ Most reviewed books
- ✅ Customer acquisition data
- ✅ Sales dashboard

#### D. User Management
- ✅ View all customers
- ✅ Customer details and purchase history
- ✅ View customer feedback

#### E. Discount & Promotions
- ✅ Create discount codes (percentage/fixed amount)
- ✅ Set minimum purchase requirements
- ✅ Track coupon usage
- ✅ Apply to orders

### 4. **Database Structure (localStorage)**

```javascript
// Users Collection
{
  id, name, email, password, addresses
}

// Books Collection
{
  id, isbn, title, author, description, price, discountPrice,
  category, stock, rating, reviews, published, language
}

// Orders Collection
{
  id, userId, date, items[], total, tax, shippingAddress, 
  status, transactionId, shippingMethod
}

// Reviews Collection
{
  id, bookId, userId, userName, rating, text, date, helpful, verified
}

// Coupons Collection
{
  code, discount, type, validTill, minPurchase
}
```

## 🎨 Technology Stack

### Frontend
- **HTML5** - Structure
- **CSS3** - Styling, responsive design, animations
- **JavaScript (ES6)** - Form validation, cart logic, DOM manipulation
- **jQuery** - Event handling, AJAX calls, DOM updates

### Storage
- **localStorage** - Persistent client-side storage

## 📱 Responsive Design
- ✅ Mobile-friendly layout
- ✅ Grid-based design
- ✅ Touch-friendly buttons
- ✅ Adaptive images and content

## 🚀 Getting Started

### Installation
1. Extract the files to your web directory
2. Open `bookhub.html` in a web browser
3. Or use a local server: `python -m http.server 8000`

### Demo Accounts
```
Email: john@example.com
Password: password123

Email: jane@example.com
Password: secure456
```

### Coupon Codes
```
WELCOME10 - 10% discount (min $20)
SAVE15 - 15% discount (min $50)
FLAT5 - $5 off (min $15)
```

## 📚 Sample Books Available
- The Great Gatsby - F. Scott Fitzgerald
- To Kill a Mockingbird - Harper Lee
- 1984 - George Orwell
- Pride and Prejudice - Jane Austen
- The Hobbit - J.R.R. Tolkien
- Sapiens - Yuval Noah Harari
- Atomic Habits - James Clear
- And more...

## 🔑 Key Features

### For Customers
- Browse 15+ books with detailed information
- Search and filter books
- Add to cart and wishlist
- Secure checkout with mock payment
- Track orders in real-time
- Write and read reviews
- Manage profile and addresses
- Apply discount codes
- Download invoices

### For Admins
- Manage book inventory
- Monitor all orders
- View sales analytics
- Manage users
- Generate reports
- Process shipments

## 🎯 User Workflows

### Customer Journey
1. Browse or search for books
2. View book details and reviews
3. Add books to cart or wishlist
4. Apply coupon codes
5. Proceed to checkout
6. Enter shipping address
7. Complete payment
8. Receive order confirmation
9. Track order status
10. Leave review

### Admin Workflow
1. Login to admin dashboard
2. Manage book inventory
3. Process customer orders
4. Update order status
5. View sales analytics
6. Generate reports

## 🔒 Security Features
- Password validation (minimum 6 characters)
- Email format validation
- Session management with localStorage
- Secure password handling
- Verified purchase requirement for reviews

## 💾 Data Persistence
- All data stored in browser's localStorage
- Cart persists across sessions
- User login persists with "Remember Me"
- Orders saved with full history

## 📊 Responsive Features
- Mobile-first design
- Adaptive grid layout
- Touch-friendly interface
- Optimized for all screen sizes

## 🐛 Testing

### Test Scenarios
1. **Registration & Login**
   - Create new account
   - Login with credentials
   - Test remember me

2. **Shopping**
   - Add books to cart
   - Update quantities
   - Apply coupon codes
   - Calculate tax and total

3. **Checkout**
   - Enter shipping address
   - Complete mock payment
   - View order confirmation

4. **Orders**
   - View order history
   - Track order status
   - Download invoice

5. **Reviews**
   - Write review
   - Rate book
   - Vote helpful

6. **Admin**
   - Add new book
   - Delete book
   - Update order status
   - View analytics

## 📈 Future Enhancements
- Backend API integration
- Real payment gateway
- Email notifications
- Advanced search with filters
- Bulk operations
- Product recommendations
- Wishlist sharing
- Social media integration

## 📄 File Structure
```
Web_Dev/
├── bookhub.html      (Main HTML file)
├── bookhub.js        (JavaScript functionality)
├── BookHub.txt       (Project plan)
└── README.md         (This file)
```

## 🎓 Learning Outcomes
This project demonstrates:
- HTML5 semantic markup
- CSS3 layouts and animations
- JavaScript ES6+ features
- jQuery event handling
- localStorage API
- AJAX concepts
- Form validation
- E-commerce workflows
- Responsive web design
- User authentication
- Order management

## 📞 Support
For issues or questions, check the project structure and ensure all files are in the correct location.

---

**BookHub** - Making books accessible to everyone! 📚
