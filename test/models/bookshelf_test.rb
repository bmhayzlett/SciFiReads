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

require 'test_helper'

class BookshelfTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
