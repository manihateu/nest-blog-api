import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { createRoleDto } from './dto/createRoleDto';

@Controller('roles')
export class RolesController {
    constructor (private readonly roleService: RolesService) {}

    @Post('/create')
    create(@Body() dto: createRoleDto) {
        return this.roleService.createRole(dto)
    }

    @Get('/:value')
    getByValue(@Param('value') value: string) {
        return this.roleService.getRoleByValue(value)
    }
}
