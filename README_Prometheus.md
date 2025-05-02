# Visual Splitwise: Interactive Expense Tracking and Visualization Platform

## Project Overview

Visual Splitwise is a modern, interactive web application designed to simplify expense tracking and visualization for Splitwise groups. By transforming complex financial data into clear, intuitive graphical representations, the application helps users understand group expenses and individual balances at a glance.

### Core Purpose

The application addresses the challenges of tracking shared expenses by providing:
- Instant visual breakdown of group member balances
- Easy-to-understand expense visualizations
- Seamless integration with the Splitwise platform

### Key Features

- **Interactive Expense Visualization**: Utilizes bar charts to represent group member balances in a color-coded format
- **Multi-Group Support**: Allows switching between different Splitwise groups through a convenient dropdown
- **Real-Time Data Fetching**: Dynamically retrieves the latest expense information from the Splitwise API
- **Responsive Design**: Ensures a consistent and user-friendly experience across desktop and mobile devices
- **Internationalization**: Supports multiple languages for broader accessibility

### Benefits

- Simplifies complex expense tracking
- Provides instant financial insights
- Enhances group expense management
- Improves transparency in shared financial activities

## Getting Started, Installation, and Setup

### Prerequisites

- Node.js 20 or higher
- npm (comes with Node.js)

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

### Running Tests

#### Unit and Integration Tests
```bash
npm test
```

#### End-to-End Tests
```bash
npm run test:e2e
```

### Production Build

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

### Database Operations

#### Generate Database Schema
```bash
npm run db:generate
```

#### Run Database Migrations
```bash
npm run db:migrate
```

### Additional Development Tools

#### Linting
```bash
# Check for linting errors
npm run lint

# Auto-fix linting issues
npm run lint:fix
```

#### Type Checking
```bash
npm run check-types
```

### Optional Development Features

#### Storybook
For component development and documentation:
```bash
# Start Storybook
npm run storybook

# Build Storybook
npm run storybook:build
```

## Feature Highlights

### Expense Management and Visualization
- **Group Expense Tracking**: Ability to manage and track expenses across different groups
- **Visual Expense Breakdown**: Provides a visual chart representation of group expenses
- **Group Selection**: Interactive dropdown to switch between different expense groups

### Authentication and User Management
- **Secure Sign-In**: Integrated authentication system powered by Clerk
- **Multi-Language Support**: Authentication and dashboard interfaces available in multiple languages (confirmed by locales directory)
- **User Profile Management**: Accessible user profile customization options

### Internationalization
- **Dynamic Language Switching**: Users can change application language on-the-fly
- **Localized Content**: Translations available for dashboard, authentication, and other key sections

### Collaborative Financial Tracking
- **Multi-Member Group Support**: Expense groups can include multiple members
- **Balance Tracking**: Ability to track individual member balances within groups

## Project Structure

The project follows a standard Next.js project structure with several key directories and configuration files:

### Root Directory
- Configuration files for various tools and services:
  - `package.json`: Project dependencies and scripts
  - `next.config.ts`: Next.js configuration
  - `tsconfig.json`: TypeScript configuration
  - `.env` and `.env.production`: Environment configuration files

### Source Code (`/src`)
- `app/`: Next.js app router structure
  - `[locale]/`: Localization-aware routes
    - `(auth)/`: Authentication-related routes
    - `api/`: API route handlers
- `components/`: Reusable React components
- `lib/`: Library and utility functions
- `libs/`: Additional library utilities
- `locales/`: Internationalization translation files
- `models/`: Data models
- `services/`: Service layer for external integrations
- `styles/`: Global CSS
- `templates/`: Component templates and stories
- `types/`: TypeScript type definitions
- `utils/`: Utility functions and helpers
- `validations/`: Input validation schemas

### Testing
- `tests/`: Test suites
  - `e2e/`: End-to-end tests
  - `integration/`: Integration tests

### Public Assets (`/public`)
- Static files and images
- Favicon and touch icons

### Configuration and CI/CD
- `.github/workflows/`: GitHub Actions for CI/CD
- `.husky/`: Git hook configurations
- `.vscode/`: VS Code workspace settings

### Database
- `migrations/`: Database migration scripts

### Build and Development
- Configuration files for various tools:
  - Tailwind CSS
  - ESLint
  - Playwright
  - Vitest
  - Storybook

## Additional Notes

### Performance and Scalability

The application is built with modern web technologies to ensure high performance and scalability:
- Utilizes Next.js 15 for server-side rendering and optimized performance
- Implements efficient data fetching from external APIs
- Supports internationalization with `next-intl`

### Security Considerations

Several security and quality control mechanisms are integrated:
- Authentication managed through Clerk
- Rate limiting implemented with Arcjet
- Error tracking and monitoring with Sentry
- Logging configured with Pino for comprehensive application insights

### Monitoring and Analytics

Advanced monitoring capabilities are built into the application:
- PostHog integration for product analytics
- Comprehensive error tracking and performance monitoring
- Extensive logging for debugging and system health assessment

### Development Toolchain

The project includes a robust development environment:
- Committed to code quality with ESLint and TypeScript
- Automated testing with Vitest and Playwright
- Storybook for component development and testing
- Semantic versioning and automated release management

### Extensibility

The application is designed with modularity and future expansion in mind:
- Modular architecture supporting easy feature additions
- TypeScript for type safety and improved developer experience
- Flexible configuration options for different deployment scenarios

### Deployment Flexibility

The project supports multiple deployment strategies:
- Docker-compatible architecture
- Supports various environment configurations
- CI/CD workflows with GitHub Actions
- Compatible with modern cloud platforms and hosting services

### Internationalization

Built with global users in mind:
- Supports multiple languages
- Locale switching capabilities
- Internationalized routing with `next-intl`

## Contributing

The project uses several established practices and tools that contributors should be aware of:

### Commit Message Guidelines

We follow the Conventional Commits specification:
- Use descriptive and structured commit messages
- Format: `<type>(optional scope): <description>`
- Example types include `feat:`, `fix:`, `docs:`, `chore:`, etc.
- Use `npm run commit` to help create properly formatted commit messages

### Code Quality and Linting

Before submitting a pull request, ensure your code meets our quality standards:
- Run `npm run lint` to check for linting issues
- Run `npm run lint:fix` to automatically fix some linting problems
- Ensure TypeScript types are correct by running `npm run check-types`

### Testing

Contribute high-quality code by running tests:
- Unit tests: Run `npm test`
- End-to-end tests: Use `npm run test:e2e`
- Storybook component tests: `npm run test-storybook:ci`

### Development Requirements

- Node.js version 20 or higher
- Follow the existing code style and patterns in the project

### Pull Request Process

1. Fork the repository
2. Create a new branch for your feature or bugfix
3. Make your changes, ensuring tests and linting pass
4. Commit your changes using conventional commit messages
5. Push to your fork and submit a pull request

### Code of Conduct

Be respectful, inclusive, and constructive in all interactions. Collaborate professionally and help maintain a positive community environment.

## License

This project is licensed under the MIT License. The full license text is available in the [LICENSE](LICENSE) file.

#### Key Permissions
- Commercial use
- Modification
- Distribution
- Private use

#### Conditions
- License and copyright notice must be included
- Software is provided as-is with no warranties

For complete details, please refer to the full [LICENSE](LICENSE) file.