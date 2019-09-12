class EpisodeSerializer < ActiveModel::Serializer
    attributes :episode_name, 
               :id
    belongs_to :season
    has_many :queens
  end
