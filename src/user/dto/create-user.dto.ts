import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: "O valor do campo 'name' deve ser um texto" })
  @IsNotEmpty({ message: "O campo 'name' não pode estar vazio." })
  name: string;

  @IsEmail({}, { message: 'Insira um email válido' })
  @IsNotEmpty({ message: "O campo 'email' não pode estar vazio." })
  email: string;
}
