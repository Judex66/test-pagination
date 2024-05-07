"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersResponseDto = void 0;
class UsersResponseDto {
    static fromUsersEntity(user) {
        const dto = new UsersResponseDto();
        dto.id = user.id;
        dto.firstname = user.firstname;
        dto.lastname = user.lastname;
        dto.phone = user.phone;
        dto.email = user.email;
        dto.updatedAt = user.updatedAt;
        return dto;
    }
}
exports.UsersResponseDto = UsersResponseDto;
//# sourceMappingURL=users.response.dto.js.map