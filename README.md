# Portfolio Website - Purple Theme

## HTML5 Boilerplate Implementation with Flexbox

This portfolio website follows the HTML5 Boilerplate template standards with a modern purple color palette and extensive use of CSS Flexbox for layout.

## Features

✨ **HTML5 Boilerplate Base** - Industry-standard template structure
🎨 **Purple Color Palette** - Elegant purple theme throughout
📦 **Flexbox Layout** - Modern, responsive layout system
📱 **Responsive Design** - Works on desktop, tablet, and mobile
🎭 **Smooth Animations** - Fade-in effects and hover transitions
♿ **Accessible** - Semantic HTML and proper ARIA attributes

## File Structure

```
├── index.html           # Main page with navigation and iframe structure
├── styles.css           # Complete stylesheet with HTML5 Boilerplate base
├── home.html           # Home/Welcome page
├── about.html          # About page with contact form
├── education.html      # Education history
├── experience.html     # Work experience
├── works.html          # Portfolio works
├── references.html     # Professional references
└── images/             # Image assets folder (create this)
```

## Customizing the Purple Color Palette

All colors are defined using CSS custom properties (variables) at the top of `styles.css`. Look for comments that say `/* CHANGE COLORS HERE: ... */` to find customization points.

### Main Color Variables (lines 94-115 in styles.css)

```css
:root {
  --primary-purple: #6A0DAD;    /* Main purple for titles and accents */
  --light-purple: #D8BFD8;      /* Light purple for backgrounds */
  --dark-purple: #7D3C98;       /* Dark purple for header/navigation */
  --accent-purple: #F0D9FF;     /* Light accent for highlights */
  --text-dark: #333333;         /* Dark text color */
  --text-light: #F0D9FF;        /* Light text on dark backgrounds */
  --shadow: rgba(106, 13, 173, 0.1);  /* Shadow color with transparency */
}
```

### Quick Color Change Guide

1. **To make it darker:** Use deeper purple values
   - `--primary-purple: #4B0082;` (Indigo)
   - `--dark-purple: #5D3A8E;`

2. **To make it lighter:** Use pastel purples
   - `--primary-purple: #9B7EBD;`
   - `--light-purple: #E6E6FA;` (Lavender)

3. **To add more contrast:** Increase difference between dark and light values
   - `--dark-purple: #2E0854;` (Very dark)
   - `--light-purple: #F8F4FF;` (Almost white)

4. **For a pink-purple theme:**
   - `--primary-purple: #C77DFF;`
   - `--dark-purple: #9D4EDD;`
   - `--accent-purple: #E0AAFF;`

### Additional Customization Points

Throughout the CSS file, you'll find specific comments marking where colors are used:

- **Header styles** (lines 179-216): Background, title color, logo shadow
- **Navigation menu** (lines 222-280): Background, link colors, hover effects
- **Content pages** (lines 286-322): Background, text colors, title borders
- **Forms** (lines 376-449): Input borders, button colors, focus states
- **Lists** (lines 451-508): Item backgrounds, borders, hover effects
- **Contact section** (lines 522-563): Icons, link colors
- **Education blocks** (lines 569-613): Card backgrounds, borders
- **Tables** (lines 618-652): Header colors, row hover effects

## Flexbox Implementation

The layout uses CSS Flexbox in several key areas:

1. **Header** (`.header-content`): Centers logo and title horizontally
2. **Navigation Menu** (`.menu-container`): Vertical flex column for menu items
3. **Menu Links** (`.menu-link`): Horizontal flex for icon + text alignment
4. **Home Container** (`.home-container`): Centered vertical layout
5. **Contact Form** (`.contact-form`): Vertical form layout
6. **Contact List** (`.contact-list li`): Horizontal icon + text layout
7. **Education Container** (`.education-container`): Vertical stacked cards
8. **Education Blocks** (`.education-block`): Vertical content layout

The main page structure uses CSS Grid for the overall layout (header, sidebar, content), while Flexbox handles component-level layouts.

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## Setup Instructions

1. Create an `images/` folder in the same directory as `index.html`
2. Add the following images:
   - `logo.jpg` - Your logo (88x88px recommended)
   - `selfportrait.jpeg` - Your profile photo (200px wide recommended)
   - `home.png`, `about.png`, `works.png`, `experience.png`, `education.png`, `references.png` - Navigation icons (20x20px)
   - `facebook.png`, `envelope.png` - Contact icons (24x24px)

3. Open `index.html` in a web browser

## Customization Tips

### Changing Font Sizes
- Headers: Modify `.header-title` (line 206), `.page-title` (line 295)
- Body text: Adjust base `font-size` in `html` selector (line 16)
- Menu: Edit `.menu-title` (line 233), `.menu-link` (line 252)

### Adjusting Spacing
- Page padding: `.content-page` padding property (line 291)
- Element gaps: Look for `gap`, `margin`, and `padding` values

### Animation Speed
- Fade-in duration: `@keyframes fadeIn` (line 682), `.fade-in` (line 693)
- Hover transitions: `transition` properties throughout

## Responsive Breakpoints

- Desktop: Default styles
- Tablet/Mobile: `@media screen and (max-width: 768px)` (line 784)
- High DPI screens: `@media print, (-webkit-min-device-pixel-ratio: 1.25)` (line 857)

## Credits

Built with:
- HTML5 Boilerplate v9.0.1
- Google Fonts (Inter, Roboto)
- CSS3 Flexbox & Grid
- Modern CSS animations

Created by: Renjovil Joseph V. Lascano
Course: LBYCPG3
Instructor: Sir Melvin Kong Cabatuan
Institution: De La Salle University - Manila
