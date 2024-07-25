import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarBrandDto } from './dto/create-car-brand.dto';
import { UpdateCarBrandDto } from './dto/update-car-brand.dto';
import { CarBrand } from './entities/car-brand.entity';

@Injectable()
export class CarBrandsService {
  constructor(@InjectRepository(CarBrand)
  private readonly carBrandRepository: Repository<CarBrand>){}

  create(createCarBrandDto: CreateCarBrandDto) {
    return this.carBrandRepository.save(createCarBrandDto)
  }

  findAll() {
    return this.carBrandRepository.find()
  }

  findOne(id: number) {
    return this.carBrandRepository.findOne({where:{id:id}})
  }

  update(id: number, updateCarBrandDto: UpdateCarBrandDto) {
    return this.carBrandRepository.update({id:id}, updateCarBrandDto)
  }

  remove(id: number) {
    return this.carBrandRepository.softDelete({id:id})
  }
}
