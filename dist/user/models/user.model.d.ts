import { Model } from 'sequelize-typescript';
import { Order } from '../../order/model/order.model';
import { Shop } from '../../shop/model/shop.model';
import { Donate } from '../../donate/models/donate.model';
import { Payment } from '../../payments/models/payment.model';
interface IUserCreationAttr {
    full_name: string;
    email: string;
    password: string;
    card_number?: string;
    is_active?: boolean;
}
export declare class User extends Model<User, IUserCreationAttr> {
    id: number;
    full_name: string;
    email: string;
    password: string;
    card_number: string;
    is_active: boolean;
    orders: Order[];
    shop: Shop;
    donate: Donate;
    payments: Payment;
    donates: Donate;
}
export {};
