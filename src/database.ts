import {Pool} from 'pg'

/*export const pool = new Pool({
    user: 'teconstruyeAdmin',
    host: 'localhost',
    password: 'teconstruye2019',
    database: 'TEConstruyeDB',
    port: 5432
});*/

export const pool = new Pool({
    host: 'teconstruyeserver.postgres.database.azure.com',
    user: 'teconstruyeadmin@teconstruyeserver',
    password: 'TEConstruye2019',
    database: 'postgres',
    port: 5432,
    ssl: true
});