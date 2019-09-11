class CreateEpisodes < ActiveRecord::Migration[5.2]
  def change
    create_table :episodes do |t|
      t.belongs_to :season, index: true
      t.string :episode_name
      t.timestamps
    end
  end
end
