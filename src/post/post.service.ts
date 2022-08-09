import { Injectable } from '@nestjs/common';
import { createPostDto } from './dto/createPost.dto';

@Injectable()
export class PostService {
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
  
    async getAll() {
      return this.posts
    }
  
    async create(dto: createPostDto) {
      return [...this.posts, dto]
    }
    
    async getByID(id: string) {
      return this.posts.find(p => p.id === Number(id))
    }
  
    async update(id: string, dto: createPostDto) {
      const post = await this.posts.find(p => p.id === Number(id))
  
      post.content = dto.content 
  
      return post
    }
    
    async delete(id: string) {
      return this.posts.filter(p => p.id != Number(id))
    }
}
