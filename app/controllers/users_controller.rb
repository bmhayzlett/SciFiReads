# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class UsersController < ApplicationController

  def new
    if signed_in?
      redirect_to root_url
    else
      @user = User.new
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      redirect_to root_url
      Bookshelf.create(user_id: @user.id, shelf_name: "Read")
      Bookshelf.create(user_id: @user.id, shelf_name: "Currently Reading")
      Bookshelf.create(user_id: @user.id, shelf_name: "Want to Read")
    else
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
