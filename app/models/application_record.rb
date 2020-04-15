class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
  include Discard::Model
end
