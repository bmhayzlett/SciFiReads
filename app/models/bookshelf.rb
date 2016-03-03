# == Schema Information
#
# Table name: bookshelves
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  shelf_name :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Bookshelf < ActiveRecord::Base
  validates :user_id, presence: true
  validates :shelf_name, presence: true, uniqueness: {scope: :user_id}


  has_many(
    :book_on_shelves,
    primary_key: :id,
    foreign_key: :shelf_id,
    class_name: "BookOnShelf"
  )
  has_many :books, through: :book_on_shelves, source: :book
  belongs_to :user

end
