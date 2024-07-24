import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(@InjectRepository(Role)
  private readonly roleRepository: Repository<Role>){}

  create(createRoleDto: CreateRoleDto) {
    console.log(createRoleDto);
    return this.roleRepository.save(createRoleDto);
  }

  findAll() {
    console.log("a");

    return this.roleRepository.find();
  }

  findOne(id: string) {
    return this.roleRepository.findOne({where: {id : id}});
  }

  update(id: string, updateRoleDto: UpdateRoleDto) {
    return this.roleRepository.update({ id: id}, updateRoleDto)
  }

  remove(id: string) {
    return this.roleRepository.softRemove({id: id})
  }
}
