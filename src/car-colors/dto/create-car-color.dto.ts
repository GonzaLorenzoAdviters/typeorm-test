import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateCarColorDto {
  @ApiProperty()
  @IsString()
  name: string;
}
