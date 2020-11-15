import path from 'path';
export default {
    development: {
        client: 'pg',
        connection: {
            host: 'localhost',
            port: 5433,
            user: 'postgres',
            password: 'docker',
            database: 'postgres',
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
        },
        seeds: {
            directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
        },
    },
};
