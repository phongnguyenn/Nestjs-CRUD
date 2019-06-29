
import { Injectable } from '@nestjs/common'
import { PostsInput } from './posts.input'
import { InjectRepository } from '@nestjs/typeorm'
import { Posts } from './posts.entity'
import { MongoRepository } from 'typeorm'

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts)
    private readonly postsRepository: MongoRepository<Posts>
  ) {}

  async findAll(): Promise<Posts[]> {
    return await this.postsRepository.find()
  }

  findOneById(id: number): Promise<Posts> {
    return this.postsRepository.findOne(id)
  }

  async create(input: PostsInput): Promise<Posts> {
    const post = new Posts()
    post.title= input.title
    post.content = input.content
    return await this.postsRepository.save(post)
  }

  async remove(id: number): Promise<void> {
    await this.findOneById(id)
    this.postsRepository.delete(id)
  }

  async updatePost(id: number, post: PostsInput): Promise<void> {
    const existPost = await this.findOneById(id)
    existPost.title = post && post.title ? post.title : existPost.title
    existPost.content = post && post.content ? post.content : existPost.content
    this.postsRepository.save(existPost)
  }
}