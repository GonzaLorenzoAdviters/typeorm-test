import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarColorDto } from './dto/create-car-color.dto';
import { UpdateCarColorDto } from './dto/update-car-color.dto';
import { CarColor } from './entities/car-color.entity';

@Injectable()
export class CarColorsService {
  constructor(@InjectRepository(CarColor)
  private readonly carColorRepository: Repository<CarColor>){}

  create(createCarColorDto: CreateCarColorDto) {
    return this.carColorRepository.save(createCarColorDto)
  }

  findAll() {
    return this.carColorRepository.find()
  }

  findOne(id: number) {
    return this.carColorRepository.findOne({where:{id:id}})
  }

  update(id: number, updateCarColorDto: UpdateCarColorDto) {
    return this.carColorRepository.update({id:id}, updateCarColorDto)
  }

  remove(id: number) {
    return this.carColorRepository.softDelete({id:id})
  }
}
