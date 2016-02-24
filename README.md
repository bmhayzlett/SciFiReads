# SciFiReads

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com


## Minimum Viable Product

SciFiReads is a web application inspired by Goodreads built using Ruby on
Rails and React.js. SciFiReads allows users to:

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Search library of books
- [ ] Add books to read, reading, and want-to-read bookshelves
- [ ] Allow users to follow other users
- [ ] Users can review books, as well as like reviews
- [ ] Apply complex styling to login page.

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

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [X] create new project
- [X] create `User` model
- [X] authentication
- [X] user signup/signin pages
- [X] blank landing page after signin

### Phase 2: Books Model, API, and basic APIUtil (1.5 days)

**Objective:** Users can browse and search for books

- [ ] create `Book` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for books index ('`BooksController`')
- [ ] jBuilder views for books index
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Users can add and remove books from their bookshelves.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement full add/remove, building out the flux loop as needed.
  - [ ] Bookshelves
  - [ ] Add/remove features
- [ ] updated DB with added/removed books

### Phase 4: Start Styling (0.5 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Reviews (1.5 days)

**Objective:** Implement book reviews. Users can review books, and users can like reviews.

- [ ] create 'Reviews' model
- build out API, Flux loop, and components for:
  - [ ] adding a review/stars to a book
  - [ ] liking reviews for a book
- Use CSS to style new views

### Phase 6: Follows (1.5 days)

**Objective:** Users can search, find, and view others' pages/bookshelves.

- [ ] create `Follows` model and join table
- build out API, Flux loop, and components for:
  - [ ] finding other users
  - [ ] index of users
  - [ ] viewing other users' pages
  - [ ] add other users as a followee
- [ ] Style new elements

### Phase 7: Allow Complex Styling (0.5 days)

**objective:** Style/animate login page.

- [ ] Generate style for login page
- [ ] Use Rails helpers to sanitize HTML before rendering.

### Phase 8: Styling Cleanup and Seeding (1 day)

**objective:** Site cleanup

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add models, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Pagination / infinite scroll for Books and Users indexes
- [ ] Allow books index view while logged out + add auth to react/flux
- [ ] Q/A functionality for page.


[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
