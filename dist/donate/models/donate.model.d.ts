import { Model } from 'sequelize-typescript';
import { User } from '../../user/models/user.model';
import { Recipient } from '../../recipient/models/recipient.model';
import { Payment } from '../../payments/models/payment.model';
interface IDonateCreationAttr {
    recipient_id: number;
    user_id: number;
    notification: string;
    is_AnonimPay: boolean;
}
export declare class Donate extends Model<Donate, IDonateCreationAttr> {
    id: number;
    user_id: number;
    recipient_id: number;
    notification: string;
    is_AnonimPay: boolean;
    users: User;
    recipient: Recipient;
    payments: Payment;
    user: User;
}
export {};
