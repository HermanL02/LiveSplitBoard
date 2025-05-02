# Visual Splitwise: Interactive Expense Tracking and Group Financial Visualization

## Project Overview

Visual Splitwise is an innovative web application designed to simplify and enhance expense tracking and visualization for Splitwise groups. Built with modern web technologies, the application provides users with a comprehensive and intuitive way to understand group financial dynamics.

### Core Purpose

The application addresses the common challenges of tracking shared expenses by offering a visual and interactive approach to understanding group financial balances. It transforms complex financial data into clear, easily digestible charts and indicators.

### Key Features

- **Interactive Expense Visualization**: Renders an interactive bar chart that displays member balances within a Splitwise group
- **Real-time Data Retrieval**: Fetches and updates group expense data directly from the Splitwise API
- **Dynamic Group Selection**: Allows seamless navigation between different Splitwise groups through a user-friendly dropdown
- **Responsive Design**: Ensures a consistent and accessible experience across desktop and mobile devices
- **Balance Indicator**: Color-coded balance representation (green for positive, red for negative) for instant financial insights

### Benefits

- Simplifies expense tracking for shared groups
- Provides immediate visual understanding of group financial status
- Enables quick identification of who owes what in a group
- Supports multiple groups and real-time data synchronization
- Mobile-friendly interface for on-the-go expense management

## Getting Started, Installation, and Setup

### Prerequisites

- Node.js (version 20 or higher)
- npm (comes with Node.js)

### Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/visual-splitwise.git
   cd visual-splitwise
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the project root and add the necessary configuration variables. Refer to the `.env.production` file for a template.

### Development Server

To run the application in development mode:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

To create a production build:

```bash
npm run build
```

To start the production server after building:

```bash
npm start
```

### Running Tests

#### Unit and Integration Tests
```bash
npm test
```

#### End-to-End Tests
```bash
npm run test:e2e
```

### Additional Development Tools

- **Storybook**: Run component development environment
  ```bash
  npm run storybook
  ```

- **Linting**: Check code quality
  ```bash
  npm run lint
  ```

### Database Management

- Generate database migrations:
  ```bash
  npm run db:generate
  ```

- Run database migrations:
  ```bash
  npm run db:migrate
  ```

### Environment Support

- **Node.js Version**: 20+
- **Platforms**: Works on Windows, macOS, and Linux
- **Browsers**: Modern browsers (Chrome, Firefox, Safari, Edge)

### Troubleshooting

- Ensure all environment variables are correctly set
- Check that you're using the correct Node.js version (20+)
- If encountering dependency issues, try `npm ci` instead of `npm install`

## Deployment

### Prerequisites

- Node.js (version 20 or higher)
- npm or yarn package manager

### Build Process

To build the application for production, use the following command:

```bash
npm run build
```

This command compiles the Next.js application and prepares it for deployment.

### Local Production Testing

To run the application in production mode locally:

```bash
npm run start
```

### Deployment Platforms

#### Vercel (Recommended)
The project is optimized for Vercel deployment:
- Connect your GitHub repository to Vercel
- Vercel will automatically detect the Next.js project
- Configure environment variables in the Vercel project settings
- Deploy with a single click from the main branch

#### Docker Deployment

While no Dockerfile is present in the repository, you can create a basic Dockerfile:

