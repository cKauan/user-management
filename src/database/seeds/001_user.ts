import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex('users').del();
        
    // Inserts seed entries
    await knex('users').insert([
        {
            name: 'Carlos Kauãn Moreira de Sousa',
            phone: '5585992476020',
            bought: 500,
            notes: 'Estudando back-end',
        },
    ]);
}
