# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

25.times do
  reviewers = Random.new.rand(0..25)
  Book.create!(title: Faker::Book.title,
    author: Faker::StarWars.character,
    description: Faker::Hipster.paragraph(2, false, 4),
    total_reviewers: reviewers,
    total_stars: Random.new.rand(0..5*reviewers))
end
