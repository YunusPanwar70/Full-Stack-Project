import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { AuthService } from 'src/auth/auth.service';
export declare class UsersService {
    private readonly userRepository;
    private readonly authService;
    constructor(userRepository: Repository<User>, authService: AuthService);
    findByUsername(username: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    checkForExistingUser(username: string, email: string): Promise<void>;
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User | null>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
