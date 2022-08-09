import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { createPostDto } from './dto/createPost.dto'
import { PostService } from './post.service'

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}


  @Get()
  async getAll() {
    return this.postService.getAll()
  }

  @Post()
  async create(@Body() dto: createPostDto) {
    return this.postService.create(dto)
  }

  @Get(':id')
  async getByID(@Param('id') id: string) {
    return this.postService.getByID(id)
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: createPostDto) {

    return this.postService.update(id, dto)
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.postService.delete(id)
  }
}
