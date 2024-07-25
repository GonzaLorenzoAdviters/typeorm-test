import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';

@Injectable()
export class CarsService {
  constructor(@InjectRepository(Car)
  private readonly carRepository: Repository<Car>){}

  create(createCarDto: CreateCarDto) {
    return this.carRepository.save(createCarDto)
  }

  findAll() {
    return this.carRepository.find()
  }

  findOne(id: number) {
    return this.carRepository.findOne({where:{id:id}})
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return this.carRepository.update({id:id}, updateCarDto)
  }

  remove(id: number) {
    return this.carRepository.softDelete({id:id})
  }
}
