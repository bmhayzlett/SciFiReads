class BookOnShelf < ActiveRecord::Base
  validates :book_id, :shelf_id, presence: true
  validates :book_id, uniqueness: {scope: :shelf_id}

  belongs_to :book
  belongs_to :bookshelf
end