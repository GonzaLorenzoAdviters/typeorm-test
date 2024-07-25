import { CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CarBrand } from "../../car-brands/entities/car-brand.entity";
import { CarColor } from "../../car-colors/entities/car-color.entity";
import { CarModel } from "../../car-models/entities/car-model.entity";
import { User } from "../../users/entities/user.entity";

@Entity('car')
export class Car {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => CarBrand, (brand) => brand.car)
  brand: CarBrand;

  @ManyToOne(() => CarModel, (model) => model.car)
  model: CarModel;

  @ManyToOne(() => CarColor, (color) => color.car)
  color: CarColor;

  @CreateDateColumn({nullable : true})
  createdDate: Date

  @DeleteDateColumn({nullable : true})
  deletedDate: Date;

  @OneToMany(() => User, (user) => user.car)
  user: User;
}
