import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { Card } from './models/card.model';
import { Recipient } from '../recipient/models/recipient.model';
export declare class CardsService {
    private cardModel;
    private recipientModel;
    constructor(cardModel: typeof Card, recipientModel: typeof Recipient);
    create(createCardDto: CreateCardDto): Promise<Card>;
    findAll(): Promise<Card[]>;
    findOne(id: number): Promise<Card | null>;
    update(id: number, UpdateCardDto: UpdateCardDto): Promise<Card>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
