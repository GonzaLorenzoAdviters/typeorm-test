import { Injectable } from '@nestjs/common';
import { CreateCarBrandDto } from './dto/create-car-brand.dto';
import { UpdateCarBrandDto } from './dto/update-car-brand.dto';

@Injectable()
export class CarBrandsService {
  create(createCarBrandDto: CreateCarBrandDto) {
    return 'This action adds a new carBrand';
  }

  findAll() {
    return `This action returns all carBrands`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carBrand`;
  }

  update(id: number, updateCarBrandDto: UpdateCarBrandDto) {
    return `This action updates a #${id} carBrand`;
  }

  remove(id: number) {
    return `This action removes a #${id} carBrand`;
  }
}
