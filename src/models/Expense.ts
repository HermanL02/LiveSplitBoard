import type { Model } from 'mongoose';
import mongoose, { Schema } from 'mongoose';

const ExpenseSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  group_id: { type: Number, required: true },
  expense_bundle_id: { type: Number },
  description: { type: String, required: true },
  repeats: { type: Boolean, default: false },
  repeat_interval: { type: String },
  email_reminder: { type: Boolean, default: false },
  email_reminder_in_advance: { type: Number, default: -1 },
  next_repeat: { type: Date },
  details: { type: String },
  comments_count: { type: Number, default: 0 },
  payment: { type: Boolean, default: false },
  creation_method: { type: String, required: true },
  transaction_method: { type: String, required: true },
  transaction_confirmed: { type: Boolean, default: false },
  transaction_id: { type: String },
  transaction_status: { type: String },
  cost: { type: String, required: true },
  currency_code: { type: String, required: true },
  repayments: [{
    from: { type: Number, required: true },
    to: { type: Number, required: true },
    amount: { type: String, required: true },
  }],
  date: { type: Date, required: true },
  created_at: { type: Date, required: true },
  created_by: {
    id: { type: Number, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String },
  },
  updated_at: { type: Date, required: true },
  updated_by: {
    id: { type: Number },
    first_name: { type: String },
    last_name: { type: String },
  },
  deleted_at: { type: Date },
  deleted_by: {
    id: { type: Number },
    first_name: { type: String },
    last_name: { type: String },
  },
  category: {
    id: { type: Number, required: true },
    name: { type: String, required: true },
  },
  receipt: {
    large: { type: String },
    original: { type: String },
  },
  users: [{
    user: {
      id: { type: Number, required: true },
      first_name: { type: String, required: true },
      last_name: { type: String },
      picture: {
        medium: { type: String },
      },
      custom_picture: { type: Boolean, default: false },
    },
    user_id: { type: Number, required: true },
    paid_share: { type: String, required: true },
    owed_share: { type: String, required: true },
    net_balance: { type: String, required: true },
  }],
}, {
  timestamps: true,
});

ExpenseSchema.index({ group_id: 1 });
ExpenseSchema.index({ date: 1 });

const Expense = (mongoose.models.Expense || mongoose.model('Expense', ExpenseSchema)) as Model<any>;

export default Expense;
