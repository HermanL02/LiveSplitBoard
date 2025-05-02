# Visual Splitwise: Expense Tracking and Visualization Dashboard

## Project Overview

Visual Splitwise is a modern web application designed to simplify and enhance expense tracking and visualization for Splitwise groups. The application provides an intuitive, data-driven approach to understanding group financial dynamics by transforming raw expense data into clear, interactive visualizations.

### Core Purpose

The application addresses the common challenges of tracking shared expenses by:
- Offering real-time insights into group financial balances
- Providing a user-friendly interface for expense management
- Enabling quick understanding of individual financial contributions and standings within a group

### Key Features

- **Interactive Expense Visualization**: Utilizes bar charts to represent group member balances, making complex financial data easily comprehensible
- **Real-Time Splitwise Integration**: Fetches and displays current expense data directly from the Splitwise API
- **Responsive Design**: Fully responsive interface that works seamlessly across desktop and mobile devices
- **Color-Coded Balance Indicators**: Instantly recognize financial positions with green (positive) and red (negative) balance representations
- **Multi-Group Support**: Easily switch and analyze expenses across different Splitwise groups

### Benefits

- Simplifies expense tracking and understanding
- Provides immediate visual insights into group financial dynamics
- Supports multi-currency expense management
- Enhances transparency in shared financial situations
- Reduces manual calculation and potential misunderstandings about group expenses

## Getting Started, Installation, and Setup

### Prerequisites

- Node.js (version 20 or higher)
- npm (Node Package Manager)

### Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/next-js-boilerplate.git
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

- Run tests: `npm test`
- Run end-to-end tests: `npm run test:e2e`
- Lint code: `npm run lint`
- Check TypeScript types: `npm run check-types`

### Environment Configuration

1. Copy `.env.example` to `.env`
2. Fill in the required environment variables

### Database Setup

- Generate database migrations: `npm run db:generate`
- Run database migrations: `npm run db:migrate`
- Open database studio: `npm run db:studio`

### Development Tools

- Storybook (component development): `npm run storybook`
- Visual testing: `npm run test:e2e`

### Supported Platforms

This project is designed to run on:
- macOS
- Linux
- Windows
- Modern web browsers (Chrome, Firefox, Safari, Edge)

### Notes

- Ensure you have the minimum required Node.js version (20+)
- Some features may require additional configuration or environment variables

## Deployment

This application is a Next.js project that can be deployed using various platforms and methods.

### Prerequisites

- Node.js version 20 or higher
- npm or yarn package manager

### Build Process

To build the application for production, use the following command:

```bash
npm run build
```

This command generates an optimized production build of the application.

### Local Production Testing

After building, you can start the production server locally using:

```bash
npm run start
```

### Deployment Platforms

#### Vercel (Recommended)
The project is optimized for Vercel deployment:
- Automatic zero-configuration deployment for Next.js applications
- Supports serverless functions
- Built-in performance optimizations

#### Docker Deployment
While no explicit Dockerfile is present, you can create a standard Next.js Docker deployment:

1. Build the Docker image:
```bash
docker build -t my-nextjs-app .
```

2. Run the container:
```bash
docker run -p 3000:3000 my-nextjs-app
```

### Environment Configuration

Ensure all necessary environment variables are set in your deployment platform:
- Database connection strings
- External service credentials
- Monitoring and analytics keys

### Additional Deployment Notes

- The application uses Sentry for error monitoring
- Supports internationalization (i18n)
- Configured with TypeScript and various development tools
- Includes support for database migrations via `npm run db:migrate`

## Project Structure

The project follows a modern Next.js project structure with clear separation of concerns and organized directories:

### Root Directory
Contains configuration files for various tools and project settings, including:
- `package.json`: Project dependencies and scripts
- `next.config.ts`: Next.js configuration
- `tsconfig.json`: TypeScript configuration
- Various configuration files for linting, testing, and CI/CD (e.g., `eslint.config.mjs`, `playwright.config.ts`)

### `src` Directory
The primary source code directory with key subdirectories:

#### `src/app`
Contains Next.js app router structure:
- `[locale]`: Supports internationalization
- Authentication routes (`(auth)`)
- API routes for specific functionality (e.g., Splitwise integration)

