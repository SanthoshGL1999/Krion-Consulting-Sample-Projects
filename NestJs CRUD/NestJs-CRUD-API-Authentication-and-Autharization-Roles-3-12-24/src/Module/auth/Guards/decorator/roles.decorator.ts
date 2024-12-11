import { SetMetadata } from "@nestjs/common";
import { role } from "../enums/role.enum";

export const AssignRoles = "roles";
export const Roles = (...role: [role, ...role[]]) => SetMetadata(AssignRoles,role);