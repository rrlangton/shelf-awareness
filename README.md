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
 - a place to hold video conferencing for club members
 - a group message thread with app notifications
 - link amazon books/kindle
 - add a Reading Challenges section where book clubs can complete reading goals and challenge other book clubs to competitons, such as, quiz bowls or who can complete their reading goals the fastest.

 <i>Reviews:</i>

 - Users leave reviews by answering a questionaire form with specific questions about their reading experience and reading suggestions for other users. 
 - Reviews can be written by a user or a book club host. 

 <i>User Profile:</I>

 - Social-media-like Dashboard showing friends, clubs, reading history, and user status updates. 
 - Users can share and like photos and videos.
 - Initially a user's profile will have a questionaire at set-up and the user will answer questions about reading preferences and favorite books. 
 - Profiles can be private or public, users can adjust in settings. 
 - User's can link their friends from their contacts or facebook friends, adding anyone that also has this app.

 <i>Home Dashboard:</i>

- After signing in, user's will be directed to the main dashboard that shows the status updates of friends and other public users.
- The main dashboard is populated with videos, pictures, and news articles about books and reading - all from user's of the app.
