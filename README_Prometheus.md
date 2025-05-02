# Visual Splitwise: Transforming Group Expense Tracking with Intelligent Visualization

## Project Overview

Visual Splitwise is a sophisticated web application designed to simplify expense tracking and visualization for group finances. Built with modern web technologies, the application provides an intuitive and interactive way to understand and manage shared expenses from Splitwise groups.

### Core Purpose

The primary goal of Visual Splitwise is to transform complex expense data into clear, actionable insights. By fetching real-time data from the Splitwise API, the application helps users:
- Quickly understand group financial dynamics
- Visualize individual member balances
- Track expenses across different groups
- Provide an intuitive interface for financial transparency

### Key Features

- **Interactive Data Visualization**: Utilizes dynamic bar charts to represent group member balances
- **Real-time Expense Tracking**: Seamlessly fetches the latest financial data from Splitwise
- **Responsive Design**: Fully accessible across desktop and mobile devices
- **Intelligent Balance Indicators**: Color-coded balance representation (green for positive, red for negative)
- **Multi-group Support**: Easy navigation and selection between different Splitwise groups

### Benefits

- Simplifies complex financial tracking
- Provides instant visual understanding of group expenses
- Enables quick financial decision-making
- Supports multiple languages and locales
- Built with modern, performant web technologies

## Getting Started, Installation, and Setup

### Prerequisites

- Node.js (version 20 or higher)
- npm (Node Package Manager)

### Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/visual-splitwise.git
   cd visual-splitwise
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the project root and add the following required variables:
   ```
   NEXT_PUBLIC_SPLITWISE_API_KEY=your_splitwise_api_key
   ```

### Development Mode

To run the application in development mode:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Production Build

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

### Additional Commands

- Run tests: `npm test`
- Run end-to-end tests: `npm run test:e2e`
- Lint code: `npm run lint`
- Check TypeScript types: `npm run check-types`

### Environment Configuration

The project uses environment-specific configurations:
- `.env`: Default environment variables
- `.env.production`: Production-specific environment variables

### Database Migrations

If you're using database migrations:
- Generate migrations: `npm run db:generate`
- Run migrations: `npm run db:migrate`

### Supported Platforms

- macOS
- Linux
- Windows (Windows Subsystem for Linux recommended)

### Notes

- Ensure you have a Splitwise API key for full functionality
- The application requires an active internet connection to fetch Splitwise data

## Deployment

The application is built using Next.js and can be deployed across multiple platforms. Follow the deployment steps below based on your preferred hosting environment.

### Build and Production Preparation

Before deployment, ensure you are using Node.js version 20 or higher. Build the application using the following command:

```bash
npm run build
```

This command compiles the TypeScript code, prepares the Next.js production build, and optimizes the application for performance.

### Local Production Server

To run the application in production mode locally:

```bash
npm start
```

### Platform-Specific Deployment

#### Vercel (Recommended)

This Next.js application is optimized for Vercel deployment:
- Connect your GitHub repository to Vercel
- Vercel will automatically detect the Next.js configuration
- Set environment variables in the Vercel project settings
- Automatic deployments will trigger on each push to the main branch

#### Docker Deployment

Create a `Dockerfile` in your project root:

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

Build and run the Docker container:

```bash
docker build -t visual-splitwise .
docker run -p 3000:3000 visual-splitwise
```

### Deployment Considerations

- Always use the production `.env.production` file for sensitive configurations
- Ensure all required environment variables are set in your deployment platform
- The application requires Node.js 20+ runtime

### Continuous Deployment

The project includes a GitHub Actions workflow (`.github/workflows/CI.yml`) that:
- Builds the application on Node.js 20 and 22
- Runs linting and type checks
- Executes unit and storybook tests
- Uploads coverage reports to Codecov

## Feature Highlights

### Authentication and User Management
- Seamless user authentication powered by Clerk
- Localized sign-in and sign-up pages supporting multiple languages
- Comprehensive user profile management with customizable options

### Internationalization
- Multi-language support with dynamic locale switching
- Localized routing and metadata generation
- Translations available for different application sections

### Dashboard and User Experience
- Personalized dashboard with welcome components
- Responsive design with clean, modern UI
- Integrated analytics and monitoring

