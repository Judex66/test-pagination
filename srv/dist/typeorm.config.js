"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const typeorm_1 = require("typeorm");
const dataSource = new typeorm_1.DataSource({
    url: process.env.APP_PG_URL,
    ssl: false,
    type: 'postgres',
    entities: [path.join('dist', '**', '*.entity.{ts,js}')],
    migrations: [path.join('./migrations/*.ts')],
    synchronize: false,
    logging: process.env.NODE_ENV === 'development',
});
exports.default = dataSource;
//# sourceMappingURL=typeorm.config.js.map