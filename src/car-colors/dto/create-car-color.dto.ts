import { IsString } from "class-validator";

export class CreateCarColorDto {
  @IsString()
  name: string;
}
