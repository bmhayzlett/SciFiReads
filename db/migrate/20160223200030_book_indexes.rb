class BookIndexes < ActiveRecord::Migration
  def change
    add_index :books, [:title, :author], unique: true
  end
end
