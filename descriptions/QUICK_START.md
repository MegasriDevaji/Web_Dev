# BookHub - Quick Start Guide

## 🚀 Starting the Application

### Option 1: Direct Browser
Simply open `bookhub.html` in your web browser

### Option 2: Local Server (Recommended)
```bash
python -m http.server 8000
# Then visit: http://localhost:8000/bookhub.html
```

## 👥 Demo Accounts

### Customer Account
```
Email: john@example.com
Password: password123
```

### Another Customer
```
Email: jane@example.com
Password: secure456
```

Anyone can create a new account by clicking "Sign Up"

## 🛍️ How to Shop

### 1. Browse Books
- Click on any book card to view details
- Use filters to narrow down by category, price, or rating
- Search for specific titles or authors

### 2. View Book Details
- Click on a book card to open the details modal
- See reviews, ratings, and description
- Write your own review (after login)
- Click "Add to Cart" button

### 3. Shopping Cart
- Click the 🛒 cart icon in the header
- View all items and quantities
- Use +/- buttons to adjust quantities
- Apply coupon codes (see codes below)
- Click "Proceed to Checkout"

### 4. Checkout
- Enter delivery address
- Choose shipping method:
  - Standard (5-7 days) - Free
  - Express (2-3 days) - $9.99
  - Overnight (Next day) - $24.99
- Click "Proceed to Payment"

### 5. Payment
- Enter card details (any 16-digit number works)
- Use test card: `4242 4242 4242 4242`
- Expiry: Any future date (MM/YY format)
- CVV: Any 3 digits
- Click "Complete Payment"

## 💳 Available Coupon Codes

| Code | Discount | Min Purchase | Valid Until |
|------|----------|--------------|------------|
| WELCOME10 | 10% off | $20 | 2026-12-31 |
| SAVE15 | 15% off | $50 | 2026-12-31 |
| FLAT5 | $5 off | $15 | 2026-12-31 |

## 👤 User Profile Features

Click the 👤 icon in the header to access:

### Logged Out
- 🔐 Login
- 📝 Sign Up
- ❤️ View Wishlist

### Logged In
- 📦 Order History
  - View all your orders
  - Check order status
  - Download invoices
  - Track shipments
  
- 📍 Saved Addresses
  - View all addresses
  - Add new addresses
  - Delete addresses
  
- ❤️ Wishlist
  - View saved books
  - Move to cart
  
- ✏️ Edit Profile
  - Update name and email
  - Change password
  
- 🚪 Logout

## 📝 Writing Reviews

1. View a book's details
2. Click "Write a Review" button
3. Select star rating (1-5 stars)
4. Write your review text
5. Click "Submit Review"

**Note:** You must be logged in to write reviews

## ⚙️ Admin Dashboard

Click the ⚙️ **Admin** link in the navigation menu to access admin features.

### Admin Functions

#### 📚 Book Management
- View all books in inventory
- Add new books
- Edit book details
- Delete books from catalog

#### 📦 Order Management
- View all customer orders
- Filter by status
- Update order status
- View order details
- Track shipments

#### 👥 User Management
- View all registered customers
- See customer purchase history
- Monitor customer activity

#### 📊 Sales Analytics
- View total revenue
- Check average order value
- See top-selling books
- View most reviewed books
- Monitor sales trends

## 🔑 Key Navigation

| Element | Function |
|---------|----------|
| 📚 Logo | Go to homepage |
| 🔍 Search | Find books by title/author |
| 🛒 Cart | View shopping cart |
| 👤 User | Access profile menu |
| ⚙️ Admin | Open admin dashboard |

## 💡 Tips & Tricks

1. **Save Time with Remember Me**
   - Check "Remember me" when logging in
   - You'll stay logged in on next visit

2. **Multiple Addresses**
   - Save multiple delivery addresses
   - Choose different address for each order

3. **Password Strength**
   - Use mix of upper/lowercase and numbers
   - Longer passwords are stronger
   - Avoid common passwords

4. **Coupon Tips**
   - Always check minimum purchase requirement
   - Apply coupon before checkout
   - Each order can use one coupon

5. **Track Orders**
   - Check status in order history
   - Status updates: Pending → Processing → Shipped → Delivered
   - Download invoice anytime

## 🐛 Troubleshooting

### Issue: Can't Login
- **Solution:** Check email and password are correct
- Use demo accounts to test
- Password is case-sensitive

### Issue: Cart is Empty After Refresh
- **Solution:** Make sure localStorage is enabled
- Disable ad blockers
- Try clearing browser cache

### Issue: Can't Apply Coupon
- **Solution:** Check minimum purchase requirement
- Make sure coupon code is spelled correctly
- Coupon must not be expired

### Issue: Payment Fails
- **Solution:** Use valid test card: 4242 4242 4242 4242
- Any future expiry date works
- Any 3-digit CVV works

## 📱 Mobile Usage

BookHub is fully responsive:
- Works on phones, tablets, and desktops
- Touch-friendly buttons
- Optimized layouts for all screen sizes
- Readable text on all devices

## 🔐 Data Privacy

- All data stored locally in your browser
- No information sent to external servers
- Your data is private and secure
- Clear browser data to reset application

## 📚 Sample Books Available

15+ books including:
- The Great Gatsby
- To Kill a Mockingbird
- 1984
- Pride and Prejudice
- The Hobbit
- Sapiens
- Atomic Habits
- And many more...

---

**Happy Shopping! 📚**

For more information, see [README.md](README.md)
