class CreateEpisodes < ActiveRecord::Migration[5.2]
  def change
    create_table :episodes do |t|
      t.string :episode_code 
      t.string :episode_name 
      t.string :episode_number
      t.text :contestants
      t.date :air_date
      t.string :maxi_challenge
      t.string :maxi_challenge_winner
      t.string :mini_challenge
      t.string :mini_challenge_winner
      t.string :guest_judges 
      t.string :lip_sync_song
      t.belongs_to :season, index: true 
      t.timestamps
    end
  end
end
