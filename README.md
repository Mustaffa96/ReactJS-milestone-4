# ReactJS-milestone-4

A modern React application built with performance and maintainability in mind.

## Tech Stack

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [React 18](https://reactjs.org/) with TypeScript
- [TanStack Query](https://tanstack.com/query) - Powerful data synchronization
- [React Router v6](https://reactrouter.com/) - Client-side routing
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager
- Testing Setup:
  - [Vitest](https://vitest.dev/) - Unit testing
  - [React Testing Library](https://testing-library.com/react) - React component testing
  - Coverage reporting with C8

## Project Structure

```
/src
├── components/     # Reusable UI components
├── features/       # Feature-based modules
├── hooks/          # Custom React hooks
├── layouts/        # Layout components
├── lib/           # Utility functions and configurations
├── pages/         # Route pages
├── services/      # API and external service integrations
├── types/         # TypeScript type definitions
├── tests/         # Test files
└── styles/        # Global styles and theme
```

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Start development server:
```bash
pnpm dev
```

3. Build for production:
```bash
pnpm build
```

4. Run tests:
```bash
pnpm test
```

## Features

- Fast development and build times with Vite
- Responsive and modern UI with Tailwind CSS
- Efficient data fetching and caching with TanStack Query
- Type-safe development with TypeScript
- Comprehensive testing setup
- Optimized bundle with manual chunk splitting
