class Episode < ApplicationRecord
    has_many :appearances
    has_many :queens, through: :appearances 
    belongs_to :season
    accepts_nested_attributes_for :appearances
end
