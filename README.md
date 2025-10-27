# Jovan Blango - Personal Portfolio Website

**Electrician | Systems Thinker | Neurodivergent Innovator**

A modern, ultra-high-definition personal portfolio website showcasing the intersection of electrical mastery and technological innovation.

---

## 🚀 Features

### Visual Excellence
- **Glassmorphism UI** - Frosted glass effects with backdrop blur
- **Animated Gradients** - Dynamic color transitions and floating orbs
- **Smooth Animations** - Intersection observer triggers for scroll-based reveals
- **Responsive Design** - Mobile-first approach, works on all devices
- **Custom Cursor Effects** - Interactive trail and hover states
- **Parallax Scrolling** - Depth and motion on hero elements

### Interactive Elements
- **Animated Counters** - Stats count up when scrolled into view
- **Skill Progress Bars** - Animated fill on section view
- **Project Filtering** - Category-based filtering on projects page
- **3D Tilt Effects** - Cards respond to mouse movement
- **Smooth Scroll Navigation** - Offset for fixed navbar
- **Active Link Highlighting** - Auto-updates based on scroll position
- **Mobile Menu** - Hamburger navigation for small screens

### Technical Features
- **Scroll Progress Bar** - Visual indicator at top of page
- **Lazy Loading** - Images load on demand
- **Accessibility** - Keyboard navigation support with custom focus styles
- **Performance Optimized** - Minimal dependencies, fast load times
- **SEO Friendly** - Semantic HTML and meta tags
- **Console Easter Egg** - Konami code activation

---

## 📁 File Structure

```
website/
├── index.html          # Main homepage
├── projects.html       # Detailed projects page
├── styles.css          # All styles and animations
├── script.js           # Interactive functionality
└── README.md          # This file
```

---

## 🎨 Design System

### Color Palette
```css
Primary: #00d4ff (Cyan)
Secondary: #6366f1 (Indigo)
Accent: #f59e0b (Amber)
Success: #10b981 (Green)
Dark: #0a0e27 (Deep Navy)
```

### Typography
- **Primary Font:** Inter (Google Fonts)
- **Monospace Font:** JetBrains Mono (for code/technical elements)

### Spacing Scale
- XS: 0.5rem (8px)
- SM: 1rem (16px)
- MD: 2rem (32px)
- LG: 4rem (64px)
- XL: 6rem (96px)

---

## 🛠️ Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Advanced styling with custom properties, flexbox, grid
- **Vanilla JavaScript** - No frameworks, pure performance
- **Google Fonts** - Inter & JetBrains Mono
- **Modern CSS Features:**
  - CSS Grid & Flexbox
  - CSS Custom Properties (Variables)
  - Backdrop Filter (Glassmorphism)
  - CSS Animations & Transitions
  - Gradient Text Effects

---

## 🚀 Getting Started

### Local Development

1. **Clone or download** the website folder
2. **Open `index.html`** in a modern web browser
3. That's it! No build process required.

### Recommended: Use a Local Server

For the best experience (especially with local testing), use a simple HTTP server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (npx)
npx serve

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

---

## 📝 Customization Guide

### Update Personal Information

**Contact Details** (`index.html` and `projects.html`)
```html
<!-- Update these placeholders -->
📧 [Your Email]        → your.email@example.com
📱 [Your Phone]        → (123) 456-7890
💼 [LinkedIn Profile]  → https://www.linkedin.com/in/jovan-blango-ab670991
🔧 [GitHub/Portfolio]  → https://github.com/izreal1990-collab
```

**Email Link** (Contact section)
```html
<a href="mailto:your.email@example.com">your.email@example.com</a>
```

**Phone Link** (Contact section)
```html
<a href="tel:+1234567890">(123) 456-7890</a>
```

### Add New Projects

Edit `projects.html` and duplicate this template:

```html
<div class="project-detail-card" data-category="your-category">
    <div class="project-header">
        <div>
            <h2 class="project-title">Your Project Title</h2>
            <p style="color: var(--gray-light); font-style: italic;">Year</p>
        </div>
        <span class="project-category">Category Tag</span>
    </div>
    
    <p class="project-description">
        Your project description here...
    </p>
    
    <!-- Add details, tech stack, challenges, solutions, etc. -->
</div>
```

### Modify Colors

Edit `styles.css` root variables:

```css
:root {
    --primary: #00d4ff;        /* Change primary color */
    --secondary: #6366f1;      /* Change secondary color */
    --accent: #f59e0b;         /* Change accent color */
    /* ... other colors ... */
}
```

### Add New Sections

Follow this pattern in `index.html`:

