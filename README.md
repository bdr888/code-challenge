# Code challenge

Clone this repo, complete the tasks in the acceptance criteria below, and then send us a link to your repo.

We made this project with create-react-app. See their documentaion here: https://github.com/facebook/create-react-app.


## Acceptance criteria:

* As a user, when I come the homepage I will see a list of all the Star Wars films:
  * Use the existing <Tile /> component to display the data.
  * Display the `title` and the `director` from the API.
  * See the API's documentation: (https://swapi.co/documentation)

* As a user when I select a Tile, I can see that it is selected because it has these styles applied to it:
    * selected:
      * border: 2px solid black
      * box-shadow: 0px 0px 4px 4px #e9e9e9
    
    * not selected
      * border: 2px solid grey
      * box-shadow: none 


* As a user, when I fist come to the page, the first tile is selected.

* As a user on a screen width up 1025px, I will see the tiles stacked vertically, aligned to the center of the page.

* As a user on a screen width wider than 1025px, I will see the tiles aligned horizontally, aligned to the center of the page, allowing tiles to wrap to another row if needed.

* As a user, when I hover over an unselected tile with a mouse, I know that I can click the tile.

* As a user, when I select a film's tile, I can see the film's `opening_crawl` on the page (however you want!).


## Don't stress!
Just work on meeting the acceptance criteria. We don't want you to spend too much time on this. The point of this exercise is to understand your approach to:
  * Fetching data and displaying it in a UI with React
  * State management
  * Responsive website layout
  * User experience and user interface design

If you don't finish everything that's fine. We want to see where you are at and have some code to talk about in person. We will talk about what you would have done if you had more time.
