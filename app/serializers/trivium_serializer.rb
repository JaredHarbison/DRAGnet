class TriviumSerializer < ActiveModel::Serializer
  attributes :id, :queen_id, :content
  #belongs_to :queen
end
