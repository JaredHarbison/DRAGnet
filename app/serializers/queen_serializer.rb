class QueenSerializer < ActiveModel::Serializer
    attributes :id, :real_name, :drag_name, :primary_image,
               :instagram, :twitter, :facebook, :youtube, :site, :imdb
    has_many :trivia
  end
