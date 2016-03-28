# Schema Information

## books
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key

## bookshelves
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key, indexed, unique[name]
name        | string    | not null, indexed

## books_on_shelf
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
book_id     | integer   | not null, foreign key, indexed
shelf_id    | integer   | not null, foreign key, indexed


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
