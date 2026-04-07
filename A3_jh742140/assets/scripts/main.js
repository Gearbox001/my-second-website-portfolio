// Typing animation for main page
const text = "Welcome to Juhan's Portfolio";
let index = 0;

function typeWriter() {
    const element = document.getElementById("typing-text");
    if (element && index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    typeWriter();
});

// Theme change function
function changeTheme() {
    const root = document.documentElement;
    const currentBg = getComputedStyle(root).getPropertyValue('--primary-bg').trim();
    
    if (currentBg === '#000' || currentBg === 'rgb(0, 0, 0)') {
        // Switch to light theme
        root.style.setProperty('--primary-bg', '#f0f0f0');
        root.style.setProperty('--primary-text', '#111111');
        root.style.setProperty('--secondary-text', '#111111');
        root.style.setProperty('--border-color', 'black');
        root.style.setProperty('--hover-color', 'black');
        document.body.style.backgroundColor = '#f0f0f0';
    } else {
        // Switch back to dark theme
        root.style.setProperty('--primary-bg', '#000');
        root.style.setProperty('--primary-text', '#00ff00');
        root.style.setProperty('--secondary-text', '#00cc00');
        root.style.setProperty('--border-color', '#00ff00');
        root.style.setProperty('--hover-color', '#00ff00');
        document.body.style.backgroundColor = '#000';
    }
}

// Hover effect for smile button
function hoverSmile() {
    const img = document.querySelector('.theme-button img');
    if (img) {
        img.style.filter = 'brightness(1.5)';
    }
}

function leaveSmile() {
    const img = document.querySelector('.theme-button img');
    if (img) {
        img.style.filter = 'brightness(1)';
    }
}

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
