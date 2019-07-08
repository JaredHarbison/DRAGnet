class Queen < ApplicationRecord
    has_many :trivium, dependent: :destroy
    accepts_nested_attributes_for :trivium
end
