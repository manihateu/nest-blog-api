import { createRoleDto } from './dto/createRoleDto';
import { Role } from './roles.model';
export declare class RolesService {
    private readonly roleRepository;
    constructor(roleRepository: typeof Role);
    createRole(dto: createRoleDto): Promise<Role>;
    getRoleByValue(value: string): Promise<Role>;
}
