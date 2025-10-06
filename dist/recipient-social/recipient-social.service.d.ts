import { CreateRecipientSocialDto } from './dto/create-recipient-social.dto';
import { UpdateRecipientSocialDto } from './dto/update-recipient-social.dto';
import { RecipientSocial } from './models/recipient-social.model';
import { SocialMedia } from '../social-media/models/social-media.model';
import { Recipient } from '../recipient/models/recipient.model';
export declare class RecipientSocialService {
    private readonly recipientSocialModel;
    private readonly socialMediaModel;
    private readonly recipientModel;
    constructor(recipientSocialModel: typeof RecipientSocial, socialMediaModel: typeof SocialMedia, recipientModel: typeof Recipient);
    create(CreateRecipientSocialDto: CreateRecipientSocialDto): Promise<RecipientSocial>;
    findAll(): Promise<RecipientSocial[]>;
    findOne(id: number): Promise<RecipientSocial | null>;
    update(id: number, UpdateRecipientSocialDto: UpdateRecipientSocialDto): Promise<RecipientSocial>;
    remove(id: number): Promise<{
        message: string;
        id?: undefined;
    } | {
        message: string;
        id: number;
    }>;
}
