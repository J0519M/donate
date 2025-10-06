import { Model } from 'sequelize-typescript';
import { Recipient } from '../../recipient/models/recipient.model';
interface ICardsCreationAttr {
    card_type: string;
    card_number: string;
    recipient_id: number;
    expiry_date: string;
}
export declare class Card extends Model<Card, ICardsCreationAttr> {
    id: number;
    card_type: string;
    card_number: string;
    expiry_date: string;
    recipient_id: number;
    recipient: Recipient;
}
export {};
