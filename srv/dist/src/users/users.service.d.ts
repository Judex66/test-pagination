import { UsersEntity } from './users.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private usersRepo;
    private readonly logger;
    constructor(usersRepo: Repository<UsersEntity>);
    findAll(): Promise<UsersEntity[]>;
}
