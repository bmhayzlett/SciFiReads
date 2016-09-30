# SciFiReads

[Heroku link](scifireads.space)



## Minimum Viable Product

SciFiReads is a web application inspired by Goodreads built using Ruby on
Rails and React.js. SciFiReads allows users to:

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Search library of books
- [ ] Add books to read, reading, and want-to-read bookshelves

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication

**Objective:** Functioning rails project with Authentication

- [X] create new project
- [X] create `User` model
- [X] authentication
- [X] user signup/signin pages
- [X] blank landing page after signin

### Phase 2: Books Model, API, and basic APIUtil

**Objective:** Users can browse and search for books

- [X] create `Book` model
- [X] seed the database with a small amount of test data
- [X] CRUD API for books index ('`BooksController`')
- [X] jBuilder views for books index
- [X] setup Webpack & Flux scaffold
- [X] setup `APIUtil` to interact with the API
- [X] test out API interaction in the console.

### Phase 3: Flux Architecture and Router

**Objective:** Users can add and remove books from their bookshelves.

- [X] setup the flux loop with skeleton files
- [X] setup React Router
- implement full add/remove, building out the flux loop as needed.
  - [X] Bookshelves
  - [X] Add/remove features
- [X] updated DB with added/removed books

### Phase 4: Start Styling

**Objective:** Existing pages (including singup/signin) will look good.

- [X] create a basic style guide
- [X] position elements on the page
- [X] add basic colors & styles

### Phase 5: Allow Complex Styling

**objective:** Style/animate login page.

- [X] Generate style for login page
- [X] Use Rails helpers to sanitize HTML before rendering.

### Phase 6: Styling Cleanup and Seeding

**objective:** Site cleanup

- [X] Get feedback on my UI from others
- [X] Refactor HTML classes & CSS rules
- [X] Add models, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Reviews
- [ ] Friends
- [ ] Pagination / infinite scroll for Books and Users indexes
- [ ] Allow books index view while logged out + add auth to react/flux
- [ ] Q/A functionality for page.
- [ ] Advanced Search functionality
