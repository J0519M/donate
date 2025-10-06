import { Donate } from './models/donate.model';
import { CreateDonateDto } from './dto/create-donate.dto';
import { UpdateDonateDto } from './dto/update-donate.dto';
export declare class DonateService {
    private donateModel;
    constructor(donateModel: typeof Donate);
    create(createDonateDto: CreateDonateDto): Promise<Donate>;
    findAll(): Promise<Donate[]>;
    findOne(id: number): Promise<Donate>;
    update(id: number, updateDonateDto: UpdateDonateDto): Promise<Donate>;
    remove(id: number): Promise<{
        message: string;
        id: number;
    }>;
}
