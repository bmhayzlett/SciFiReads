# API Endpoints

## HTML API

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Books

- `GET /api/books`
  - Books index/search
- `POST /api/books`
- `GET /api/books/:id`
- `PATCH /api/books/:id`
- `DELETE /api/books/:id`

### Reviews

- `GET /api/reviews`
- `POST /api/reviews`
- `GET /api/reviews/:id`
- `PATCH /api/reviews/:id`
- `DELETE /api/reviews/:id`
- `GET /api/reviews/:id/books`
  - index of all reviews for a book

### Review Likes

- `GET /api/likes/:id/reviews`
- `DELETE /api/likes/:id`

### Follows

- `GET /api/follows`
- `DELETE /api/follows/:id`
