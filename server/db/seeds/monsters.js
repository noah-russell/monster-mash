/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('monsters').del()
  await knex('monsters').insert([
    {
      id: 1,
      monster_name: 'Clause',
      top_artist: 'Patrice',
      bottom_artist: 'Rose',
      date_created: new Date(),
      image_url: 'monsters/Clause.png',
    },
    {
      id: 2,
      monster_name: 'Gorgeous',
      top_artist: 'Iggy',
      bottom_artist: 'Patrice',
      date_created: new Date(),
      image_url: 'monsters/Gorgeous.png',
    },
    {
      id: 3,
      monster_name: 'Iggy',
      top_artist: 'Iggy',
      bottom_artist: 'Blue',
      date_created: new Date(),
      image_url: 'monsters/Iggy.png',
    },

    {
      id: 4,
      monster_name: 'Murp',
      top_artist: 'Murphy',
      bottom_artist: 'Raidon',
      date_created: new Date(),
      image_url: 'monsters/Murp.png',
    },
  ])
}
