"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = exports.AssignRoles = void 0;
const common_1 = require("@nestjs/common");
exports.AssignRoles = "roles";
const Roles = (...role) => (0, common_1.SetMetadata)(exports.AssignRoles, role);
exports.Roles = Roles;
//# sourceMappingURL=roles.decorator.js.map