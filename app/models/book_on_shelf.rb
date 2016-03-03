# == Schema Information
#
# Table name: book_on_shelves
#
#  id         :integer          not null, primary key
#  shelf_id   :integer          not null
#  book_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class BookOnShelf < ActiveRecord::Base
  validates :book_id, :shelf_id, presence: true
  validates :book_id, uniqueness: {scope: :shelf_id}
  validate :users_book_belongs_to_one_shelf

  belongs_to :book
  belongs_to(
    :bookshelf,
    primary_key: :id,
    foreign_key: :shelf_id,
    class_name: "Bookshelf"
  )
  has_one :user, through: :bookshelf, source: :user

  def sibling_books
    Book.find_by_sql([<<-SQL, {shelf_id: shelf_id, book_id: book_id}])
      SELECT
        second_books.*
      FROM
        bookshelves
      JOIN
        users ON bookshelves.user_id=users.id
      JOIN
        bookshelves AS second_shelf ON users.id=second_shelf.user_id
      JOIN
        book_on_shelves AS second_book_on_shelf ON second_shelf.id=second_book_on_shelf.shelf_id
      JOIN
        books AS second_books ON second_books.id=second_book_on_shelf.book_id
      WHERE
        bookshelves.id = :shelf_id AND bookshelves.user_id = second_shelf.user_id
          AND second_shelf.id != :shelf_id
    SQL
  end

  def users_book_belongs_to_one_shelf
    unless sibling_books.none?{ |book| book.id == book_id}
      errors[:invalid_shelf] << 'Cannot have same book on different shelves'
    end
  end
end
