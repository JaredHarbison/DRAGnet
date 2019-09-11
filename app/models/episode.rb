class Episode < ApplicationRecord
    has_many :appearances
    has_many :queens through: :appearances 
    belongs_to :season
end
