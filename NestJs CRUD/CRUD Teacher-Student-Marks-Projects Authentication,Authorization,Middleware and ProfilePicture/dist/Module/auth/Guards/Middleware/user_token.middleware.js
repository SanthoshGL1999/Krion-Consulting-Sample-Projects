"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtMiddleware = void 0;
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
const auth_constants_1 = require("../../auth.constants");
const Route_role_1 = require("./Route.role");
class JwtMiddleware {
    constructor(jwtService, userService) {
        this.jwtService = jwtService;
        this.userService = userService;
    }
    async use(req, res, next) {
        const authHeader = req.headers['authorization'];
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw new common_1.UnauthorizedException('No token provided');
        }
        const token = authHeader.split(' ')[1];
        try {
            const decoded = jwt.verify(token, auth_constants_1.jwtConstants.secret);
            console.log("Token is: ", token);
            console.log("Secret-Key is: ", auth_constants_1.jwtConstants.secret);
            req['user'] = decoded;
            console.log('Object from middleware: ', req.user);
            const matchedRole = Object.keys(Route_role_1.routeRole).find((key) => req.path.startsWith(key));
            const requiredRole = matchedRole ? Route_role_1.routeRole[matchedRole] : undefined;
            console.log(requiredRole);
            if (requiredRole && !requiredRole.includes(decoded.role)) {
                throw new common_1.ForbiddenException('Access denied');
            }
            next();
        }
        catch (err) {
            throw new common_1.UnauthorizedException('Invalid token or Restricted page');
        }
    }
}
exports.JwtMiddleware = JwtMiddleware;
//# sourceMappingURL=user_token.middleware.js.map