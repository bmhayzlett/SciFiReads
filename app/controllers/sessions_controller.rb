class SessionsController < ApplicationController

  def new
    if signed_in?
      redirect_to root_url
    else
      render :new
    end
  end

  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user
      sign_in(user)
      redirect_to root_url
    else
      render :new
    end
  end

  def destroy
    sign_out
    redirect_to new_session_url
  end

end
