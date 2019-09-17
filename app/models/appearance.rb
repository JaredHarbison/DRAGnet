class Appearance < ApplicationRecord
  belongs_to :queen
  belongs_to :episode 
  #belongs_to :season  
  
  #### pull all seasons

  #### pull all contestants per season

  #### pull all episodes per season

  #### Appearance.create(
  ####  season_id: , 
  ####  episode_id: , 
  ####  queen_id: 
  ####)

  def get_appearances 
  #### grab all seasons and their episodes, iterate through the episodes with their index
    seasons = Season.all
    seasons.each.with_index do |season, sid|
  
      episodes = season.episodes
      episodes.each.with_index do |episode, eid| 
        episode_id = episode.id
        contestants = episode.contestants
        queens = contestants.split(", ")
        cleaned_queens = queens.map {|queen| queen.gsub(/[^0-9a-z%&!\n\/(). ]/i, '').downcase}
        cleaner_queens = cleaned_queens.map do |queen|
          if queen[-1] === " "
            queen.delete_suffix!(" ")
          else 
            queen
          end 
        end 
  
        contestants_objects = cleaner_queens.map.with_index do |contestant, index|
          Queen.find_or_create_by(drag_name: contestant)
        end 
        contestants_ids = contestants_objects.map do |contestant| 
          contestant.id 
        end 
        contestants_ids.map do |contestant|
        Appearance.create(
          episode_id: episode_id, 
          queen_id: contestant
        )
        end 
      end 
    end 
  end 


end