```dockerfile
FROM node:20-alpine AS base

# Install dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Build the application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

### Continuous Deployment

The project includes GitHub Actions workflows (see `.github/workflows/`) for:
- Continuous Integration (CI)
- Automated testing
- Release management

### Database Migrations

For production database migrations, use:

```bash
npm run db:migrate
```

### Environment Configuration

- Use `.env.production` for production-specific environment variables
- Ensure all required environment variables are set in your deployment platform

### Performance Optimization

- The build process includes optimization for production
- Use `npm run build-stats` to analyze bundle size

## Feature Highlights

### Authentication and User Management
- Secure authentication powered by Clerk
- Internationalized sign-in and sign-up flows supporting multiple locales
- User profile management capabilities

### Internationalization
- Multi-language support with dynamic locale switching
- Localized routing and content translation
- Supports at least English and French languages

### Dashboard
- Personalized user dashboard 
- Welcome screen with dynamic greeting
- Responsive and user-friendly interface

### API and Integration
- API endpoints for Splitwise group and expense management
- Integrated analytics and monitoring support
- Serverless-friendly architecture with Next.js

### Technological Features
- Fully responsive design using Tailwind CSS
- Client-side and server-side rendering
- Performance optimization and modern web best practices

## Configuration

### Environment Configuration

The project uses environment variables for configuration. Key configuration files include:

- `.env`: Contains environment-specific settings for various services
- `next.config.ts`: Provides Next.js configuration
- `drizzle.config.ts`: Database migration configuration
- `tailwind.config.ts`: Tailwind CSS styling configuration

#### Environment Variables

Critical environment variables include:
- `CONSUMER_KEY`: OAuth consumer key
- `CONSUMER_SECRET`: OAuth consumer secret
- `SPLITWISE_API_KEY`: API key for Splitwise integration
- `MONGODB_URI`: MongoDB connection string
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Clerk authentication public key
- `CLERK_SECRET_KEY`: Clerk authentication secret key
- `NEXT_PUBLIC_POSTHOG_KEY`: PostHog analytics key

#### Next.js Configuration Highlights
- Strict mode enabled
- ESLint configured for specific directories
- Sentry error tracking integrated
- Internationalization support
- Bundle analyzer optional

#### Tailwind CSS Configuration
- Dark mode support
- Custom theme extensions
- DaisyUI plugin integrated
- Content sources configured for automatic class detection

#### Database Migration
- Uses Drizzle ORM for database migrations
- Configured for PostgreSQL
- Migration files stored in `./migrations`

#### Security and Monitoring
- Sentry configuration with:
  - Source map upload
  - React component annotation
  - Tunneling route for monitoring
  - Automatic Vercel Cron Monitors

### Sensitive Data Handling
Sensitive configuration details should be added to `.env.local`, which is not tracked by version control.

## Technologies Used

### Core Technologies
- **Framework**: Next.js 15
- **Language**: TypeScript
- **Runtime**: Node.js (v20+)

### Frontend
- React 19
- React DOM
- Tailwind CSS
- DaisyUI
- React Hook Form
- Chart.js
- Recharts

### Backend and Database
- Drizzle ORM
- PostgreSQL
- MongoDB
- Electric SQL (PGLite)

### Authentication and Security
- Clerk Authentication
- Arcjet (Rate Limiting)
- Sentry (Error Monitoring)

### Internationalization
- next-intl (Internationalization)

### Development and Testing Tools
- Vitest (Unit Testing)
- Playwright (E2E Testing)
- ESLint
- Storybook
- Husky (Git Hooks)
- Commitlint

### Logging and Monitoring
- Pino (Logging)
- PostHog (Analytics)

### Deployment and CI/CD
- GitHub Actions
- Semantic Release

### Additional Tools
- Zod (Validation)
- PostCSS
- Docker (via configuration)

## Additional Notes

### Performance and Optimization

The application is built with performance in mind, leveraging modern web technologies:
- Uses Next.js server-side rendering for improved initial load times
- Implements client-side data fetching for responsive user experience
- Utilizes Recharts for efficient and lightweight data visualization

### Internationalization Support

The project includes full internationalization (i18n) capabilities:
- Supports multiple languages (currently English and French)
- Language switching functionality via `LocaleSwitcher` component
- Localization files stored in `/src/locales`

### Error Handling and Monitoring

Integrated advanced error tracking and monitoring:
- Sentry integration for real-time error reporting
- PostHog analytics for user behavior insights
- Comprehensive logging with Pino logging library

### Security Considerations

Built with security best practices:
- Clerk authentication for secure user management
- Arcjet middleware for rate limiting and protection
- Environment-specific configuration management

### Development Toolchain

Robust development ecosystem with:
- TypeScript for type safety
- Vitest and Playwright for comprehensive testing
- ESLint for code quality
- Husky for git hook management
- Storybook for component development and documentation

### Database and ORM

Flexible data management:
- Drizzle ORM for database interactions
- Support for multiple database providers (PostgreSQL, MongoDB)
- Database migration scripts included

### Deployment Readiness

Prepared for various deployment scenarios:
- Optimized production build scripts
- CI/CD workflows with GitHub Actions
- Compatibility with modern hosting platforms

## Contributing

We welcome contributions to this project! To ensure a smooth collaboration, please follow these guidelines:

### Code Contribution Process

1. Fork the repository and create your branch from `main`
2. Ensure your code follows the project's coding standards:
   - Use TypeScript for type safety
   - Follow ESLint configuration (configured with `@antfu/eslint-config`)
   - Write clear, concise, and descriptive code

### Commit Guidelines

We use conventional commits to maintain a clear and structured commit history:
- Commits must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification
- Use `npm run commit` to create commits through Commitizen, which helps format your commit messages

### Development Setup

- Minimum Node.js version: 20
- Install dependencies with `npm install`
- Run development server: `npm run dev`

### Testing

Before submitting a pull request, ensure all tests pass:
- Run unit tests: `npm test`
- Run end-to-end tests: `npm run test:e2e`
- Run type checks: `npm run check-types`
- Run linter: `npm run lint`

### Pull Request Process

1. Update the documentation if your changes require it
2. Ensure all tests and checks pass
3. Your pull request will be reviewed by the maintainers

### Code of Conduct

We are committed to providing a friendly, safe, and welcoming environment for all contributors.

## License

This project is licensed under the MIT License. 

### License Details

The MIT License is a permissive free software license that allows you to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, with the only requirement being that you include the original copyright notice and license text in any substantial portion of the software.

### Copyright

Copyright (c) 2024 Remi W.

For the full license text, see the [LICENSE](LICENSE) file in the repository.