### Advanced Routing
- Dynamic locale-based routing
- Nested authentication layouts
- Flexible page and API route configurations

### Performance and Integration
- Next.js server-side rendering
- PostHog analytics integration
- Middleware support for advanced routing and authentication

## Configuration

The project supports multiple configuration options through environment variables and configuration files. Configuration can be managed using different files for various environments.

### Environment Variables

Configuration is primarily managed through `.env` files with support for development and production environments:

- `.env`: Development environment configuration
- `.env.production`: Production environment configuration

#### Key Configurable Environment Variables

| Variable | Description | Example/Notes |
|----------|-------------|---------------|
| `CONSUMER_KEY` | OAuth consumer key | Must be configured for external API access |
| `CONSUMER_SECRET` | OAuth consumer secret | Sensitive credential |
| `MONGODB_URI` | MongoDB connection string | Required for database connectivity |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk authentication public key | Provided by Clerk authentication service |
| `CLERK_SECRET_KEY` | Clerk authentication secret key | Sensitive credential |
| `NEXT_PUBLIC_POSTHOG_KEY` | PostHog analytics key | Optional analytics configuration |
| `DISCORD_WEBHOOK_URL` | Discord webhook URL | Optional integration |
| `SPLITWISE_API_KEY` | Splitwise API key | Required for Splitwise integration |

### Configuration Files

#### Next.js Configuration

The project uses `next.config.ts` for advanced configuration with the following key settings:

- Bundle analyzer can be enabled via `ANALYZE` environment variable
- ESLint directories configured
- Powered by header disabled
- React Strict Mode enabled
- Sentry error monitoring configured
  - Organization and project names customizable
  - Source map handling
  - Automatic React component annotation
  - Tunnel route for monitoring

#### Additional Configuration Files

- `drizzle.config.ts`: Database migration configuration
- `eslint.config.mjs`: ESLint code quality rules
- `playwright.config.ts`: End-to-end testing configuration
- `sentry.client.config.ts`: Client-side Sentry configuration
- `.vscode/settings.json`: VS Code workspace settings

### Security and Sensitive Data

Sensitive configuration data should be stored in `.local` files (e.g., `.env.local`, `.env.production.local`) which are git-ignored to prevent accidental exposure of credentials.

## Project Structure

The project follows a structured Next.js application layout with clear separation of concerns:

### Root Configuration
- Configuration files are located in the project root, including:
  - `next.config.ts`: Next.js configuration
  - `tsconfig.json`: TypeScript configuration
  - `tailwind.config.ts`: Tailwind CSS configuration
  - `drizzle.config.ts`: Database migration configuration
  - Various workflow and development tool configs (`.github/workflows`, `.husky`, `.vscode`)

### Source Code Structure
- `src/`: Primary source code directory
  - `app/`: Next.js app router pages and route handlers
    - `[locale]/`: Internationalization-aware routing
      - `(auth)/`: Authentication-related routes (sign-in, dashboard)
      - `api/`: API route handlers (e.g., Splitwise group and expense endpoints)
  
  - `components/`: Reusable React components
    - UI components like `GroupChart`, `GroupExpense`, `LocaleSwitcher`
    - Analytics components for tracking
  
  - `lib/` and `libs/`: Utility libraries and services
    - Database connections
    - External service integrations (Discord, Arcjet)
    - Logging and environment configuration
  
  - `locales/`: Internationalization language files
    - Currently supports English and French translations
  
  - `models/`: Data models (e.g., `Expense`)
  
  - `services/`: Business logic services (e.g., `splitwise.service.ts`)
  
  - `styles/`: Global CSS styles
  
  - `templates/`: Component templates with stories and tests
  
  - `types/`: TypeScript type definitions
  
  - `utils/`: Utility functions and helpers
  
  - `validations/`: Input validation schemas

### Testing
- `tests/`: Test suites
  - `e2e/`: End-to-end tests
  - `integration/`: Integration tests

### Public Assets
- `public/`: Static assets
  - `assets/images/`: Project images and logos
  - Favicon and touch icons

### Migrations
- `migrations/`: Database migration scripts and metadata

