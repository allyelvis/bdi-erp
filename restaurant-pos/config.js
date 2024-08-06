module.exports = {
  db: 'mongodb://localhost:27017/restaurant-pos',  // Update with your MongoDB connection string
  port: process.env.PORT || 3000,
  secret: 'your-secret-key',
  stripeSecretKey: 'your-stripe-secret-key',  // Replace with your Stripe secret key
};
