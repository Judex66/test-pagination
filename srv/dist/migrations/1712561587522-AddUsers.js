"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUsers1712561587522 = void 0;
class AddUsers1712561587522 {
    constructor() {
        this.name = 'AddUsers1712561587522';
    }
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE "users" (
                "id" BIGSERIAL NOT NULL,
                "firstname" character varying(255),
                "lastname" character varying(255),
                "phone" character varying(16),
                "email" character varying(320) NOT NULL,
                "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
                CONSTRAINT "pk_users_id" PRIMARY KEY ("id")
            )
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            DROP TABLE "users"
        `);
    }
}
exports.AddUsers1712561587522 = AddUsers1712561587522;
//# sourceMappingURL=1712561587522-AddUsers.js.map