class CreateQueens < ActiveRecord::Migration[5.2]
  def change
    create_table :queens do |t|
      t.string :drag_name
      t.string :real_name
      t.string :image
      t.string :primary_image
      t.string :social_media
      t.string :instagram
      t.string :twitter
      t.string :facebook
      t.string :youtube
      t.string :site
      t.string :imdb
      t.timestamps
    end
  end
end
