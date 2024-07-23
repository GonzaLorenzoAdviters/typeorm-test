import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModelsController } from './car-models.controller';
import { CarModelsService } from './car-models.service';
import { CarModel } from './entities/car-model.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CarModel])],
  controllers: [CarModelsController],
  providers: [CarModelsService],
})
export class CarModelsModule {}
