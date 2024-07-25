import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { Language } from './entities/language.entity';

@Injectable()
export class LanguagesService {
  constructor(@InjectRepository(Language)
    private readonly languageRepository: Repository<Language>){}

  create(createLanguageDto: CreateLanguageDto) {
    return this.languageRepository.save(createLanguageDto);
  }

  findAll() {
    return this.languageRepository.find()
  }

  findOne(id: number) {
    return this.languageRepository.findOne({where: {id:id}})
  }

  update(id: number, updateLanguageDto: UpdateLanguageDto) {
    return this.languageRepository.update({id: id}, updateLanguageDto)
  }

  remove(id: number) {
    return this.languageRepository.softDelete({ id: id })
  }
}
