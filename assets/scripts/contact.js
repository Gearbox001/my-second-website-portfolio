function handleContactSubmit(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const newsletter = document.getElementById('newsletter').checked;
    
    const successMessage = `
Thank you for your message, ${firstName} ${lastName}!
-----------------------------------------------
Email: ${email}
Subject: ${subject}
Message: ${message}
Newsletter Subscription: ${newsletter ? 'Yes' : 'No'}

We'll get back to you soon!
    `;
    
    alert(successMessage);
    
    // Reset form
    document.getElementById('contactForm').reset();
    
    return false;
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const emailInput = document.getElementById('email');
    
    // Email validation
    emailInput.addEventListener('blur', function() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(this.value)) {
            this.style.borderColor = 'rgba(255, 0, 0, 0.7)';
            this.setCustomValidity('Please enter a valid email address');
        } else {
            this.style.borderColor = 'var(--primary-text)';
            this.setCustomValidity('');
        }
    });
    
    // Real-time validation for all required fields
    const requiredInputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    
    requiredInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value.trim() === '') {
                this.style.borderColor = 'rgba(255, 0, 0, 0.7)';
            } else {
                this.style.borderColor = 'var(--primary-text)';
            }
        });
        
        input.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                this.style.borderColor = 'var(--primary-text)';
            }
        });
    });
    
    // Character counter for message textarea
    const messageTextarea = document.getElementById('message');
    const counterDiv = document.createElement('div');
    counterDiv.style.textAlign = 'right';
    counterDiv.style.fontSize = '14px';
    counterDiv.style.marginTop = '5px';
    counterDiv.style.color = 'var(--secondary-text)';
    messageTextarea.parentNode.appendChild(counterDiv);
    
    messageTextarea.addEventListener('input', function() {
        const length = this.value.length;
        counterDiv.textContent = `${length} characters`;
    });
});

// Add smooth animations to form elements
const style = document.createElement('style');
style.textContent = `
    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
        transform: scale(1.01);
        transition: all 0.3s ease;
    }
    
    .social-link {
        animation: fadeInUp 0.5s ease;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
