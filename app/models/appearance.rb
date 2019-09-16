class Appearance < ApplicationRecord
  belongs_to :queen
  belongs_to :episode 
  belongs_to :season

  #### pull all seasons

  #### pull all contestants per season

  #### pull all episodes per season

  #### Appearance.create(
  ####  season_id: , 
  ####  episode_id: , 
  ####  queen_id: 
  ####)

  def get_appearances 
    seasons = Season.all
    seasons.each.with_index do |season, sid|
      episodes = season.episodes
      
      episodes.each.with_index do |episode, eid| 
        contestants = episode.contestants 
        byebug
        contestants.each do |contestant, cid| 
          byebug
          Appearance.create(
            season_id: Season.find(sid + 1), 
            episode_id: Episode.find(eid + 1), 
            queen_id: Queen.find_by(drag_name: contestant)
          )
          byebug
        end
      end 
    end 
  end 


end
