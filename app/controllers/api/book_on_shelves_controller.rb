class Api::BookonshelvesController < ApplicationController

  def create
    debugger
    @book_on_shelf = current_user
  end

  def update
  end

  def destroy
  end

end
