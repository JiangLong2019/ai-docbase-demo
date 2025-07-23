# FAQ Block

A responsive, accessible FAQ (Frequently Asked Questions) block for Adobe Edge Delivery Services, inspired by modern FAQ interfaces like the [Terri Scheer website](https://www.terrischeer.com.au/faqs).

## Features

- ✅ **Expandable/Collapsible** - Click questions to reveal answers
- ✅ **Accessible** - Proper ARIA attributes and keyboard navigation
- ✅ **Auto-close** - Opening one FAQ automatically closes others
- ✅ **Smooth animations** - CSS transitions for expand/collapse
- ✅ **Mobile responsive** - Optimized for all screen sizes
- ✅ **Semantic HTML** - Clean, semantic markup structure

## Usage

### In your HTML document

```html
<div class="faq block" data-block-name="faq">
    <div>
        <div>Your Question Here?</div>
        <div>
            <p>Your answer content here. You can include:</p>
            <ul>
                <li>Lists</li>
                <li>Multiple paragraphs</li>
                <li><strong>Bold text</strong></li>
                <li>Any HTML content</li>
            </ul>
        </div>
    </div>
    
    <div>
        <div>Another Question?</div>
        <div>
            <p>Another answer with different content.</p>
        </div>
    </div>
</div>
```

### In Markdown (for content authors)

When authoring content in Microsoft Word or Google Docs that will be converted to this block:

```
| Question | Answer |
|----------|--------|
| What is your first question? | This is the answer to the first question. You can include multiple paragraphs and formatting. |
| What is your second question? | This is the answer to the second question. |
```

## Structure

Each FAQ item consists of:
- **Question** (first div): The clickable question text
- **Answer** (second div): The content that expands/collapses

## Styling

The block includes:
- Clean, modern design with subtle borders
- Hover effects on questions
- Animated expand/collapse transitions
- Circular toggle icons that rotate when expanded
- Responsive breakpoints for mobile devices

## Accessibility Features

- **ARIA attributes**: `aria-expanded`, `aria-controls`, `aria-hidden`
- **Keyboard navigation**: Questions are focusable buttons
- **Screen reader support**: Proper semantic structure
- **Focus indicators**: Visible focus outlines for keyboard users

## Browser Support

Works in all modern browsers including:
- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

## Customization

You can customize the appearance by modifying `blocks/faq/faq.css`:

- **Colors**: Change the color variables for themes
- **Spacing**: Adjust padding and margins
- **Animation**: Modify transition timing
- **Typography**: Update font sizes and weights
- **Mobile breakpoints**: Adjust responsive behavior

## Example Output

The block transforms simple HTML into an interactive FAQ with:
- Clickable questions that expand/collapse answers
- Smooth animations and hover effects  
- Professional styling consistent with modern web standards
- Full accessibility compliance

## Related Blocks

This FAQ block works well with:
- `header` - For page navigation
- `hero` - For page introductions
- `cards` - For related content sections
- `footer` - For additional links 