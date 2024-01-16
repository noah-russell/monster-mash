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
      image_url: '/monsters/Clause.png',
    },
    {
      id: 2,
      monster_name: 'Gorgeous',
      top_artist: 'Iggy',
      bottom_artist: 'Patrice',
      date_created: new Date(),
      image_url: '/Gorgeous.png',
    },
    {
      id: 3,
      monster_name: 'Iggy',
      top_artist: 'Iggy',
      bottom_artist: 'Blue',
      date_created: new Date(),
      image_url: '/Iggy.png',
    },

    {
      id: 4,
      monster_name: 'Murp',
      top_artist: 'Murphy',
      bottom_artist: 'Raidon',
      date_created: new Date(),
      image_url: '/Murp.png',
    },
    {
      id: 5,
      monster_name: 'Schmaz',
      top_artist: 'Mosh',
      bottom_artist: 'Scarah',
      date_created: new Date(),
      image_url: '/Schmaz.png',
    },
    {
      id: 6,
      monster_name: 'Vesvius Tripe',
      top_artist: 'Scarah',
      bottom_artist: 'lizardbreath',
      date_created: new Date(),
      image_url: '/Vesvius Tripe.png',
    },
    {
      id: 7,
      monster_name: 'SoleSeeker',
      top_artist: 'winner',
      bottom_artist: 'loooooseeeeer',
      date_created: new Date(),
      image_url: '/SoleSeeker.png',
    },
    {
      id: 8,
      monster_name: 'Cosy Sammy',
      top_artist: 'Deeevin',
      bottom_artist: 'Geb',
      date_created: new Date(),
      image_url: '/Cosy Sammy.png',
    },
    {
      id: 9,
      monster_name: 'Picasso',
      top_artist: 'Rose Juice',
      bottom_artist: 'Patrice',
      date_created: new Date(),
      image_url: '/monsters/Picasso.png',
    },
    {
      id: 10,
      monster_name: 'saw gangan',
      top_artist: 'binker',
      bottom_artist: 'chainsaw',
      date_created: new Date(),
      image_url: '/saw gangan.png',
    },
    {
      id: 11,
      monster_name: 'Success Goblin',
      top_artist: 'Rose',
      bottom_artist: 'Rose',
      date_created: new Date(),
      image_url: '/1705369028732.png',
    },
    {
      id: 12,
      monster_name: 'Ginarbdab',
      top_artist: 'anon',
      bottom_artist: 'anonipoop',
      date_created: new Date(),
      image_url: '/Ginarbdab.png',
    },
    {
      id: 13,
      monster_name: 'saymose',
      top_artist: 'No',
      bottom_artist: 'ah',
      date_created: new Date(),
      image_url: '/saymose.png',
    },
    {
      id: 14,
      monster_name: 'Pen Guin',
      top_artist: 'Tim',
      bottom_artist: 'Tam',
      date_created: new Date(),
      image_url: '/Pen Guin.png',
    },

  ])
}
