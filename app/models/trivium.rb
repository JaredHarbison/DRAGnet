class Trivium < ApplicationRecord
    belongs_to :queen
    accepts_nested_attributes_for :queen
end
