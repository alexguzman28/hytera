# Master Design System — Hytera IA (UI/UX Pro Max)

## Visual Identity & Architecture

- **Pattern**: Product Demo + Bento Features
- **Style**: AI-Native Cyber-Industrial (Dark Mode High-Contrast)
- **Primary Font**: Inter (Headlines & Body)
- **Monospace Font**: JetBrains Mono (Data, Logs, Badges & KPIs)

## Color Palette Tokens

```css
:root {
  --color-primary: #ffffff;
  --color-on-primary: #000000;
  --color-secondary: #a78bfa;
  --color-accent: #00f0ff;
  --color-background: #050505;
  --color-surface: #0a0a0a;
  --color-surface-border: rgba(255, 255, 255, 0.12);
  --color-surface-hover: rgba(255, 255, 255, 0.25);
  --color-text-primary: #ffffff;
  --color-text-secondary: #a3a3a3;
  --color-text-muted: #737373;
}
```

## Typography Scale

- **Display Headline**: `Inter`, 64px (Mobile: 36px), Line-height 1.1, Letter-spacing -0.04em, Weight 700.
- **Section Title**: `Inter`, 40px (Mobile: 28px), Line-height 1.2, Letter-spacing -0.02em, Weight 600.
- **Card Title**: `Inter`, 20px, Line-height 1.3, Weight 600.
- **Body Text**: `Inter`, 16px, Line-height 1.6, Weight 400.
- **Mono Label**: `JetBrains Mono`, 12px, Tracking 0.1em, Uppercase.

## Core Interaction & Accessibility Rules

1. **Focus Ring**: `ring-2 ring-white ring-offset-2 ring-offset-black` for all interactive elements.
2. **Touch Targets**: Minimum 44x44px for buttons and interactive controls.
3. **Reduced Motion**: Respect `prefers-reduced-motion: reduce` across all GSAP animations.
4. **Icons**: Use SVG Material Symbols / Lucide icons (never raw emoji text).
