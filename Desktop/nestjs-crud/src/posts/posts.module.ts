import { Module } from '@nestjs/common'
import { PostsResolver } from './posts.resolver'
import { PostsService } from './posts.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Posts } from './posts.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Posts])],
  providers: [PostsResolver, PostsService]
})
export class PostsModule {}