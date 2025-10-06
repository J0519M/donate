import { Model } from 'sequelize-typescript';
import { Order } from '../../order/model/order.model';
import { User } from '../../user/models/user.model';
interface IShopCreationAttr {
    name: string;
    count: number;
    price: string;
    title: string;
    recipient_id: number;
    category_id: number;
    description: string;
}
export declare class Shop extends Model<Shop, IShopCreationAttr> {
    id: number;
    name: string;
    count: number;
    price: string;
    title: string;
    description: string;
    recipient_id: number;
    category_id: number;
    orders: Order[];
    users: User;
}
export {};
