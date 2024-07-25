import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Car } from "../../cars/entities/car.entity";

@Entity('carBrand')
export class CarBrand {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  name: string;
  
  @CreateDateColumn({nullable : true})
  createdDate: Date

  @DeleteDateColumn({nullable : true})
  deletedDate: Date;

  @OneToMany(() => Car, (car) => car.brand)
  car: Car;
}
