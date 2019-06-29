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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("./users.entity");
const typeorm_2 = require("typeorm");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.usersRepository.find();
        });
    }
    findOneById(id) {
        return this.usersRepository.findOne(id);
    }
    create(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new users_entity_1.Users();
            user.email = input.email;
            user.password = input.password;
            return yield this.usersRepository.save(user);
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findOneById(id);
            this.usersRepository.delete(id);
        });
    }
    updateUser(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const existUser = yield this.findOneById(id);
            existUser.email = user && user.email ? user.email : existUser.email;
            existUser.password = user && user.password ? user.password : existUser.password;
            this.usersRepository.save(existUser);
        });
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(users_entity_1.Users)),
    __metadata("design:paramtypes", [typeorm_2.MongoRepository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map