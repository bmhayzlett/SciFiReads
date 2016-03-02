class AddTimestampToBooks < ActiveRecord::Migration
  def change
    change_table(:books) { |t| t.timestamps }
  end
end
