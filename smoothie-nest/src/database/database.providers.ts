import { Sequelize } from 'sequelize-typescript';
import { Smoothie } from '../smoothies/smoothie.entity';

export const databaseProviders = [
  {
    provide: 'SequelizeToken',
    useFactory: async () => {
      const sequelize = new Sequelize({
        operatorsAliases: false,
        dialect: 'mysql',
        url: process.env.DATABASE_URL,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME
      });
      sequelize.addModels([Smoothie]);
      await sequelize.sync();
      return sequelize;
    },
  },
];