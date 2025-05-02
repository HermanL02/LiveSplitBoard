# Visual Splitwise: Advanced Expense Visualization and Group Financial Insights

## Project Overview

Visual Splitwise is a modern, intuitive web application designed to help users better understand and manage group expenses from Splitwise. Leveraging advanced data visualization techniques, the application transforms complex expense data into clear, actionable insights.

### Core Purpose

The primary goal of Visual Splitwise is to provide a comprehensive and user-friendly way to analyze group financial dynamics. By integrating directly with the Splitwise API, the application offers real-time insights into group expenses and member balances.

### Key Features

- **Interactive Expense Visualization**: Generates dynamic bar charts that represent group member balances, making financial relationships instantly comprehensible
- **Real-Time Data Synchronization**: Fetches the latest expense data directly from the Splitwise API, ensuring up-to-date financial tracking
- **Responsive Design**: Delivers a seamless user experience across devices, from desktop to mobile
- **Intuitive Balance Representation**: Uses color-coded indicators to quickly distinguish positive and negative financial balances
- **Multi-Group Support**: Allows easy navigation and comparison between different Splitwise groups

### Benefits

- Simplifies complex expense tracking
- Enhances financial transparency within groups
- Provides instant visual understanding of shared expenses
- Supports multiple currencies and group configurations
- Reduces manual calculation and potential misunderstandings about shared costs

## Getting Started, Installation, and Setup

### Prerequisites

- Node.js (version 20 or higher)
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

### Running in Production Mode

After building the application, start the production server:

```bash
npm start
```

### Additional Scripts

- `npm run lint`: Run ESLint to check code quality
- `npm run test`: Run unit tests
- `npm run test:e2e`: Run end-to-end tests
- `npm run db:generate`: Generate database migrations
- `npm run db:migrate`: Run database migrations

### Environment Configuration

1. Copy `.env.example` to `.env`
2. Fill in the required environment variables

### Key Dependencies

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Drizzle ORM
- Clerk for authentication
- Internationalization with next-intl

### Database

The project supports multiple databases. Database-related scripts are available:
- `npm run db:generate`: Generate database schema
- `npm run db:migrate`: Apply migrations
- `npm run db:studio`: Open database studio (for development)

### Recommended Development Tools

- VS Code with recommended extensions (see `.vscode/extensions.json`)
- Node.js version manager (recommended)

## Feature Highlights

#### User Authentication
- Secure sign-in and sign-up functionality powered by Clerk authentication
- Localized authentication pages supporting multiple languages
- Customizable authentication paths with internationalization support

#### Dashboard 
- Personalized user dashboard with welcome components
- Internationalized dashboard with localized metadata and content

#### Internationalization
- Multi-language support with dynamic locale switching
- Comprehensive translation management across the application
- Localized routing and metadata generation

#### Expense Tracking (Potential Feature)
- Integration hints for Splitwise-like expense tracking functionality
- API endpoints for managing group expenses and financial data

## Additional Notes

### Performance Monitoring

The project incorporates advanced performance and error tracking tools:
- Sentry for error monitoring and performance insights
- PostHog for analytics and user behavior tracking
- Spotlight for development-time performance profiling

### Security Considerations

The application implements several security measures:
- Clerk authentication for secure user management
- Arcjet protection for rate limiting and security hardening
- Environment-specific configuration management

### Internationalization

The project supports multiple languages through `next-intl`:
- Current language support includes English and French
- Locale-based routing and content rendering
- Easy extension to additional languages via JSON translation files

### Development Toolchain

Key development tools and practices include:
- Comprehensive linting with ESLint
- Automated testing (Vitest for unit tests, Playwright for end-to-end testing)
- Storybook for component development and documentation
- Husky for git hook management
- Commitlint for consistent commit message formatting

### Database and ORM

- Utilizes Drizzle ORM for database interactions
- Supports multiple database technologies (PostgreSQL, MongoDB)
- Includes migration and database studio capabilities

### Deployment Considerations

- Node.js 20+ required
- Built with Next.js 15 and React 19
- Optimized for various hosting platforms
- CI/CD workflows configured with GitHub Actions

## Contributing

We welcome contributions to the project! To ensure a smooth collaboration, please follow these guidelines:

### Commit Convention

We use conventional commits. Please format your commit messages according to the [Conventional Commits](https://www.conventionalcommits.org/) specification. This helps maintain a clear and consistent commit history.

### Code Quality

#### Linting
- All code is linted using ESLint
- Run `npm run lint` to check for linting issues
- Linting will automatically run on pre-commit and during CI

#### Type Checking
- TypeScript type checking is mandatory
- Run `npm run check-types` to verify type correctness
- Type checking is performed during CI

### Testing

#### Running Tests
- Execute unit tests with `npm test`
- Storybook tests can be run using `npm run test-storybook`
- All tests must pass before merging

### Pull Request Process
1. Ensure all tests pass and linting checks are successful
2. Update documentation as needed
3. Pull requests are validated against the main branch

### Development Environment
- Node.js version 20.x or 22.x is recommended
- Use `npm ci` for installing dependencies to ensure consistent installations

### Reporting Issues
- Use GitHub Issues to report bugs or suggest improvements
- Provide detailed information and steps to reproduce for bug reports

### Code of Conduct
Respectful and constructive communication is expected from all contributors.

## License

This project is licensed under the MIT License. 

For the full license text, see the [LICENSE](LICENSE) file in the repository.

### Key License Terms
- You can use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software
- The only requirement is to include the original copyright notice in all copies or substantial portions of the software
- The software is provided "as is" without any warranty

#### Copyright
Copyright (c) 2024 Remi W.