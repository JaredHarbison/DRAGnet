class QueenSerializer < ActiveModel::Serializer
    attributes :id, :real_name, :drag_name, :primary_image, 
               :date_of_birth, :hometown, :current_city, :ethnicity,
               :instagram, :twitter, :facebook, :youtube, :site, :imdb
    has_many :trivia
  end
