import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarColorsService } from './car-colors.service';
import { CreateCarColorDto } from './dto/create-car-color.dto';
import { UpdateCarColorDto } from './dto/update-car-color.dto';

@Controller('car-colors')
export class CarColorsController {
  constructor(private readonly carColorsService: CarColorsService) {}

  @Post()
  create(@Body() createCarColorDto: CreateCarColorDto) {
    return this.carColorsService.create(createCarColorDto);
  }

  @Get()
  findAll() {
    return this.carColorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carColorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarColorDto: UpdateCarColorDto) {
    return this.carColorsService.update(+id, updateCarColorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carColorsService.remove(+id);
  }
}
