require('dotenv').config();
const express = require('express');
const { connectToMongoDB } = require("./config/database");
const userRoutes = require('./routes/userRoutes');
const contactRoutes = require('./routes/contactRoutes');
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
const corsOpts = {
  origin: '*',
  credentials: true,
  methods: ['GET','POST','HEAD','PUT','PATCH','DELETE'],
  allowedHeaders: ['Content-Type'],
  exposedHeaders: ['Content-Type']
};
connectToMongoDB().then(() => {
  app.use(express.json());
  app.use(cors(corsOpts));

  app.use(bodyParser.json());

  app.use('/auth', userRoutes);
  app.use('/contact', contactRoutes);

  const port = process.env.PORT || 2200;

  app.get('/', (req, res) => {
    res.send('It works');
  });

  app.listen(port, () => {
    console.log(`Node API is running on port ${port}`);
  });
}).catch(err => {
  console.error("Failed to connect to MongoDB", err);
  process.exit(1);
});
