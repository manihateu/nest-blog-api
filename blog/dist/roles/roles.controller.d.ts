import { RolesService } from './roles.service';
import { createRoleDto } from './dto/createRoleDto';
export declare class RolesController {
    private readonly roleService;
    constructor(roleService: RolesService);
    create(dto: createRoleDto): Promise<import("./roles.model").Role>;
    getByValue(value: string): Promise<import("./roles.model").Role>;
}
