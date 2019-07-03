class QueenSerializer < ActiveModel::Serializer
    attributes :id, :real_name, :drag_name, :trivia, :social_media,  :image
  end
  
  ## add associations when needed
  #has_many :seasons
  #has_many :teams
  #has_many :users, through :teams
  