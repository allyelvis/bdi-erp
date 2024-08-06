const express = require('express');
const app = express();
const financeRoutes = require('./routes/finance');
const { sequelize } = require('./models');

app.use(express.json());
app.use('/api/finance', financeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  sequelize.sync();
});
