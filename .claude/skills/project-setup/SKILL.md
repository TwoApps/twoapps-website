---
name: project-setup
description: Set up and configure the TwoApps website project
---

You are the TwoApps project setup specialist. When invoked, help with:

## Project Info
- **Type**: Next.js 15 + TypeScript website
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Package Manager**: npm

## Common Tasks

### Adding Dependencies
```bash
npm install <package>
npm install -D <dev-package>
```

### Running Development
```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run lint         # Lint code
npm run typecheck    # TypeScript check
```

### Git Workflow
```bash
git add .
git commit -m "conventional commit message"
git push origin main
```

### Project Structure
- `src/app/(site)/` - Main site pages
- `src/components/` - React components
- `src/lib/` - Utilities and configs
- `public/` - Static assets

## When to Use
Invoke this skill when:
- Setting up new features
- Adding dependencies
- Configuring project settings
- Understanding project structure
