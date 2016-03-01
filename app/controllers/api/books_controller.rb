class Api::BooksController < ApplicationController

  def index
    @books = Book.all
    # refactor to allow for book search
    render json: @books
  end

  def show
  end

end
