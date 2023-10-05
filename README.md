 # Front-end Development Test CACI
 Anusha Jaddu

## Technologies

          ReactJS -V18

          NodeV16 

          SASS

          
Implemented a responsive web page that displays starship information, sorts the starships by crew size, styles the page with SASS, allows users to search for specific starships, and applies an icon to the starship with the most films. 

## Implementation Steps

## Fetching Starship Data:

Created two essential components, Starship.jsx and StarshipList.jsx, dedicated to the retrieval and display of starship data.

## The RESTfull API.
Access starship information from SWAPI('https://swapi.dev/api/starships') and implement api.js with Axios to fetch data from API.

## Styling with SASS (SCSS):

Create responsive styles using Flex and media queries to adapt the layout for different screen sizes.

##  Data Manipulation:

Filtered starships, excluding those with a crew size exceeding 10 and applied Sorting the remaining starships based on the "crew" in ascending order.

## Displaying Data:

Created a responsive layout for the starship list by Map over the filtered and sorted starship data and render each starship's information within its own container.
Displayed the starship's name, model, the number of films it appears in, and an associated image.

##  Added below Extra features

##  Search Functionality

Implement a search feature, enabling search for specific starships by name. The application dynamically filters the displayed starships based on the search query.

## Determining Most Films

developed which starship has appeared in most films and applied Icons to Most Films Starship with animation and Conditionally rendering an icon next to the starship that has appeared in most films.

## Displaying the starship icon for each starship name.

##  Adding a Loader

Enhance the user experience by incorporating a loader that is displayed prior to fetching data from the API. This provides users with visual feedback while the application loads content.

## Custom Fav Icon:
Added a personalized favicon, symbolizing the Star Wars project. This favicon adds a distinctive element to the user's browsing experience.


## API Reference
API.js - fetchStartshipList()


```http
  GET /api/fetchStartshipList


## INSTALLATION

          Node install v16.16.0 

          React 18.0.0 
          

## Run Project

          npm install

          npm start


## Screenshots
## Desktop



## Mobile

