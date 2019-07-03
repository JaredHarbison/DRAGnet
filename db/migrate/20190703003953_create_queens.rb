class CreateQueens < ActiveRecord::Migration[5.2]
  def change
    create_table :queens do |t|
      t.string :drag_name
      t.string :real_name
      t.string :season
      t.string :ethnicity
      t.date :date_of_birth
      t.string :hometown
      t.string :current_city
      t.string :placement
      t.string :sent_home_by
      t.string :challenge_wins
      t.string :entrance_quotes
      t.string :memorable_quotes
      t.string :farewell_messages
      t.string :trivia
      t.string :image
      t.string :video
      t.string :social_media
      t.timestamps
    end
  end
end