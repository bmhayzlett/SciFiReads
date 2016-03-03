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

- Break the google api query string, move different keys and values around
- Helper methods for renders everywhere
