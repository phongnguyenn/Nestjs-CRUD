import { PostsInput } from './posts.input';
import { Posts } from './posts.entity';
import { MongoRepository } from 'typeorm';
export declare class PostsService {
    private readonly postsRepository;
    constructor(postsRepository: MongoRepository<Posts>);
    findAll(): Promise<Posts[]>;
    findOneById(id: number): Promise<Posts>;
    create(input: PostsInput): Promise<Posts>;
    remove(id: number): Promise<void>;
    updatePost(id: number, post: PostsInput): Promise<void>;
}
