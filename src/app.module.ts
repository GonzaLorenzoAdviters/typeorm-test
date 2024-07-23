import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeORM } from './config/typeORM';
import { CountriesModule } from './countries/countries.module';
import { LanguagesModule } from './languages/languages.module';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { CarsModule } from './cars/cars.module';
import { CarModelsModule } from './car-models/car-models.module';
import { CarBrandsModule } from './car-brands/car-brands.module';
import { CarColorsModule } from './car-colors/car-colors.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORM()), UsersModule, RolesModule, LanguagesModule, CountriesModule, CarsModule, CarModelsModule, CarBrandsModule, CarColorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
