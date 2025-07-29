const { render, screen, fireEvent, waitFor } = require('@testing-library/dom');
require('@testing-library/jest-dom');
const decorate = require('../blocks/faq/faq.js').default;
const { createFAQBlock, sampleFAQData } = require('../stories/FAQ.js');

// Helper function to create a FAQ block for testing
function createTestFAQBlock(data = sampleFAQData) {
    const block = createFAQBlock(data);
    decorate(block);
    return block;
}

describe('FAQ Component', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        document.body.removeChild(container);
    });

    describe('Initial Rendering', () => {
        test('should render FAQ container with correct structure', () => {
            const block = createTestFAQBlock();
            container.appendChild(block);

            const faqsContainer = container.querySelector('.faqs');
            expect(faqsContainer).toBeInTheDocument();
            expect(faqsContainer.children.length).toBe(sampleFAQData.length);
        });

        test('should create FAQ items with correct classes', () => {
            const block = createTestFAQBlock();
            container.appendChild(block);

            const faqItems = container.querySelectorAll('.faq-item');
            expect(faqItems).toHaveLength(sampleFAQData.length);

            faqItems.forEach((item) => {
                expect(item).toHaveClass('faq-item');
                expect(item.querySelector('.faq-title')).toBeInTheDocument();
                expect(item.querySelector('.faq-content')).toBeInTheDocument();
            });
        });

        test('should render question and answer content correctly', () => {
            const block = createTestFAQBlock();
            container.appendChild(block);

            const firstTitle = container.querySelector('.faq-title-left');
            const firstContent = container.querySelector('.faq-content-wrapper');

            expect(firstTitle).toHaveTextContent('What is Adobe Experience Manager (AEM)?');
            expect(firstContent).toHaveTextContent('Adobe Experience Manager (AEM) is a comprehensive content management solution');
        });

        test('should set correct ARIA attributes', () => {
            const block = createTestFAQBlock();
            container.appendChild(block);

            const faqTitles = container.querySelectorAll('.faq-title');
            const faqContents = container.querySelectorAll('.faq-content');

            faqTitles.forEach((title, index) => {
                expect(title).toHaveAttribute('aria-expanded');
                expect(title).toHaveAttribute('aria-controls', `faq-content-${index}`);
            });

            faqContents.forEach((content, index) => {
                expect(content).toHaveAttribute('id', `faq-content-${index}`);
                expect(content).toHaveAttribute('aria-hidden');
            });
        });
    });

    describe('Auto-expand First Item', () => {
        test('should auto-expand the first FAQ item by default', async() => {
            const block = createTestFAQBlock();
            container.appendChild(block);

            await waitFor(() => {
                const firstTitle = container.querySelector('.faq-title');
                const firstItem = container.querySelector('.faq-item');
                const firstContent = container.querySelector('.faq-content');
                const firstToggle = container.querySelector('.faq-title-right');

                expect(firstTitle).toHaveAttribute('aria-expanded', 'true');
                expect(firstItem).toHaveClass('visible');
                expect(firstContent).toHaveAttribute('aria-hidden', 'false');
                expect(firstToggle).toHaveTextContent('−');
            });
        });

        test('should keep other items collapsed initially', async() => {
            const block = createTestFAQBlock();
            container.appendChild(block);

            await waitFor(() => {
                const allTitles = container.querySelectorAll('.faq-title');
                const allItems = container.querySelectorAll('.faq-item');
                const allToggles = container.querySelectorAll('.faq-title-right');

                // First item should be expanded
                expect(allTitles[0]).toHaveAttribute('aria-expanded', 'true');
                expect(allItems[0]).toHaveClass('visible');
                expect(allToggles[0]).toHaveTextContent('−');

                // Other items should be collapsed
                for (let i = 1; i < allTitles.length; i++) {
                    expect(allTitles[i]).toHaveAttribute('aria-expanded', 'false');
                    expect(allItems[i]).not.toHaveClass('visible');
                    expect(allToggles[i]).toHaveTextContent('+');
                }
            });
        });
    });

    describe('Interaction Behavior', () => {
        test('should expand item when clicked', async() => {
            const block = createTestFAQBlock();
            container.appendChild(block);

            await waitFor(() => {
                const secondTitle = container.querySelectorAll('.faq-title')[1];
                const secondItem = container.querySelectorAll('.faq-item')[1];
                const secondContent = container.querySelectorAll('.faq-content')[1];
                const secondToggle = container.querySelectorAll('.faq-title-right')[1];

                // Initially collapsed
                expect(secondTitle).toHaveAttribute('aria-expanded', 'false');
                expect(secondItem).not.toHaveClass('visible');
                expect(secondToggle).toHaveTextContent('+');

                // Click to expand
                fireEvent.click(secondTitle);

                // Should now be expanded
                expect(secondTitle).toHaveAttribute('aria-expanded', 'true');
                expect(secondItem).toHaveClass('visible');
                expect(secondContent).toHaveAttribute('aria-hidden', 'false');
                expect(secondToggle).toHaveTextContent('−');
            });
        });

        test('should collapse item when clicked again', async() => {
            const block = createTestFAQBlock();
            container.appendChild(block);

            await waitFor(() => {
                const firstTitle = container.querySelector('.faq-title');
                const firstItem = container.querySelector('.faq-item');
                const firstContent = container.querySelector('.faq-content');
                const firstToggle = container.querySelector('.faq-title-right');

                // Initially expanded
                expect(firstTitle).toHaveAttribute('aria-expanded', 'true');
                expect(firstItem).toHaveClass('visible');
                expect(firstToggle).toHaveTextContent('−');

                // Click to collapse
                fireEvent.click(firstTitle);

                // Should now be collapsed
                expect(firstTitle).toHaveAttribute('aria-expanded', 'false');
                expect(firstItem).not.toHaveClass('visible');
                expect(firstContent).toHaveAttribute('aria-hidden', 'true');
                expect(firstToggle).toHaveTextContent('+');
            });
        });

        test('should close other items when a new item is opened', async() => {
            const block = createTestFAQBlock();
            container.appendChild(block);

            await waitFor(() => {
                const allTitles = container.querySelectorAll('.faq-title');
                const allItems = container.querySelectorAll('.faq-item');
                const allToggles = container.querySelectorAll('.faq-title-right');

                // First item should be expanded initially
                expect(allTitles[0]).toHaveAttribute('aria-expanded', 'true');
                expect(allItems[0]).toHaveClass('visible');

                // Click second item
                fireEvent.click(allTitles[1]);

                // Second item should be expanded
                expect(allTitles[1]).toHaveAttribute('aria-expanded', 'true');
                expect(allItems[1]).toHaveClass('visible');
                expect(allToggles[1]).toHaveTextContent('−');

                // First item should be collapsed
                expect(allTitles[0]).toHaveAttribute('aria-expanded', 'false');
                expect(allItems[0]).not.toHaveClass('visible');
                expect(allToggles[0]).toHaveTextContent('+');
            });
        });
    });

    describe('Accessibility', () => {
        test('should be keyboard accessible', () => {
            const block = createTestFAQBlock();
            container.appendChild(block);

            const firstTitle = container.querySelector('.faq-title');
            // Buttons are naturally focusable, so they don't need tabindex
            expect(firstTitle).toBeInTheDocument();
            expect(firstTitle.tagName).toBe('BUTTON');
        });

        test('should have proper focus management', () => {
            const block = createTestFAQBlock();
            container.appendChild(block);

            const firstTitle = container.querySelector('.faq-title');
            firstTitle.focus();
            expect(firstTitle).toHaveFocus();
        });

        test('should have proper ARIA relationships', () => {
            const block = createTestFAQBlock();
            container.appendChild(block);

            const firstTitle = container.querySelector('.faq-title');
            const firstContent = container.querySelector('.faq-content');

            const controlsId = firstTitle.getAttribute('aria-controls');
            const contentId = firstContent.getAttribute('id');

            expect(controlsId).toBe(contentId);
        });
    });

    describe('Edge Cases', () => {
        test('should handle empty FAQ data', () => {
            const block = createTestFAQBlock([]);
            container.appendChild(block);

            const faqsContainer = container.querySelector('.faqs');
            expect(faqsContainer).toBeInTheDocument();
            expect(faqsContainer.children.length).toBe(0);
        });

        test('should handle single FAQ item', async() => {
            const singleData = [sampleFAQData[0]];
            const block = createTestFAQBlock(singleData);
            container.appendChild(block);

            await waitFor(() => {
                const faqItems = container.querySelectorAll('.faq-item');
                expect(faqItems).toHaveLength(1);

                const firstTitle = container.querySelector('.faq-title');
                expect(firstTitle).toHaveAttribute('aria-expanded', 'true');
            });
        });

        test('should handle malformed data gracefully', () => {
            const malformedData = [
                { question: '<h3>Test Question</h3>', answer: '<p>Test Answer</p>' },
                { question: '', answer: '<p>Empty Question</p>' },
                { question: '<h3>No Answer</h3>', answer: '' }
            ];

            const block = createTestFAQBlock(malformedData);
            container.appendChild(block);

            const faqItems = container.querySelectorAll('.faq-item');
            expect(faqItems).toHaveLength(3);
        });
    });

    describe('Performance', () => {
        test('should handle large number of FAQ items', () => {
            const largeData = Array.from({ length: 50 }, (_, i) => ({
                question: `<h3>Question ${i + 1}</h3>`,
                answer: `<p>Answer ${i + 1}</p>`
            }));

            const startTime = performance.now();
            const block = createTestFAQBlock(largeData);
            const endTime = performance.now();

            container.appendChild(block);

            const faqItems = container.querySelectorAll('.faq-item');
            expect(faqItems).toHaveLength(50);
            expect(endTime - startTime).toBeLessThan(1000); // Should render in under 1 second
        });
    });
});