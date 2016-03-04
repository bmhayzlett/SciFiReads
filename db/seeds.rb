# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

10.times do |i|
  # reviewers = Random.new.rand(0..25)
  # Book.create!(title: Faker::Book.title,
  #   author: Faker::StarWars.character,
  #   description: Faker::Hipster.paragraph(2, false, 4),
  #   total_reviewers: reviewers,
  #   total_stars: Random.new.rand(0..5*reviewers))
  User.create!(username: Faker::Name.name,
    password_digest: "blahblahblah",
    session_token: Random.new.rand(0..10000))
  Bookshelf.create!(user_id: i, shelf_name: "Want to Read")
  Bookshelf.create!(user_id: i, shelf_name: "Currently Reading")
  Bookshelf.create!(user_id: i, shelf_name: "Read")
  Book.create!(google_books_id: Faker::Name.name)
  BookOnShelf.create!(shelf_id: 3*i,
    book_id: i)
end
