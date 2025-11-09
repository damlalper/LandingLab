# ADR-003: Component Architecture and Structure

## Status
Accepted

## Context
We need a clear component architecture that promotes reusability, maintainability, and separation of concerns. The project requires:
- 5 reusable UI components (Button, Input, Card, Modal, Accordion)
- Landing page sections (Hero, Features, Pricing, FAQ, Contact)
- Props-based configuration
- Accessibility support

## Decision
We will use a **component-driven architecture** with the following structure:

```
src/
├── components/        # Reusable UI components
│   └── ComponentName/
│       ├── ComponentName.tsx
│       ├── ComponentName.scss
│       └── index.ts
├── sections/          # Page sections
│   └── SectionName/
│       ├── SectionName.tsx
│       ├── SectionName.scss
│       └── index.ts
└── styles/            # Global styles
```

## Principles

### 1. Component Organization
Each component lives in its own directory with:
- TypeScript file for logic
- SCSS file for styles
- Index file for clean exports

### 2. Props Interface
Every component exports a TypeScript interface:
```typescript
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  // ...
}
```

### 3. Accessibility First
- Semantic HTML elements
- ARIA attributes
- Keyboard navigation
- Focus management

### 4. Separation of Concerns
- **Components**: Reusable, generic UI elements
- **Sections**: Page-specific layouts using components
- **Styles**: Global theme and utilities

## Component Categories

### UI Components (Generic, Reusable)
- Button
- Input
- Card
- Modal
- Accordion

**Characteristics**:
- Accept configuration via props
- No business logic
- Fully customizable
- Accessibility built-in

### Section Components (Page-Specific)
- Hero
- Features
- Pricing
- FAQ
- Contact

**Characteristics**:
- Use UI components
- Contain specific content
- Handle section-specific logic

## Consequences

### Positive
- Clear separation of concerns
- Easy to find and modify components
- Promotes reusability
- Testable components
- Type-safe with TypeScript
- Consistent file structure

### Negative
- More files per component
- Slightly more boilerplate

### Mitigation
- Component templates/snippets
- Clear naming conventions
- Index files for clean imports
