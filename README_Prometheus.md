# Visual Splitwise: A Comprehensive Expense Tracking and Visualization Web Application

## Project Overview

Visual Splitwise is an innovative web application designed to simplify expense tracking and visualization for group finances. Leveraging the Splitwise API, this tool transforms complex financial data into clear, intuitive visual representations.

### Core Purpose

The application solves the common challenge of tracking shared expenses across multiple groups by providing:
- Real-time visualization of group member balances
- Interactive and user-friendly expense tracking interface
- Quick insights into financial dynamics within groups

### Key Features

- **Interactive Balance Visualization**: Generates dynamic bar charts that illustrate individual member balances
- **Multi-Group Support**: Allows seamless navigation between different Splitwise groups
- **Real-Time Data Fetching**: Automatically retrieves and updates expense information from the Splitwise API
- **Responsive Design**: Fully functional across desktop and mobile devices
- **Color-Coded Balance Indicators**: Instantly recognizable color schemes (green for positive, red for negative balances)

### Benefits

- Eliminates manual expense calculations
- Provides instant financial transparency
- Supports easy group financial management
- Enhances understanding of shared expenses
- Reduces potential conflicts through clear visualizations

## Additional Notes

### Performance and Optimization

The application is built with performance in mind, leveraging modern web technologies and best practices:
- Server-side rendering with Next.js for improved initial load times
- Efficient data fetching using optimized API endpoints
- Responsive design that adapts to various screen sizes

### Monitoring and Error Tracking

Integrated observability tools help maintain application reliability:
- Sentry for error monitoring and performance tracking
- PostHog for analytics and user behavior insights

### Internationalization

The project supports multiple languages:
- Implemented using `next-intl` for seamless localization
- Currently supports English and French
- Easy to extend with additional language files in `/src/locales`

### Security Considerations

Several security measures are implemented:
- Authentication handled by Clerk
- Rate limiting with Arcjet to prevent abuse
- Environment-specific configuration management

### Development Workflow

The project includes robust developer tooling:
- Comprehensive test suite (unit, integration, and E2E tests)
- Automated linting and type checking
- Husky git hooks for commit message validation
- Storybook for component development and documentation

### Database and Data Management

- Uses Drizzle ORM for database interactions
- Supports multiple database types (PostgreSQL, MongoDB)
- Includes migration scripts and database generation tools

### Continuous Integration and Deployment

Automated workflows are set up for:
- Continuous integration testing
- Automated releases
- Code quality checks
- Dependency updates

### Third-Party Integrations

Key integrations include:
- Splitwise API for expense data
- Clerk for authentication
- Sentry for error tracking
- PostHog for analytics

### Extensibility

The project is designed with modularity in mind:
- Modular component structure
- Easy to add new features and visualizations
- Flexible configuration options

## Contributing

We welcome contributions to our project! To ensure a smooth collaboration, please follow these guidelines:

### Code Contribution Process

1. Fork the repository and create your branch from `main`
2. Ensure your code follows our project's coding standards:
   - Run `npm run lint` to check code style
   - Run `npm run check-types` for TypeScript type checking
   - Add or update tests for any changes you make

### Commit Guidelines

- We use conventional commit messages
- Commits must follow the `@commitlint/config-conventional` standard
- Each commit will be automatically validated during pull request checks

### Pull Request Requirements

- All pull requests must target the `main` branch
- Ensure all CI checks pass:
  - Linting
  - Type checking
  - Unit tests
  - Storybook tests
- Provide a clear description of your changes
- Include relevant tests for new functionality

### Testing

- Run unit tests with: `npm run test`
- Run test coverage with: `npm run test -- --coverage`
- Run Storybook tests with: `npm run test-storybook`

### Development Setup

- Recommended Node.js versions: 20.x or 22.x
- Install dependencies with `npm ci`
- Build the project with `npm run build`

### Code of Conduct

Please be respectful and collaborative. We aim to maintain a welcoming environment for all contributors.

## License

This project is licensed under the MIT License. A copy of the full license text is available in the [LICENSE](LICENSE) file in the repository root.

#### Key License Terms
- You can use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software
- The only requirement is to include the original copyright notice in all copies or substantial portions of the software
- The software is provided "as is" without warranty of any kind

#### Copyright
Copyright (c) 2024 Remi W.