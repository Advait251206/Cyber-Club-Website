const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://cyber-club-website-git-main-advait-kawales-projects.vercel.app',
    'https://cyber-club-website-advait-kawales-projects.vercel.app',
  ],
  methods: ['GET', 'POST'],
  credentials: true,
}));

app.use(express.json());

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connection established successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const contactRouter = require('./routes/contact');
app.use('/api/contact', contactRouter);

app.get('/', (req, res) => {
    res.send('Hello from the Cyber Club backend!');
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});