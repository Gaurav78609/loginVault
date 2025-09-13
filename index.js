const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Correct imports (match filenames)
const authRoutes = require('./routes/auth.routes');
const passwordRoutes = require('./routes/password.routes');

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

// Route Middlewares
app.use('/api/auth', authRoutes);
app.use('/api/passwords', passwordRoutes);

// MongoDB Connect
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection failed:', err));

// Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
