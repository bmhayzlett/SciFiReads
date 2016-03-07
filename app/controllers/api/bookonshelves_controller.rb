class Api::BookonshelvesController < ApplicationController

  def create
    if Book.find_by(google_books_id: params[:google_book_id])
      @book_id = Book.find_by(google_books_id: params[:google_book_id]).id
    else
      @book_id = Book.create!(google_books_id: params[:google_book_id]).id
    end

    @shelf = current_user.bookshelves.find_by(shelf_name: params[:shelf])
    @book_on_shelf = BookOnShelf.new(shelf_id: @shelf.id, book_id: @book_id)

    if @book_on_shelf.save
      render json: {shelf_name: @shelf.shelf_name}
    else
      render json: "ERROR"
    end
  end

  def show
    unless Book.find_by(google_books_id: params[:book_id])
      render json: {shelf_name: "none"}
      return
    end

    @book_id = Book.find_by(google_books_id: params[:book_id]).id
    @shelves = current_user.bookshelves
    @book_on_shelf = BookOnShelf.where(book_id: @book_id, shelf_id: @shelves)

    if @book_on_shelf.empty?
      render json: {shelf_name: "none"}
    else
      render json: {shelf_name: Bookshelf.find_by(id: @book_on_shelf.first.shelf_id).shelf_name}
    end
  end

  def update
    @book_id = Book.find_by(google_books_id: params[:google_book_id]).id
    @shelves = current_user.bookshelves
    @book_on_shelf = BookOnShelf.where(book_id: @book_id, shelf_id: @shelves)

    if @book_on_shelf
      @book_on_shelf.first.destroy!
    end

    if params[:shelf] == "Remove from Shelves"
      render json: {shelf_name: "none"}
      return
    end

    @shelf = current_user.bookshelves.find_by(shelf_name: params[:shelf])
    @new_book_on_shelf = BookOnShelf.new(shelf_id: @shelf.id, book_id: @book_id)

    if @new_book_on_shelf.save
      render json: {shelf_name: @shelf.shelf_name}
    end
  end

  def index
    @books = Book.find_users_books(current_user.id)
    render json: {bookshelf_books: @books}
  end

end
