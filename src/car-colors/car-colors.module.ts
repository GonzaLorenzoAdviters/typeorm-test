import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarColorsController } from './car-colors.controller';
import { CarColorsService } from './car-colors.service';
import { CarColor } from './entities/car-color.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CarColor])],
  controllers: [CarColorsController],
  providers: [CarColorsService],
})
export class CarColorsModule {}
