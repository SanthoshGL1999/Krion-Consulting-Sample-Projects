import { Body, Controller, Post, Request, InternalServerErrorException, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { role } from './Guards/enums/role.enum';



@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() login: {username: string, password: string}) {
    const {username,password} = login;
    try {
      return await this.authService.login(username,password);
    } catch (error) {
      console.error('Login error:', error);
      throw new InternalServerErrorException('An error occurred while logging in');
    }
  }

  @Post('register')
  async register(@Body() body: { username: string; password: string; role: role }) {
    try {
      // Validate input
      if (!body.username || !body.password || !body.role) {
        throw new BadRequestException('Username and password are required');
      }
      return await this.authService.register(body.username, body.password, body.role);
    } catch (error) {
      console.error('Registration error:', error);
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new InternalServerErrorException('An error occurred while registering');
    }
  }
}