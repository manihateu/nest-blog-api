import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';

@ApiTags('авторизация')
@Controller('auth')
export class AuthController {
    constructor (private readonly authService: AuthService) {}

    @Post("/login")
    login(@Body() userDto: CreateUserDto) {
        return this.authService.login(userDto);
    }

    @Post("register")
    register(@Body() userDto: CreateUserDto){
        return this.authService.register(userDto);
    }
}