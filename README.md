# Portfolio Project

A modern, responsive portfolio website built with **React**, **TypeScript**, and **TailwindCSS**.

## Prerequisites

Ensure you have the following installed before proceeding:

- **Node.js** (v14.0 or higher)
- **npm** (v6.0 or higher) or **yarn** (v1.22 or higher)
- **Git**

## Installation

Follow these steps to set up the project:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/vasanthhtnasav/temp_port.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or if using yarn
   yarn install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   # or with yarn
   yarn dev
   ```
   The server will start at **http://localhost:5173**, or another port if 5173 is busy.

## Dependencies

This project uses:

- **React** with TypeScript
- **Vite** as the build tool
- **TailwindCSS** for styling
- **Lucide React** for icons
- **React Router** for navigation

## Customization

Modify the following components to personalize your portfolio:

1. **Personal Information:** Update your details in the respective files:
   - `Hero.tsx` - Main banner info
   - `About.tsx` - Biography and background
   - `Skills.tsx` - Technical skills
   - `Projects.tsx` - Portfolio projects
   - `Contact.tsx` - Contact information

2. **Resume:** Replace `public/SANGOJI_VASANTH_KUMAR_RESUME.pdf` with your own resume.

3. **Project Images:** Add project screenshots in `/public/images/projects/`.

4. **Social Links:** Update links in `SocialLinks.tsx`.

## Project Structure

```
portfolio/
├── public/              # Static assets
│   ├── images/          # Image files
│   └── SANGOJI_VASANTH_KUMAR_RESUME.pdf  # Resume PDF
├── src/                 # Source code
│   ├── components/      # React components
│   │   ├── ui/          # UI components
│   │   └── hero/        # Hero section components
│   ├── App.tsx          # Main App component
│   └── main.tsx         # Entry point
├── index.html           # HTML template
├── tailwind.config.js   # TailwindCSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## Troubleshooting

- If you face dependency issues, try removing the `node_modules` folder and running `npm install` again.
- Ensure your **Node.js** version is compatible (check `package.json` for any engine restrictions).

## Deployment

The build output will be located in the `dist/` directory. You can deploy it to any static hosting service like **Vercel**, **Netlify**, or **GitHub Pages**.

---

