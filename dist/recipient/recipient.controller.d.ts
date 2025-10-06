import { RecipientService } from './recipient.service';
import { CreateRecipientDto } from './dto/create-recipient.dto';
import { UpdateRecipientDto } from './dto/update-recipient.dto';
export declare class RecipientController {
    private readonly recipientService;
    constructor(recipientService: RecipientService);
    create(createRecipientDto: CreateRecipientDto): Promise<import("./models/recipient.model").Recipient>;
    findAll(): Promise<import("./models/recipient.model").Recipient[]>;
    findOne(id: string): Promise<import("./models/recipient.model").Recipient | null>;
    update(id: string, updateRecipientDto: UpdateRecipientDto): Promise<import("./models/recipient.model").Recipient>;
    remove(id: string): Promise<{
        message: string;
        id?: undefined;
    } | {
        message: string;
        id: number;
    }>;
}
