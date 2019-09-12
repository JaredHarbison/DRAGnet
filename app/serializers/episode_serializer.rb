class EpisodeSerializer < ActiveModel::Serializer
    attributes :episode_name
    belongs_to :season
    has_many :queens
  end
