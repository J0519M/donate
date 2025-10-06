import { Model } from 'sequelize-typescript';
import { User } from '../../user/models/user.model';
import { Donate } from '../../donate/models/donate.model';
import { Order } from '../../order/model/order.model';
interface IPaymentCreationAttr {
    user_id: number;
    donate_id: number;
    order_id: number;
    payment_method: string;
    status: string;
    amount: string;
    payment_date: Date;
}
export declare class Payment extends Model<Payment, IPaymentCreationAttr> {
    id: number;
    user_id: number;
    donate_id: number;
    order_id: number;
    status: string;
    payment_method: string;
    amount: string;
    payment_date: Date;
    users: User;
    donate: Donate;
    orders: Order;
}
export {};
