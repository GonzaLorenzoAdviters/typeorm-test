import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORM = (): TypeOrmModuleOptions => {
  return {
    type: 'postgres',
    host: '0.0.0.0',
    port: 5435,
    username: 'postgres',
    password: 'dbase',
    database: 'postgres',
    entities: [__dirname + '/../**/*.entity.js'],
    // entities: ['dist/*.entity.{ts,js}'],
    synchronize: true,
  };
};
