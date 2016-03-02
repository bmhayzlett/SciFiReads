class CreateBookOnShelves < ActiveRecord::Migration
  def change
    create_table :book_on_shelves do |t|
      t.integer :shelf_id, null: false
      t.integer :book_id, null: false

      t.timestamps null: false
    end

    add_index :book_on_shelves, [:shelf_id, :book_id], unique: true
  end
end