```html
<section id="your-section" class="your-section section-padding">
    <div class="container">
        <div class="section-header">
            <span class="section-label">Section Label</span>
            <h2 class="section-title">Section Title</h2>
            <p class="section-subtitle">Section description</p>
        </div>
        <!-- Your content here -->
    </div>
</section>
```

Don't forget to add to navigation:
```html
<li><a href="#your-section" class="nav-link">Your Section</a></li>
```

---

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free)

1. Create a GitHub repository
2. Upload all website files
3. Go to Settings → Pages
4. Select branch (usually `main`) and folder (root)
5. Your site will be live at `https://yourusername.github.io/repo-name/`

### Option 2: Netlify (Free)

1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop your website folder
3. Get instant deployment with custom domain support
4. Automatic HTTPS and continuous deployment

### Option 3: Vercel (Free)

1. Sign up at [vercel.com](https://vercel.com)
2. Import from GitHub or upload directly
3. Automatic deployments on every push
4. Great performance and analytics

### Option 4: Traditional Web Hosting

Upload files via FTP to any web hosting provider:
- Bluehost
- HostGator
- SiteGround
- GoDaddy
- Any hosting with HTML support

---

## 📱 Browser Compatibility

Tested and working on:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

**Note:** Some advanced CSS features (backdrop-filter) have limited support on older browsers but gracefully degrade.

---

## ♿ Accessibility

- Semantic HTML5 structure
- ARIA labels where appropriate
- Keyboard navigation support
- Custom focus indicators for keyboard users
- High contrast text ratios
- Alt text for images (when added)
- Skip to content link (can be added)

---

## 🔧 Maintenance & Updates

### Adding New Skills

Edit the Skills section in `index.html`:

```html
<div class="skill-item">
    <span class="skill-name">Your Skill Name</span>
    <div class="skill-bar">
        <div class="skill-progress" data-progress="85"></div>
    </div>
</div>
```

### Updating Experience

Edit the Timeline section in `index.html` to add new roles or update existing ones.

### Adding Blog Posts (Future)

Create a new `blog.html` page following the structure of `projects.html`.

### Analytics Integration

Add before closing `</body>` tag:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

---

## 🎁 Easter Eggs

1. **Konami Code:** Try entering: ↑ ↑ ↓ ↓ ← → ← → B A
2. **Console Messages:** Open developer tools console
3. **Hover Effects:** Move mouse over cards and buttons
4. **Scroll Progress:** Watch the top bar as you scroll

---

## 📈 Performance Tips

1. **Compress Images:** Use WebP format for photos (when added)
2. **Minify CSS/JS:** Use tools like UglifyJS or CSS Nano for production
3. **Enable Caching:** Configure server cache headers
4. **Use CDN:** Consider Cloudflare for static assets
5. **Lazy Load:** Already implemented for images with `data-src`

---

## 🐛 Troubleshooting

**Animations not working?**
- Check browser compatibility (try latest Chrome)
- Disable browser extensions that block JavaScript
- Clear cache and hard reload (Ctrl + Shift + R)

**Mobile menu not closing?**
- Ensure JavaScript is enabled
- Check browser console for errors

**Styles not loading?**
- Verify `styles.css` path is correct
- Check for CSS syntax errors
- Ensure file permissions are correct (if on server)

**Fonts not loading?**
- Check internet connection (Google Fonts requires network)
- Verify font URLs in `<head>` section

---

## 💡 Future Enhancements

Ideas for expanding the website:

- [ ] Add image gallery for projects
- [ ] Create blog section for technical writing
- [ ] Add contact form with backend
- [ ] Implement dark/light mode toggle
- [ ] Add testimonials section
- [ ] Create downloadable resume PDF
- [ ] Add GitHub activity feed
- [ ] Implement search functionality
- [ ] Add video showcases
- [ ] Create interactive portfolio items

---

## 📄 License

This is a personal portfolio website. Feel free to use the structure and code as inspiration for your own portfolio, but please don't copy content verbatim. Create something authentic that represents YOU.

---

## 📞 Support

Questions about customization or deployment?
- Email: [your.email@example.com]
- LinkedIn: [Your Profile]
- GitHub Issues: [If you create a repo]

---

## 🙏 Credits

**Built by:** Jovan Blango  
**Design Philosophy:** Clean, modern, and authentic  
**Fonts:** Google Fonts (Inter & JetBrains Mono)  
**Inspiration:** Neurodivergent thinking, systems design, and relentless curiosity

---

*"This is a living portfolio. It evolves as I do."*

---

**Version:** 1.0.0  
**Last Updated:** October 27, 2025  
**Status:** Production Ready ✅
