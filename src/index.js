import sequelize from './sequelize.js';
import express from 'express';

const port = process.env.PORT ?? 3000;

const app = express();

app.get('/add/:num1/:num2', async (req, res) => {
  const [results] = await sequelize.query(
    `SELECT ${req.params.num1} + ${req.params.num2} AS sum`
  );
  res.send(results[0]);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
