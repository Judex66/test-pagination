import { MigrationInterface, QueryRunner } from "typeorm";
export declare class FixUsers1712562353701 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
