================================================================================
CSCI1170 Assignment 3: HTML, CSS, & JavaScript
Student: Juhan Park
Date: 2026
================================================================================

PROJECT STRUCTURE
================================================================================

Root Directory:
  - index.html              (Main landing page)
  - README.txt              (This file)
  
  /pages/
    - profile.html          (Profile page with photo gallery)
    - skills.html           (Skills page with form and grid)
    - contact.html          (Contact page with contact form)
  
  /assets/
    /css/
      - style.css           (Global styles for all pages)
      - index.css           (Styles specific to index.html)
      - profile.css         (Styles specific to profile.html)
      - skills.css          (Styles specific to skills.html)
      - contact.css         (Styles specific to contact.html)
    
    /scripts/
      - main.js             (Main JavaScript for index.html)
      - skills.js           (JavaScript for skills form handling)
      - contact.js          (JavaScript for contact form handling)
    
    /images/
      - cmd_favicon.png     (Favicon)
      - smile.png           (Theme toggle icon)
      - IMG_1274.JPG        (Profile photo)
      - pop-up-close.png    (Return/close button)
    
    /audios/
      - Rick Astley - Never Gonna Give You Up.mp3


================================================================================
PART 1: CSS STYLING REQUIREMENTS
================================================================================

1. THREE WEB PAGES
   - index.html (Main page)
   - profile.html (Profile with photo gallery)
   - skills.html (Skills with form)
   - contact.html (Contact form - BONUS)

2. NAVIGATION STRUCTURE
   Location: index.html, lines 30-50
   CSS: index.css, lines 40-70
   - Flexbox navigation menu with buttons
   - Links to all main pages

3. THREE IMAGES WITH BORDER, PADDING, MARGINS
   CSS Location: style.css, lines 80-95
   
   Images styled:
   a) Profile photo: profile.html, line 20
      - Border: 4px solid
      - Padding: 15px
      - Margin: 20px
   
   b) Gallery images: profile.html, lines 60-85
      - Border: 2px solid (from .gallery-item)
      - Padding: 10px
      - Margin: 15px
   
   c) Footer close button: All pages
      - Border: 3px solid
      - Padding: 10px
      - Margin: 15px

4. STYLED URLs (LINKS)
   CSS Location: style.css, lines 40-58
   - Default link color: #00ff00
   - Hover effect: text-shadow glow
   - Visited: #00cc00
   - Active: #00dd00
   - External links have arrow indicator (::after)

5. STYLED LISTS
   CSS Location: style.css, lines 90-115
   
   Unordered Lists:
   - Custom bullet: "▶ " prefix
   - Location: profile.html, lines 25-30
   
   Ordered Lists:
   - Custom counter styling
   - Location: profile.html, lines 35-40

6. STYLED TABLE
   CSS Location: style.css, lines 120-140
   Location: skills.html, lines 85-100
   - Border collapse
   - Striped rows (nth-child)
   - Header with inverted colors


================================================================================
PART 2: ADDITIONAL CSS REQUIREMENTS
================================================================================

1. FORM (TWO FORMS INCLUDED)
   
   Form 1: Skills Form
   Location: skills.html, lines 105-165
   CSS: skills.css, lines 80-150
   Fields: Text input, Select dropdown, Textarea, Submit/Reset buttons
   
   Form 2: Contact Form
   Location: contact.html, lines 50-120
   CSS: contact.css, lines 40-120
   Fields: Text inputs, Email input, Select, Textarea, Checkbox

2. FLEXBOX STYLING
   Locations:
   a) Main Navigation: index.css, lines 40-70
      - display: flex
      - flex-direction: column (mobile), row (tablet+)
      
   b) Profile Content: profile.css, lines 1-40
      - display: flex
      - Responsive flex-direction change
      
   c) Form Actions: skills.css, lines 130-145
      - Flexbox button layout

3. GRID LAYOUT
   Locations:
   a) Photo Gallery: profile.css, lines 45-100
      - display: grid
      - grid-template-columns: 1fr (mobile) → 2fr (tablet) → 3fr (desktop)
      
   b) Skills Grid: skills.css, lines 15-55
      - display: grid
      - Responsive 1/2/3 column layout
      
   c) Contact Info Grid: contact.css, lines 10-45
      - display: grid
      - 1/2/3 column responsive layout

