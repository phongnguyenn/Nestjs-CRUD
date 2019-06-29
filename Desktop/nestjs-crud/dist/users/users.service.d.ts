import { UsersInput } from './users.input';
import { Users } from './users.entity';
import { MongoRepository } from 'typeorm';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: MongoRepository<Users>);
    findAll(): Promise<Users[]>;
    findOneById(id: number): Promise<Users>;
    create(input: UsersInput): Promise<Users>;
    remove(id: number): Promise<void>;
    updateUser(id: number, user: UsersInput): Promise<void>;
}
