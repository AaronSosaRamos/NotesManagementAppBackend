import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserDao } from './user.dao';
import { LoginUserDto } from './user.entity';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { env } from '../env';

@Injectable()
export class UserService {
  constructor(private readonly userDao: UserDao) {}

  async login(loginUserDto: LoginUserDto): Promise<string> {
    const user = await this.userDao.findByEmail(loginUserDto.email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(loginUserDto.password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, env.JWT_SECRET, {
      expiresIn: '1h',
    });

    return token;
  }
}
