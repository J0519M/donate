import { DonateService } from './donate.service';
import { CreateDonateDto } from './dto/create-donate.dto';
import { UpdateDonateDto } from './dto/update-donate.dto';
export declare class DonateController {
    private readonly donateService;
    constructor(donateService: DonateService);
    create(createDonateDto: CreateDonateDto): Promise<import("./models/donate.model").Donate>;
    findAll(): Promise<import("./models/donate.model").Donate[]>;
    findOne(id: string): Promise<import("./models/donate.model").Donate>;
    update(id: string, updateDonateDto: UpdateDonateDto): Promise<import("./models/donate.model").Donate>;
    remove(id: string): Promise<{
        message: string;
        id: number;
    }>;
}
