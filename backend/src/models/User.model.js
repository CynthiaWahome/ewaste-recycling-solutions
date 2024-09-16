import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },

  username: {
    type: String,
    required: true
  },

  passwordHash: {
    type: String,
    required: true,
    unique: true
  },

  role: {
    type: String,
    required: true
  },

  location: [{ body: String, date: Date }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

userSchema.set('toJSON', {
  transform: (doc, returnedDoc) => {
    returnedDoc.id = returnedDoc._id.toString();
    delete returnedDoc._id;
    delete returnedDoc.__v;
    delete returnedDoc.passwordHash;
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
