import { connectDB } from '@/lib/mongodb/database';

let isConnected = false;

export const initializeMongoDB = async () => {
  if (isConnected) {
    console.warn('MongoDB is already connected');
    return;
  }

  try {
    await connectDB();
    isConnected = true;
    console.warn('MongoDB initialized successfully');
  } catch (error) {
    console.error('Failed to initialize MongoDB:', error);
    throw error;
  }
};
