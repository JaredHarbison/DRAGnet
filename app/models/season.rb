class Season < ApplicationRecord
  has_many :appearances
  has_many :queens, through: :appearnces 
end
