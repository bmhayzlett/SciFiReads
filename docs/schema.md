# Schema Information

## books
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null, indexed, unique[author]
author      | string    | not null, indexed
image_url   | string    |
total_stars | float     | not null
reviewers   | integer   | not null

## user_follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key, indexed, unique[followee_id]
follower_id | integer   | not null, foreign key, indexed
followee_id | integer   | not null, foreign key

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key, unique [book_id], indexed
book_id     | integer   | not null, foreign key, indexed
body        | text      | not null
num_stars   | integer   | not null

## review_likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key, indexed
review_id   | integer   | not null, foreign key, indexed

## bookshelves
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key, indexed, unique[name]
name        | string    | not null, indexed

## review_likes
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
