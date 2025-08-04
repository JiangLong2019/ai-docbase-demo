export default function decorate(block) {
    // Create the main FAQ container
    const faqContainer = document.createElement('div');
    faqContainer.className = 'faq-container';

    // Create the header section
    const header = document.createElement('div');
    header.className = 'faq-header';

    // Create the title
    const title = document.createElement('h1');
    title.textContent = 'FAQs';
    header.appendChild(title);

    // Add style and full-width classes like Terri Scheer
    const styleDiv = document.createElement('div');
    styleDiv.className = 'style';
    const fullWidthDiv = document.createElement('div');
    fullWidthDiv.className = 'full-width';

    // Create categories section
    const categoriesSection = document.createElement('div');
    categoriesSection.className = 'faq-categories';

    // Create categories list
    const categoriesList = document.createElement('ul');
    categoriesList.className = 'categories-list';

    // Extract categories from the block content
    const categories = new Set();
    [...block.children].forEach((row) => {
        const categoryCell = row.children[0];
        if (categoryCell && categoryCell.textContent.trim()) {
            categories.add(categoryCell.textContent.trim());
        }
    });

    // Create category buttons
    const allCategories = ['All', ...Array.from(categories)];
    allCategories.forEach((category) => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = category;
        button.className = 'category-btn';
        if (category === 'All') {
            button.classList.add('active');
        }
        li.appendChild(button);
        categoriesList.appendChild(li);
    });

    categoriesSection.appendChild(categoriesList);

    // Create the main content area
    const contentArea = document.createElement('div');
    contentArea.className = 'faq-content';

    // Create FAQ items container
    const faqItems = document.createElement('div');
    faqItems.className = 'faq-items';

    // Process each FAQ item
    [...block.children].forEach((row) => {
        if (row.children.length >= 3) {
            const category = row.children[0].textContent.trim();
            const question = row.children[1].textContent.trim();
            const answer = row.children[2].textContent.trim();

            const faqItem = document.createElement('div');
            faqItem.className = 'faq-item';
            faqItem.setAttribute('data-category', category);

            const questionBtn = document.createElement('button');
            questionBtn.className = 'faq-question';
            questionBtn.innerHTML = `
        <span class="question-text">${question}</span>
        <span class="expand-icon">+</span>
      `;

            const answerDiv = document.createElement('div');
            answerDiv.className = 'faq-answer';
            answerDiv.innerHTML = `<p>${answer}</p>`;

            faqItem.appendChild(questionBtn);
            faqItem.appendChild(answerDiv);
            faqItems.appendChild(faqItem);
        }
    });

    contentArea.appendChild(faqItems);

    // Create sidebar
    const sidebar = document.createElement('div');
    sidebar.className = 'faq-sidebar';
    sidebar.innerHTML = `
    <div class="sidebar-content">
      <h3>Need Help?</h3>
      <p>Can't find what you're looking for? Contact our support team.</p>
      <button class="contact-btn">Contact Support</button>
    </div>
  `;

    // Assemble the FAQ block
    faqContainer.appendChild(header);
    faqContainer.appendChild(categoriesSection);
    faqContainer.appendChild(contentArea);
    faqContainer.appendChild(sidebar);

    // Clear the original block and add the new structure
    block.textContent = '';
    block.appendChild(faqContainer);

    // Add event listeners
    addEventListeners(block);
}

function addEventListeners(block) {
    // Category filter functionality
    const categoryBtns = block.querySelectorAll('.category-btn');
    const faqItems = block.querySelectorAll('.faq-item');

    categoryBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const selectedCategory = btn.textContent;

            // Filter FAQ items
            faqItems.forEach((item) => {
                if (selectedCategory === 'All' || item.getAttribute('data-category') === selectedCategory) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // FAQ item expand/collapse functionality
    const faqQuestions = block.querySelectorAll('.faq-question');

    faqQuestions.forEach((question) => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const answer = faqItem.querySelector('.faq-answer');
            const expandIcon = question.querySelector('.expand-icon');

            // Close other open items
            faqQuestions.forEach((otherQuestion) => {
                if (otherQuestion !== question) {
                    const otherItem = otherQuestion.parentElement;
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherIcon = otherQuestion.querySelector('.expand-icon');

                    otherAnswer.classList.remove('active');
                    otherIcon.textContent = '+';
                }
            });

            // Toggle current item
            answer.classList.toggle('active');
            expandIcon.textContent = answer.classList.contains('active') ? '−' : '+';
        });
    });

    // Contact button functionality
    const contactBtn = block.querySelector('.contact-btn');
    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            // You can customize this action
            console.log('Contact support clicked');
        });
    }
}