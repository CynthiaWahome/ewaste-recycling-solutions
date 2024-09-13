const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());


// connect to database
mongoose.connect("mongodb+srv://cynthiaawsajira:0TONUPyFsdXCb8Yn@ewaste-dev-cluster.6pgmy.mongodb.net/")
.then(() => console.log('Connected to MongoDB'))


app.listen(PORT, () =>
    console.log(`Server is running on port ${PORT}`));