# shelf-awareness
<b>Intent & Goal</b>
-
Shelf Awareness is a social book tracking and review platform. It solves the problem of scattered reading lists, lack of community around reading, and no central place to discover books through trusted social circles. Users can track what they've read, write reviews, follow other readers, and form book clubs.

<b>Audience & Roles</b>
-
Two roles: Guest (unauthenticated) and Member (authenticated). Guests can browse books via Google Books API, view public user profiles, and read reviews. Members get full access: writing reviews with star ratings, managing a personal reading list (Want to Read / Currently Reading / Read), liking and commenting on reviews, following other users, and creating/joining book clubs. No admin role needed for MVP.

<b>Core Flows</b>
-
These flows must work end-to-end:

- Guest lands on homepage → sees trending/popular books, recent community reviews, and a hero CTA to sign up or log in → can search books and view book detail pages → can browse user profiles and read reviews without an account

- New user signs up with email + password → sets up a profile (username, avatar, favorite genres) → lands on personalized home feed showing book recommendations based on selected genres

- Logged-in user searches a book via Google Books API → views book detail page (cover, synopsis, author, avg community rating) → adds it to their reading list (Want to Read / Currently Reading / Read) → writes and posts a star-rated review when finished

- User browses the community → searches for another user by username → views their profile (reading stats, reviews, currently reading, book clubs) → follows them → sees their future activity surface in recommendations

- Logged-in user writes a review → other users can like the review and leave comments → review author receives notification → review appears on book's detail page and author's profile

- Logged-in user creates a book club → names it, writes a description, selects the current book being read → invites other users by username → club has a shared discussion thread where members can post messages and discuss the book

- Logged-in user's home feed shows personalized book recommendations based on their reading history, genres, and followed users' recent activity — with sections for 'Recommended for You', 'Popular This Week', and 'Recent Friend Activity'

<b>Technical Requirements</b>
-
Book data sourced from Google Books API (search, book details, cover images, descriptions, authors, genres). User information is stored with MongoDB on the backend.

<b>Goals For Future Development</b>
-
<i>Book Clubs:</i>

 - curated reading lists based on interests
    - questionaire for clubs (at sign up) for book suggestions
 - Quiz Bowls: Book Clubs can create their own trivia questions and host their own quiz bowl for the book they are reading. 
 
 <i>Trivia Games:</i>

 - Play solo: answer trivia questions about different reading genres.
    - Earn a high-score by answering the most questions right in a row
 - Challenge another user: answer Trivia questions about books in a Jeopardy game.
 - Quiz-bowls: create your own triva questions and invite others to play. 

 <i>User Profile:</I>

 - Users can add a profile picture. 
 - Users can choose from light or dark background. 
 - User's can opt in to link their contacts, to add friends.
 - Items pinned from the main dashboard are saved in folders on user's profile, similar to pintrest.

 <i>Home Dashboard:</i>

- The main dashboard is populated with media, news, and fun articles about books and authors.
 - Like social media for the language arts. 
- Upcoming Events Section with book signings and live readings in your area. 
- New Releases Section highlights highly anticipated new book realeases
- User's can like, comment, and save/pin articles on the main dashboard and access them from their profile.
- Link amazon books for purchasing. 