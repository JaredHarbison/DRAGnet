class QueenSerializer < ActiveModel::Serializer
    attributes :id, :real_name, :drag_name, :social_media,  :image
    has_many :trivia
  end
