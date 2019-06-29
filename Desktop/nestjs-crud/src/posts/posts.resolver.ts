import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { PostsService } from './posts.service'
import { Posts } from './posts.entity'
import { PostsInput } from './posts.input'

@Resolver('Posts')
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => [Posts])
  async getPosts() {
    return await this.postsService.findAll()
  }

  @Query(() => Posts)
  async getPost( @Args('id') id: number): Promise<Posts> {
    return await this.postsService.findOneById(id)
  }

  @Mutation(() => Posts)
  async createPost(@Args('createPostInput') input: PostsInput) {
    return await this.postsService.create(input)
  }

  @Mutation(() => Posts)
  async removePost(@Args('id') id: number): Promise<void> {
    await this.postsService.remove(id)
  }

  @Mutation(() => Posts)
  async updatePost(@Args() updateInput: { id: number, updatePostInput: PostsInput }): Promise<void> {
    return await this.postsService.updatePost(updateInput.id, updateInput.updatePostInput)
  }
}