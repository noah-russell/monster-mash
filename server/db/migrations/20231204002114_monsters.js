/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('monsters', function (table) {
    table.increments('id')
    table.string('monster_name')
    table.string('top_artist')
    table.string('bottom_artist')
    table.date('date_created')
    table.string('image_url')
    table.string('alt')
  })
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('monsters')
}
