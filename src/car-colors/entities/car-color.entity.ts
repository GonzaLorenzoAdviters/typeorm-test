import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Car } from "../../cars/entities/car.entity";

@Entity('carColor')
export class CarColor {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  name: string;

  @CreateDateColumn({nullable : true})
  createdDate: Date

  @DeleteDateColumn({nullable : true})
  deletedDate: Date;

  @OneToMany(() => Car, (car) => car.color)
  car: Car;
}
