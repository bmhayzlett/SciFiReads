# Flux Stores

### BooksStore

Holds all persisted book data.

##### Actions:
- `receiveAllBooks`
- `receiveSingleBook`

##### Listeners:
- `BooksIndex`
- `starsListener`
- `Search` (fuzzy search)

### Bookshelf

Holds bookshelf data.

##### Actions:
- `receiveAllBooks`
- `receiveSingleBook`
- `deleteSingleBook`

##### Listeners:
- `starsListener`

### BookStore

Holds all book data

##### Actions:
- `receiveAllReviews`
- `receiveAllLikes`
- `removeSingleReview`
- `removeSingleLike`

##### Listeners:
- `starsListener`
- `reviewsListener`
- `likesListener`

### FriendStore

Holds friend data.

##### Actions:
- `recieveAllFriends`
- `recieveSingleFriend`
- `removeSingleFriend`

##### Listeners:
- `bookshelfListener`

### SearchStore

Holds search parameters to send to the API.

##### Actions:
- `receiveSearchParams`

##### Listeners:
- `SearchIndex`
