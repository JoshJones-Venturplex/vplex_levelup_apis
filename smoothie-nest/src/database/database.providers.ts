import { Sequelize } from 'sequelize-typescript';
import { Smoothie } from '../smoothies/smoothie.entity';

export const databaseProviders = [
  {
    provide: 'SequelizeToken',
    useFactory: async () => {
      const sequelize = new Sequelize({
        operatorsAliases: false,
        dialect: 'mysql',
        url: 'mysql://b26470ab6bb766:bdf032bb@us-cdbr-iron-east-03.cleardb.net/heroku_53650379357ac1e?reconnect=true',
        username: 'b26470ab6bb766',
        password: 'bdf032bb',
        database: 'heroku_53650379357ac1e'
      });
      sequelize.addModels([Smoothie]);
      await sequelize.sync();
      return sequelize;
    },
  },
];