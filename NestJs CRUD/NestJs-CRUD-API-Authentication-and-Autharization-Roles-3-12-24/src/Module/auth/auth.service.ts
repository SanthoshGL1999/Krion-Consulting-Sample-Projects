import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Users } from '../user/entities/user.entity';
import { role } from './Guards/enums/role.enum';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(Users) private userRepository: Repository<Users>,
              private jwtService: JwtService
  ){}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userRepository.findOne({where:{username}});
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(username: string, password: string) {
    const user = await this.validateUser(username,password)
    const payload = { username: user.username, sub: user.id, role: user.role };

    const token = this.jwtService.sign(payload)
    return {
      access_token: token,
    };
  }

  async register(username: string,pass: string,role: role): Promise<Users>{
    const hashPassword= await bcrypt.hash(pass, 10);
    const newUser= this.userRepository.create({username, password: hashPassword, role});
    return this.userRepository.save(newUser);
  }
}