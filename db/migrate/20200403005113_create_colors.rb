class CreateColors < ActiveRecord::Migration[6.0]
  def change
    create_table :colors do |t|
      t.string :colorName
      t.string :hex
      t.belongs_to :board, null: false, foreign_key: true

      t.timestamps
    end
  end
end
