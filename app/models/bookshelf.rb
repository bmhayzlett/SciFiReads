class Bookshelf < ActiveRecord::Base
  validates :user_id, presence: true
  validates :shelf_name, presence: true, uniqueness: {scope: :user_id}

  has_many :book_on_shelves
  has_many :books, through: :book_on_shelves, source: :book
  belongs_to :user

end
