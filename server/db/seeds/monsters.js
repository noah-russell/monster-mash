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
    {
      id: 5,
      monster_name: 'Schmaz',
      top_artist: 'Mosh',
      bottom_artist: 'Scarah',
      date_created: new Date(),
      image_url: 'monsters/Schmaz.png',
    },
    {
      id: 6,
      monster_name: 'Vesvius Tripe',
      top_artist: 'Scarah',
      bottom_artist: 'lizardbreath',
      date_created: new Date(),
      image_url: 'monsters/Vesvius Tripe.png',
    },
    {
      id: 7,
      monster_name: 'SoleSeeker',
      top_artist: 'winner',
      bottom_artist: 'loooooseeeeer',
      date_created: new Date(),
      image_url: 'monsters/SoleSeeker.png',
    },
    {
      id: 8,
      monster_name: 'Cosy Sammy',
      top_artist: 'Deeevin',
      bottom_artist: 'Geb',
      date_created: new Date(),
      image_url: 'monsters/Cosy Sammy.png',
    },
    {
      id: 9,
      monster_name: 'Picasso',
      top_artist: 'Rose Juice',
      bottom_artist: 'Patrice',
      date_created: new Date(),
      image_url: 'monsters/Picasso.png',
    },
    {
      id: 10,
      monster_name: 'saw gangan',
      top_artist: 'binker',
      bottom_artist: 'chainsaw',
      date_created: new Date(),
      image_url: 'monsters/saw gangan.png',
    },


  ])
}
