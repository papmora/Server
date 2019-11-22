"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
/*export const pool = new Pool({
    user: 'teconstruyeAdmin',
    host: 'localhost',
    password: 'teconstruye2019',
    database: 'TEConstruyeDB',
    port: 5432
});*/
exports.pool = new pg_1.Pool({
    host: 'teconstruyeserver.postgres.database.azure.com',
    user: 'teconstruyeadmin@teconstruyeserver',
    password: 'TEConstruye2019',
    database: 'postgres',
    port: 5432,
    ssl: true
});