4. REQUIRED SELECTORS AND LOCATIONS

   a) UNIVERSAL SELECTOR (*)
      Location: style.css, line 2
      Purpose: Reset box-sizing for all elements
      Code: * { box-sizing: border-box; }
   
   b) MULTIPLE SELECTOR
      Location: style.css, line 14
      Purpose: Style body and html together
      Code: body, html { ... }
      
      Also: style.css, line 22
      Code: h1, h2, h3, h4, h5, h6 { ... }
   
   c) CHILD SELECTOR (>)
      Location: style.css, line 128
      Purpose: Target direct children of table
      Code: table > tbody > tr:nth-child(even) { ... }
      
      Also: skills.css, line 125
      Code: .form-actions > button { ... }
   
   d) SIBLING SELECTOR (~)
      Location: style.css, line 188
      Purpose: Style all paragraphs after h2
      Code: h2 ~ p { text-indent: 2em; }
      
      Also: skills.css, line 215
      Code: h2 ~ .skills-grid { margin-top: 30px; }
   
   e) ADJACENT SIBLING SELECTOR (+)
      Location: style.css, line 193
      Purpose: Style first paragraph after h1
      Code: h1 + p { font-size: 1.2em; ... }
      
      Also: profile.css, line 85
      Code: .gallery-item img + .caption { ... }
   
   f) ATTRIBUTE SELECTOR
      Location: style.css, line 49
      Purpose: Add arrow to external links
      Code: a[href^="http"]::after { content: " ↗"; }
      
      Also: skills.css, lines 220-225
      Code: input[type="text"]:valid { ... }
            input[required]:invalid { ... }
   
   g) PSEUDO-ELEMENT SELECTOR (::)
      Location: style.css, line 175
      Purpose: Style first letter of paragraphs
      Code: p::first-letter { font-size: 2em; ... }
      
      Also: style.css, line 180
      Code: h1::before { content: "> "; }
      
      Also: style.css, line 49
      Code: a[href^="http"]::after { ... }


================================================================================
PART 3: RESPONSIVE DESIGN (Desktop, Mobile, Tablet)
================================================================================

MOBILE (Default - up to 767px):
- Single column layouts
- Stacked navigation
- Font sizes optimized for mobile
- Full-width forms and images

TABLET (768px - 1023px):
Media queries in:
- style.css, line 220
- index.css, line 105
- profile.css, line 115
- skills.css, line 175
- contact.css, line 145

Features:
- 2-column grid layouts
- Horizontal navigation
- Medium font sizes
- Flexbox row layouts

DESKTOP (1024px+):
Media queries in:
- style.css, line 232
- index.css, line 130
- profile.css, line 135
- skills.css, line 190
- contact.css, line 165

Features:
- 3-column grid layouts
- Maximum widths applied
- Largest font sizes
- Enhanced spacing and padding
- Full flexbox layouts

DYNAMIC SIZING:
- All layouts use relative units (%, em, rem, vw)
- Flexbox and Grid automatically adjust
- Images scale with max-width: 100%
- Tested across different screen sizes


================================================================================
PART 4: REQUIRED ELEMENTS
================================================================================

✓ Three webpages (index, profile, skills, contact)
✓ Tables (skills.html, line 85)
✓ Text areas (skills.html line 138, contact.html line 95)
✓ Photo gallery (profile.html, lines 55-90, using Grid)
✓ Hero Image/Splash (index.html, lines 15-20)


================================================================================
PART 5: ACCESSIBILITY FEATURES
================================================================================

1. SEMANTIC HTML
   - Proper heading hierarchy (h1 → h2 → h3)
   - <nav>, <section>, <footer> elements
   - <form> with proper structure

2. ALT TEXT ON ALL IMAGES
   - Profile photo: "Juhan Park with sister - family photo"
   - Gallery images: Descriptive alt text for each
   - Icons: Descriptive alt text
   - Decorative images: Marked appropriately

