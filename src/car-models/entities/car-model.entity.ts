import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Car } from "../../cars/entities/car.entity";

@Entity('carModel')
export class CarModel {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  name: string;

  @OneToMany(() => Car, (car) => car.model)
  car: Car;
}
