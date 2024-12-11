
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { role } from 'src/Module/auth/Guards/enums/role.enum';

@Entity()
export class Users {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({type:'varchar', enum: role, default: role.ADMIN})
  role: role;

}
