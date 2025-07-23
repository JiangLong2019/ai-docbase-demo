export default function decorate(block) {
  // Convert the block structure to semantic FAQ HTML
  const faqsContainer = document.createElement('div');
  faqsContainer.className = 'faqs';

  [...block.children].forEach((row, index) => {
    if (row.children.length >= 2) {
      const question = row.children[0];
      const answer = row.children[1];

      // Create FAQ item
      const faqItem = document.createElement('div');
      faqItem.className = 'faq-item';

      // Create question title
      const faqTitle = document.createElement('button');
      faqTitle.className = 'faq-title';
      faqTitle.setAttribute('aria-expanded', 'false');
      faqTitle.setAttribute('aria-controls', `faq-content-${index}`);

      // Create title left section
      const titleLeft = document.createElement('div');
      titleLeft.className = 'faq-title-left';
      titleLeft.innerHTML = question.innerHTML;

      // Create title right section (toggle icon)
      const titleRight = document.createElement('div');
      titleRight.className = 'faq-title-right';
      titleRight.setAttribute('aria-hidden', 'true');
      titleRight.textContent = '+';

      faqTitle.appendChild(titleLeft);
      faqTitle.appendChild(titleRight);

      // Create answer content
      const faqContent = document.createElement('div');
      faqContent.className = 'faq-content';
      faqContent.id = `faq-content-${index}`;
      faqContent.setAttribute('aria-hidden', 'true');

      const contentPanel = document.createElement('div');
      contentPanel.className = 'faq-content-panel';

      const contentWrapper = document.createElement('div');
      contentWrapper.className = 'faq-content-wrapper';
      contentWrapper.innerHTML = answer.innerHTML;

      contentPanel.appendChild(contentWrapper);
      faqContent.appendChild(contentPanel);

      // Add click handler for expand/collapse
      faqTitle.addEventListener('click', () => {
        const isExpanded = faqTitle.getAttribute('aria-expanded') === 'true';

        // Close all other FAQ items
        block.querySelectorAll('.faq-title').forEach((btn) => {
          if (btn !== faqTitle) {
            btn.setAttribute('aria-expanded', 'false');
            btn.closest('.faq-item').classList.remove('visible');
            btn.querySelector('.faq-title-right').textContent = '+';
            const targetContent = document.getElementById(btn.getAttribute('aria-controls'));
            if (targetContent) {
              targetContent.setAttribute('aria-hidden', 'true');
            }
          }
        });

        // Toggle current item
        if (!isExpanded) {
          faqTitle.setAttribute('aria-expanded', 'true');
          faqItem.classList.add('visible');
          titleRight.textContent = '−';
          faqContent.setAttribute('aria-hidden', 'false');
        } else {
          faqTitle.setAttribute('aria-expanded', 'false');
          faqItem.classList.remove('visible');
          titleRight.textContent = '+';
          faqContent.setAttribute('aria-hidden', 'true');
        }
      });

      faqItem.appendChild(faqTitle);
      faqItem.appendChild(faqContent);
      faqsContainer.appendChild(faqItem);
    }
  });

  // Replace block content
  block.textContent = '';
  block.appendChild(faqsContainer);

  // Auto-expand the first FAQ item by default
  const firstTitle = faqsContainer.querySelector('.faq-title');
  const firstItem = faqsContainer.querySelector('.faq-item');
  const firstContent = faqsContainer.querySelector('.faq-content');

  if (firstTitle && firstItem && firstContent) {
    // Use setTimeout to ensure DOM is fully rendered
    setTimeout(() => {
      // Set the first item as expanded
      firstTitle.setAttribute('aria-expanded', 'true');
      firstItem.classList.add('visible');
      firstTitle.querySelector('.faq-title-right').textContent = '−';
      firstContent.setAttribute('aria-hidden', 'false');
    }, 10);
  }
}
