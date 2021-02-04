import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Polishes extends BaseSchema {
  protected tableName = 'polishes'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('brand').notNullable()
      table.string('color')
      table.string('type').notNullable()
      table.date('expiration').notNullable()
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
