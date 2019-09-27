class SeasonSerializer < ActiveModel::Serializer
  attributes :season_name, :id, :episodes, :queens 
  #has_many :episodes, include_nested_associations: true

  def episodes 
    object.episodes.collect do |episode|
      { 
        :episode_code => episode.episode_code, 
        :episode_name => episode.episode_name
      }
    end 
  end 

  def queens 
    object.episodes.first.queens do |queen|
      {
        :drag_name => queen.drag_name
      }
    end 
  end 

end