### Continuous Integration and Deployment
- `.github/workflows/`: GitHub Actions for CI/CD
  - Workflows for continuous integration, releases, and other automation

## Technologies Used

### Frontend Framework
- Next.js 15
- React 19
- TypeScript

### UI and Styling
- Tailwind CSS
- DaisyUI
- Storybook (for component development)

### State Management and Forms
- React Hook Form
- Zod (validation)

### Authentication
- Clerk Authentication

### Internationalization
- next-intl (Internationalization)

### Database and ORM
- Drizzle ORM
- PostgreSQL
- MongoDB
- Electric SQL (PGLite)

### Charting and Data Visualization
- Chart.js
- Recharts

### Monitoring and Logging
- Sentry (Error tracking)
- Pino (Logging)
- PostHog (Analytics)

### Testing
- Vitest (Unit testing)
- Playwright (E2E testing)
- Testing Library

### Development Tools
- ESLint
- Husky (Git hooks)
- Commitlint
- TypeScript
- Semantic Release

### Security
- Arcjet (Rate limiting and security)

### Deployment and CI/CD
- GitHub Actions
- Checkly (Monitoring)

### Additional Libraries
- Spotlight
- Discord Integration

## Additional Notes

### Performance Considerations

The application uses optimized data fetching and visualization techniques to ensure smooth performance, especially when handling multiple Splitwise groups and expenses.

### Internationalization Support

The project includes built-in internationalization support:
- Locale-aware routing
- Language switching capability
- Localization files for English (`en.json`) and French (`fr.json`)

### Error Handling and Logging

Robust error handling is implemented through:
- Middleware-based error catching
- Global error page for unhandled exceptions
- Integrated logging mechanisms

### Security Features

Several security measures are integrated:
- Rate limiting via Arcjet
- Environment-specific configuration management
- Secure authentication flows using Clerk
- CSRF protection

### Monitoring and Analytics

The application includes integrations for:
- PostHog analytics
- Performance instrumentation
- Error tracking with Sentry

### Development Tooling

The project leverages modern development tooling:
- ESLint for code quality
- Vitest for unit and integration testing
- Playwright for end-to-end testing
- GitHub Actions for continuous integration
- Husky for git commit hooks

### Deployment Considerations

Prepared for various deployment scenarios with:
- Production environment configuration
- Docker-friendly setup
- Optimized build configurations
- Continuous deployment workflows

### External Service Integrations

Key third-party service integrations include:
- Splitwise API for expense data
- Clerk for authentication
- Sentry for error tracking
- PostHog for analytics

## Contributing

We welcome contributions to this project! To ensure a smooth collaboration, please follow these guidelines:

### Prerequisites

- Node.js version 20 or higher
- Recommended using npm for package management

### Development Setup

1. Fork the repository and clone it locally
2. Install dependencies:
   ```bash
   npm install
   ```

### Contribution Process

#### Code Standards

- We use ESLint for code linting
- TypeScript is the primary language
- Run `npm run lint:fix` to automatically fix linting issues
- Ensure all type checks pass with `npm run check-types`

#### Commit Guidelines

- We follow the Conventional Commits specification
- Use `npm run commit` to create commits through Commitizen
- Commit messages should be clear and descriptive

#### Testing

- Run unit tests with `npm test`
- End-to-end tests can be executed with `npm run test:e2e`
- Ensure all tests pass before submitting a pull request

#### Pull Request Process

1. Create a branch for your changes
2. Make your modifications
3. Ensure all tests and linting checks pass
4. Submit a pull request with a clear description of changes

#### Code Review

- All submissions require review
- Be prepared to make iterations based on feedback
- Maintain a respectful and collaborative attitude

### Additional Notes

- The project uses Husky for pre-commit hooks
- Storybook is available for component development and testing (`npm run storybook`)

Thank you for contributing to our project!

## License

This project is licensed under the MIT License. 

### Full License Details

The project is released under the MIT License, which is a permissive free software license that allows for reuse within proprietary software provided that the license is distributed with the licensed software.

For the complete license text, please refer to the [LICENSE](LICENSE) file in the repository.

#### Key Permissions
- Commercial use
- Modification
- Distribution
- Private use

#### Key Limitations
- No Liability
- No Warranty

© 2024 Remi W.