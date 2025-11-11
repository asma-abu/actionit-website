# ActionIT.AI Frontend Architecture Documentation

**Document Type:** Frontend Architecture Analysis  
**Version:** 1.0.0  
**Last Updated:** 2025-01-27  
**Author:** Senior Frontend Engineer Analysis

---

## Table of Contents

1. [Component Architecture](#1-component-architecture)
2. [Component Tree & Hierarchy](#2-component-tree--hierarchy)
3. [Props Flow & Communication Patterns](#3-props-flow--communication-patterns)
4. [Rendering Lifecycle & Optimization](#4-rendering-lifecycle--optimization)
5. [Layout Patterns & Composition](#5-layout-patterns--composition)
6. [Routing & Navigation Structure](#6-routing--navigation-structure)
7. [Design System & Theming](#7-design-system--theming)
8. [Performance Optimizations](#8-performance-optimizations)
9. [File Structure & Conventions](#9-file-structure--conventions)
10. [Reusable Components Inventory](#10-reusable-components-inventory)

---

## 1. Component Architecture

### Architecture Overview

ActionIT.AI follows a **hybrid component architecture** combining:
- **Server Components** (Next.js App Router) for static content
- **Client Components** for interactive features
- **Component composition** pattern for reusability

### Component Classification

| Component | Type | Purpose | Location |
|-----------|------|---------|----------|
| `RootLayout` | Server Component | Root layout, fonts, metadata | `app/layout.tsx` |
| `HomePage` | Client Component | Home page wrapper | `app/page.tsx` |
| `Navbar` | Client Component | Global navigation | `components/Navbar.tsx` |
| `HeroSection` | Client Component | Hero section with animations | `components/Herosection.tsx` |

### Component Design Principles

1. **Single Responsibility**: Each component has one clear purpose
2. **Composition over Inheritance**: Components compose smaller pieces
3. **Client/Server Boundary**: Clear separation between static and interactive
4. **Props Interface**: TypeScript interfaces for all props (when applicable)
5. **Accessibility First**: ARIA labels, semantic HTML, keyboard navigation

---

## 2. Component Tree & Hierarchy

### Complete Component Tree

```
RootLayout (Server Component)
├── <html lang="en">
│   └── <body>
│       ├── Navbar (Client Component)
│       │   ├── <header>
│       │   │   └── <nav>
│       │   │       ├── Logo Section
│       │   │       │   └── Link + Image + Text
│       │   │       ├── Navigation Links (Desktop)
│       │   │       │   └── <ul>
│       │   │       │       └── <li> × 5 (Products, Solutions, Developers, Resources, Pricing)
│       │   │       ├── Action Buttons (Desktop)
│       │   │       │   ├── Sign in Link
│       │   │       │   └── Contact sales Link
│       │   │       └── Mobile Menu Toggle
│       │   │           └── <button> (Burger/Close Icon)
│       │   └── Mobile Drawer (Conditional)
│       │       └── <div>
│       │           └── <ul>
│       │               ├── Navigation Links × 5
│       │               └── Action Buttons
│       └── <main>
│           └── HomePage (Client Component)
│               └── <main>
│                   └── HeroSection (Client Component)
│                       └── <section>
│                           ├── Background Layers (3 divs)
│                           │   ├── Animated Gradient (z-index: -20)
│                           │   ├── Radial Blooms (z-index: -10)
│                           │   └── Angled White Slice (z-index: -10)
│                           └── Content Grid Container
│                               ├── Promo Pill (Sticky, Scroll-fade)
│                               │   └── <div> (Glassmorphism badge)
│                               ├── Left Column (lg:col-span-7)
│                               │   ├── <h1> (Gradient headline)
│                               │   ├── <p> (Subheadline)
│                               │   ├── CTA Buttons Container
│                               │   │   ├── Primary CTA Link
│                               │   │   └── Secondary CTA Link
│                               │   └── Privacy Disclaimer
│                               │       └── <p> + <a>
│                               └── Right Column (lg:col-span-5, Desktop only)
│                                   └── Glass Card Container
│                                       └── Mock UI Image
│                                           └── Next.js Image Component
```

### Component Depth Analysis

- **Maximum Depth:** 8 levels (RootLayout → body → main → HomePage → main → HeroSection → section → Content Grid)
- **Average Depth:** 5 levels
- **Leaf Components:** 15+ (buttons, links, images, text elements)

### Component Relationships

```
RootLayout
  └─> Navbar (sibling to all pages)
  └─> HomePage (page content)
      └─> HeroSection (feature component)
```

**Key Relationships:**
- **Parent-Child:** RootLayout → HomePage → HeroSection
- **Sibling:** Navbar ↔ HomePage (both children of RootLayout)
- **No Props Flow:** All components are self-contained (no prop drilling)

---

## 3. Props Flow & Communication Patterns

### Current Props Architecture

**Status:** **No props flow currently implemented**

All components are self-contained with:
- No props passed between components
- Internal state management via React Hooks
- No Context API usage
- No prop drilling

### Component Interfaces (TypeScript)

#### RootLayout Props
```typescript
interface RootLayoutProps {
  children: React.ReactNode; // Required by Next.js App Router
}
```

#### HomePage Props
```typescript
// No props - component is self-contained
```

#### Navbar Props
```typescript
// No props - component is self-contained
// Internal state: open (boolean), scrolled (boolean)
```

#### HeroSection Props
```typescript
// No props - component is self-contained
// Internal state: pillOpacity (number)
```

### Communication Patterns

#### 1. **State Management Pattern**
- **Local State:** `useState` hooks in each component
- **No Global State:** No Context, Redux, or Zustand
- **No Shared State:** Components don't share state

#### 2. **Event Communication**
- **Scroll Events:** Direct `window.addEventListener` in components
- **Click Events:** Local handlers within components
- **Navigation:** Next.js `Link` component for routing

#### 3. **Data Flow**
```
Static Content (Hardcoded)
    ↓
Component JSX
    ↓
Browser DOM
```

**No data fetching or transformation layers**

### Recommended Props Flow (Future)

For future enhancements, consider:

```typescript
// Example: Reusable Button Component
interface ButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  ariaLabel?: string;
}

// Example: Container Component
interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
}
```

---

## 4. Rendering Lifecycle & Optimization

### Rendering Strategy by Component

#### RootLayout (Server Component)
- **Rendering:** Server-Side Rendering (SSR)
- **Hydration:** Not applicable (no client-side JavaScript)
- **Re-renders:** Never (static)
- **Optimization:** Font optimization via `next/font/google`

#### HomePage (Client Component)
- **Rendering:** Client-Side Rendering (CSR)
- **Hydration:** Yes (React 19 hydration)
- **Re-renders:** Never (no state, no props)
- **Optimization:** Minimal JavaScript bundle

#### Navbar (Client Component)
- **Rendering:** Client-Side Rendering (CSR)
- **Hydration:** Yes
- **Re-renders:** On scroll (updates `scrolled` state)
- **Optimization:**
  - Passive scroll listeners
  - Conditional className updates
  - Memoization potential: `useMemo` for className strings

#### HeroSection (Client Component)
- **Rendering:** Client-Side Rendering (CSR)
- **Hydration:** Yes
- **Re-renders:** On scroll (updates `pillOpacity` state)
- **Optimization:**
  - Passive scroll listeners
  - Inline style updates (minimal re-render scope)
  - CSS animations (GPU-accelerated)

### Rendering Lifecycle Flow

```
1. Server Request
   ↓
2. RootLayout Renders (SSR)
   - Loads fonts
   - Sets metadata
   - Renders HTML structure
   ↓
3. HTML Sent to Client
   ↓
4. Client Hydration
   - Navbar hydrates (adds event listeners)
   - HomePage hydrates
   - HeroSection hydrates (adds scroll listener)
   ↓
5. Interactive State
   - Scroll events trigger state updates
   - State updates trigger re-renders
   - Re-renders update DOM (minimal scope)
```

### Optimization Techniques Implemented

#### 1. **Passive Event Listeners**
```typescript
// components/Herosection.tsx:18
window.addEventListener("scroll", onScroll, { passive: true });

// components/Navbar.tsx:14
window.addEventListener("scroll", onScroll, { passive: true });
```
**Benefit:** Non-blocking scroll handling, better scroll performance

#### 2. **Next.js Image Optimization**
```typescript
// components/Herosection.tsx:117-124
<Image
  src="/mock-card.png"
  alt="ActionIT meeting summary preview"
  width={640}
  height={1280}
  className="rounded-lg"
  priority // Loads immediately (above fold)
/>
```
**Benefit:** Automatic image optimization, lazy loading, responsive images

#### 3. **CSS Animations (GPU-Accelerated)**
```css
/* components/Herosection.tsx:132-142 */
@keyframes heroGradientMove {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```
**Benefit:** Hardware acceleration, smooth 60fps animations

#### 4. **Font Optimization**
```typescript
// app/layout.tsx:6-14
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
```
**Benefit:** Self-hosted fonts, reduced layout shift, better performance

### Optimization Opportunities

#### 1. **Code Splitting**
- **Current:** Single bundle for all components
- **Opportunity:** Dynamic imports for below-fold content
- **Implementation:**
```typescript
const HeroSection = dynamic(() => import('../components/Herosection'), {
  loading: () => <HeroSectionSkeleton />,
});
```

#### 2. **Memoization**
- **Current:** No memoization
- **Opportunity:** Memoize expensive className calculations
- **Implementation:**
```typescript
const navClassName = useMemo(() => {
  return [
    "base-classes",
    scrolled ? "scrolled-classes" : "",
  ].join(" ");
}, [scrolled]);
```

#### 3. **Intersection Observer**
- **Current:** Scroll listeners on every scroll
- **Opportunity:** Intersection Observer for scroll-based animations
- **Benefit:** Better performance, more control

---

## 5. Layout Patterns & Composition

### Layout System Architecture

#### Root Layout Pattern
```typescript
// app/layout.tsx
<html>
  <body>
    <Navbar />      {/* Global, sticky */}
    <main>
      {children}    {/* Page content */}
    </main>
  </body>
</html>
```

**Pattern:** Global navigation + page content wrapper

### Layout Composition Patterns

#### 1. **Container Pattern**
```typescript
// Used in HeroSection
<div className="mx-auto w-full max-w-screen-2xl px-6 md:px-12">
  {/* Content */}
</div>
```
**Characteristics:**
- Centered with `mx-auto`
- Max width: `max-w-screen-2xl` (1536px)
- Responsive padding: `px-6 md:px-12`

#### 2. **Grid Layout Pattern**
```typescript
// Used in HeroSection
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
  <div className="lg:col-span-7">{/* Left column */}</div>
  <div className="lg:col-span-5">{/* Right column */}</div>
</div>
```
**Characteristics:**
- Mobile: 1 column
- Desktop: 12-column grid
- Responsive column spans

#### 3. **Sticky Navigation Pattern**
```typescript
// Used in Navbar
<header className="sticky top-0 z-50">
  <nav className={/* glassmorphism styles */}>
    {/* Navigation content */}
  </nav>
</header>
```
**Characteristics:**
- Sticky positioning
- High z-index (50)
- Glassmorphism background

#### 4. **Glassmorphism Pattern**
```typescript
// Used in Navbar and HeroSection
<div className="
  backdrop-blur-xl
  bg-white/10 dark:bg-zinc-900/30
  border-white/15
  shadow-[...]
">
  {/* Content */}
</div>
```
**Characteristics:**
- Backdrop blur
- Semi-transparent background
- Border with opacity
- Shadow for depth

#### 5. **Responsive Visibility Pattern**
```typescript
// Hide on mobile, show on desktop
<div className="hidden lg:flex">
  {/* Desktop-only content */}
</div>

// Show on mobile, hide on desktop
<div className="md:hidden">
  {/* Mobile-only content */}
</div>
```

### Layout Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| `sm` | 640px+ | Small tablets |
| `md` | 768px+ | Tablets, small desktops |
| `lg` | 1024px+ | Desktops (primary breakpoint) |
| `xl` | 1280px+ | Large desktops |
| `2xl` | 1536px+ | Extra large desktops |

**Primary Breakpoint:** `lg` (1024px) - Major layout changes occur here

---

## 6. Routing & Navigation Structure

### Routing Architecture

**Framework:** Next.js 16 App Router (file-based routing)

### Route Structure

```
app/
├── layout.tsx          → Root layout (applies to all routes)
├── page.tsx            → / (home page)
└── [future routes]
    ├── products/
    │   └── page.tsx    → /products
    ├── solutions/
    │   └── page.tsx    → /solutions
    ├── developers/
    │   └── page.tsx    → /developers
    ├── resources/
    │   └── page.tsx    → /resources
    ├── pricing/
    │   └── page.tsx    → /pricing
    ├── signin/
    │   └── page.tsx    → /signin
    └── contact/
        └── page.tsx    → /contact
```

### Current Routes

| Route | File | Status | Type |
|-------|------|--------|------|
| `/` | `app/page.tsx` | ✅ Implemented | Client Component |
| `/products` | - | ❌ Not implemented | - |
| `/solutions` | - | ❌ Not implemented | - |
| `/developers` | - | ❌ Not implemented | - |
| `/resources` | - | ❌ Not implemented | - |
| `/pricing` | - | ❌ Not implemented | - |
| `/signin` | - | ❌ Not implemented | - |
| `/contact` | - | ❌ Not implemented | - |

### Navigation Structure

#### Desktop Navigation
```
Logo | Products | Solutions | Developers | Resources | Pricing | [Sign in] [Contact sales]
```

#### Mobile Navigation
```
[Logo] [☰]
  ↓ (when menu open)
Products
Solutions
Developers
Resources
Pricing
[Sign in] [Contact sales]
```

### Navigation Implementation

#### Link Component Usage
```typescript
// components/Navbar.tsx:61-67
<Link
  href={item.href}
  className="text-sm font-medium ..."
>
  {item.label}
</Link>
```

**Benefits:**
- Client-side navigation (no page reload)
- Prefetching (Next.js automatic)
- Accessibility (semantic `<a>` tags)

### Anchor Links (Home Page)

```typescript
// components/Herosection.tsx:85-98
<Link href="#start">Get started</Link>
<Link href="#contact">Talk to sales</Link>
<a href="#privacy">Learn more</a>
```

**Status:** Anchor links defined but target sections not implemented

### Route Metadata

```typescript
// app/layout.tsx:16-19
export const metadata: Metadata = {
  title: "Create Next App",        // ⚠️ Generic - needs update
  description: "Generated by create next app", // ⚠️ Generic - needs update
};
```

**Recommendation:** Update with ActionIT-specific metadata

---

## 7. Design System & Theming

### Design Tokens

#### Color System

**CSS Custom Properties (globals.css):**
```css
:root {
  --background: #ffffff;
  --foreground: #111111;
  --brand: #7c3aed;              /* Purple 600 */
  --brand-contrast: #ffffff;
  --muted: #f6f7f8;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0b0b0c;
    --foreground: #f5f5f6;
    --muted: #0f1012;
  }
}
```

**Brand Colors:**
- **Primary Brand:** `#7c3aed` (Purple 600)
- **Brand Cyan:** `#00B4D8` (used in gradients)
- **Brand Purple:** `#6366F1` (Indigo 500, used in gradients)
- **Neutral 50:** `#F8FAFC` (used in gradients)

**Zinc Palette (Tailwind):**
- `zinc-900` - Primary text, buttons
- `zinc-800` - Secondary text
- `zinc-700` - Tertiary text
- `zinc-600` - Muted text
- `zinc-50` - Light backgrounds

#### Typography System

**Font Families:**
- **Primary:** Geist Sans (via `next/font/google`)
- **Monospace:** Geist Mono (via `next/font/google`)
- **Fallback:** Inter, system-ui, sans-serif

**Font Sizes (Responsive):**
```typescript
// Hero headline
text-5xl        // Mobile: 3rem (48px)
sm:text-6xl     // Small: 3.75rem (60px)
md:text-7xl     // Medium+: 4.5rem (72px)
```

**Font Weights:**
- `font-extrabold` - Headlines (800)
- `font-semibold` - CTAs, emphasis (600)
- `font-medium` - Navigation, body emphasis (500)
- Default - Body text (400)

#### Spacing System

**Tailwind Default Scale:**
- `gap-2` - 0.5rem (8px)
- `gap-4` - 1rem (16px)
- `gap-6` - 1.5rem (24px)
- `gap-8` - 2rem (32px)
- `gap-10` - 2.5rem (40px)

**Custom Spacing:**
- `pt-36` - 9rem (144px) - Hero top padding mobile
- `pt-40` - 10rem (160px) - Hero top padding desktop
- `pb-20` - 5rem (80px) - Hero bottom padding mobile
- `pb-28` - 7rem (112px) - Hero bottom padding desktop

#### Border Radius

- `rounded-md` - 0.375rem (6px) - Logo
- `rounded-lg` - 0.5rem (8px) - Buttons, cards
- `rounded-xl` - 0.75rem (12px) - Inner cards
- `rounded-2xl` - 1rem (16px) - Navbar, outer cards
- `rounded-full` - 9999px - Pills, buttons

#### Shadows

```typescript
// Navbar
shadow-[0_2px_20px_rgba(0,0,0,0.10)]      // Default
shadow-[0_6px_30px_rgba(0,0,0,0.15)]      // Scrolled

// Cards
shadow-sm      // Small shadow
shadow         // Default shadow
shadow-2xl     // Large shadow
```

#### Opacity System

**Glassmorphism Opacities:**
- `bg-white/10` - Very transparent
- `bg-white/30` - Light transparency
- `bg-white/40` - Medium transparency (scrolled navbar)
- `bg-white/60` - More opaque
- `bg-white/65` - Semi-opaque
- `bg-white/70` - Mostly opaque
- `bg-white/80` - Nearly opaque

**Text Opacities:**
- `text-zinc-900/90` - 90% opacity
- `text-zinc-900/80` - 80% opacity
- `text-zinc-700` - Solid (700 shade)

### Theming Approach

#### Dark Mode Support

**Implementation:** CSS custom properties with `prefers-color-scheme`

```css
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0b0b0c;
    --foreground: #f5f5f6;
    --muted: #0f1012;
  }
}
```

**Component Usage:**
```typescript
// Tailwind dark mode classes
className="dark:bg-zinc-900/30 dark:text-white"
```

**Status:** Partial implementation (navbar has dark mode, hero section doesn't)

### Tailwind CSS Configuration

```typescript
// tailwind.config.ts
{
  darkMode: "class",  // Class-based dark mode (not used yet)
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: { /* Blue scale 50-950 */ },
      },
      fontFamily: {
        body: [/* Inter fallback stack */],
        sans: [/* Inter fallback stack */],
      },
    },
  },
}
```

### Custom Utility Classes

```css
/* app/globals.css */

/* Brand color utility */
@utility brand {
  --tw-text-opacity: 1;
  color: rgb(124 58 237 / var(--tw-text-opacity));
}

/* Hero gradient utility */
.hero-gradient {
  background: /* complex gradient */;
}

/* Safe area inset */
.safe-top {
  padding-top: env(safe-area-inset-top);
}
```

---

## 8. Performance Optimizations

### Current Optimizations

#### 1. **Next.js Image Optimization**
- **Implementation:** `next/image` component
- **Features:**
  - Automatic image optimization
  - Lazy loading (except `priority` images)
  - Responsive images
  - WebP/AVIF format conversion
- **Usage:**
```typescript
<Image
  src="/mock-card.png"
  width={640}
  height={1280}
  priority  // Above-fold, loads immediately
/>
```

#### 2. **Font Optimization**
- **Implementation:** `next/font/google`
- **Features:**
  - Self-hosted fonts
  - Reduced layout shift
  - Automatic subsetting
- **Usage:**
```typescript
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
```

#### 3. **Passive Event Listeners**
- **Implementation:** `{ passive: true }` option
- **Benefit:** Non-blocking scroll handling
- **Usage:**
```typescript
window.addEventListener("scroll", onScroll, { passive: true });
```

#### 4. **CSS Animations (GPU-Accelerated)**
- **Implementation:** CSS `@keyframes` and `transform`
- **Benefit:** Hardware acceleration, 60fps animations
- **Usage:**
```css
@keyframes heroGradientMove {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```

#### 5. **Minimal JavaScript Bundle**
- **Current Size:** Small (only 2 client components)
- **No Heavy Libraries:** No UI frameworks, minimal dependencies

### Performance Metrics (Estimated)

| Metric | Status | Notes |
|--------|--------|-------|
| **First Contentful Paint (FCP)** | ✅ Good | Server-rendered HTML |
| **Largest Contentful Paint (LCP)** | ⚠️ Moderate | Hero image with priority |
| **Time to Interactive (TTI)** | ✅ Good | Minimal JavaScript |
| **Cumulative Layout Shift (CLS)** | ✅ Good | Font optimization, fixed dimensions |
| **First Input Delay (FID)** | ✅ Excellent | Passive listeners, minimal JS |

### Optimization Opportunities

#### 1. **Code Splitting**
**Current:** Single bundle
**Opportunity:**
```typescript
// Dynamic import for below-fold content
const BelowFoldSection = dynamic(
  () => import('./BelowFoldSection'),
  { loading: () => <Skeleton /> }
);
```

#### 2. **Static Site Generation (SSG)**
**Current:** Client-side rendering
**Opportunity:**
```typescript
// app/page.tsx - Convert to Server Component
export default async function HomePage() {
  // Can fetch data at build time
  return <HeroSection />;
}
```

#### 3. **Intersection Observer**
**Current:** Scroll event listeners
**Opportunity:**
```typescript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Trigger animation
    }
  });
}, { threshold: 0.1 });
```

#### 4. **Memoization**
**Current:** No memoization
**Opportunity:**
```typescript
const memoizedClassName = useMemo(() => {
  return computeExpensiveClassName();
}, [dependencies]);
```

#### 5. **Image Lazy Loading**
**Current:** Priority image loads immediately
**Opportunity:** Remove `priority` for below-fold images, add `loading="lazy"`

---

## 9. File Structure & Conventions

### Current File Structure

```
actionit-website/
├── app/                          # Next.js App Router
│   ├── favicon.ico
│   ├── globals.css               # Global styles
│   ├── layout.tsx               # Root layout (Server Component)
│   └── page.tsx                 # Home page (Client Component)
├── components/                   # React components
│   ├── Herosection.tsx          # Hero section
│   └── Navbar.tsx               # Navigation
├── public/                       # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── node_modules/
├── .gitignore
├── CODEBASE_ANALYSIS.md
├── eslint.config.mjs
├── next.config.ts
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

### Naming Conventions

#### Files
- **Components:** PascalCase (e.g., `Herosection.tsx`, `Navbar.tsx`)
- **Pages:** lowercase (e.g., `page.tsx`, `layout.tsx`)
- **Config:** kebab-case (e.g., `next.config.ts`, `tailwind.config.ts`)

#### Components
- **Export:** Default export
- **Function Name:** PascalCase matching filename
- **Example:**
```typescript
// File: components/Herosection.tsx
export default function HeroSection() { }
```

### Import Conventions

#### Absolute vs Relative Imports
- **Current:** Relative imports (`../components/Herosection`)
- **Configured:** Path alias `@/*` available in `tsconfig.json`
- **Not Used:** Absolute imports not implemented

#### Import Order (Recommended)
```typescript
// 1. React/Next.js
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// 2. Third-party libraries
// (none currently)

// 3. Local components
import HeroSection from "../components/Herosection";

// 4. Types
import type { Metadata } from "next";

// 5. Styles
import "./globals.css";
```

### Component Organization

**Current Structure:**
- Flat component directory
- No subdirectories
- No component categories

**Recommended Structure (Future):**
```
components/
├── ui/                    # Reusable UI components
│   ├── Button.tsx
│   ├── Container.tsx
│   └── GlassCard.tsx
├── layout/                 # Layout components
│   ├── Navbar.tsx
│   └── Footer.tsx
├── sections/               # Page sections
│   ├── HeroSection.tsx
│   ├── FeaturesSection.tsx
│   └── TestimonialsSection.tsx
└── shared/                 # Shared utilities
    └── hooks/
        └── useScroll.ts
```

---

## 10. Reusable Components Inventory

### Current Reusable Components

**Status:** **No reusable components currently extracted**

All components are feature-specific:
- `Navbar` - Global navigation (reusable but not parameterized)
- `HeroSection` - Home page hero (not reusable)

### Recommended Reusable Components

#### 1. **Button Component**
```typescript
interface ButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
}
```

**Usage Pattern:**
```typescript
<Button
  label="Get started"
  href="#start"
  variant="primary"
  ariaLabel="Get started with ActionIT"
/>
```

#### 2. **Container Component**
```typescript
interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  className?: string;
}
```

**Usage Pattern:**
```typescript
<Container maxWidth="2xl">
  {/* Content */}
</Container>
```

#### 3. **GlassCard Component**
```typescript
interface GlassCardProps {
  children: React.ReactNode;
  variant?: 'light' | 'medium' | 'heavy';
  className?: string;
}
```

**Usage Pattern:**
```typescript
<GlassCard variant="medium">
  {/* Content */}
</GlassCard>
```

#### 4. **PromoPill Component**
```typescript
interface PromoPillProps {
  icon?: string | React.ReactNode;
  text: string;
  fadeOnScroll?: boolean;
  className?: string;
}
```

#### 5. **NavigationLink Component**
```typescript
interface NavigationLinkProps {
  href: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
}
```

### Component Extraction Priority

1. **High Priority:**
   - Button (used 4+ times)
   - Container (used in multiple sections)

2. **Medium Priority:**
   - GlassCard (reusable pattern)
   - NavigationLink (DRY principle)

3. **Low Priority:**
   - PromoPill (single use case currently)

---

## Summary

### Architecture Strengths

1. ✅ **Modern Stack:** Next.js 16 + React 19
2. ✅ **Type Safety:** Full TypeScript
3. ✅ **Performance:** Optimized images, passive listeners
4. ✅ **Design System:** Consistent glassmorphism
5. ✅ **Accessibility:** ARIA labels, semantic HTML

### Architecture Gaps

1. ⚠️ **No Reusable Components:** Everything is feature-specific
2. ⚠️ **No Props Flow:** Components are isolated
3. ⚠️ **No State Management:** Only local state
4. ⚠️ **No Code Splitting:** Single bundle
5. ⚠️ **Limited Routing:** Only home page implemented

### Next Steps

1. Extract reusable components (Button, Container, GlassCard)
2. Implement missing routes
3. Add SSG for better SEO
4. Implement code splitting
5. Add error boundaries
6. Create component library documentation

---

**Document Status:** ✅ Complete  
**Last Updated:** 2025-01-27T00:00:00Z

