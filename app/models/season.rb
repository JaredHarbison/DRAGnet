class Season < ApplicationRecord
  #has_many :appearances
  #has_many :queens, through: :appearances 
  has_many :episodes
end
