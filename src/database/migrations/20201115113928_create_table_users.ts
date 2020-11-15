import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('users', (table) => {
        table.text('name').notNullable(),
            table.text('phone').notNullable(),
            table.integer('bought').notNullable(),
            table.text('notes').nullable(),
            table
                .timestamp('created_at', { precision: 6 })
                .defaultTo(knex.fn.now(6));
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('users');
}
