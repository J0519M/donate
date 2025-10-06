import { Shop } from './model/shop.model';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
export declare class ShopService {
    private shopModel;
    constructor(shopModel: typeof Shop);
    create(createShopDto: CreateShopDto): Promise<Shop>;
    findAll(): Promise<Shop[]>;
    findOne(id: number): Promise<Shop>;
    update(id: number, updateShopDto: UpdateShopDto): Promise<Shop>;
    remove(id: number): Promise<{
        message: string;
        id: number;
    }>;
}
