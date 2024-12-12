import { ForbiddenException, Injectable, Logger, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { jwtConstants } from '../../auth.constants';
import { JwtPayload } from 'jsonwebtoken';
import { routeRole } from './Route.role';

// @Injectable()
export class JwtMiddleware implements NestMiddleware {

    async use(req: Request, res: Response, next: NextFunction) {
      const start = Date.now();
      res.on('finish', () => {
        const end = Date.now();
        const duration = end - start;
        console.log(
          `${req.method} ${req.originalUrl} - ${res.statusCode} [${duration}ms]`,
        );
      });

    const { method, originalUrl } = req;
    const requestStartTime = new Date().getTime();
    res.on('finish', () => {
      const { statusCode } = res;
      const responseTime = new Date().getTime();
      const duration = responseTime - requestStartTime;
      const message = `${method} ${originalUrl} - ${statusCode} ${duration}ms`;
      console.log(message);
    });

    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('No token provided');
    }

    const token = authHeader.split(' ')[1];
    
    try {
        const decoded = jwt.verify(token,jwtConstants.secret) as JwtPayload
          req['user'] = decoded;
          // Match route to required roles
          const matchedRole = Object.keys(routeRole).find((key) => req.path.startsWith(key));
          const requiredRole = matchedRole ? routeRole[matchedRole] : undefined;
    
          if (requiredRole && !requiredRole.includes(decoded.role)) {
            throw new ForbiddenException('Access denied');
          }
      next();
    } catch (err) {
      throw new UnauthorizedException('Invalid token or Restricted page');
    }
  }
}
