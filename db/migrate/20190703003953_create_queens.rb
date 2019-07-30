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
      t.string :site
      t.string :imdb
      t.date :date_of_birth
      t.timestamps
    end
  end
end
