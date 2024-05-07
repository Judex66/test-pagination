"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixUsers1712562353701 = void 0;
class FixUsers1712562353701 {
    constructor() {
        this.name = 'FixUsers1712562353701';
    }
    async up(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "users"
            ADD CONSTRAINT "UQ_a000cca60bcf04454e727699490" UNIQUE ("phone")
        `);
        await queryRunner.query(`
            ALTER TABLE "users"
            ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email")
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "users" DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3"
        `);
        await queryRunner.query(`
            ALTER TABLE "users" DROP CONSTRAINT "UQ_a000cca60bcf04454e727699490"
        `);
    }
}
exports.FixUsers1712562353701 = FixUsers1712562353701;
//# sourceMappingURL=1712562353701-FixUsers.js.map