# Akanksha Upadhyay — Portfolio (React)

A responsive, multi-page dark-themed portfolio built with React.

## 🚀 Quick Start

### Requirements
- Node.js v16+ installed on your computer

### Steps

```bash
# 1. Extract the zip and go into the folder
cd akanksha-portfolio

# 2. Install dependencies
npm install

# 3. Run locally
npm start
# Opens at http://localhost:3000
```

## 🌐 Deploy on Vercel (Free)

1. Push this folder to a GitHub repo
2. Go to https://vercel.com → New Project → Import repo
3. Click Deploy — done! ✅

## 🌐 Deploy on Netlify (Free)

```bash
npm run build
```
Then drag the `build/` folder to https://app.netlify.com/drop

## ✏️ Customise

| What                   | Where                                 |
|------------------------|---------------------------------------|
| Your name / bio        | `src/pages/Home.js`, `About.js`       |
| Projects               | `src/pages/Projects.js`               |
| Skills                 | `src/pages/Skills.js`                 |
| Resume content         | `src/pages/Resume.js`                 |
| Contact / links        | `src/pages/Contact.js`                |
| GitHub / LinkedIn URLs | `src/pages/About.js` & `Contact.js`   |
| Colors / fonts         | `src/index.css` (CSS variables)       |
| Navbar items           | `src/components/Navbar.js`            |

## 📁 Project Structure

```
src/
├── App.js              # Root component + page routing
├── index.js            # Entry point
├── index.css           # Global styles & CSS variables
├── components/
│   ├── Navbar.js       # Responsive navbar
│   └── Navbar.css
└── pages/
    ├── Home.js / .css
    ├── About.js / .css
    ├── Skills.js / .css
    ├── Projects.js / .css
    ├── Resume.js / .css
    └── Contact.js / .css
```
