# 🚀 Bhanu Prakash Peddi - Portfolio Website

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=netlify)](https://bhanuprakashpeddi.tech)
[![React](https://img.shields.io/badge/React-18+-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

> A modern, responsive portfolio website built with React.js, featuring smooth animations, interactive UI, and a fully functional contact form. Showcasing my journey as a Full-Stack Developer with a passion for creating innovative web solutions.

## ✨ Live Preview

🌐 **[Visit My Portfolio](https://bhanuprakashpeddi.tech)**

---

## 🎯 About This Project

This portfolio represents more than just a collection of my work—it's a reflection of my growth as a developer and my commitment to creating exceptional user experiences. Built from the ground up with modern web technologies, it demonstrates my skills in frontend development, UI/UX design, and attention to detail.

### 🌟 What Makes It Special

- **Pixel-Perfect Design** - Every element is carefully crafted for visual appeal
- **Smooth Animations** - Powered by Framer Motion for delightful interactions
- **Fully Responsive** - Looks great on all devices, from mobile to desktop
- **Accessible** - Built with accessibility best practices in mind
- **Fast Performance** - Optimized for speed and user experience
- **Real Contact Form** - Actually sends emails using EmailJS integration

---

## 🛠️ Built With

### Core Technologies
- **React 18+** - Modern React with hooks and functional components
- **JavaScript (ES6+)** - Latest JavaScript features and best practices
- **CSS3** - Custom styling with modern CSS features
- **HTML5** - Semantic markup for better accessibility

### Libraries & Tools
- **Framer Motion** - Smooth animations and transitions
- **AnimeJS** - Advanced animation effects
- **React Icons** - Beautiful icon library
- **EmailJS** - Contact form email functionality
- **React Router** - Single-page application routing

### Development & Deployment
- **Create React App** - Project scaffolding and build tools
- **NPM** - Package management
- **Git** - Version control
- **Netlify/Vercel** - Hosting and deployment

---

## 🎨 Key Features

### 🏠 **Interactive Homepage**
- Dynamic typing animation with my name
- Floating background elements
- Smooth scroll navigation
- Professional introduction

### 💼 **Projects Showcase**
- Detailed project cards with descriptions
- Live demo and GitHub links
- Technology stack highlights
- Responsive grid layout

### 🛠️ **Skills Section**
- Interactive skill cards
- Technology logos and descriptions
- Organized by categories
- Hover effects and animations

### 👨‍💻 **About Me**
- Personal story and background
- Professional journey
- Tech stack expertise
- Career highlights

### 📧 **Contact Form**
- Fully functional email integration
- Form validation and error handling
- Success/error feedback
- Professional email templates

### 🎯 **Additional Features**
- Resume download functionality
- Social media integration
- SEO optimized
- PWA capabilities
- Mobile-first responsive design

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/bhanuprakashpeddi-1432/portfolio.git
   cd portfolio/tech-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the portfolio in action!

### 📧 Contact Form Setup (Optional)

To make the contact form functional:

1. **Install EmailJS**
   ```bash
   npm install @emailjs/browser
   ```

2. **Create EmailJS Account**
   - Visit [EmailJS.com](https://www.emailjs.com/)
   - Create a free account (200 emails/month)

3. **Configure EmailJS**
   - Create email service and template
   - Update the configuration in `src/components/Contact.js`:
   ```javascript
   const EMAILJS_SERVICE_ID = 'your_service_id';
   const EMAILJS_TEMPLATE_ID = 'your_template_id';
   const EMAILJS_PUBLIC_KEY = 'your_public_key';
   ```

Detailed setup instructions are available in `EMAILJS_SETUP.md`.

---

## 📁 Project Structure

```
tech-portfolio/
├── public/
│   ├── index.html          # Main HTML file
│   ├── manifest.json       # PWA manifest
│   ├── resume.pdf          # Resume file
│   └── sitemap.xml         # SEO sitemap
├── src/
│   ├── components/         # React components
│   │   ├── Home.js        # Homepage component
│   │   ├── About.js       # About section
│   │   ├── Skills.js      # Skills showcase
│   │   ├── Projects.js    # Projects gallery
│   │   ├── Contact.js     # Contact form
│   │   └── Navigation.js  # Navigation bar
│   ├── styles/            # Styling files
│   │   ├── global.css     # Global styles
│   │   └── img.png        # Profile image
│   ├── App.js             # Main App component
│   └── index.js           # Entry point
├── README.md              # You are here!
├── package.json           # Dependencies and scripts
└── EMAILJS_SETUP.md       # Contact form setup guide
```

---

## 🎨 Customization Guide

### 🖼️ **Personal Information**
1. **Update personal details** in each component
2. **Replace profile image** in `src/styles/img.png`
3. **Update resume** in `public/resume.pdf`
4. **Modify social links** in contact section

### 🎯 **Projects**
Add your projects in `src/components/Projects.js`:
```javascript
{
  title: "Your Project Name",
  description: "Project description...",
  technologies: ["React", "Node.js", "MongoDB"],
  githubUrl: "https://github.com/yourusername/project",
  liveUrl: "https://yourproject.com",
  image: "project-image.jpg"
}
```

### 🛠️ **Skills**
Update your skills in `src/components/Skills.js`:
```javascript
{
  name: "Your Technology",
  icon: "tech-icon",
  description: "Your experience with this technology"
}
```

### 🎨 **Styling**
- Modify colors in individual CSS files
- Update animations in component files
- Customize layouts and spacing

---

## 📱 Responsive Design

This portfolio is built with a mobile-first approach:

- **📱 Mobile** (320px+) - Optimized for small screens
- **📱 Tablet** (768px+) - Adapted for medium screens  
- **💻 Desktop** (1024px+) - Full-featured experience
- **🖥️ Large Desktop** (1440px+) - Enhanced layout

---

## ⚡ Performance Optimizations

- **Code Splitting** - Components loaded on demand
- **Image Optimization** - Compressed and responsive images
- **Lazy Loading** - Content loaded as needed
- **Minified Assets** - Reduced file sizes
- **Caching Strategy** - Optimized for faster subsequent visits

---

## 🌟 Browser Support

- ✅ Chrome (90+)
- ✅ Firefox (88+)
- ✅ Safari (14+)
- ✅ Edge (90+)
- ✅ Mobile browsers

---

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

---

## 🤝 Contributing

While this is a personal portfolio, I welcome suggestions and feedback!

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 About Me

Hi! I'm **Bhanu Prakash Peddi**, a passionate Full-Stack Developer from Vijayawada, India. I love creating web applications that not only function flawlessly but also provide exceptional user experiences.

### 🛠️ **My Tech Stack**
- **Frontend:** React.js, JavaScript, HTML5, CSS3
- **Backend:** Node.js, Express.js
- **Databases:** MongoDB, PostgreSQL, MySQL
- **Cloud:** AWS, Google Cloud Platform
- **Tools:** Git, Docker, VS Code

### 🌱 **Currently Learning**
- Advanced React patterns
- Cloud architecture
- DevOps practices
- AI/ML integration

---

## 📞 Get In Touch

I'm always open to discussing new opportunities, collaborations, or just chatting about technology!

- 📧 **Email:** [bhanuprakashpeddi5@gmail.com](mailto:bhanuprakashpeddi5@gmail.com)
- 💼 **LinkedIn:** [bhanu-prakash-peddi](https://linkedin.com/in/bhanu-prakash-peddi)
- 🐙 **GitHub:** [bhanuprakashpeddi-1432](https://github.com/bhanuprakashpeddi-1432)
- 🌐 **Portfolio:** [bhanuprakashpeddi.tech](https://bhanuprakashpeddi.tech)
- 📱 **Phone:** +91 9121086544

---

## ⭐ Show Your Support

If you found this portfolio inspiring or helpful, please consider:
- ⭐ **Starring the repository**
- 🍴 **Forking for your own use**
- 💬 **Sharing with others**
- 🐛 **Reporting any issues**

---

<div align="center">

### 🎉 Thank you for visiting my portfolio!

*Made with ❤️ by Bhanu Prakash Peddi*

[![Portfolio](https://img.shields.io/badge/Portfolio-Visit%20Now-brightgreen?style=for-the-badge)](https://bhanuprakashpeddi.tech)

</div>
