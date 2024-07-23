import { Injectable } from '@nestjs/common';
import { CreateCarColorDto } from './dto/create-car-color.dto';
import { UpdateCarColorDto } from './dto/update-car-color.dto';

@Injectable()
export class CarColorsService {
  create(createCarColorDto: CreateCarColorDto) {
    return 'This action adds a new carColor';
  }

  findAll() {
    return `This action returns all carColors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carColor`;
  }

  update(id: number, updateCarColorDto: UpdateCarColorDto) {
    return `This action updates a #${id} carColor`;
  }

  remove(id: number) {
    return `This action removes a #${id} carColor`;
  }
}
