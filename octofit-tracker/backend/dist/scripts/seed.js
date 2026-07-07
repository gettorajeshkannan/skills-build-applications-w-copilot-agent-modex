"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = require("../models/user");
const team_1 = require("../models/team");
const activity_1 = require("../models/activity");
const leaderboard_1 = require("../models/leaderboard");
const workout_1 = require("../models/workout");
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
    try {
        await mongoose_1.default.connect(connectionString);
        console.log('Connected to octofit_db');
        await Promise.all([
            user_1.User.deleteMany({}),
            team_1.Team.deleteMany({}),
            activity_1.Activity.deleteMany({}),
            leaderboard_1.LeaderboardEntry.deleteMany({}),
            workout_1.Workout.deleteMany({}),
        ]);
        const users = await user_1.User.insertMany([
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
        await team_1.Team.insertMany([
            {
                name: 'Momentum Squad',
                captain: users[0].name,
                members: users.map((user) => user.name),
                goal: 'Win the monthly challenge',
            },
        ]);
        await activity_1.Activity.insertMany([
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
        await leaderboard_1.LeaderboardEntry.insertMany([
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
        await workout_1.Workout.insertMany([
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
        await mongoose_1.default.disconnect();
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}
seedDatabase();
