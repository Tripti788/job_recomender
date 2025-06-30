require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const jobRoutes = require('./routes/jobRoutes');

const app = express();

app.use(cors({
  origin:'https://job-recomender.vercel.app',
  credentials:true
}));
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.send('🟢 API is running');
});

// Job routes
app.use('/api/jobs', jobRoutes);

// Connect DB and start server
connectDB();

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at global machine`);
});
