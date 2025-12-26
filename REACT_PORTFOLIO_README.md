# React Portfolio with Tailwind CSS

## ✅ What Has Been Created

### Project Structure
```
react-portfolio/
├── package.json
├── tailwind.config.js
├── src/
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Stats.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js (ALL DATA IN ONE FILE)
│   └── styles/
│       ├── App.css
│       ├── Navbar.module.css
│       ├── ProjectCard.module.css
│       ├── Projects.module.css
│       └── [other module CSS files]
└── public/
    └── index.html
```

## 🎨 Features Implemented

### 1. Modular Component Structure
- ✅ Each component in separate file
- ✅ CSS Modules for scoped styling
- ✅ Reusable ProjectCard component
- ✅ Clean separation of concerns

### 2. Data Management
- ✅ All data centralized in `portfolioData.js`
- ✅ Easy to update projects, skills, experience
- ✅ Single source of truth for content

### 3. Project Cards with Demo Links
- ✅ Live Demo button (🚀 Live Demo)
- ✅ View Code button (💻 View Code)
- ✅ Hover animations and effects
- ✅ Gradient backgrounds for each project
- ✅ Technology badges

### 4. Tailwind CSS Integration
- ✅ Tailwind configured in `tailwind.config.js`
- ✅ Custom colors and animations
- ✅ Gradient utilities (bg-gradient-to-br)
- ✅ Responsive design utilities

### 5. CSS Modules
- ✅ Component-scoped styles
- ✅ No style conflicts
- ✅ Import as `styles.className`
- ✅ Professional organization

## 📝 Component Files Created

1. **Navbar.jsx** + Navbar.module.css
   - Fixed floating navigation
   - Smooth scroll to sections
   - Gradient logo

2. **ProjectCard.jsx** + ProjectCard.module.css
   - Reusable card component
   - Demo and code links
   - Hover effects
   - Technology badges

3. **Projects.jsx** + Projects.module.css
   - Grid layout
   - Maps through projectsData
   - Section header with tag

## 🔗 Demo Links in Each Project

Each project in `portfolioData.js` includes:
```javascript
{
  demoLink: "https://welth-demo.vercel.app",
  codeLink: "https://github.com/surajprasad/welth",
  detailsLink: "/projects/welth"
}
```

Update these with your actual URLs!

## 🚀 How to Run

### 1. Install Dependencies
```bash
cd react-portfolio
npm install
```

### 2. Start Development Server
```bash
npm start
```

Runs on http://localhost:3000

### 3. Build for Production
```bash
npm run build
```

Creates optimized build in `build/` folder

## 📦 What's Included

### Dependencies
- React 18.2.0
- React DOM 18.2.0
- React Scripts 5.0.1

### DevDependencies
- Tailwind CSS 3.3.2
- PostCSS 8.4.24
- Autoprefixer 10.4.14

## 🎯 How to Customize

### Update Projects
Edit `src/data/portfolioData.js`:
```javascript
export const projectsData = [
  {
    id: 1,
    title: "Your Project",
    demoLink: "https://your-demo.com",  // Update this
    codeLink: "https://github.com/you/project",  // Update this
    // ... other fields
  }
];
```

### Update Contact Info
In `portfolioData.js`:
```javascript
export const contactInfo = {
  phone: "YOUR_PHONE",
  email: "YOUR_EMAIL",
  // ...
};
```

### Add New Components
1. Create `ComponentName.jsx` in `src/components/`
2. Create `ComponentName.module.css` in `src/styles/`
3. Import and use in `App.js`

## 💡 Key Features

### CSS Modules Usage
```jsx
import styles from '../styles/Component.module.css';

<div className={styles.container}>
  <h1 className={styles.title}>Hello</h1>
</div>
```

### Tailwind in JSX
```jsx
<div className="bg-gradient-to-br from-blue-500 to-purple-600">
  Content
</div>
```

### Combining Tailwind + CSS Modules
```jsx
<div className={`${styles.projectBanner} bg-gradient-to-br ${project.gradient}`}>
  Content
</div>
```

## 📱 Responsive Design
- Mobile-first approach
- Breakpoints handled in CSS Modules
- Tailwind responsive utilities available
- All components adapt to screen size

## 🎨 Styling Architecture

1. **Global Styles** → `src/styles/App.css`
2. **Component Styles** → `ComponentName.module.css`
3. **Tailwind Utilities** → Inline in JSX
4. **Theme Config** → `tailwind.config.js`

## 🔧 File Organization Best Practices

✅ Components in `/components`
✅ Styles in `/styles` with `.module.css`
✅ Data in `/data`
✅ One component per file
✅ Named exports for utilities
✅ Default exports for components

## 📋 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag & drop build/ folder to Netlify
```

### GitHub Pages
```bash
npm install gh-pages --save-dev
# Add to package.json:
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
npm run deploy
```

## ✨ Next Steps

1. Complete remaining component files (Hero, Stats, Skills, etc.)
2. Add images/screenshots to public/ folder
3. Update all demo and code links in portfolioData.js
4. Test responsive design on mobile
5. Deploy to Vercel/Netlify
6. Update README with your live URL

## 🎯 Demo Link Structure

Your project cards will render like this:

```
┌─────────────────────────────┐
│  [Gradient Banner]          │
│         💰                   │
├─────────────────────────────┤
│  Welth - AI Finance Tracker │
│  Oct - Nov 2025             │
│                             │
│  Description...             │
│                             │
│  ✓ Feature 1                │
│  ✓ Feature 2                │
│                             │
│  [Next.js] [React] [Prisma] │
│                             │
│  [🚀 Live Demo] [💻 Code]   │
└─────────────────────────────┘
```

## 🤝 Contributing

This is your personal portfolio! Customize it to match your style.

---

**Built with:** React + Tailwind CSS + CSS Modules
**Author:** Suraj R Prasad
**Version:** 1.0.0
