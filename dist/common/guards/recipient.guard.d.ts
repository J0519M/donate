import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class RecipientGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean;
}
