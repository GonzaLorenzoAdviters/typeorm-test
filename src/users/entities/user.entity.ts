import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Car } from "../../cars/entities/car.entity";
import { Country } from "../../countries/entities/country.entity";
import { Language } from "../../languages/entities/language.entity";
import { Role } from "../../roles/entities/role.entity";

@Entity('user')
export class User
{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('text')
  lastName: string;

  @ManyToOne(() => Country, (country) => country.user)
  country: Country;

  @Column('text')
  provincia: string;

  @Column('text')
  localidad: string;

  @Column('text')
  direccion: string;

  @ManyToOne(() => Car, (car) => car.brand)
  carBrand: string;

  @ManyToOne(() => Car, (car) => car.model)
  carModel: string;

  @ManyToOne(() => Car, (car) => car.color)
  carColor: string;

  @ManyToOne(() => Role, (role) => role.user)
  role: Role;

  @ManyToOne(() => Language, (language) => language.user)
  language: Language;
}