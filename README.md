# Portfolio Website
A premium personal showcase with motion-driven UI, responsive layouts, and modern glassmorphism.

## 🚀 Key Features
- **Motion-Driven UI**: Utilizes Framer Motion for smooth, interactive animations and transitions.
- **Responsive Design**: Built with Tailwind CSS to ensure optimal viewing across all devices and screen sizes.
- **Modular Architecture**: Clean, component-based React structure for easy maintenance and scaling.

## 🧱 Tech Stack
### Frontend
- **Framework**: React 19 + Vite
- **State/Routing**: React Hooks
- **UI/Styling**: Tailwind CSS 4, Framer Motion, React Icons, React Type Animation

## 📂 Project Structure
```text
src/
  components/  # Reusable UI elements like Header, AnimatedName, AnimatedBackground
    sections/  # Dedicated components for page sections (Home, About, Projects, Skills, Contact)
  constants/   # Static data arrays (projects list, skills, navigation items)
  utils/       # Helper functions and Framer Motion variants
```

## 🛠️ Getting Started

### Clone & Install:
```bash
git clone https://github.com/notVivekG/portfolio.git
cd portfolio
npm install
```

### Run:
```bash
npm run dev
```

## 🧩 Development Notes
- Extracted and modularized the main application logic into well-structured, maintainable section components.
- Integrated `react-type-animation` and `framer-motion` for complex animated typography and UI transitions without sacrificing performance.
