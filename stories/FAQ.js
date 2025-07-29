// FAQ Component for Storybook
export function createFAQBlock(faqData = []) {
    const block = document.createElement('div');
    block.className = 'faq-block';

    faqData.forEach((faq) => {
        const row = document.createElement('div');

        // Question element
        const question = document.createElement('div');
        question.innerHTML = faq.question;

        // Answer element
        const answer = document.createElement('div');
        answer.innerHTML = faq.answer;

        row.appendChild(question);
        row.appendChild(answer);
        block.appendChild(row);
    });

    return block;
}

// Sample FAQ data
export const sampleFAQData = [{
        question: '<h3>What is Adobe Experience Manager (AEM)?</h3>',
        answer: '<p>Adobe Experience Manager (AEM) is a comprehensive content management solution for building websites, mobile apps, and forms. It helps you create, manage, and optimize digital customer experiences across all channels.</p>'
    },
    {
        question: '<h3>How do I get started with AEM?</h3>',
        answer: '<p>To get started with AEM, you can:</p><ul><li>Download the latest version from Adobe</li><li>Follow the installation guide</li><li>Complete the getting started tutorial</li><li>Join the AEM community forums</li></ul>'
    },
    {
        question: '<h3>What are the system requirements for AEM?</h3>',
        answer: '<p>AEM requires:</p><ul><li><strong>Operating System:</strong> Windows 10/11, macOS 10.15+, or Linux</li><li><strong>Java:</strong> JDK 11 or 17</li><li><strong>Memory:</strong> Minimum 8GB RAM (16GB recommended)</li><li><strong>Storage:</strong> At least 10GB free space</li></ul>'
    },
    {
        question: '<h3>Can I customize AEM components?</h3>',
        answer: '<p>Yes, AEM is highly customizable. You can create custom components, modify existing ones, and develop custom workflows to meet your specific business requirements. The component development follows standard web technologies like HTML, CSS, and JavaScript.</p>'
    },
    {
        question: '<h3>Is AEM suitable for small businesses?</h3>',
        answer: '<p>While AEM is primarily designed for enterprise-level organizations, Adobe offers different licensing options and deployment models that can be suitable for smaller businesses with growing digital experience needs. Consider your specific requirements and budget when evaluating AEM.</p>'
    }
];

export const longFAQData = [{
        question: '<h3>What are the advanced features of Adobe Experience Manager?</h3>',
        answer: '<p>Adobe Experience Manager offers a wide range of advanced features including:</p><ul><li><strong>Multi-site Management:</strong> Manage multiple websites from a single platform</li><li><strong>Digital Asset Management:</strong> Centralized storage and management of digital assets</li><li><strong>Personalization:</strong> Deliver personalized content based on user behavior</li><li><strong>Analytics Integration:</strong> Built-in analytics and reporting capabilities</li><li><strong>Workflow Automation:</strong> Automated content approval and publishing workflows</li><li><strong>Multi-channel Publishing:</strong> Publish content across web, mobile, and other channels</li></ul><p>These features help organizations create engaging digital experiences and streamline their content management processes.</p>'
    },
    {
        question: '<h3>How does AEM handle content versioning and rollback?</h3>',
        answer: '<p>AEM provides robust versioning and rollback capabilities:</p><ul><li><strong>Version Control:</strong> Every content change creates a new version</li><li><strong>Rollback:</strong> Easily revert to previous versions if needed</li><li><strong>Compare Versions:</strong> Side-by-side comparison of different versions</li><li><strong>Branch Management:</strong> Create and manage content branches for different scenarios</li></ul><p>This ensures content integrity and provides a safety net for content editors.</p>'
    }
];

export const shortFAQData = [{
    question: '<h3>What is AEM?</h3>',
    answer: '<p>AEM is Adobe\'s enterprise content management system.</p>'
}];