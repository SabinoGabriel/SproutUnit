import { IsString, IsNotEmpty, IsInt, IsPositive, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class CreateRideDto {
  @IsString()
  @IsNotEmpty()
  origin: string;

  @IsString()
  @IsNotEmpty()
  destination: string;

  @IsDateString()
  date: string;

  @IsInt()
  @IsPositive()
  availableSeats: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  price?: number;

  @IsInt()
  userId: number;
}
