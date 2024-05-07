import { UsersEntity } from './users.entity';
export declare class UsersResponseDto {
    id: number;
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
    updatedAt: Date;
    static fromUsersEntity(user: UsersEntity): UsersResponseDto;
}
