class CreateSeasons < ActiveRecord::Migration[5.2]
  def change
    create_table :seasons do |t|
      t.string :season_name
      t.date :premeire_date 
      t.date :finale_date
      t.string :judges
      t.string :fandom_season_url
      t.string :wiki_season_url
      t.timestamps
    end
  end
end
