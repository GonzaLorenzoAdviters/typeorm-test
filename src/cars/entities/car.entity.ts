import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CarBrand } from "../../car-brands/entities/car-brand.entity";
import { CarColor } from "../../car-colors/entities/car-color.entity";
import { CarModel } from "../../car-models/entities/car-model.entity";

@Entity('car')
export class Car {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => CarModel, (model) => model.car)
  model: CarModel;

  @ManyToOne(() => CarBrand, (brand) => brand.car)
  brand: CarBrand;

  @ManyToOne(() => CarColor, (color) => color.car)
  color: CarColor;

  @Column('text')
  patente: string;

}
