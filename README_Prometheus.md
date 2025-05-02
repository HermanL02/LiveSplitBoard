# Visual Splitwise: Interactive Expense Tracking and Financial Visualization

## Project Overview

Visual Splitwise is a modern, interactive web application designed to simplify expense tracking and visualization for Splitwise groups. The application provides a user-friendly solution for individuals and groups to understand their financial interactions and balances at a glance.

### Key Purpose

The primary goal of Visual Splitwise is to transform complex expense data from Splitwise into clear, actionable insights. By leveraging interactive data visualization, the application helps users:

- Quickly understand group financial dynamics
- Identify individual member balances
- Track expenses across different groups

### Core Features

- **Interactive Expense Visualization**: Utilizes dynamic bar charts to represent group member balances
- **Real-time Splitwise Integration**: Fetches and displays up-to-date expense information directly from the Splitwise API
- **Responsive Design**: Ensures a seamless experience across desktop and mobile devices
- **Intuitive Balance Indicators**: Color-coded balance representation (green for positive, red for negative)
- **Multi-group Support**: Easy navigation between different Splitwise groups

### Benefits

- Simplifies complex expense tracking
- Provides immediate financial insights
- Enhances transparency in group spending
- Supports multiple currencies
- User-friendly interface with minimal learning curve

## Getting Started, Installation, and Setup

### Prerequisites

