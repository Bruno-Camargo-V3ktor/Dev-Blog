import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve('src', 'db', 'seed', 'posts.json');

export class JsonPostRepository implements PostRepository {
    private async readFromDisk(): Promise<PostModel[]> {
        const jsonContent = await readFile(JSON_POSTS_FILE_PATH, 'utf-8');
        const parsedJson = JSON.parse(jsonContent);
        const { posts } = parsedJson;
        return posts
    }

    async findAll(): Promise<PostModel[]> {
        return this.readFromDisk();
    }

    async findById(id: string): Promise<PostModel | null> {
        const posts = await this.findAll();
        const post = posts.find( post => post.id === id ) || null;
        
        return post;
    }
}

export const postRepository = new JsonPostRepository();