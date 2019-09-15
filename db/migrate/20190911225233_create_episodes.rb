class CreateEpisodes < ActiveRecord::Migration[5.2]
  def change
    create_table :episodes do |t|
      t.string :episode_code 
      t.string :episode_name 
      t.belongs_to :season, index: true 
      t.timestamps
    end
  end
end
