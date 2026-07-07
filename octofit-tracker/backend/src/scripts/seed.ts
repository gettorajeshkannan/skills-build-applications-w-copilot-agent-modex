import mongoose from 'mongoose';
import { User } from '../models/user';
import { Team } from '../models/team';
import { Activity } from '../models/activity';
import { LeaderboardEntry } from '../models/leaderboard';
import { Workout } from '../models/workout';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);
    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.insertMany([
      {
        name: 'Ada Chen',
        email: 'ada.chen@example.com',
        role: 'admin',
        fitnessGoal: 'Improve endurance',
      },
      {
        name: 'Marcus Lee',
        email: 'marcus.lee@example.com',
        role: 'member',
        fitnessGoal: 'Build strength',
      },
    ]);

    await Team.insertMany([
      {
        name: 'Momentum Squad',
        captain: users[0].name,
        members: users.map((user) => user.name),
        goal: 'Win the monthly challenge',
      },
    ]);

    await Activity.insertMany([
      {
        userId: users[0]._id.toString(),
        type: 'run',
        duration: 35,
        calories: 420,
        date: new Date('2026-07-07T06:30:00Z'),
      },
      {
        userId: users[1]._id.toString(),
        type: 'strength',
        duration: 45,
        calories: 310,
        date: new Date('2026-07-06T18:00:00Z'),
      },
    ]);

    await LeaderboardEntry.insertMany([
      {
        userId: users[0]._id.toString(),
        name: users[0].name,
        score: 1280,
        streak: 7,
      },
      {
        userId: users[1]._id.toString(),
        name: users[1].name,
        score: 1175,
        streak: 4,
      },
    ]);

    await Workout.insertMany([
      {
        title: 'Morning HIIT',
        category: 'cardio',
        difficulty: 'medium',
        duration: 25,
        description: 'A brisk interval circuit for building stamina.',
      },
      {
        title: 'Core Strength Flow',
        category: 'strength',
        difficulty: 'easy',
        duration: 30,
        description: 'A guided core workout for posture and stability.',
      },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
