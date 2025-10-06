import { Model } from 'sequelize-typescript';
import { RecipientSocial } from '../../recipient-social/models/recipient-social.model';
import { Recipient } from '../../recipient/models/recipient.model';
interface ISocialMeidaCreationAttr {
    social_media: string;
    icon_url: string;
}
export declare class SocialMedia extends Model<SocialMedia, ISocialMeidaCreationAttr> {
    id: number;
    social_media: string;
    icon_url: string;
    recipientSocial: RecipientSocial[];
    recipient: Recipient;
}
export {};
