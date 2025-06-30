const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  requiredSkills: [String], // ✅ must match the key in job_seed.json
  description: String,
});

module.exports = mongoose.model('Job', jobSchema);