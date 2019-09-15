class EpisodeSerializer < ActiveModel::Serializer
    attributes :episode_name, 
               :episode_code,
               :id
    belongs_to :season
    has_many :queens
  end
