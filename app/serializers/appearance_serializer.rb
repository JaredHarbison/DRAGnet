class AppearanceSerializer < ActiveModel::Serializer
  belongs_to :episode
  belongs_to :queen 
  belongs_to :season
end
