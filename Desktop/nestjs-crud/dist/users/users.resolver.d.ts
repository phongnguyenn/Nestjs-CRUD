import { UsersService } from './users.service';
import { Users } from './users.entity';
import { UsersInput } from './users.input';
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<Users[]>;
    getUser(id: number): Promise<Users>;
    createUser(input: UsersInput): Promise<Users>;
    removeUser(id: number): Promise<void>;
    updateUser(updateInput: {
        id: number;
        updateUserInput: UsersInput;
    }): Promise<void>;
}
