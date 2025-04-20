import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/expense-tracker';

export const connectDB = async () => {
  try {
    if (!mongoose.connections.length || (mongoose.connections[0] && mongoose.connections[0].readyState === 0)) {
      await mongoose.connect(MONGODB_URI);
      console.warn('MongoDB connected successfully');
    }
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

export const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
    console.warn('MongoDB disconnected successfully');
  } catch (error) {
    console.error('MongoDB disconnection error:', error);
    throw error;
  }
};

export const getDB = () => {
  if (!mongoose.connection.readyState) {
    throw new Error('MongoDB is not connected');
  }
  return mongoose.connection.db;
};

// 移除事件监听器，因为在Edge Runtime中不可靠
// 使用isConnected标志来跟踪连接状态
