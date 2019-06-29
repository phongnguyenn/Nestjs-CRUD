import { PostsService } from './posts.service';
import { Posts } from './posts.entity';
import { PostsInput } from './posts.input';
export declare class PostsResolver {
    private readonly postsService;
    constructor(postsService: PostsService);
    getPosts(): Promise<Posts[]>;
    getPost(id: number): Promise<Posts>;
    createPost(input: PostsInput): Promise<Posts>;
    removePost(id: number): Promise<void>;
    updatePost(updateInput: {
        id: number;
        updatePostInput: PostsInput;
    }): Promise<void>;
}
