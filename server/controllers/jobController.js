const Job = require('../models/job'); // ✅ fixed path

// ✅ Suggest jobs
const getJobSuggestions = async (req, res) => {
  const { skills } = req.body;

  if (!skills || !Array.isArray(skills)) {
    return res.status(400).json({ message: 'Skills must be an array.' });
  }

  try {
    const normalizedSkills = skills.map(skill => skill.toLowerCase());

    const allJobs = await Job.find();

    const matched = allJobs.filter(job =>
      job.requiredSkills.some(req =>
        normalizedSkills.includes(req.toLowerCase())
      )
    );

    console.log("Matched Jobs:", matched); // 👈 debug

    res.json({ suggestions: matched });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// ✅ Add job
const addJob = async (req, res) => {
  const { title, requiredSkills, description } = req.body;

  if (!title || !requiredSkills || !Array.isArray(requiredSkills)) {
    return res.status(400).json({ message: 'Invalid input' });
  }

  try {
    const job = new Job({
      title,
      requiredSkills,
      description
    });

    await job.save();
    res.status(201).json({ message: "Job added successfully", job });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Error in adding job", error: err.message });
  }
};

module.exports = { getJobSuggestions, addJob };
