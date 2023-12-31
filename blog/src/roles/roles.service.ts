import { Injectable } from '@nestjs/common';
import { createRoleDto } from './dto/createRoleDto';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './roles.model';

@Injectable()
export class RolesService {
    constructor (@InjectModel(Role) private readonly roleRepository: typeof Role) {}

    async createRole(dto: createRoleDto) {
        const role = await this.roleRepository.create(dto)
        return role;
    }

    async getRoleByValue(value: string) {
        const role = await this.roleRepository.findOne({where: {value}})
        return role;
    }
}
