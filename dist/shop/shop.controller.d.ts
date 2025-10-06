import { ShopService } from './shop.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
export declare class ShopController {
    private readonly shopService;
    constructor(shopService: ShopService);
    create(createShopDto: CreateShopDto): Promise<import("./model/shop.model").Shop>;
    findAll(): Promise<import("./model/shop.model").Shop[]>;
    findOne(id: string): Promise<import("./model/shop.model").Shop>;
    update(id: string, updateShopDto: UpdateShopDto): Promise<import("./model/shop.model").Shop>;
    remove(id: string): Promise<{
        message: string;
        id: number;
    }>;
}
