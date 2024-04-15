const app = require('./app');
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});