import { CardsService } from './cards.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
export declare class CardsController {
    private readonly cardsService;
    constructor(cardsService: CardsService);
    create(createCardDto: CreateCardDto): Promise<import("./models/card.model").Card>;
    findAll(): Promise<import("./models/card.model").Card[]>;
    findOne(id: string): Promise<import("./models/card.model").Card | null>;
    update(id: string, updateCardDto: UpdateCardDto): Promise<import("./models/card.model").Card>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
