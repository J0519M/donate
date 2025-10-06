import { Model } from 'sequelize-typescript';
import { Recipient } from '../../recipient/models/recipient.model';
import { SocialMedia } from '../../social-media/models/social-media.model';
interface IRecipientSocialCreationAttr {
    recipient_id: number;
    social_id: number;
    social_url: string;
}
export declare class RecipientSocial extends Model<RecipientSocial, IRecipientSocialCreationAttr> {
    id: number;
    recipient_id: number;
    social_id: number;
    social_url: string;
    recipient: Recipient;
    socialMedia: SocialMedia;
}
export {};
