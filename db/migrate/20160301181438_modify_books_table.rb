class ModifyBooksTable < ActiveRecord::Migration
  def change
    drop_table :books

    create_table :books do |t|
      t.string :google_books_id, null: false
    end

    add_index :books, :google_books_id, unique: true

  end
end
