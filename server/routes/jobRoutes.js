const express = require('express');
const router = express.Router();
const { getJobSuggestions, addJob } = require('../controllers/jobController');

router.post('/suggest', getJobSuggestions);
router.post('/add', addJob); // ✅ New route to add job

router.post('/test', (req, res) => {
  res.send('✅ /api/jobs/test route is working!');
});


module.exports = router;
