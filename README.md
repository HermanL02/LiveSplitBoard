# Visual Splitwise

A modern web application for visualizing Splitwise group expenses and balances.

## Features

- Interactive bar chart visualization of group member balances
- Real-time data fetching from Splitwise API
- Responsive design with mobile-friendly interface
- Color-coded balance indicators (green for positive, red for negative)
- Group selection dropdown for easy navigation between different groups

## Technologies Used

- Next.js
- React
- Recharts (for data visualization)
- TypeScript
- Tailwind CSS

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables
4. Run the development server:
   ```bash
   npm run dev
   ```

## Project Structure

- `/src/app/[locale]/page.tsx` - Main application page with visualization
- `/api/splitwise` - API endpoint for fetching Splitwise data

## Data Structure

The application handles two main types of data:

### Group
```typescript
type Group = {
  id: number;
  name: string;
  members: Member[];
};
```

### Member
```typescript
type Member = {
  id: number;
  first_name: string;
  last_name: string | null;
  balance: Array<{
    currency_code: string;
    amount: string;
  }>;
};
```

## Contributing

Feel free to submit issues and enhancement requests!
