class Queen < ApplicationRecord
    has_many :trivia, dependent: :destroy 
    accepts_nested_attributes_for :trivia
end
