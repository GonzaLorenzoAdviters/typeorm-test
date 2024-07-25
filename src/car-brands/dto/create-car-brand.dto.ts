import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateCarBrandDto {
  @ApiProperty()
  @IsString()
  name: string;
}
