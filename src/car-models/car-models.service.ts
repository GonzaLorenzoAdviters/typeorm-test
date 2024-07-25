import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarModelDto } from './dto/create-car-model.dto';
import { UpdateCarModelDto } from './dto/update-car-model.dto';
import { CarModel } from './entities/car-model.entity';

@Injectable()
export class CarModelsService {
  constructor(@InjectRepository(CarModel)
  private readonly carModelRepository: Repository<CarModel>){}

  create(createCarModelDto: CreateCarModelDto) {
    return this.carModelRepository.save(createCarModelDto)
  }

  findAll() {
    return this.carModelRepository.find()
  }

  findOne(id: number) {
    return this.carModelRepository.findOne({where: {id: id}})
  }

  update(id: number, updateCarModelDto: UpdateCarModelDto) {
    return this.carModelRepository.update({id : id}, updateCarModelDto)
  }

  remove(id: number) {
    return this.carModelRepository.softDelete({id: id})
  }
}
