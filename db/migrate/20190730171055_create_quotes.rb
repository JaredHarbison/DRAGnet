class CreateQuotes < ActiveRecord::Migration[5.2]
  def change
    create_table :quotes do |t|
      t.integer "queen_id"
      t.string "content"
      t.timestamps
    end
  end
end
