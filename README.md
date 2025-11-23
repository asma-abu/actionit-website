# ActionIT.AI Website

A modern, privacy-first AI meeting assistant platform website built with Next.js 16, React 19, and TypeScript. ActionIT helps teams capture meeting insights, automate workflow updates, and maintain complete data privacy by deleting all meeting data immediately after syncing to your tools.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Architecture](#architecture)
- [Content Management](#content-management)
- [Styling & Design System](#styling--design-system)
- [Performance Optimizations](#performance-optimizations)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Documentation](#documentation)
- [License](#license)

## 🎯 Overview

ActionIT.AI is a privacy-first AI meeting assistant that:
- **Joins your calls** automatically via calendar invites
- **Transcribes and analyzes** meetings in real-time
- **Posts summaries** directly to your tools (Salesforce, Notion, Slack, etc.)
- **Deletes all data** immediately after delivery - nothing is stored on our servers

This website serves as the marketing and product landing page, showcasing ActionIT's features, security, integrations, and value proposition to potential customers.

## ✨ Features

### Website Sections

The homepage includes the following sections:

1. **Hero Section** - Main value proposition with CTAs
2. **Problem Section** - Addresses pain points with current solutions
3. **Video Demo Section** - Interactive video demonstrations (Pre/During/Post Meeting)
4. **Solution Pillars** - Three core pillars: Privacy, Automation, Intelligence
5. **How It Works** - Four-step process explanation
6. **Integration Logos** - Partner integrations showcase
7. **Security Section** - Privacy and compliance assurances
8. **Features Section** - Five core product features
9. **Built for Every Team** - Team-specific use cases
10. **Enterprise Section** - Enterprise-focused benefits
11. **Integrations Section** - Comprehensive integration list
12. **FAQ Section** - Frequently asked questions
13. **Footer** - Links, contact info, and legal

### Key Website Features

- 🎨 **Modern Design** - Glassmorphism UI with animated gradients
- 📱 **Fully Responsive** - Mobile-first design, works on all devices
- ⚡ **Performance Optimized** - Lazy loading, code splitting, optimized images
- ♿ **Accessible** - ARIA labels, semantic HTML, keyboard navigation
- 🌙 **Dark Mode Support** - Automatic dark mode via `prefers-color-scheme`
- 🔒 **Privacy-Focused** - Aligns with product's privacy-first messaging

## 🛠 Tech Stack

### Core Framework

- **[Next.js 16.0.1](https://nextjs.org/)** - React framework with App Router
- **[React 19.2.0](https://react.dev/)** - UI library
- **[TypeScript 5.x](https://www.typescriptlang.org/)** - Type safety

### Styling

- **[Tailwind CSS 4.1.16](https://tailwindcss.com/)** - Utility-first CSS framework
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[DaisyUI 5.5.3](https://daisyui.com/)** - Component library (installed, not actively used)

### Development Tools

- **[ESLint 9](https://eslint.org/)** - Code linting
- **[Next.js ESLint Config](https://nextjs.org/docs/app/building-your-application/configuring/eslint)** - Next.js-specific linting rules

### Fonts

- **[Inter](https://fonts.google.com/specimen/Inter)** - Primary font family (via `next/font/google`)

## 📁 Project Structure

```
actionit-website/
├── app/                          # Next.js App Router
│   ├── globals.css               # Global styles & CSS variables
│   ├── layout.tsx               # Root layout (Server Component)
│   └── page.tsx                 # Home page (Client Component)
├── components/                   # React components
│   ├── sections/                # Page section components
│   │   ├── HeroSection.tsx
│   │   ├── ProblemSection.tsx
│   │   ├── VideoDemoSection.tsx
│   │   ├── SolutionPillarsSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── IntegrationLogosSection.tsx
│   │   ├── SecuritySection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── EnterpriseSection.tsx
│   │   ├── IntegrationsSection.tsx
│   │   └── FAQSection.tsx
│   ├── ui/                      # Reusable UI components
│   │   ├── Button.tsx
│   │   └── Container.tsx
│   ├── FontLoader.tsx           # Custom font loading
│   ├── Navbar.tsx               # Global navigation
│   └── Footer.tsx               # Site footer
├── config/                      # Configuration files
│   └── content.ts               # Content data (features, FAQs, etc.)
├── types/                       # TypeScript type definitions
│   └── content.ts               # Content type interfaces
├── lib/                         # Utility functions
│   └── utils.ts                 # Helper utilities
├── public/                      # Static assets
│   ├── ehanced_logo.png         # ActionIT logo
│   ├── mock-card.png            # Product mockup
│   ├── notion-logo-no-background.png
│   ├── zoom.png
│   ├── google.png
│   └── teams.png
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── postcss.config.mjs           # PostCSS configuration
├── eslint.config.mjs            # ESLint configuration
├── package.json                 # Dependencies & scripts
└── README.md                    # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** 9.x or higher (or yarn/pnpm)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd actionit-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

The page will automatically reload when you make changes to the code.

## 💻 Development

### Available Scripts

- `npm run dev` - Start development server on `http://localhost:3000`
- `npm run build` - Build production-ready application
- `npm run start` - Start production server (requires build first)
- `npm run lint` - Run ESLint to check code quality

### Development Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Edit components in `components/`
   - Update content in `config/content.ts`
   - Modify styles in `app/globals.css` or component files

3. **Test your changes**
   - Run `npm run dev` to see changes in real-time
   - Check for linting errors with `npm run lint`

4. **Build and test production build**
   ```bash
   npm run build
   npm run start
   ```

### Code Style Guidelines

- **Components**: Use PascalCase for component files and function names
- **TypeScript**: Enable strict mode, use interfaces for props
- **Styling**: Prefer Tailwind utility classes over custom CSS
- **Accessibility**: Always include ARIA labels and semantic HTML
- **Performance**: Use lazy loading for below-fold components

### Component Architecture

- **Server Components** (default) - For static content, layouts, metadata
- **Client Components** (`'use client'`) - For interactivity, state, event handlers
- **Component Composition** - Build complex UIs from smaller, reusable components

Example:
```typescript
// Server Component (app/layout.tsx)
export default function RootLayout({ children }) {
  return <html><body>{children}</body></html>;
}

// Client Component (components/HeroSection.tsx)
'use client';
export default function HeroSection() {
  const [state, setState] = useState();
  return <section>...</section>;
}
```

## 🏗 Building for Production

### Build Process

1. **Create production build**
   ```bash
   npm run build
   ```

2. **Test production build locally**
   ```bash
   npm run start
   ```

The build process will:
- Optimize all images
- Minify JavaScript and CSS
- Generate static pages where possible
- Create optimized bundles with code splitting

### Build Output

The build creates a `.next` directory containing:
- Optimized production bundles
- Static HTML pages
- Optimized images and assets
- Server-side rendering functions

## 🏛 Architecture

### Rendering Strategy

- **Server Components**: Root layout, metadata, fonts
- **Client Components**: Interactive sections, navigation, animations
- **Hybrid Approach**: Leverages Next.js App Router for optimal performance

### Component Hierarchy

```
RootLayout (Server)
├── Navbar (Client)
└── HomePage (Client)
    ├── HeroSection (Client)
    ├── HowItWorksSection (Client)
    ├── SecuritySection (Client)
    ├── VideoDemoSection (Client, Lazy)
    ├── SolutionPillarsSection (Client)
    ├── FeaturesSection (Client, Lazy)
    ├── EnterpriseSection (Client, Lazy)
    ├── IntegrationsSection (Client, Lazy)
    ├── FAQSection (Client, Lazy)
    └── Footer (Client)
```

### State Management

- **Local State**: React `useState` hooks for component-level state
- **No Global State**: No Context API, Redux, or Zustand (not needed currently)
- **Event Handling**: Direct event listeners with passive options for performance

### Performance Optimizations

- **Lazy Loading**: Below-fold sections loaded with `React.lazy()`
- **Image Optimization**: Next.js `Image` component with automatic optimization
- **Font Optimization**: Self-hosted fonts via `next/font/google`
- **Passive Event Listeners**: Non-blocking scroll handlers
- **CSS Animations**: GPU-accelerated animations for smooth performance

## 📝 Content Management

### Content Configuration

All content is managed in `config/content.ts`:

- **Features** - Product feature descriptions
- **Team Types** - Team-specific use cases
- **FAQs** - Frequently asked questions
- **Integrations** - Integration partner information
- **Pain Points** - Problem statements
- **Solution Pillars** - Core value propositions
- **Steps** - How it works process steps
- **Enterprise Benefits** - Enterprise-focused features
- **Video Tabs** - Video demo configurations

### Adding New Content

1. **Update Type Definitions** (`types/content.ts`)
   ```typescript
   export interface NewContentType {
     id: string;
     title: string;
     description: string;
   }
   ```

2. **Add Content Data** (`config/content.ts`)
   ```typescript
   export const newContent: NewContentType[] = [
     { id: '1', title: 'Title', description: 'Description' }
   ];
   ```

3. **Use in Components**
   ```typescript
   import { newContent } from '@/config/content';
   ```

## 🎨 Styling & Design System

### Design Tokens

**Colors:**
- Primary Brand: `#7c3aed` (Purple 600)
- Brand Cyan: `#00B4D8`
- Neutral: Zinc scale (50-900)

**Typography:**
- Primary Font: Inter (via `next/font/google`)
- Responsive Sizes: `text-5xl sm:text-6xl md:text-7xl`

**Spacing:**
- Uses Tailwind's default spacing scale
- Custom spacing for hero sections

### Design Patterns

1. **Glassmorphism**
   ```css
   backdrop-blur-xl bg-white/10 border-white/15
   ```

2. **Animated Gradients**
   - Hero background with moving gradients
   - CSS keyframe animations

3. **Responsive Grid**
   ```css
   grid grid-cols-1 lg:grid-cols-12
   ```

### Custom CSS

Global styles and CSS variables are defined in `app/globals.css`:
- CSS custom properties for theming
- Dark mode support
- Custom utility classes
- Animation keyframes

## ⚡ Performance Optimizations

### Implemented Optimizations

1. **Code Splitting**
   - Lazy loading for below-fold sections
   - Dynamic imports with Suspense boundaries

2. **Image Optimization**
   - Next.js Image component
   - Automatic format conversion (WebP/AVIF)
   - Responsive images
   - Priority loading for above-fold images

3. **Font Optimization**
   - Self-hosted fonts
   - Reduced layout shift
   - Automatic subsetting

4. **Event Listeners**
   - Passive scroll listeners
   - Proper cleanup in useEffect

5. **CSS Animations**
   - GPU-accelerated transforms
   - Smooth 60fps animations

### Performance Metrics

Target metrics:
- **First Contentful Paint (FCP)**: < 1.8s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.8s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Input Delay (FID)**: < 100ms

## 🚢 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   - Import project to Vercel
   - Connect GitHub/GitLab repository

2. **Configure Build Settings**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

3. **Deploy**
   - Vercel automatically deploys on push to main branch
   - Preview deployments for pull requests

### Other Platforms

**Netlify:**
```bash
npm run build
# Deploy .next directory
```

**AWS Amplify:**
- Configure build settings for Next.js
- Set environment variables if needed

**Docker:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

### Environment Variables

Currently, no environment variables are required. If needed in the future:
- Create `.env.local` for local development
- Add variables in deployment platform settings

## 🤝 Contributing

### Contribution Guidelines

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes**
4. **Test thoroughly**
5. **Commit your changes** (`git commit -m 'Add amazing feature'`)
6. **Push to the branch** (`git push origin feature/amazing-feature`)
7. **Open a Pull Request**

### Code Review Process

- All PRs require review before merging
- Ensure code passes linting (`npm run lint`)
- Test on multiple devices/browsers
- Update documentation if needed

### Commit Message Format

Use conventional commits:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `test:` Adding tests
- `chore:` Maintenance tasks

## 📚 Documentation

### Additional Documentation

- **[CODEBASE_ANALYSIS.md](./CODEBASE_ANALYSIS.md)** - Detailed codebase analysis
- **[CONTENT_SPECIFICATION.md](./CONTENT_SPECIFICATION.md)** - Complete content specifications
- **[FRONTEND_ARCHITECTURE.md](./FRONTEND_ARCHITECTURE.md)** - Frontend architecture documentation
- **[DATA_IMPLEMENTATION.md](./DATA_IMPLEMENTATION.md)** - Data structure documentation

### Key Documentation Files

- `CODEBASE_ANALYSIS.md` - Technical analysis of the codebase
- `CONTENT_SPECIFICATION.md` - All content specifications
- `FRONTEND_ARCHITECTURE.md` - Component architecture and patterns
- `DATA_IMPLEMENTATION.md` - Data structures and types

## 🐛 Troubleshooting

### Common Issues

**Issue: Port 3000 already in use**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
# Or use a different port
npm run dev -- -p 3001
```

**Issue: Module not found errors**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Issue: Build errors**
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

**Issue: TypeScript errors**
```bash
# Restart TypeScript server in your IDE
# Or check tsconfig.json configuration
```



For questions or support, please contact the development team.
