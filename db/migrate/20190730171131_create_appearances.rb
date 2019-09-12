class CreateAppearances < ActiveRecord::Migration[5.2]
  def change
    create_table :appearances do |t|
      t.belongs_to :queen, index: true
      t.belongs_to :episode, index: true
      t.belongs_to :season, index: true
      t.timestamps
    end
  end
end
