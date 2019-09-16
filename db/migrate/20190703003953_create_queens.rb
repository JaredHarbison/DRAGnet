class CreateQueens < ActiveRecord::Migration[5.2]
  def change
    create_table :queens do |t|
      t.string :drag_name
      t.string :real_name
      t.string :primary_image
      t.string :ethnicity
      t.string :hometown
      t.string :current_city
      t.string :instagram
      t.string :twitter
      t.string :facebook
      t.string :youtube
      t.string :website
      t.string :imdb
      t.string :wikipedia 
      t.date :date_of_birth
      t.integer :age
      t.integer :seasons_ids, array: true 
      t.timestamps
    end
  end
end
