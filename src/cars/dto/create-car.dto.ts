import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { CarBrand } from "../../car-brands/entities/car-brand.entity";
import { CarColor } from "../../car-colors/entities/car-color.entity";
import { CarModel } from "../../car-models/entities/car-model.entity";

export class CreateCarDto {
  @ApiProperty()
  @IsString()
  brand: CarBrand;

  @ApiProperty()
  @IsString()
  model: CarModel;

  @ApiProperty()
  @IsString()
  color: CarColor;

  /* @ApiProperty()
  @IsUUID()
  user: User; */
}
