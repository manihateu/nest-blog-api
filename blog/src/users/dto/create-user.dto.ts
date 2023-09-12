import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: "user@mail.ru", description: "email пользователя"})
    @IsString({message: 'Должно быть строкой'})
    @IsEmail()
    readonly email: string;

    @IsString()
    @MinLength(6, {message: 'Не менее 6 символов'})
    @ApiProperty({example: "pas123", description: "пароль пользователя"})
    readonly password: string;
}