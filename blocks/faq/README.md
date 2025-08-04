# FAQ Block

A responsive FAQ (Frequently Asked Questions) block component with category filtering and expandable answers, inspired by the Terri Scheer FAQ design.

## Features

- **Category Filtering**: Filter FAQ items by categories
- **Expandable Answers**: Click to expand/collapse FAQ answers
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Sticky Sidebar**: Contact support sidebar that sticks to the top on desktop
- **Modern UI**: Clean, professional design with smooth animations
- **Accessibility**: Keyboard navigation and screen reader friendly

## HTML Structure

The FAQ block expects a specific HTML structure where each FAQ item is a row with three columns:

```html
<div class="faq">
    <!-- FAQ Item 1 -->
    <div>
        <div>Category Name</div>
        <div>Question Text</div>
        <div>Answer Text</div>
    </div>
    
    <!-- FAQ Item 2 -->
    <div>
        <div>Category Name</div>
        <div>Question Text</div>
        <div>Answer Text</div>
    </div>
    
    <!-- Add more FAQ items as needed -->
</div>
```

### Structure Breakdown

1. **First Column**: Category name (used for filtering)
2. **Second Column**: Question text (displayed as clickable button)
3. **Third Column**: Answer text (hidden by default, shown when clicked)

## Usage

1. Include the CSS file in your HTML:
   ```html
   <link rel="stylesheet" href="blocks/faq/faq.css">
   ```

2. Add the FAQ HTML structure to your page

3. Include the JavaScript file and initialize:
   ```html
   <script src="blocks/faq/faq.js"></script>
   <script>
       document.addEventListener('DOMContentLoaded', function() {
           const faqBlock = document.querySelector('.faq');
           if (faqBlock) {
               import('./blocks/faq/faq.js').then(module => {
                   module.default(faqBlock);
               });
           }
       });
   </script>
   ```

## Generated Structure

The JavaScript transforms the input HTML into this structure:

```html
<div class="faq-container">
    <div class="faq-header">
        <h1>FAQs</h1>
    </div>
    
    <div class="faq-categories">
        <ul class="categories-list">
            <li><button class="category-btn active">All</button></li>
            <li><button class="category-btn">Category 1</button></li>
            <li><button class="category-btn">Category 2</button></li>
        </ul>
    </div>
    
    <div class="faq-content">
        <div class="faq-items">
            <div class="faq-item" data-category="Category 1">
                <button class="faq-question">
                    <span class="question-text">Question text</span>
                    <span class="expand-icon">+</span>
                </button>
                <div class="faq-answer">
                    <p>Answer text</p>
                </div>
            </div>
        </div>
    </div>
    
    <div class="faq-sidebar">
        <div class="sidebar-content">
            <h3>Need Help?</h3>
            <p>Can't find what you're looking for? Contact our support team.</p>
            <button class="contact-btn">Contact Support</button>
        </div>
    </div>
</div>
```

## Customization

### CSS Variables

You can customize the appearance by overriding CSS variables or modifying the CSS file:

- Primary color: `#007bff`
- Background colors: `#f8f9fa`, `#e9ecef`
- Text colors: `#333`, `#495057`, `#6c757d`
- Border colors: `#e9ecef`, `#dee2e6`

### Contact Button

The contact button in the sidebar can be customized by modifying the event listener in the JavaScript file or by adding your own click handler.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11+ (with polyfills for CSS Grid)

## Dependencies

- No external dependencies required
- Uses modern CSS Grid and Flexbox
- ES6 modules for JavaScript

## Example

See `faq-demo.html` for a complete working example with sample FAQ data. 