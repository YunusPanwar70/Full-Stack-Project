"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./entities/user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const auth_service_1 = require("../auth/auth.service");
let UsersService = class UsersService {
    constructor(userRepository, authService) {
        this.userRepository = userRepository;
        this.authService = authService;
    }
    async findByUsername(username) {
        return await this.userRepository.findOne({ where: { username: username.toLowerCase() } });
    }
    async findByEmail(email) {
        return await this.userRepository.findOne({
            where: { email: email.toLocaleLowerCase() }
        });
    }
    async checkForExistingUser(username, email) {
        const existingUsername = await this.findByUsername(username);
        if (existingUsername) {
            throw new common_1.ConflictException('Username already exists');
        }
        const existingEmail = await this.findByEmail(email);
        if (existingEmail) {
            throw new common_1.ConflictException('Email already exists');
        }
    }
    async create(createUserDto) {
        await this.checkForExistingUser(createUserDto.username, createUserDto.email);
        const user = this.userRepository.create(Object.assign(Object.assign({}, createUserDto), { username: createUserDto.username.toLocaleLowerCase(), email: createUserDto.email.toLocaleLowerCase() }));
        return await this.userRepository.save(user);
    }
    async findAll() {
        return await this.userRepository.find();
    }
    async findOne(id) {
        return await this.userRepository.findOneBy({ id });
    }
    async update(id, updateUserDto) {
        return await this.userRepository.update(id, updateUserDto);
    }
    async remove(id) {
        return await this.userRepository.delete(id);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => auth_service_1.AuthService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        auth_service_1.AuthService])
], UsersService);
//# sourceMappingURL=users.service.js.map