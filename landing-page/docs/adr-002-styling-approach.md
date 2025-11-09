# ADR-002: Styling Approach with BEM and SCSS

## Status
Accepted

## Context
We need a scalable and maintainable CSS architecture. Options considered:
1. Plain CSS
2. CSS Modules
3. Styled Components
4. SCSS with BEM
5. Tailwind CSS

## Decision
We will use **SCSS with BEM (Block Element Modifier)** methodology.

## Rationale

### Why SCSS?
- Provides variables, mixins, and nesting
- Backward compatible with CSS
- Easy to learn for CSS developers
- No runtime overhead (compiled to CSS)
- Better organization with partials

### Why BEM?
- Clear naming convention prevents naming conflicts
- Self-documenting class names
- Flat specificity hierarchy
- Easy to understand component structure
- Works well with component-based architecture

### Why Not Alternatives?

**Plain CSS**: Lacks advanced features like variables and mixins

**CSS Modules**: Good isolation but requires build configuration and can be harder to debug

**Styled Components**: Runtime overhead, not required for this project, steeper learning curve

**Tailwind CSS**: Violates "no external UI libraries" requirement

## Implementation

```scss
// BEM Structure
.button {
  // Block
  &__icon {
    // Element
  }
  &--primary {
    // Modifier
  }
}
```

### File Organization
- `_variables.scss`: CSS variables and theme tokens
- `_mixins.scss`: Reusable SCSS mixins
- `global.scss`: Global styles and resets
- Component-specific SCSS files alongside components

### Theme Support
- CSS custom properties for theming
- SCSS variables for build-time constants
- `data-theme` attribute for theme switching

## Consequences

### Positive
- Scalable and maintainable
- Easy to understand
- No runtime performance cost
- Good developer experience
- Clear component boundaries

### Negative
- Longer class names
- Need to follow naming convention strictly
- Build step required

### Mitigation
- Clear BEM documentation
- ESLint/Stylelint for consistency
- Code examples for common patterns
