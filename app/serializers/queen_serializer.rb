class QueenSerializer < ActiveModel::Serializer
    attributes :id, :real_name, :drag_name, :social_media,  :image
    has_many :trivium
  end
  
  ## add associations when needed
  #has_many :seasons
  #has_many :teams
  #has_many :users, through :teams
  