import { Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsRepository } from './repositories/posts.repository';

@Injectable()
export class PostsService {
  constructor(private readonly repository: PostsRepository) {}

  create(createPostDto: CreatePostDto) {
    return this.repository.create(createPostDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  async findOne(id: number): Promise<Post> {
    const post = await this.repository.findOne(id);

    if (!post) {
      throw new NotFoundError('Post not found');
    }

    return post;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.repository.update(id, updatePostDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
