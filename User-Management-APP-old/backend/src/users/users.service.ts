import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) { }

  create(user: Partial<User>) {
    return this.userRepository.save(user)
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({ id })
  }

  update(id: number, user: Partial<User>) {
    return this.userRepository.update(id, user)
  }

  delete(id: number) {
    return this.userRepository.delete(id)
  }
}
