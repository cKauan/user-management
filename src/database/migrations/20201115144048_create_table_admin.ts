import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    await knex.raw('create extension if not exists "uuid-ossp"'),
        await knex.schema.createTable('admin', (table) => {
            table
                .uuid('id')
                .primary()
                .unique()
                .defaultTo(knex.raw('uuid_generate_v4()')),
                table.text('name').notNullable(),
                table.text('email').unique().notNullable(),
                table.text('password').notNullable();
        });
}

export async function down(knex: Knex): Promise<void> {
    await knex.raw('drop extension if exists "uuid-ossp"'),
        await knex.schema.dropTable('admin');
}
