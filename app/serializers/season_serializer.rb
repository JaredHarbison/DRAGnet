class SeasonSerializer < ActiveModel::Serializer
  attributes :id, :season_name
  has_many :queens, through: :appearances
end
