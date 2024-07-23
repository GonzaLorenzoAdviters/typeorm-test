import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarBrandsController } from './car-brands.controller';
import { CarBrandsService } from './car-brands.service';
import { CarBrand } from './entities/car-brand.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CarBrand])],
  controllers: [CarBrandsController],
  providers: [CarBrandsService],
})
export class CarBrandsModule {}
