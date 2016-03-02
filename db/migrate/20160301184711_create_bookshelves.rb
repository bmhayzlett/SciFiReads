class CreateBookshelves < ActiveRecord::Migration
  def change
    create_table :bookshelves do |t|
      t.integer :user_id, null: false
      t.string :shelf_name, null: false

      t.timestamps null: false
    end

    add_index :bookshelves, [:user_id, :shelf_name], unique: true
  end
end
