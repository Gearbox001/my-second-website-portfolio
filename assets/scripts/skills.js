// Handle skill form submission
function handleSubmit(event) {
    event.preventDefault();
    
    // Get form values
    const skillName = document.getElementById('skillName').value;
    const skillCategory = document.getElementById('skillCategory').value;
    const skillLevel = document.getElementById('skillLevel').value;
    const skillDescription = document.getElementById('skillDescription').value;
    const yearsExperience = document.getElementById('yearsExperience').value;
    
    // Create success message
    const message = `
Skill Added Successfully!
------------------------
Name: ${skillName}
Category: ${skillCategory}
Level: ${skillLevel}
Description: ${skillDescription}
Years of Experience: ${yearsExperience}
    `;
    
    alert(message);
    
    // Optional: Add the skill to the page dynamically
    addSkillToPage(skillName, skillCategory);
    
    // Reset form
    document.getElementById('skillForm').reset();
    
    return false;
}

// Add skill to the skills grid dynamically
function addSkillToPage(skillName, category) {
    // Find the appropriate skill card based on category
    const skillCards = document.querySelectorAll('.skill-card');
    let targetCard = null;
    
    skillCards.forEach(card => {
        const cardTitle = card.querySelector('h3').textContent.toLowerCase();
        if (cardTitle.includes(category.toLowerCase())) {
            targetCard = card;
        }
    });
    
    // If found, add the new skill to that card
    if (targetCard) {
        const ul = targetCard.querySelector('ul');
        const li = document.createElement('li');
        li.textContent = skillName;
        li.style.animation = 'fadeIn 0.5s ease';
        ul.appendChild(li);
    }
}

// Add CSS animation for new skills
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Form validation feedback
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('skillForm');
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    
    inputs.forEach(input => {
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
});
