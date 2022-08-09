import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { PostDto } from './post.dto'

@Controller('post')
export class PostController {
  posts: any[]

  constructor() {
    this.posts = [
      {
        id: 1,
        text: 'rest'
      },
      {
        id: 2,
        text: 'rest'
      },
      {
        id: 3,
        text: 'rest'
      }
    ]
  }

  @Get()
  async getAll() {
    return this.posts
  }

  @Post()
  async create(@Body() dto: PostDto) {
    return [...this.posts, dto]
  }
  
  @Get(':id')
  async getByID(@Param('id')  id: string) {
    return this.posts.find(p => p.id === Number(id))
  }
}
