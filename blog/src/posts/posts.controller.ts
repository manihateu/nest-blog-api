import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { createPostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('posts')
export class PostsController {

    constructor (private readonly postsService: PostsService) {}

    @UseInterceptors(FileInterceptor('image'))
    @Post()
    createPost(@Body() dto: createPostDto,
                @UploadedFile() image) {
        return this.postsService.create(dto, image);
    }
}