- Node.js (version 20 or higher)
- npm (included with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/next-js-boilerplate.git
   cd next-js-boilerplate
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

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

### Running in Production Mode

After building the application, start the production server:

```bash
npm start
```

### Additional Commands

- Run tests:
  ```bash
  npm test          # Unit tests
  npm run test:e2e  # End-to-end tests
  ```

- Lint the code:
  ```bash
  npm run lint      # Check for linting errors
  npm run lint:fix  # Automatically fix linting issues
  ```

### Environment Configuration

1. Copy `.env.example` to `.env`
2. Fill in the necessary environment variables

### Database Migrations

- Generate database migrations:
  ```bash
  npm run db:generate
  ```

- Run database migrations:
  ```bash
  npm run db:migrate
  ```

### Notes

- This project requires Node.js 20 or later
- Ensure all dependencies are installed before running any scripts
- For production deployment, set appropriate environment variables

## Deployment

### Prerequisites

- Node.js version 20 or higher
- npm (Node Package Manager)

### Build Process

To build the application for production, use the following command:

```bash
npm run build
```

This command compiles the Next.js application and prepares it for deployment.

### Running in Production

After building, start the production server with:

```bash
npm start
```

### Deployment Platforms

#### Vercel (Recommended)
The project is optimized for Vercel deployment:
- Automatic zero-configuration deployments
- Built-in performance optimizations
- Seamless integration with Next.js

#### Docker
To containerize the application:
1. Ensure Docker is installed
2. Build the Docker image
3. Run the container, mapping the appropriate ports

#### Supported Environments
- Vercel
- Netlify
- Standard Node.js hosting platforms

### Environment Configuration

- Use `.env.production` for production-specific environment variables
- Ensure all required environment variables are set before deployment

### Additional Deployment Notes

- The application uses Sentry for error monitoring
- Automatic source map generation and upload is configured
- Supports internationalization (i18n) out of the box

### Database Migrations

Before deployment, run database migrations:

```bash
npm run db:migrate
```

## Feature Highlights

### Authentication
- Robust authentication system powered by Clerk
- Localized sign-in and sign-up experiences
- Supports multiple locales for international users

### Internationalization
- Full multi-language support using `next-intl`
- Easy locale switching
- Localized routing and metadata

### Dashboard
- Personalized user dashboard
- Localized content and metadata
- Responsive design with consistent styling

### Monitoring and Analytics
- Integrated monitoring with Sentry
- Analytics tracking via PostHog
- Performance instrumentation

### Development Tooling
- Comprehensive testing suite (unit, e2e, integration)
- Storybook component documentation
- Automated linting and type checking

### Security Features
- Rate limiting with Arcjet
- Environment configuration validation
- Secure logging mechanisms

## Configuration

The project uses environment variables for configuration, which can be set in the `.env` file or environment-specific configuration files.

### Environment Variables

#### Server-Side Configuration
- `ARCJET_KEY`: Optional security key for Arcjet (starts with 'ajkey_')
- `CLERK_SECRET_KEY`: Required authentication secret key for Clerk
- `DATABASE_URL`: Optional database connection URL
- `LOGTAIL_SOURCE_TOKEN`: Optional logging source token

#### Client-Side Configuration
- `NEXT_PUBLIC_APP_URL`: Optional application URL
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Required Clerk publishable key
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL`: Required sign-in URL (default: `/sign-in`)
- `NEXT_PUBLIC_POSTHOG_KEY`: Optional PostHog analytics key
- `NEXT_PUBLIC_POSTHOG_HOST`: Optional PostHog host URL (default: `https://us.i.posthog.com`)

### Build and Runtime Configuration

#### Next.js Configuration
- Strict mode is enabled
- ESLint is configured to lint files in the project root
- Powered by header is disabled
- External package support for `@electric-sql/pglite`

#### Sentry Configuration
- Source map uploads are configured
- React component annotation is enabled
- Monitoring tunnel route set to `/monitoring`
- Source maps are hidden from client bundles
- Automatic Vercel Cron Monitors instrumentation

### Development Environment
Supports three runtime environments:
- `test`
- `development`
- `production`

### Security and Sensitive Data
Sensitive configuration should be added to `.env.local` to prevent tracking in version control.

## Technologies Used

### Frontend
- **Framework**: Next.js 15
- **Language**: TypeScript
- **UI Components**: React 19
- **Styling**: 
  - Tailwind CSS
  - DaisyUI

### Backend
- **Database**:
  - MongoDB
  - PostgreSQL
  - Drizzle ORM

### Authentication
- Clerk Authentication

### Internationalization
- next-intl

### State Management & Forms
- React Hook Form
- Zod (Validation)

### Monitoring & Observability
- Sentry (Error Tracking)
- PostHog (Analytics)
- Pino (Logging)

### Testing
- Vitest (Unit Testing)
- Playwright (E2E Testing)
- Storybook (Component Testing)

### Development Tools
- ESLint
- TypeScript
- Husky (Git Hooks)
- Commitlint
- Semantic Release

### Charting & Visualization
- Chart.js
- Recharts

### Deployment & Infrastructure
- Vercel (recommended hosting)

### Security
- Arcjet (Rate Limiting & Security)

## Additional Notes

### Performance and Monitoring

The application is equipped with several advanced monitoring and performance tools:

- **Sentry Integration**: Error tracking and monitoring to capture and diagnose runtime issues
- **PostHog Analytics**: User behavior tracking and product analytics
- **Arcjet Protection**: Request rate limiting and security middleware

### Internationalization

The project supports multiple languages with built-in internationalization:

- Current language support:
  - English
  - French
- Language switching available through built-in locale switcher
- Translations managed in `/src/locales` directory

### Security Considerations

- Authentication handled via Clerk
- Environment-specific configuration management
- Rate limiting implemented through Arcjet middleware

### Development Toolchain

- Supports Node.js 20 and above
- Comprehensive development scripts for various tasks:
  - Testing (unit and e2e)
  - Linting
  - Type checking
  - Database migrations
  - Storybook component development

### Deployment Preparation

- Configured with production-ready build optimizations
- Supports environment-specific configurations
- Database migration scripts included
- Semantic versioning and release management via GitHub Actions

## Contributing

We welcome contributions to Visual Splitwise! Whether you're fixing bugs, adding features, or improving documentation, your help is appreciated.

### Getting Started

1. Fork the repository and create your branch from `main`.
2. Ensure you have the latest Node.js version (20.x or 22.x) installed.
3. Install dependencies with `npm ci`.

### Contribution Guidelines

#### Code Contributions

- Follow the project's code style and conventions.
- Ensure all tests pass by running `npm run test`.
- Run linters with `npm run lint`.
- Verify type checking with `npm run check-types`.

#### Commit Messages

We use conventional commit messages. Please structure your commits following the [Conventional Commits](https://www.conventionalcommits.org/) specification.

Example commit message formats:
- `feat: add new visualization feature`
- `fix: resolve API data parsing issue`
- `docs: update README with new instructions`

#### Pull Request Process

1. Update the README or documentation with details of changes if applicable.
2. Ensure your code passes all CI checks.
3. Provide a clear description of your changes in the pull request.

#### Running Tests

- Unit Tests: `npm run test`
- Type Checking: `npm run check-types`
- Linting: `npm run lint`
- Storybook Tests: `npm run test-storybook`

### Code of Conduct

Be respectful, inclusive, and considerate of others. Harassment and discrimination are not tolerated.

### Reporting Issues

If you find a bug or have a suggestion, please open an issue on GitHub with a clear title and detailed description.

## License

The project is licensed under the [MIT License](LICENSE). 

#### Key License Terms
- You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software
- The only requirement is to include the original copyright notice in all copies or substantial portions of the software
- The software is provided "as is" without warranty of any kind

##### Copyright
Copyright (c) 2024 Remi W.