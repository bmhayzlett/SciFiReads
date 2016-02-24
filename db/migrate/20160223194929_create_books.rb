class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :author, null: false
      t.string :image_url
      t.text :description, null: false
      t.integer :total_stars, null: false
      t.integer :total_reviewers, null: false

      t.timestamps null: false
    end
  end
end
