import { SocialMediaService } from './social-media.service';
import { CreateSocialMediaDto } from './dto/create-social-media.dto';
import { UpdateSocialMediaDto } from './dto/update-social-media.dto';
export declare class SocialMediaController {
    private readonly socialMediaService;
    constructor(socialMediaService: SocialMediaService);
    create(createSocialMediaDto: CreateSocialMediaDto): Promise<import("./models/social-media.model").SocialMedia>;
    findAll(): Promise<import("./models/social-media.model").SocialMedia[]>;
    findOne(id: string): Promise<import("./models/social-media.model").SocialMedia>;
    update(id: string, updateSocialMediaDto: UpdateSocialMediaDto): Promise<import("./models/social-media.model").SocialMedia>;
    remove(id: string): Promise<{
        message: string;
        id?: undefined;
    } | {
        message: string;
        id: number;
    }>;
}
