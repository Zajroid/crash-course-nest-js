import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { createPostDto } from './dto/createPost.dto'
import { updatePostDto } from './dto/updatePost.dto'

@Controller('post')
export class PostController {
  posts: any[]

  constructor() {
    this.posts = [
      {
        id: 1,
        content: 'rest'
      },
      {
        id: 2,
        content: 'rest'
      },
      {
        id: 3,
        content: 'rest'
      }
    ]
  }

  @Get()
  async getAll() {
    return this.posts
  }

  @Post()
  async create(@Body() dto: createPostDto) {
    return [...this.posts, dto]
  }
  
  @Get(':id')
  async getByID(@Param('id')  id: string) {
    return this.posts.find(p => p.id === Number(id))
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: createPostDto) {
    const post = await this.posts.find(p => p.id === Number(id))

    post.content = dto.content 

    return post
  }
  
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.posts.filter(p => p.id != Number(id))
  }
  

  
}
