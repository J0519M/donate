import { SocialMedia } from './models/social-media.model';
import { CreateSocialMediaDto } from './dto/create-social-media.dto';
import { UpdateSocialMediaDto } from './dto/update-social-media.dto';
export declare class SocialMediaService {
    private readonly socialMediaModel;
    constructor(socialMediaModel: typeof SocialMedia);
    create(createSocialMediaDto: CreateSocialMediaDto): Promise<SocialMedia>;
    findAll(): Promise<SocialMedia[]>;
    findOne(id: number): Promise<SocialMedia>;
    update(id: number, updateSocialMediaDto: UpdateSocialMediaDto): Promise<SocialMedia>;
    remove(id: number): Promise<{
        message: string;
        id?: undefined;
    } | {
        message: string;
        id: number;
    }>;
}
