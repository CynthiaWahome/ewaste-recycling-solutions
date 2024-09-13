import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema ({
    email: {
        type: String,
        required: true,
        unique: true
    },

    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true,
        unique: true
    },

    role: {
        type: String,
        required: true
    },

    location: [{ body: String, date: Date }],
    created_at: { type: Date, default: Date.now },
    // updated_at: { type: Date, default: Date.now }

});

const tokenSchema = new Schema ({
    user_email: {
        type: String,
        required: true
    },

    created_at: { type: Date, default: Date.now },
    // expires_at: { type: Date, default: Date.now + 1 }
});

const orderSchema = new Schema ({
    creatorId: {
        type: Number,
        required: true
    },
    collectorId: {
        type: Number,
        required: true
    },

    imageUrl: {
        type: Map,
        of: String
    },
    
    location: {
        type: Map,
        of: String,
        required: true
    },

    created_at: { type: Date, default: Date.now }
    // updated_at: { type: Date, default: Date.now }
});

