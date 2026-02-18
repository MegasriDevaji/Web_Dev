# BookHub UI Design Guide

## Quick Reference for UI Components

### Color Palette

#### Primary Gradient
```
Start: #667eea (Purple)
End:   #764ba2 (Dark Purple)
Usage: Main buttons, headers, accents
```

#### Secondary Gradient
```
Start: #f093fb (Pink)
End:   #f5576c (Red)
Usage: Secondary actions, logout buttons
```

#### Background Colors
```
Light Purple:  #f0f3ff
Light Gray:    #f8fafb
Softer Gray:   #f5f6fa
Card White:    #ffffff
Dark BG:       #1a202c → #2d3748
```

#### Text Colors
```
Primary:   #2c3e50 (Dark gray-blue)
Secondary: #7f8c8d (Medium gray)
Light:     #cbd5e0 (Light gray)
Accent:    #667eea (Purple)
Success:   #229954 (Green)
Error:     #c0392b (Red)
```

---

## Component Specifications

### Buttons

#### Primary Button (Add to Cart, Login)
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
color: white;
padding: 12px 24px;
border-radius: 8px;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.5px;
box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

**Hover State:**
```css
transform: translateY(-2px);
box-shadow: 0 8px 25px rgba(102, 126, 234, 0.35);
```

#### Secondary Button (Signup, Alt Action)
```css
background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
color: white;
/* Same padding, border-radius, font as primary */
box-shadow: 0 4px 15px rgba(245, 87, 108, 0.2);
```

**Hover State:**
```css
transform: translateY(-2px);
box-shadow: 0 8px 25px rgba(245, 87, 108, 0.35);
```

#### Tertiary Button (Wishlist, Toggle)
```css
background-color: #f0f3ff;
border: 2px solid #e8ecff;
color: #667eea;
padding: 12px 14px;
border-radius: 8px;
font-weight: 600;
transition: all 0.3s;
```

**Hover State:**
```css
background-color: #667eea;
color: white;
border-color: #667eea;
transform: scale(1.05);
```

---

### Form Elements

#### Input Fields
```css
width: 100%;
padding: 13px;
border: 2px solid #e8ecff;
border-radius: 8px;
background-color: #f8fafb;
color: #2c3e50;
font-size: 14px;
transition: all 0.3s;
```

**Focus State:**
```css
border-color: #667eea;
background-color: white;
box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
outline: none;
```

#### Labels
```css
font-weight: 600;
color: #2c3e50;
font-size: 13px;
text-transform: uppercase;
letter-spacing: 0.3px;
margin-bottom: 8px;
```

#### Select Dropdowns
```css
/* Same as input fields above */
```

---

### Cards

#### Book Card
```css
background: white;
border-radius: 12px;
box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
padding: 16px;
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
position: relative;
overflow: hidden;
```

**Before Pseudo-Element (Top Accent):**
```css
content: '';
position: absolute;
top: 0;
left: 0;
right: 0;
height: 4px;
background: linear-gradient(90deg, #667eea, #764ba2);
```

**Hover State:**
```css
transform: translateY(-8px);
box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
```

#### Filter Card
```css
background: white;
padding: 25px;
border-radius: 12px;
box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
border-left: 4px solid #667eea;
```

---

### Modals

#### Modal Overlay
```css
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.6);
backdrop-filter: blur(4px);
z-index: 9999;
display: flex;
align-items: center;
justify-content: center;
```

#### Modal Content
```css
background: white;
padding: 40px;
border-radius: 12px;
max-width: 600px;
width: 90%;
max-height: 85vh;
overflow-y: auto;
position: relative;
box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
```

#### Modal Close Button
```css
position: absolute;
top: 15px;
right: 15px;
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
color: white;
border: none;
padding: 8px 12px;
border-radius: 6px;
cursor: pointer;
font-size: 20px;
font-weight: 300;
transition: all 0.3s;
```

---

### Typography

#### Headings
```css
h1: font-size 32px, font-weight 700, color #2c3e50
h2: font-size 28px, font-weight 700, color #2c3e50
h3: font-size 22px, font-weight 700, color #2c3e50
h4: font-size 18px, font-weight 700, color #2c3e50

/* h2 has ::after gradient underline */
h2::after {
    content: '';
    display: block;
    width: 50px;
    height: 4px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    margin-top: 10px;
}
```

#### Body Text
```css
font-size: 14-16px
font-weight: 400
color: #555
line-height: 1.6
```

#### Secondary Text
```css
font-size: 13-14px
font-weight: 400
color: #7f8c8d
```

