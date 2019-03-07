import { Sequelize } from 'sequelize-typescript';
import { Smoothie } from '../smoothies/smoothie.entity';

export const databaseProviders = [
  {
    provide: 'SequelizeToken',
    useFactory: async () => {
      const sequelize = new Sequelize({
        operatorsAliases: false,
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'test',
      });
      sequelize.addModels([Smoothie]);
      await sequelize.sync();
      return sequelize;
    },
  },
];