import {
  IsString,
  IsNotEmpty,
  IsInt,
  IsPositive,
  IsDateString,
  IsNumber,
} from 'class-validator';

export class CreateRideDto {
  @IsString({ message: "O campo 'origin' deve ser um texto" })
  @IsNotEmpty({ message: "O campo 'origin' é obrigatório" })
  origin: string;

  @IsString({ message: "O campo 'destination' dave ser um texto" })
  @IsNotEmpty({ message: "O campo 'destination' é obrigatório" })
  destination: string;

  @IsDateString(
    {},
    { message: "O campo 'date' deve ser um texto no formato ANO-MÊS-DIA" },
  )
  @IsNotEmpty({ message: "O campo 'date' é obrigatório" })
  date: string;

  @IsInt({ message: "O campo 'availableSeats' deve ser um número inteiro" })
  @IsPositive({
    message: "O valor do campo 'availableSeats' deve ser maior que 0",
  })
  @IsNotEmpty({ message: "O campo 'availableSeats' é obrigatório" })
  availableSeats: number;

  @IsNumber({}, { message: "O campo 'price' deve ser um número inteiro" })
  @IsPositive({ message: "O valor do campo 'price' deve ser maior que 0" })
  @IsNotEmpty({ message: "O campo 'price' é obrigatório" })
  price?: number;

  @IsInt({ message: "O campo 'userId' deve ser um número inteiro" })
  @IsNotEmpty({ message: "O campo 'userId' é obrigatório" })
  userId: number;
}
