export interface User {
  id: string;
  name: string;
  height?: number;
}

export interface WeightEntry {
  date: string;
  weight: number;
  bmi: number;
  notes?: string;
}

export interface IncomeEntry {
  month: number;
  year: number;
  amount: number;
  notes?: string;
}

export interface Task {
  id: string;
  title: string;
  status: 'pending' | 'todo' | 'completed';
  priority: 'low' | 'medium' | 'high';
  notes?: string;
  dueDate?: string;
}

export interface Expense {
  id: string;
  category: string;
  amount: number;
  date: string;
  notes?: string;
}

export interface CalorieEntry {
  id: string;
  period: 'morning' | 'afternoon' | 'evening';
  amount: number;
  goal: number;
  completed: boolean;
  notes?: string;
  date: string;
}

export interface GymSchedule {
  id: string;
  day: string;
  activity: string;
  timeSlot: string;
  attended: boolean;
}