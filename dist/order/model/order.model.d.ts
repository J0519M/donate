import { Model } from 'sequelize-typescript';
import { User } from '../../user/models/user.model';
import { Shop } from '../../shop/model/shop.model';
import { Payment } from '../../payments/models/payment.model';
interface IOrderCreationAttr {
    location: string;
    user_id: number;
    shop_id: number;
    status: string;
    quanity: number;
}
export declare class Order extends Model<Order, IOrderCreationAttr> {
    id: number;
    location: string;
    status: string;
    quanity: number;
    user_id: number;
    shop_id: number;
    users: User;
    shops: Shop;
    payments: Payment;
}
export {};
