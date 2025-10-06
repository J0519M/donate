import { JwtService } from '@nestjs/jwt';
import { CreateAdminDto } from '../admin/dto/create-admin.dto';
import { SigninAdminDto } from '../admin/dto/signin-admin.dto';
import { CreateRecipientDto } from '../recipient/dto/create-recipient.dto';
import { SigninRecipientDto } from '../recipient/dto/signin-recipent.dto';
export declare class AuthService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    private generateToken;
    signupAdmin(dto: CreateAdminDto): Promise<{
        token: string;
    }>;
    signinAdmin(dto: SigninAdminDto): Promise<{
        token: string;
    }>;
    signupRecipient(dto: CreateRecipientDto): Promise<{
        token: string;
    }>;
    signinRecipient(dto: SigninRecipientDto): Promise<{
        token: string;
    }>;
}
