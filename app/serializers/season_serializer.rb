class SeasonSerializer < ActiveModel::Serializer
  attributes :season_name, :id
  has_many :episodes, include_nested_associations: true
end
