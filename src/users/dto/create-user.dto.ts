import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, IsUUID } from "class-validator";
import { Car } from "../../cars/entities/car.entity";
import { Country } from "../../countries/entities/country.entity";
import { Language } from "../../languages/entities/language.entity";
import { Role } from "../../roles/entities/role.entity";

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsInt()
  dni: number;

  @ApiProperty()
  @IsInt()
  country: Country;

  @ApiProperty()
  @IsString()
  provincia: string;

  @ApiProperty()
  @IsString()
  localidad: string;

  @ApiProperty()
  @IsString()
  direccion: string;

  @ApiProperty()
  @IsInt()
  car: Car;

  @ApiProperty()
  @IsString()
  patente: string;

  @ApiProperty()
  @IsUUID()
  role: Role;

  @ApiProperty()
  @IsInt()
  language: Language;
}
