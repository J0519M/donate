import { RecipientSocialService } from './recipient-social.service';
import { CreateRecipientSocialDto } from './dto/create-recipient-social.dto';
import { UpdateRecipientSocialDto } from './dto/update-recipient-social.dto';
export declare class RecipientSocialController {
    private readonly recipientSocialService;
    constructor(recipientSocialService: RecipientSocialService);
    create(createRecipientSocialDto: CreateRecipientSocialDto): Promise<import("./models/recipient-social.model").RecipientSocial>;
    findAll(): Promise<import("./models/recipient-social.model").RecipientSocial[]>;
    findOne(id: string): Promise<import("./models/recipient-social.model").RecipientSocial | null>;
    update(id: string, updateRecipientSocialDto: UpdateRecipientSocialDto): Promise<import("./models/recipient-social.model").RecipientSocial>;
    remove(id: string): Promise<{
        message: string;
        id?: undefined;
    } | {
        message: string;
        id: number;
    }>;
}
