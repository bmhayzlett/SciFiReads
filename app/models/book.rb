class Book < ActiveRecord::Base
  validates :google_books_id, uniqueness: true, presence: true

  has_many :book_on_shelves
  has_many :bookshelves, through: :book_on_shelves, source: :bookshelf
  has_many :users, through: :bookshelves, source: :user

end
