# Personal Portfolio Website

A modern, responsive personal portfolio website built with HTML, CSS, and JavaScript.

## Features

- Responsive design that works on all devices
- Modern and clean UI with smooth animations
- Interactive navigation with smooth scrolling
- Mobile-friendly navigation menu
- Sections for showcasing skills, projects, education, and contact information
- Contact form for easy communication
- Social media integration

## Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid)
- JavaScript (ES6+)
- Font Awesome for icons
- Google Fonts

## How to Use

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Customize the content in the HTML file with your personal information
4. Update the styling in `styles.css` if desired
5. Modify the JavaScript functionality in `script.js` as needed

## Customization

### Personal Information

Update the following sections in `index.html` with your information:

- Header (Your Name)
- Hero section (Name, title, and description)
- About section (Bio and contact details)
- Education section (Your educational background)
- Skills section (Your technical skills)
- Projects section (Your portfolio projects)
- Contact section (Your contact information)
- Footer (Copyright information and social links)

### Styling

The website uses a color scheme defined in CSS variables at the top of the `styles.css` file. You can easily change these variables to customize the color scheme:

```css
:root {
    --primary-color: #4a6cf7;
    --secondary-color: #6c757d;
    --dark-color: #2d3748;
    --light-color: #f8f9fa;
    /* ... other variables ... */
}
```

### Adding Projects

To add a new project, copy the project card structure in the Projects section and update it with your project details:

```html
<div class="project-card">
    <div class="project-img">
        <i class="fas fa-icon-name"></i> <!-- Replace with appropriate icon -->
    </div>
    <div class="project-content">
        <h3>Project Title</h3>
        <p>Project description goes here...</p>
        <div class="project-tags">
            <span>Tag1</span>
            <span>Tag2</span>
            <span>Tag3</span>
        </div>
        <div class="project-links">
            <a href="#" class="btn btn-sm">View Project</a>
            <a href="#" class="btn btn-sm btn-secondary">GitHub</a>
        </div>
    </div>
</div>
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- Font Awesome for icons
- Google Fonts for typography
- Unsplash for stock images (if used)

---

Created by [Your Name] | [Your Website/GitHub] 