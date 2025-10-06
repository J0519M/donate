import { Model } from 'sequelize-typescript';
import { Card } from '../../cards/models/card.model';
import { Shop } from '../../shop/model/shop.model';
import { SocialMedia } from '../../social-media/models/social-media.model';
import { User } from '../../user/models/user.model';
import { Donate } from '../../donate/models/donate.model';
interface IRecipientCreationAttr {
    name: string;
    full_name: string;
    email: string;
    password: string;
    address: string;
}
export declare class Recipient extends Model<Recipient, IRecipientCreationAttr> {
    id: number;
    name: string;
    full_name: string;
    email: string;
    password: string;
    address: string;
    cards: Card[];
    shop: Shop[];
    socialMedia: SocialMedia;
    users: User;
    donate: Donate;
}
export {};
