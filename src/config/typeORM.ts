import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORM = (): TypeOrmModuleOptions => {
  return {
    type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'root',
    password: '',
    database: 'sqltest',
    entities: ['dist/*.entity.{ts,js}'],
    synchronize: true,
    // logging: true,
    /* type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Bootcamp062024',
        database: 'sakila',
        entities: ['dist/*.entity.{ts,js}'],
        synchronize: true,
        logging: true */
  };
};
