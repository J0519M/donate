import { CreateRecipientDto } from './dto/create-recipient.dto';
import { UpdateRecipientDto } from './dto/update-recipient.dto';
import { Recipient } from './models/recipient.model';
export declare class RecipientService {
    private recipientModel;
    constructor(recipientModel: typeof Recipient);
    create(CreateRecipientDto: CreateRecipientDto): Promise<Recipient>;
    findAll(): Promise<Recipient[]>;
    findOne(id: number): Promise<Recipient | null>;
    findOneByName(name: string): Promise<Recipient | null>;
    update(id: number, UpdateRecipientDto: UpdateRecipientDto): Promise<Recipient>;
    remove(id: number): Promise<{
        message: string;
        id?: undefined;
    } | {
        message: string;
        id: number;
    }>;
}
