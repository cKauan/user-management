import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex('admin').del();

    // Inserts seed entries
    await knex('admin').insert([
        {
            name: 'Carlos Kauãn',
            email: 'carloskauanmoreiradesousa@gmail.com',
            password: '$2b$10$joGDZSfIixaGKxmzjgIVZOACTzjyzjccmSQzNsl89hXebHVnEdHXK',
        },
    ]);
}
