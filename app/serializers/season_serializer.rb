class SeasonSerializer < ActiveModel::Serializer
  attributes :id, :season_name
  has_many :appearances
  has_many :queens, through: :appearances 
end
