import { Injectable } from '@nestjs/common';
import { createPostDto } from './dto/create-post.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './posts.model';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class PostsService {
    constructor (@InjectModel(Post) private readonly postRepository: typeof Post, 
                private readonly fileService: FilesService) {}

    async create(dto: createPostDto, image: any) {
        const fileName = await this.fileService.createFile(image)
        const post = await this.postRepository.create({...dto, image: fileName})
        return post
    }
}
