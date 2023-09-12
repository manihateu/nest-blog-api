import { createPostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    createPost(dto: createPostDto, image: any): Promise<import("./posts.model").Post>;
}
