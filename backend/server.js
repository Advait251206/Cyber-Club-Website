const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: true, // Allows any origin to access the server
  methods: ['GET', 'POST'],
  credentials: true,
}));

app.use(express.json());

const uri = process.env.MONGODB_URI;

if (uri) {
  mongoose.connect(uri)
    .then(() => console.log("✅ MongoDB connection established successfully"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));
} else {
  console.warn("⚠️ MONGODB_URI is not defined. Skipping database connection. Frontend will run, but backend DB features will not work.");
}

const contactRouter = require('./routes/contact');
app.use('/api/contact', contactRouter);

app.get('/', (req, res) => {
    res.send('Hello from the Cyber Club backend!');
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});