import mongoose, { Schema, Document } from 'mongoose';

export interface IWorkout extends Document {
  title: string;
  category: string;
  difficulty: string;
  duration: number;
  description: string;
}

const workoutSchema = new Schema<IWorkout>({
  title: { type: String, required: true },
  category: { type: String, required: true },
  difficulty: { type: String, required: true },
  duration: { type: Number, required: true },
  description: { type: String, required: true },
});

export const Workout = mongoose.model<IWorkout>('Workout', workoutSchema);
