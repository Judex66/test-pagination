import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddUsers1712561587522 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
