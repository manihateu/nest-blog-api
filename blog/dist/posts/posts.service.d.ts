import { createPostDto } from './dto/create-post.dto';
import { Post } from './posts.model';
import { FilesService } from 'src/files/files.service';
export declare class PostsService {
    private readonly postRepository;
    private readonly fileService;
    constructor(postRepository: typeof Post, fileService: FilesService);
    create(dto: createPostDto, image: any): Promise<Post>;
}
