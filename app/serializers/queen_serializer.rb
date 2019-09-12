class QueenSerializer < ActiveModel::Serializer
    attributes :drag_name, 
               :id, 
               :real_name, 
               :primary_image, 
               :date_of_birth, 
               :hometown, 
               :current_city, 
               :ethnicity,
               :instagram, 
               :twitter, 
               :facebook, 
               :youtube, 
               :website, 
               :imdb, 
               :wikipedia
    has_many :trivia
    has_many :quotes
    has_many :episodes
  end
