import { IsDateString, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateTaskDto {
    id: string;
    @IsString()
    name: string;
    @IsString()
    description: string;
    @IsOptional()
    @IsDateString()
    scheduledTime?: string;
    @IsOptional()
    @IsNumber()
    priority?: number;
}
