"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localStratagy = void 0;
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
class localStratagy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(authService) {
        super();
        this.authService = authService;
    }
    async validate(username, password) {
        return this.authService.validateUser(username, password);
    }
}
exports.localStratagy = localStratagy;
//# sourceMappingURL=local.strategy.js.map