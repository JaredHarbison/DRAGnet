class AppearanceSerializer < ActiveModel::Serializer
  attributes :id
  
  belongs_to :queen 
  belongs_to :season 
end
