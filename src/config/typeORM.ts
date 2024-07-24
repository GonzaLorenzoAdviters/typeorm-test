import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORM = (): TypeOrmModuleOptions => {
  return {
    type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'root',
    password: '',
    database: 'sqltest',
    entities: [__dirname + '/../**/*.entity.js'],
    // entities: ['dist/*.entity.{ts,js}'],
    // synchronize: true,
  };
};
