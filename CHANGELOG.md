# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-11-08

### Added
- Initial project setup with Vite + React + TypeScript
- SCSS support with BEM naming convention
- ESLint and Prettier configuration
- Git workflow with main and dev branches

#### UI Component Library
- Button component with 4 variants (primary, secondary, outline, ghost) and 3 sizes
- Input component with validation support and error display
- Card component with header, body, footer sections and multiple variants
- Modal component with accessibility features and keyboard navigation
- Accordion component for FAQ sections with expand/collapse functionality

#### Landing Page Sections
- Hero section with animated graphics and call-to-action buttons
- Features section showcasing 6 key features with icons
- Pricing section with 3 pricing tiers and feature lists
- FAQ section with accordion component
- Contact form with email validation and error handling

#### Theme System
- Light/Dark theme toggle with CSS variables
- Theme persistence in localStorage
- System preference detection
- Smooth theme transitions

#### Responsive Design
- Mobile-first approach (320px-1440px)
- 3 breakpoints: mobile (≤640px), tablet (641-1024px), desktop (≥1025px)
- Flexible grid layouts
- Responsive typography

#### Accessibility
- Semantic HTML5 structure
- ARIA attributes (aria-label, aria-expanded, aria-invalid, etc.)
- Keyboard navigation support
- Focus management in modals
- Screen reader friendly
- Sufficient color contrast

#### Form Validation
- Email format validation using regex
- Required field validation
- Minimum length validation
- Real-time error display
- Accessible error messages

#### Performance Optimizations
- Code splitting
- CSS minification
- Tree shaking
- Optimized component re-renders

### Documentation
- Comprehensive README.md with installation and usage instructions
- Component library documentation
- Architecture decision records
- Project structure overview

### Developer Experience
- Hot Module Replacement (HMR)
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Git hooks for pre-commit checks

## [Unreleased]

### Planned
- Lighthouse performance audit
- Deployment to Vercel/Netlify
- Additional animations and micro-interactions
- Image optimization
- PWA support
