import { IsInt, IsString, IsUUID } from "class-validator";
import { Country } from "../../countries/entities/country.entity";
import { Language } from "../../languages/entities/language.entity";
import { Role } from "../../roles/entities/role.entity";

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  lastName: string;

  @IsInt()
  dni: number;

  @IsInt()
  country: Country;

  @IsString()
  provincia: string;

  @IsString()
  localidad: string;

  @IsString()
  direccion: string;

  

  @IsString()
  patente: string;

  @IsUUID()
  role: Role;

  @IsInt()
  language: Language;
}
