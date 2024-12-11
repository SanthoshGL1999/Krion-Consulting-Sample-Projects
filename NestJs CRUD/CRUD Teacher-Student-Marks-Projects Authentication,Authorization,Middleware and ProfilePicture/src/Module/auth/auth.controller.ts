import { Body, Controller, Post, Request, InternalServerErrorException, BadRequestException, Delete, Param, Patch, UseInterceptors, UploadedFile, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { role } from './Guards/enums/role.enum';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';



@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Patch(':id/upload')
  @UseInterceptors(
  FileInterceptor('file', {
    storage: diskStorage({
      destination: './Uploads/ProfilePicture',
      filename: (req, file, callback) => {
        const fileExtName = extname(file.originalname);
        const randomName = Array(16)
          .fill(null)
          .map(() => Math.round(Math.random() * 16).toString(16))
          .join('');
        callback(null, `${randomName}${fileExtName}`);
      },
    }),
  }),
)
async uploadProfilePicture(@Param('id') id: number, @UploadedFile() file: Express.Multer.File) {
  // Update the student's profilePicture field in the database
  // Assuming you have a service for handling updates
  console.log(file);
  const filePath = `Upload/${file.filename}`;
  await this.authService.updateProfilePicture(id, filePath);

  return { message: 'Profile picture uploaded successfully', filePath };
}

@Get(':id/profilepicture')
async getProfilePicture(@Param('id')id: number){
  const student = await this.authService.findOne(id);
  return {profilePicture: student.PROFILEPICTURE}
}

  @Post('login')
  async login(@Body() login: {username: string, password: string, role: role}) {
    const {username,password,role} = login;
    try {
      return await this.authService.login(username,password,role);
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

  @Delete(':id')
  async deleteUser(@Param('id') id: number){
    return await this.authService.deleteUser(id);
  }
}