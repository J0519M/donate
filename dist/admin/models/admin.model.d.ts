import { Model } from 'sequelize-typescript';
interface IAdminCreationAttr {
    full_name: string;
    email: string;
    password: string;
    is_creator?: boolean;
    is_active?: boolean;
    token?: string;
}
export declare class Admin extends Model<Admin, IAdminCreationAttr> {
    id: number;
    full_name: string;
    email: string;
    password: string;
    is_creator: boolean;
    is_active: boolean;
    token: string;
}
export {};