#### `src/components`
Reusable React components:
- UI components like `GroupChart`, `GroupExpense`
- Utility components such as `LocaleSwitcher`
- Analytics components for tracking

#### `src/lib` and `src/libs`
Utility libraries and service integrations:
- Database connections
- Third-party service integrations (Discord, MongoDB)
- Logging and environment configuration

#### `src/models`
Data models for the application (e.g., `Expense.ts`)

#### `src/services`
Service layer implementations (e.g., `splitwise.service.ts`)

#### `src/styles`
Global CSS and styling configurations

#### `src/types`
TypeScript type definitions and declarations

#### `src/utils`
Utility functions and helper modules

#### `src/locales`
Internationalization language files

### `public` Directory
Static assets:
- Favicons
- Image assets
- Other static files

### `tests` Directory
Test suite with different types of tests:
- End-to-end (e2e) tests
- Integration tests

### `migrations` Directory
Database migration scripts and metadata

### Configuration and CI/CD
- `.github/workflows`: GitHub Actions for continuous integration
- Various configuration files for different services and tools

This structure emphasizes modularity, type safety, and separation of concerns, typical of a modern Next.js TypeScript project.

## Additional Notes

### Performance and Monitoring

The application is equipped with several performance and monitoring tools:
- Sentry integration for error tracking and performance monitoring
- PostHog for analytics and user behavior insights
- Spotlight for development-time performance profiling

### Security Considerations

- Implemented with Arcjet for rate limiting and protection
- Clerk authentication for secure user management
- Environment-specific configuration management

### Internationalization

The application supports multiple languages:
- Localization using `next-intl`
- Language files located in `/src/locales`
- Currently supports English and French

### Development Tools

Key development workflows are supported:
- Comprehensive test suites (unit, integration, and end-to-end)
- E2E testing with Playwright
- Storybook for component documentation
- Automated linting and type checking

### Database and ORM

- Uses Drizzle ORM for database interactions
- Supports migrations via `drizzle-kit`
- Compatible with multiple database providers

### Continuous Integration

- GitHub Actions workflows for:
  - Continuous Integration (CI)
  - Automated testing
  - Deployment checks
  - Internationalization (Crowdin)

### Browser and Device Support

- Responsive design optimized for mobile and desktop
- Compatible with modern browsers
- Tailwind CSS for adaptive styling

## Contributing

We welcome contributions to our project! To ensure a smooth collaboration, please follow these guidelines:

### Development Setup

Before contributing, ensure you have:
- Node.js 20.x or 22.x installed
- npm package manager

### Code Guidelines

#### Commit Messages
- We use conventional commit messages
- Follow the [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint) standard
- Example formats: `feat: add new feature`, `fix: resolve bug`, `docs: update documentation`

#### Code Style
- ESLint is used for code linting
- Run `npm run lint` to check code style
- Use `npm run lint -- --fix` to automatically fix linting issues

#### Type Checking
- TypeScript is used for type safety
- Run `npm run check-types` to verify type correctness

### Contribution Workflow

1. Fork the repository
2. Create a new branch for your feature or bugfix
3. Make your changes
4. Run tests and linting:
   - `npm run lint`
   - `npm run check-types`
   - `npm run test`
5. Commit your changes with a clear, descriptive commit message
6. Push to your fork and submit a pull request

### Testing

- Unit tests are written using Vitest
- Run tests with `npm run test`
- Storybook tests can be run with `npm run test-storybook:ci`
- Ensure all tests pass before submitting a pull request

### Continuous Integration

Our CI workflow runs on:
- Node.js 20.x and 22.x
- Validates commits
- Runs linting
- Performs type checking
- Executes unit and storybook tests
- Uploads coverage reports to Codecov

By contributing, you agree to our project's code of conduct and licensing terms.

## License

This project is licensed under the MIT License. 

#### License Details

The MIT License is a permissive open-source license that allows you to:
- Use the software commercially
- Modify the software
- Distribute the software
- Privately use the software

The only conditions are:
- Include the original license and copyright notice in any substantial portion of the software

For the full license text, see the [LICENSE](LICENSE) file in the repository.