---

### Shadows

#### Subtle Shadow
```css
box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
Usage: Default cards, general elements
```

#### Medium Shadow
```css
box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
Usage: Button hover states, slight elevation
```

#### Heavy Shadow
```css
box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
Usage: Button active, strong elevation
```

#### Modal Shadow
```css
box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
Usage: Modal content, highest elevation
```

---

### Animations

#### Standard Transition
```css
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

#### Button Hover
```css
transform: translateY(-2px);
transition: all 0.3s;
```

#### Card Hover
```css
transform: translateY(-8px);
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

#### Floating Animation
```css
@keyframes float {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(30px, 30px); }
}

animation: float 6s ease-in-out infinite;
```

---

### Special Components

#### Message Alerts

**Error Message:**
```css
background-color: #fef2f2;
border-left: 4px solid #f5576c;
color: #c0392b;
padding: 12px;
border-radius: 8px;
font-size: 13px;
```

**Success Message:**
```css
background-color: #f0fdf4;
border-left: 4px solid #229954;
color: #229954;
padding: 12px;
border-radius: 8px;
font-size: 13px;
```

#### Price Section
```css
background: linear-gradient(135deg, #f5f6fa 0%, #f0f3ff 100%);
border-left: 4px solid #667eea;
padding: 20px;
border-radius: 8px;
```

#### Discount Badge
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
color: white;
padding: 6px 12px;
border-radius: 6px;
font-weight: 600;
font-size: 12px;
```

---

## Usage Examples

### Adding to Cart Button
```html
<button class="btn-add-cart" onclick="addToCart(this)" data-book-id="1">
    Add to Cart
</button>
```

### Form Input
```html
<div class="form-group">
    <label>Email Address</label>
    <input type="email" placeholder="your@email.com">
</div>
```

### Book Card
```html
<div class="book-card">
    <div class="book-image">📖</div>
    <div class="book-info">
        <h3>Book Title</h3>
        <p class="author">Author Name</p>
        <span class="rating">⭐ 4.5</span>
    </div>
    <div class="book-actions">
        <button class="btn-add-cart">Add to Cart</button>
        <button class="btn-wishlist">♥</button>
    </div>
</div>
```

### Modal
```javascript
const modal = `
    <div id="modal-overlay">
        <div id="modal-content">
            <button onclick="closeModal()">×</button>
            <!-- Content here -->
        </div>
    </div>
`;
showModal(modal);
```

---

## Responsive Breakpoints

### Mobile
```css
@media (max-width: 768px) {
    .books-grid {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
    
    nav ul {
        flex-direction: column;
        gap: 10px;
    }
    
    .footer-content {
        grid-template-columns: 1fr;
        gap: 20px;
    }
}
```

---

## Browser Support

✅ Chrome 90+
✅ Firefox 88+
✅ Safari 14+
✅ Edge 90+

### CSS Features Used
- CSS Grid
- Flexbox
- CSS Gradients
- CSS Transforms
- CSS Transitions
- Backdrop Filter
- CSS Variables (partial)

---

## Performance Tips

1. Use `cubic-bezier(0.4, 0, 0.2, 1)` for smooth animations
2. Keep transitions to 0.3s or less
3. Use `transform` and `opacity` for animations (GPU accelerated)
4. Avoid `box-shadow` animations (use on hover only)
5. Use `backdrop-filter: blur()` sparingly

---

## Accessibility

✅ Proper color contrast ratios (WCAG AA)
✅ Focus states for keyboard navigation
✅ Clear button labels
✅ Readable font sizes (14px minimum)
✅ Proper heading hierarchy
✅ Form labels associated with inputs

---

## Design System Summary

The BookHub design system uses a **Modern Purple Gradient** theme with the following principles:

1. **Color**: Purple primary, pink secondary
2. **Spacing**: 8px base unit (8, 12, 16, 20, 24, 32px)
3. **Typography**: Segoe UI, font-weights 400, 600, 700
4. **Shadows**: 4-level shadow hierarchy
5. **Animations**: Smooth 0.3s transitions
6. **Corners**: 8-12px border-radius for modern feel
7. **Elevation**: Transform on hover for interactive elements

---

## Final Notes

- All colors are consistent throughout the application
- Animations are smooth and professional
- Design matches modern e-commerce standards
- Fully responsive across all devices
- Accessible for users with different abilities
- No external frameworks or dependencies

For detailed specifications, refer to the individual CSS classes in bookhub.html.

---

**Design System Version**: 2.0
**Theme**: Modern Purple Gradient
**Last Updated**: Current Session