3. ARIA LABELS
   - Form inputs have aria-label attributes
   - Buttons have aria-labels where needed
   - Interactive elements are properly labeled

4. COLOR CONTRAST
   - High contrast: #00ff00 on #000
   - Tested for readability
   - Alternative theme available via toggle

5. KEYBOARD NAVIGATION
   - All interactive elements accessible via Tab
   - Focus states visible
   - Logical tab order

6. FORM ACCESSIBILITY
   - Labels associated with inputs
   - Required fields marked with *
   - Clear error messages
   - Placeholder text as guidance

7. RESPONSIVE TEXT
   - Minimum font size 16px
   - Scalable with viewport
   - Line height 1.6 for readability

8. VIEWPORT META TAG
   - Present in all HTML files
   - Enables proper mobile scaling


================================================================================
JAVASCRIPT FUNCTIONALITY
================================================================================

1. main.js (index.html)
   Purpose: Typing animation and theme switching
   
   Functions:
   - typeWriter()
     Input: None
     Output: Animated text on screen
     Purpose: Creates terminal-style typing effect
     Dependent: DOM element #typing-text
   
   - changeTheme()
     Input: None (triggered by button click)
     Output: Switches color theme
     Purpose: Toggle between dark/light themes
     Dependent: CSS variables
   
   - hoverSmile(), leaveSmile()
     Input: Mouse events
     Output: Visual feedback on hover
     Purpose: Interactive button effects

2. skills.js (skills.html)
   Purpose: Handle skill form submissions
   
   Functions:
   - handleSubmit(event)
     Input: Form submit event
     Output: Alert message, updated UI
     Purpose: Process new skill additions
     Dependent: Form elements with IDs
   
   - addSkillToPage(skillName, category)
     Input: Skill name and category strings
     Output: New list item in appropriate card
     Purpose: Dynamically add skills to page
     Dependent: .skill-card elements

3. contact.js (contact.html)
   Purpose: Handle contact form submissions
   
   Functions:
   - handleContactSubmit(event)
     Input: Form submit event
     Output: Confirmation message
     Purpose: Process contact form
     Dependent: Form elements with IDs
   
   - Email validation
     Input: Email string
     Output: Visual feedback
     Purpose: Validate email format
     Dependent: Pattern matching


================================================================================
EXTERNAL RESOURCES & REFERENCES
================================================================================

Images:
- All images are original or placeholder images
- cmd_favicon.png: Custom created
- smile.png: Public domain icon
- IMG_1274.JPG: Personal photo
- pop-up-close.png: Custom created

Audio:
- Rick Astley - Never Gonna Give You Up: Educational use

Fonts:
- 'Courier New', monospace: System fonts, no external loading

Icons & Emojis:
- Emojis used: Standard Unicode characters (📧, 📱, 📍, 💼, 🐙, ⏰)

No external CSS frameworks used (Bootstrap, Tailwind, etc.)
No external JavaScript libraries used (jQuery, React, etc.)
All code is original and written for this assignment


================================================================================
TESTING & BROWSER COMPATIBILITY
================================================================================

Tested on:
- Chrome (Desktop, Mobile simulation)
- Firefox (Desktop)
- Safari (Desktop, iOS)
- Edge (Desktop)

Screen sizes tested:
- Mobile: 375px, 414px
- Tablet: 768px, 834px, 1024px
- Desktop: 1280px, 1440px, 1920px

All features work across tested browsers and screen sizes.


================================================================================
NOTES FOR GRADER
================================================================================

1. All relative paths are used (no absolute URLs)
2. Only HTML, CSS, and JavaScript used (no other languages)
3. All assets included in submission
4. No broken links
5. All files properly named and organized
6. Comments added throughout code for clarity
7. Accessibility guidelines followed
8. Responsive design works on all target devices
9. All forms are functional with JavaScript validation
10. Project exceeds minimum requirements with bonus contact page

Special Features:
- Advanced CSS animations
- Dynamic form handling
- Theme switcher
- Professional styling
- Comprehensive accessibility
- Extra contact page with additional form


================================================================================
END OF README
================================================================================
