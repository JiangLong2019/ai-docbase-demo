import { createFAQBlock, sampleFAQData, longFAQData, shortFAQData } from './FAQ.js';
import '../blocks/faq/faq.css';
import '../styles/styles.css';

export default {
    title: 'Blocks/FAQ',
    parameters: {
        docs: {
            description: {
                component: 'A collapsible FAQ (Frequently Asked Questions) component with smooth animations and accessibility features. The first FAQ item is automatically expanded by default.'
            }
        },
        layout: 'padded',
    },
    argTypes: {
        faqData: {
            control: { type: 'object' },
            description: 'Array of FAQ objects with question and answer properties'
        },
        autoExpandFirst: {
            control: { type: 'boolean' },
            description: 'Whether to automatically expand the first FAQ item'
        }
    }
};

// Import the decorate function from the actual FAQ block
import decorate from '../blocks/faq/faq.js';

// Template function that creates the FAQ block and applies the decorate function
const Template = (args) => {
    const block = createFAQBlock(args.faqData);

    // Apply the decorate function to transform the block
    decorate(block);

    return block;
};

// Default story with sample data
export const Default = Template.bind({});
Default.args = {
    faqData: sampleFAQData
};
Default.parameters = {
    docs: {
        description: {
            story: 'Default FAQ component with 5 sample questions about Adobe Experience Manager.'
        }
    }
};



// Story with long content
export const LongContent = Template.bind({});
LongContent.args = {
    faqData: longFAQData
};
LongContent.parameters = {
    docs: {
        description: {
            story: 'FAQ component with longer, more detailed content to demonstrate how the component handles extensive text and lists.'
        }
    }
};



// Story with single FAQ
export const SingleFAQ = Template.bind({});
SingleFAQ.args = {
    faqData: shortFAQData
};
SingleFAQ.parameters = {
    docs: {
        description: {
            story: 'FAQ component with just one question to show the minimal state.'
        }
    }
};

// Story with custom content
export const CustomContent = Template.bind({});
CustomContent.args = {
    faqData: [{
            question: '<h2>What makes this FAQ component special?</h2>',
            answer: '<p>This FAQ component features:</p><ul><li><strong>Smooth animations</strong> for expand/collapse</li><li><strong>Accessibility support</strong> with proper ARIA attributes</li><li><strong>Responsive design</strong> that works on all devices</li><li><strong>Auto-expand first item</strong> for better UX</li><li><strong>Keyboard navigation</strong> support</li></ul>'
        },
        {
            question: '<h3>How do I use this component?</h3>',
            answer: '<p>Simply include the FAQ block in your HTML structure with question and answer pairs. The JavaScript will automatically transform it into an interactive FAQ component.</p>'
        },
        {
            question: '<h4>Can I customize the styling?</h4>',
            answer: '<p>Yes! The component uses CSS custom properties (variables) that you can override to match your brand colors and styling preferences.</p>'
        }
    ]
};
CustomContent.parameters = {
    docs: {
        description: {
            story: 'FAQ component with custom content demonstrating different heading levels and various content types.'
        }
    }
};

// Story showing mobile view
export const MobileView = Template.bind({});
MobileView.args = {
    faqData: sampleFAQData
};
MobileView.parameters = {
    viewport: {
        defaultViewport: 'mobile1'
    },
    docs: {
        description: {
            story: 'FAQ component viewed on mobile device to demonstrate responsive behavior.'
        }
    }
};

// Story showing tablet view
export const TabletView = Template.bind({});
TabletView.args = {
    faqData: sampleFAQData
};
TabletView.parameters = {
    viewport: {
        defaultViewport: 'tablet'
    },
    docs: {
        description: {
            story: 'FAQ component viewed on tablet device.'
        }
    }
};