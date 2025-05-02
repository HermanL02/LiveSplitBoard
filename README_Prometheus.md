# Visual Splitwise: Transforming Group Expense Tracking with Interactive Visualization

## Project Overview

Visual Splitwise is an innovative web application designed to simplify and enhance expense tracking and group financial management. By leveraging the Splitwise API, this application provides an intuitive, visual approach to understanding group expenses and individual balances.

### Core Purpose

The primary goal of Visual Splitwise is to transform complex expense data into clear, actionable insights. It addresses the common challenges of tracking shared expenses by offering:

- Real-time visualization of group financial dynamics
- Easy-to-understand balance representations
- Seamless navigation between different expense groups

### Key Features

#### Expense Visualization
- Interactive bar chart displaying member balances
- Color-coded balance indicators for quick comprehension (green for positive, red for negative)
- Responsive design supporting both desktop and mobile interfaces

#### Data Management
- Automatic data retrieval from Splitwise API
- Periodic background data refresh (every 30 minutes)
- Support for multiple expense groups
- Robust error handling and loading states

#### User Experience
- Group selection dropdown for easy navigation
- Clean, modern interface built with Next.js and React
- Internationalization support with multi-language capabilities

### Benefits

- Simplifies complex expense tracking
- Provides instant financial group insights
- Reduces manual calculation and potential misunderstandings
- Supports collaborative financial management
- Accessible and user-friendly design

## Deployment

### Production Build

To build the application for production, use the following command:

```bash
npm run build
```

### Running in Production

After building, start the production server with:

```bash
npm start
```

### Platform Deployment

#### Vercel
This project is optimized for Vercel deployment:
- Supports Next.js automatic deployment
- Recommended Node.js version: 20+
- No additional configuration required

#### Docker
While no Dockerfile is currently in the repository, the application can be containerized using standard Next.js Docker strategies:
- Use Node.js 20 as base image
- Copy package.json and install dependencies
- Copy project files
- Run `npm run build`
- Expose port 3000
- Start with `npm start`

### Deployment Considerations

- Ensure all environment variables are properly configured
- Minimum Node.js version: 20
- Database migrations can be run using `npm run db:migrate`

### Continuous Deployment

GitHub Actions are configured for:
- Continuous Integration (CI.yml)
- Release management (release.yml)
- Internationalization updates (crowdin.yml)
- Monitoring checks (checkly.yml)

The release process uses semantic-release, automatically generating changelog and managing version increments based on conventional commit messages.

## Configuration

The configuration for this project involves several key areas:

### Environment Variables
Environment configuration is managed through `.env` files with support for sensitive credentials:
- Authentication credentials for Clerk, Splitwise, and other services
- MongoDB connection URI
- API keys for services like PostHog and Discord
- Clerk authentication keys
- Sentry configuration options

#### Important Configuration Notes
- Sensitive data should be added to `.env.local` to prevent tracking in version control
- Environment-specific configurations can be set in `.env.production` or other environment-specific files

### Next.js Configuration
The project uses a custom Next.js configuration with the following key settings:
- Enabled ESLint directory scanning
- Disabled powered by header
- Enabled React Strict Mode
- Configured server-side external packages

### Sentry Integration
Comprehensive Sentry configuration includes:
- Source map upload options
- React component annotation
- Monitoring tunnel route
- Source map hiding
- Automatic Vercel Cron Monitor integration

### Database Migration
Drizzle ORM configuration supports:
- PostgreSQL database dialect
- Migration output directory
- Schema definition location
- Strict schema validation
- Verbose logging

### Development Tools
Several development and build-time configurations are available:
- Bundle analysis can be enabled via `ANALYZE=true`
- Internationalization plugin integration
- Monitoring and logging configurations

### Service Integrations
Configurable services include:
- Clerk authentication
- PostHog analytics
- Sentry error tracking
- Discord webhooks
- Splitwise API integration

Note: Always refer to the `.env.example` or `.env` file for the most up-to-date configuration options and ensure sensitive credentials are properly secured.

## Additional Notes

### Performance and Security Considerations

The application leverages several performance and security optimizations:

- Rate limiting and protection implemented via Arcjet
- Error tracking and monitoring through Sentry
- Logging with Pino for comprehensive application insights
- TypeScript for type safety and improved developer experience

### Internationalization

The project supports multiple languages with built-in internationalization:
- Language files located in `/src/locales`
- Currently supports English and French
- Locale switching available through the `LocaleSwitcher` component

### Development Tools

Key development and build tools include:
- Vitest for unit testing
- Playwright for end-to-end testing
- Storybook for component development and documentation
- ESLint for code quality and consistency
- Husky for git hook management

### External Integrations

The application integrates with multiple services:
- Splitwise API for expense data retrieval
- Clerk for authentication
- PostHog for analytics
- MongoDB for potential data storage

### Database Management

- Uses Drizzle ORM for database operations
- Supports database migrations via `db:generate` and `db:migrate` scripts
- Compatible with PostgreSQL

### Deployment Considerations

- Minimum Node.js version: 20
- Supports production builds with `npm run build`
- Environment-specific configurations available
- Continuous Integration workflows defined in `.github/workflows`

### Monitoring and Analytics

- Integrated logging with detailed error tracking
- PostHog for user analytics and behavior monitoring
- Performance instrumentation built into the application stack

## Contributing

We welcome contributions to the project! By contributing, you help improve and grow this open-source initiative.

### Contribution Guidelines

#### Getting Started
1. Fork the repository and create your branch from `main`
2. Ensure you have the latest version of Node.js (version 20.x or 22.x)
3. Install dependencies using `npm ci`

#### Commit Conventions
- We follow conventional commit messages
- Use the format: `<type>(optional scope): <description>`
- Allowed types include: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- Example: `feat(auth): add login functionality`

#### Code Quality
Before submitting a pull request, ensure you:
- Run linting: `npm run lint`
- Perform type checking: `npm run check-types`
- Pass all unit tests: `npm run test`

#### Pull Request Process
1. Update the documentation if your changes require it
2. Ensure all CI checks pass
3. Wait for a maintainer to review and merge your contribution

#### Development Setup
- Use `npm run dev` to start the development server
- Write tests for new features or bug fixes
- Follow the existing code style and conventions

### Code of Conduct
Please be respectful and constructive in all interactions. Harassment and discrimination are not tolerated.

### Reporting Issues
If you find a bug or have a suggestion, please open a GitHub issue with:
- A clear title
- Detailed description
- Steps to reproduce (if applicable)
- Expected vs. actual behavior

Thank you for your contributions!

## License

This project is licensed under the MIT License. For the full license text, see the [LICENSE](LICENSE) file.

#### Key Permissions
- Commercial use
- Modification
- Distribution
- Private use

#### Conditions
- License and copyright notice must be included
- The software is provided "as is" without warranties

#### Limitations
- No liability for damages
- No warranty of merchantability or fitness for a particular purpose