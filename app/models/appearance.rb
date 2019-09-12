class Appearance < ApplicationRecord
  belongs_to :queen
  belongs_to :episode 
  belongs_to :season
end
