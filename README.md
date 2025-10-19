# Surya's Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, featuring interactive animations, dark mode, and a working contact form.

## Live Demo

<!-- TODO: Add your deployed website URL here -->
**🚀 [Live Website](https://your-portfolio-url.vercel.app)** - *Update this link after deployment*

## Features

- **Dark/Light Mode Toggle** - Seamless theme switching with local storage persistence
- **Interactive Animations** - Smooth scrolling, floating elements, and cosmic effects
- **Fully Responsive** - Perfect experience on all devices and screen sizes
- **Working Contact Form** - Real email integration using EmailJS
- **Fast Loading** - Optimized with Vite for lightning-fast performance
- **Modern Design** - Clean UI with glassmorphism effects and gradient accents
- **SEO Optimized** - Structured for search engine visibility

## Built With

- **React 19** - Latest React with modern hooks
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful SVG icons
- **EmailJS** - Client-side email sending
- **React Router** - Seamless navigation

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── ui/            # Base UI components (toast, etc.)
│   ├── NavBar.jsx     # Navigation component
│   ├── HeroSection.jsx
│   ├── AboutSection.jsx
│   ├── SkillSection.jsx
│   ├── ProjectsSection.jsx
│   ├── ContactSection.jsx
│   ├── StarBackground.jsx
│   └── ThemeToggle.jsx
├── hooks/             # Custom React hooks
│   └── use-toast.js   # Toast notification system
├── lib/               # Utility functions
│   ├── utils.js       # Helper utilities
│   └── emailService.js # Email handling
├── pages/             # Page components
│   ├── Home.jsx
│   └── NotFound.jsx
└── assets/            # Static assets
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/surya0380/surya.fe.dev-portfolio.git
   cd surya.fe.dev-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## Email Setup

To enable the contact form email functionality:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Follow the setup guide in `EMAILJS_SETUP.md`
3. Update your credentials in `src/lib/emailService.js`

## Customization

### Colors & Themes
- Edit CSS variables in `src/index.css`
- Modify theme colors in the `:root` and `.dark` selectors

### Content
- Update personal information in each section component
- Replace placeholder text with your own content
- Add your projects, skills, and experience

### Animations
- Customize animations in `src/index.css`
- Modify timing and effects to match your style

## Portfolio Sections

- **Hero** - Introduction with animated background
- **About** - Personal background and story
- **Skills** - Technical skills and expertise
- **Projects** - Portfolio of work and achievements
- **Contact** - Get in touch form with email integration

## Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel via their dashboard or CLI
```

### Netlify
```bash
npm run build
# Deploy the `dist` folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy the `dist` folder to GitHub Pages
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

While this is a personal portfolio, feedback and suggestions are welcome! Feel free to open an issue or submit a pull request.

## Contact

- **Email**: [surya0380@gmail.com](mailto:surya0380@gmail.com)
- **LinkedIn**: [Surya CP](https://www.linkedin.com/in/surya-cp-319677247/)
- **Location**: Bengaluru, Karnataka, India

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with care by [Surya CP](https://github.com/surya0380)
