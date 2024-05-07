import { UserService } from './users.service';
import { UsersResponseDto } from './users.response.dto';
export declare class UserController {
    private userService;
    private readonly logger;
    constructor(userService: UserService);
    getAllUsers(): Promise<UsersResponseDto[]>;
}
