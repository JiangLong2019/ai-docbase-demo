export default function decorate(block) {
  // Convert the block structure to semantic FAQ HTML
  const faqContainer = document.createElement('div');
  faqContainer.className = 'faq-container';

  [...block.children].forEach((row, index) => {
    if (row.children.length >= 2) {
      const question = row.children[0];
      const answer = row.children[1];

      // Create FAQ item
      const faqItem = document.createElement('div');
      faqItem.className = 'faq-item';

      // Create question button
      const questionButton = document.createElement('button');
      questionButton.className = 'faq-question';
      questionButton.setAttribute('aria-expanded', 'false');
      questionButton.setAttribute('aria-controls', `faq-answer-${index}`);
      questionButton.innerHTML = `
        <span class="faq-question-text">${question.textContent.trim()}</span>
        <span class="faq-toggle-icon" aria-hidden="true">+</span>
      `;

      // Create answer container
      const answerContainer = document.createElement('div');
      answerContainer.className = 'faq-answer';
      answerContainer.id = `faq-answer-${index}`;
      answerContainer.setAttribute('aria-hidden', 'true');

      const answerContent = document.createElement('div');
      answerContent.className = 'faq-answer-content';
      answerContent.innerHTML = answer.innerHTML;

      answerContainer.appendChild(answerContent);

      // Add click handler for expand/collapse
      questionButton.addEventListener('click', () => {
        const isExpanded = questionButton.getAttribute('aria-expanded') === 'true';

        // Close all other FAQ items
        block.querySelectorAll('.faq-question').forEach((btn) => {
          if (btn !== questionButton) {
            btn.setAttribute('aria-expanded', 'false');
            btn.querySelector('.faq-toggle-icon').textContent = '+';
            const targetAnswer = document.getElementById(btn.getAttribute('aria-controls'));
            if (targetAnswer) {
              targetAnswer.setAttribute('aria-hidden', 'true');
              targetAnswer.style.maxHeight = '0';
            }
          }
        });

        // Toggle current item
        if (!isExpanded) {
          questionButton.setAttribute('aria-expanded', 'true');
          questionButton.querySelector('.faq-toggle-icon').textContent = '−';
          answerContainer.setAttribute('aria-hidden', 'false');
          answerContainer.style.maxHeight = `${answerContainer.scrollHeight}px`;
        } else {
          questionButton.setAttribute('aria-expanded', 'false');
          questionButton.querySelector('.faq-toggle-icon').textContent = '+';
          answerContainer.setAttribute('aria-hidden', 'true');
          answerContainer.style.maxHeight = '0';
        }
      });

      faqItem.appendChild(questionButton);
      faqItem.appendChild(answerContainer);
      faqContainer.appendChild(faqItem);
    }
  });

  // Replace block content
  block.textContent = '';
  block.appendChild(faqContainer);
}
