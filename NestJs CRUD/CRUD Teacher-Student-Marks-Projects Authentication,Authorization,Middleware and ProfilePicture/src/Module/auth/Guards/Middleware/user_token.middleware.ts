import { ForbiddenException, Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { jwtConstants } from '../../auth.constants';
import { JwtPayload } from 'jsonwebtoken';
import { routeRole } from './Route.role';
import { UsersService } from 'src/Module/user/users.service';

// @Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService,private userService: UsersService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('No token provided');
    }

    const token = authHeader.split(' ')[1];
    
    try {
        // console.log(token);
        const decoded = jwt.verify(token,jwtConstants.secret) as JwtPayload
        console.log("Token is: ",token);
        console.log("Secret-Key is: ",jwtConstants.secret);
        // const decoded = await this.jwtService.verifyAsync<JwtPayload>(token)
        // console.log(decoded);
        // const user = await this.userService.findById(decoded.id); // Assume `findById` exists
        // console.log(user);
        // if (!user) {
        //   throw new UnauthorizedException('Invalid user');
        // }
          req['user'] = decoded;
          

          console.log('Object from middleware: ',req.user);
    
          // Match route to required roles
          const matchedRole = Object.keys(routeRole).find((key) => req.path.startsWith(key));
          const requiredRole = matchedRole ? routeRole[matchedRole] : undefined;
          console.log(requiredRole);
    
          if (requiredRole && !requiredRole.includes(decoded.role)) {
            throw new ForbiddenException('Access denied');
          }
     
      
        // console.log('Decoded Token', decoded);
        // if (typeof decoded === 'object' && 'role' in decoded){
        //     const userRole = decoded.role;
        //     console.log('User Role:', userRole);
        

        // req['user'] = decoded;
        // const requiredRoles = routeRole[req.path];
        // console.log(requiredRoles);
        // if (requiredRoles && !requiredRoles.includes(decoded.role)) {
        //   throw new ForbiddenException('Access denied');
        // }
    // }

        //   const userRole = decoded.role
      
      next();
    } catch (err) {
      throw new UnauthorizedException('Invalid token or Restricted page');
    }
  }
}
