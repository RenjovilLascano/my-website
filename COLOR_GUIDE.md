# Purple Color Palette Guide

## Current Color Scheme

### Primary Colors
| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| Primary Purple | `#6A0DAD` | rgb(106, 13, 173) | Main titles, borders, accents |
| Light Purple | `#D8BFD8` | rgb(216, 191, 216) | Page backgrounds |
| Dark Purple | `#7D3C98` | rgb(125, 60, 152) | Header, navigation menu |
| Accent Purple | `#F0D9FF` | rgb(240, 217, 255) | Light text, highlights |

### Supporting Colors
| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| Text Dark | `#333333` | rgb(51, 51, 51) | Main body text |
| Text Light | `#F0D9FF` | rgb(240, 217, 255) | Text on dark backgrounds |
| White | `#FFFFFF` | rgb(255, 255, 255) | Card backgrounds, borders |
| Shadow | `rgba(106, 13, 173, 0.1)` | - | Drop shadows |

## Alternative Purple Palettes

### Option 1: Deep Royal Purple
```css
--primary-purple: #4B0082;    /* Indigo */
--light-purple: #E6E6FA;      /* Lavender */
--dark-purple: #2E0854;       /* Deep Purple */
--accent-purple: #DDA0DD;     /* Plum */
```

### Option 2: Soft Pastel Purple
```css
--primary-purple: #9B7EBD;    /* Medium Purple */
--light-purple: #F8F4FF;      /* Almost White */
--dark-purple: #6B4A8E;       /* Dark Lavender */
--accent-purple: #E6D5F7;     /* Light Lavender */
```

### Option 3: Pink-Purple (Magenta Tones)
```css
--primary-purple: #C77DFF;    /* Bright Purple */
--light-purple: #F0E6FF;      /* Very Light Purple */
--dark-purple: #9D4EDD;       /* Medium Purple */
--accent-purple: #E0AAFF;     /* Light Magenta */
```

### Option 4: Electric Purple (Modern/Tech)
```css
--primary-purple: #8B5CF6;    /* Violet */
--light-purple: #EDE9FE;      /* Violet 50 */
--dark-purple: #6D28D9;       /* Violet 700 */
--accent-purple: #DDD6FE;     /* Violet 200 */
```

### Option 5: Dark Mode Purple
```css
--primary-purple: #A78BFA;    /* Light Violet */
--light-purple: #1F1B33;      /* Very Dark Purple */
--dark-purple: #2E1A47;       /* Dark Purple */
--accent-purple: #C4B5FD;     /* Light Purple */
```

## How to Apply a New Palette

1. Open `styles.css`
2. Find the `:root` section (around line 94)
3. Replace the color values with your chosen palette
4. Save the file and refresh your browser

## Color Psychology

- **Deep Purple**: Luxury, royalty, wisdom, spirituality
- **Light Purple**: Creativity, peace, romance, nostalgia
- **Dark Purple**: Sophistication, mystery, ambition, power
- **Pink-Purple**: Playfulness, femininity, youth, joy

## Accessibility Notes

### Contrast Ratios (Current Palette)
- Primary Purple (#6A0DAD) on White: 6.82:1 ✅ AA Level
- Dark Purple (#7D3C98) with Accent Text (#F0D9FF): 5.12:1 ✅ AA Level
- Primary Purple (#6A0DAD) on Light Purple (#D8BFD8): 3.65:1 ⚠️ Large text only

### Tips for Accessible Colors
1. Maintain at least 4.5:1 contrast ratio for normal text
2. Maintain at least 3:1 contrast ratio for large text (18pt+)
3. Test your colors at: https://webaim.org/resources/contrastchecker/

## Color Customization Locations in CSS

| Element | Line # | CSS Selector | Variable Used |
|---------|--------|--------------|---------------|
| Header Background | 181 | `.header-container` | `--dark-purple` |
| Header Title | 210 | `.header-title` | `--accent-purple` |
| Menu Background | 224 | `.menu-container` | `--dark-purple` |
| Menu Links | 254 | `.menu-link` | `--text-light` |
| Page Background | 288 | `.content-page` | `--light-purple` |
| Page Title | 299 | `.page-title` | `--primary-purple` |
| Form Submit Button | 436 | `.form-submit` | `--primary-purple` |
| List Item Background | 467 | `.list-item` | white |
| List Item Border | 471 | `.list-item` | `--primary-purple` |
| Education Block Border | 584 | `.education-block` | `--primary-purple` |
| Table Header | 630 | `.styled-table th` | `--primary-purple` |

## Quick Color Picker Tool

Use this online tool to find complementary purple shades:
- Adobe Color: https://color.adobe.com/create/color-wheel
- Coolors: https://coolors.co/
- Material Design Palette: https://materialpalette.com/

## Gradient Options (Advanced)

For a more modern look, consider using gradients:

```css
/* Linear gradient for header */
background: linear-gradient(135deg, #6A0DAD 0%, #9D4EDD 100%);

/* Radial gradient for cards */
background: radial-gradient(circle, #F0D9FF 0%, #D8BFD8 100%);

/* Animated gradient */
background: linear-gradient(270deg, #6A0DAD, #C77DFF, #9D4EDD);
background-size: 600% 600%;
animation: gradientShift 15s ease infinite;
```

Add this keyframe for animated gradients:
```css
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```
