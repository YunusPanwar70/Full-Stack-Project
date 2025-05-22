import { Injectable, ConflictException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async findByUsername(username: string): Promise<User | null> {
    return await this.userRepository.findOne({ where: { username: username.toLowerCase() } });
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findOne({
      where: { email: email.toLocaleLowerCase() }
    })
  }

  async checkForExistingUser(username: string, email: string): Promise<void> {
    const existingUsername = await this.findByUsername(username);
    if (existingUsername) {
      throw new ConflictException('Username already exists')
    }

    const existingEmail = await this.findByEmail(email);
    if (existingEmail) {
      throw new ConflictException('Email already exists')
    }
  }

  async create(createUserDto: CreateUserDto) {
    await this.checkForExistingUser(createUserDto.username, createUserDto.email);

    const user = this.userRepository.create({
      ...createUserDto,
      username: createUserDto.username.toLocaleLowerCase(),
      email: createUserDto.email.toLocaleLowerCase()
    })
    return await this.userRepository.save(user)
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    return await this.userRepository.findOneBy({ id })
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(id, updateUserDto)
  }

  async remove(id: number) {
    return await this.userRepository.delete(id)
  }
}