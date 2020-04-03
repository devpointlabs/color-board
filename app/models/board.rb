class Board < ApplicationRecord
  belongs_to :user
  has_many :colors
  has_many :likes
  # has_many :liking_users, through: :likes, source: user 
end
