# == Schema Information
#
# Table name: books
#
#  id              :integer          not null, primary key
#  google_books_id :string           not null
#  created_at      :datetime
#  updated_at      :datetime
#

class Book < ActiveRecord::Base
  validates :google_books_id, uniqueness: true, presence: true

  has_many :book_on_shelves
  has_many :bookshelves, through: :book_on_shelves, source: :bookshelf
  has_many :users, through: :bookshelves, source: :user

  def self.find_by_id(book_id)
    book = Book.find_by(google_books_id: book_id)
    return nil unless book
    book.id
  end

  def self.find_users_books(user_id)
    Book.find_by_sql([<<-SQL, {user_id: user_id}])
      SELECT
        bookshelves.shelf_name
      FROM
        books
      JOIN
        book_on_shelves ON books.id=book_on_shelves.book_id
      JOIN
        bookshelves ON bookshelves.id=book_on_shelves.shelf_id
    SQL
  end


  # def sibling_books
  #   Book.find_by_sql([<<-SQL, {shelf_id: shelf_id, book_id: book_id}])
  #     SELECT
  #       second_books.*
  #     FROM
  #       bookshelves
  #     JOIN
  #       users ON bookshelves.user_id=users.id
  #     JOIN
  #       bookshelves AS second_shelf ON users.id=second_shelf.user_id
  #     JOIN
  #       book_on_shelves AS second_book_on_shelf ON second_shelf.id=second_book_on_shelf.shelf_id
  #     JOIN
  #       books AS second_books ON second_books.id=second_book_on_shelf.book_id
  #     WHERE
  #       bookshelves.id = :shelf_id AND bookshelves.user_id = second_shelf.user_id
  #         AND second_shelf.id != :shelf_id
  #   SQL
  # end
end
