import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Car } from "../../cars/entities/car.entity";

@Entity('carBrand')
export class CarBrand {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  name: string;

  @OneToMany(() => Car, (car) => car.brand)
  car: Car;
}
