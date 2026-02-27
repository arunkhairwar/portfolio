# Portfolio

A modern, responsive personal portfolio website built with React and Vite, featuring a dark/light theme, smooth animations, and project showcases.

## ✨ Features

- **Dark / Light Mode** — seamless theme toggle with smooth transitions
- **Project Showcase** — dedicated cards with detailed project pages (`/project/:id`)
- **Sections** — Hero, Projects, Experience, Contact, and Footer
- **Responsive Design** — fully optimized for mobile, tablet, and desktop
- **Modern UI** — grid backgrounds, gradient glows, and micro-animations

## 🛠️ Tech Stack

| Layer     | Technology         |
| --------- | ------------------ |
| Framework | React 19           |
| Bundler   | Vite 7             |
| Styling   | Tailwind CSS 3     |
| Routing   | React Router DOM 7 |
| Icons     | Lucide React       |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/arunkhairwar/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview   # preview the production build locally
```

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and media
│   ├── components/      # React components
│   │   ├── Navbar       # Navigation bar with theme toggle
│   │   ├── Hero         # Landing section
│   │   ├── Projects     # Project cards grid
│   │   ├── ProjectDetails # Individual project page
│   │   ├── Experience   # Work experience timeline
│   │   ├── Contact      # Contact form / details
│   │   ├── About        # About section
│   │   └── Footer       # Site footer
│   ├── data/
│   │   └── projects.js  # Project data
│   ├── App.jsx          # Root component with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML entry point
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── package.json
```

## 📜 Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the development server         |
| `npm run build`   | Create an optimized production build |
| `npm run preview` | Preview the production build         |
| `npm run lint`    | Run ESLint to check for issues       |

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
