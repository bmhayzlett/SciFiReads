Database

-Limits: 10,000 entries

Google Books API
-   get API key
-   index search (https://developers.google.com/books/docs/v1/using)
  1.  https://www.googleapis.com/books/v1/volumes?q=search+terms
      where q=search+terms is q=subject:"Fiction+Science+Fiction"
  2.  https://www.googleapis.com/demo/v1?key=YOUR-API-KEY&fields=kind,items(title,id,authors,description,imagelinks)

-   single book display
  1.    1.  https://www.googleapis.com/books/v1/volumes?q=search+terms
        where q=search+terms is subject=Fiction+Science+Fiction


TODO

- change pages to book detail page via router
- Add action to fetch books from api instead of fetching straight from book
index react component
- CSS styling soon
- Test that you can refresh on the book detail page, handle what happens
- schema, redo books database, remove all columns but add google id column with index. total stars and reviewers can be pulled from other databases
- Break the google api query string, move different keys and values around
