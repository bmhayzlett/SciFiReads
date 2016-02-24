class StaticPagesController < ApplicationController

  def root
    if signed_in?
      render :root
    else
      redirect_to new_session_url
    end
  end

end
