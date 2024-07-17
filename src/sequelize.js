import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  'postgres://username:password@pg-db:5432/testdb'
);

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize;
