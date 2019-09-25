class Appearance < ApplicationRecord
  belongs_to :queen
  belongs_to :episode 

  def get_appearances 
  #### iterate through each season, pulling episode ids and contestants
    Season.all.each do |season|
      season.episodes.each.with_index do |episode, index| 
        episode_id = episode.id 
        rank_index = index + 2
  #### the stored array of contestants needs a little work before we create Appearances
        contestants = episode.contestants.split(", ").map do |contestant| 
          contestant.gsub(/[^0-9a-z%&!\n\/(). ]/i, '').strip
        end 
        contestants = contestants.in_groups_of(season.episodes.length + 1)
        
  #### iterate through the array of contestants to create an Appearance for each Episode
        contestants.map do |contestant|
          Appearance.create(
            episode_id: episode_id, 
  #### use the contestants list as it appeared on the season's Fandom page to find the corresponding Queens
            queen_id: Queen.find_or_create_by(drag_name: contestant[0]).id, 
            rank: contestant[rank_index]
          )
        end 
      end 
    end 
  end 
end