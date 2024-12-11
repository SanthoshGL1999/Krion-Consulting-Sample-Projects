import { ForbiddenException, Injectable, Logger, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { jwtConstants } from '../../auth.constants';
import { JwtPayload } from 'jsonwebtoken';
import { routeRole } from './Route.role';
import { UsersService } from 'src/Module/user/users.service';

// @Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {

//     const start = Date.now();

//     res.on('finish', () => {
//       const end = Date.now();
//       const duration = end - start;
//       console.log(
//         `${req.method} ${req.originalUrl} - ${res.statusCode} [${duration}ms]`
//       );
//     });

// const startn = process.hrtime.bigint();
// res.on('finish', () => {
//   const duration = Number(process.hrtime.bigint() - startn) / 1_000_000;
//   console.log(`Response Time: ${duration.toFixed(2)}ms`);
// });

// const startm = process.hrtime.bigint();

// res.on('finish', () => {
//   const end = process.hrtime.bigint();
//   const durationMs = Number(end - startm) / 1_000_000;
//   console.log(`Response Time: ${durationMs.toFixed(3)}ms`);
// });

const { method, originalUrl } = req
const requestStartTime = new Date().getTime()
res.on('finish', () => {
  const { statusCode } = res

  const responseTime = new Date().getTime()
  const duration = responseTime - requestStartTime
  const message = `${method} ${originalUrl} - ${statusCode} ${duration}ms`
  console.log(message);
})


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
          console.log("Required Role: ",requiredRole);
    
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
