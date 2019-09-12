class AppearanceSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :episode
  belongs_to :queen 
end
