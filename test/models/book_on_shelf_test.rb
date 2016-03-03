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

require 'test_helper'

class BookOnShelfTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
