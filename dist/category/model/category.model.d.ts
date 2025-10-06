import { Model } from 'sequelize-typescript';
import { Shop } from '../../shop/model/shop.model';
interface ICategoryCreationAttr {
    name: string;
}
export declare class Category extends Model<Category, ICategoryCreationAttr> {
    id: number;
    name: string;
    shops: Shop[];
}
export {};
