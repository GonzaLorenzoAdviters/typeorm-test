import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';

@Injectable()
export class CountriesService {
  constructor(@InjectRepository(Country)
  private readonly countryRepository: Repository<Country>){}

  create(createCountryDto: CreateCountryDto) {
    return this.countryRepository.save(createCountryDto)
  }

  findAll() {
    return this.countryRepository.find()
  }

  findOne(id: number) {
    return this.countryRepository.findOne({where: {id: id}})
  }

  update(id: number, updateCountryDto: UpdateCountryDto) {
    return this.countryRepository.update({id: id}, updateCountryDto)
  }

  remove(id: number) {
    return this.countryRepository.softDelete({id:id})
  }
}
