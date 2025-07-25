# Copilot Instructions for EFFIDIGI AI Voice Service Platform

## Project Overview
This is a Next.js 14+ multilingual (Estonian/English) business website for EFFIDIGI, an AI-powered phone service targeting Estonian businesses (restaurants, dental clinics, auto dealers, furniture stores). The site features AI voice calling demos, consultation booking, and content management.

## Architecture & Key Technologies
- **Framework**: Next.js 14+ (App Router) with TypeScript
- **Styling**: Tailwind CSS + CSS variables (HSL color system), custom animations
- **UI Components**: Radix UI primitives with custom styling in `components/ui/`
- **Animation**: Framer Motion (`motion/react`) for page transitions and micro-interactions
- **Voice Integration**: Vapi AI (`@vapi-ai/web`) for real-time voice calling demos
- **Scheduling**: Cal.com React embed for consultation bookings
- **Deployment**: Netlify with `@netlify/plugin-nextjs`

## Critical File Structure Patterns

### Routing & Internationalization
- **App Structure**: `/app/[locale]/` for i18n routing (et/en locales)
- **i18n Implementation**: Custom hook in `lib/i18n.ts` loads translations from `/public/locales/{locale}/common.json`
- **Default Locale**: Estonian (`et`) with English fallback
- **Route Handling**: Both `/app/` and `/app/[locale]/` exist - locale routes override root routes

### Component Organization
```
components/
├── ui/           # Reusable UI primitives (buttons, forms, etc.)
├── sections/     # Page sections (hero, features, contact)  
└── blog/         # Blog-specific components

Root components:   # Shared components at project root
├── *.tsx         # Legacy shared components (footer-section, site-header, etc.)
```

### Content Management
- **Blog Posts**: Markdown files in `/content/blog/` processed via `gray-matter` + `remark`
- **Static Assets**: `/public/` with organized locale directories
- **Types**: Centralized in `lib/types.ts` (BlogPost, Testimonial, AIEmployee interfaces)

## Essential Development Patterns

### Animation & Motion Conventions
- **Import**: `import { motion } from "motion/react"` (new Framer Motion import)
- **ViewAnimationProps Pattern**: Components use `AnimatedContainer` wrapper with delay props
- **Standard animations**: `blur(4px) → blur(0px)` with `translateY: -8 → 0` and opacity transitions
- **Viewport**: Use `viewport={{ once: true }}` for performance
- **Motion Reduction**: Always check `useReducedMotion()` and provide fallbacks

### Component Conventions
- **Client Components**: Mark with `"use client"` for interactivity (especially for motion/Vapi)
- **CSS Classes**: Use `cn()` utility (tailwind-merge + clsx) for conditional styling
- **Prop Spreading**: `...props` pattern with proper TypeScript interfaces
- **Ref Forwarding**: Use `React.forwardRef` for UI primitives

### Styling System
- **Color System**: HSL-based with CSS variables (`hsl(var(--background))`)
- **Border Radius**: Uses CSS variables (`var(--radius)`) for consistent rounding
- **Component Variants**: Use `class-variance-authority` (cva) for button/component variants
- **Responsive**: Mobile-first approach with explicit breakpoints
- **Icons**: Lucide React icons throughout (`import { Icon } from "lucide-react"`)

### Voice Integration Patterns
- **API Route**: `/app/api/initiate-call/route.ts` handles Vapi AI integration
- **Estonian Numbers**: Supports +372 and 5XXXXXXX formats with international validation  
- **CORS Headers**: Explicit CORS handling in API routes for cross-origin requests
- **Error Handling**: Structured error responses with appropriate HTTP status codes

### State Management & Integration
- **Local State**: `useState` for component-level state
- **Cal.com Integration**: Custom `useCal()` hook with fallback mechanisms  
- **Voice Integration**: Direct Vapi client initialization in components
- **i18n Hook**: `useTranslation()` returns `{ t, locale, changeLanguage }` with nested key support

## Key Business Logic

### Voice Demo Flow
1. User enters phone number in `AIVoicecallerTest` component
2. POST to `/api/initiate-call` validates and processes via Vapi AI
3. Estonian phone number validation with international format support (+372)
4. Real-time status updates with success/error handling

### Consultation Booking
- Cal.com embed with hidden trigger button technique
- Fallback chain: hidden button → Cal API → direct link
- Form validation for company details and scheduling

### Content Localization  
- Translation keys use dot notation (`t('hero.title')`)
- Estonian-first content with English translations
- Dynamic content loading based on route locale (`/en/...` vs `/...`)
- Fallback mechanism: Estonian → English → key itself

## Development Commands
```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint checking
```

## Critical Dependencies
- `@vapi-ai/web`: Voice calling integration
- `@calcom/embed-react`: Consultation scheduling  
- `motion/react`: Animations and transitions (new import format)
- `gray-matter` + `remark`: Markdown content processing
- `class-variance-authority`: Component variant system
- `@radix-ui/*`: Headless UI primitives
- `clsx` + `tailwind-merge`: Conditional CSS classes via `cn()` utility

## Deployment Notes
- **Platform**: Netlify with `@netlify/plugin-nextjs`
- **Build Output**: `.next` directory (not static export)
- **Config**: `images: { unoptimized: true }` for Netlify compatibility
- **Runtime**: Node.js, serverless functions for API routes

## Common Gotchas & Key Patterns
- **Locale Routes**: Check both `/app/[locale]/` and `/app/` directories when editing pages
- **Motion Import**: Use `motion/react` not `framer-motion` 
- **Component Structure**: Some shared components are at project root (legacy), others in `/components/`
- **CSS Variables**: Use `hsl(var(--variable))` format consistently
- **Phone Validation**: Estonian numbers need +372 prefix or 5XXXXXXX format
- **Animation Performance**: Always include `useReducedMotion()` checks for accessibility
- **Client Components**: Voice and Cal.com integrations require client-side execution
- **Translation Loading**: Async translation loading needs error boundaries and fallbacks
- **API Routes**: Include CORS headers for cross-origin form submissions
- **Build Optimization**: ESLint ignored during builds (`ignoreDuringBuilds: true`)
