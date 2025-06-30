const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Job = require('./models/job');
require('dotenv').config();

// 🛠 Define the path to the seed file
const filePath = path.join(__dirname, 'job_seed.json');

let jobs = [];

try {
  const fileData = fs.readFileSync(filePath, 'utf-8');
  if (!fileData.trim()) {
    throw new Error('job_seed.json is empty');
  }

  console.log("📄 job_seed.json contents:");
  console.log(fileData);

  jobs = JSON.parse(fileData);
} catch (err) {
  console.error('❌ Error reading/parsing job_seed.json:', err.message);
  process.exit(1);
}

const seedJobs = async () => {
  try {
    console.log("🔌 Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected");

    await Job.deleteMany();
    console.log("🧹 Existing jobs deleted");

    await Job.insertMany(jobs);
    console.log("✅ New jobs inserted successfully");

    process.exit(0);
  } catch (err) {
    console.error("❌ Seeding error:", err.message);
    process.exit(1);
  }
};

seedJobs();
