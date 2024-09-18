const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
  /*
   * collectorID and CreatorID will be the ID's
   * of documents in the collection
   * so they'll be kind of like forieng keys, which is why I'm
   * changing the type to ObjectID's
   *
   *
   * Also,
   * so here you had implemented imageUrl as  a map of strings,
   * but for this interation, its gonna be a
   * one-picture per trash kind of setup, so the type
   * is gonna be a single string :)
   *
   *
   * Finally,
   * The CollectorId is not required initially, because once an 'order'
   * is created, the collector has to accept it first, and required fields cannot be
   * null, so I'll change that as well
   *
   * I also changed the naming case from snake_case to camelCase, since this is JS
   * It's ussualy a standard to do camelCase in JS
   *
   * Hope that helps
   */

  creatorId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  },

  collectorId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  },

  imageUrl: {
    type: String
  },

  location: {
    type: Map,
    of: String,
    required: true
  },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

orderSchema.set('toJSON', {
  transform: (doc, returnedDoc) => {
    returnedDoc.id = returnedDoc._id.toString();
    delete returnedDoc._id;
    delete returnedDoc.__v;
    delete returnedDoc.passwordHash;
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
