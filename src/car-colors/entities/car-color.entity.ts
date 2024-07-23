import { Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Car } from "../../cars/entities/car.entity";

@Entity('carColor')
export class CarColor {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @OneToMany(() => Car, (car) => car.color)
  car: Car;
}
