I was unable to fully get either the API or local JSON file working, however, I feel I was really close. 

I have commented out a few of my different attempts for the API/Json file in 'DisplaySongs.js'

The tracks.json file is in the public folder, however, I have also tried moving it to the src folder to see if that was the problem, as well as direclty importing the data from the file. 

With more time, after getting the API/json file to work, I would check the FavouritesButton worked as I want it to, finalising the way to target specific songs. I would also change the shape of the button to be a heart so that it fits with user's experiences with other websites and apps and they would know that means to favourite or like the song. 

To allow users to view their favourites, I would create a component which consists of a drop-down search bar, with 2 options: 'all songs' or 'favourites'.
If the user selects favourites, this would invoke the view favourites function, where there is a query parameter set to search for songs with the favourites tag in the API. 

I would also add tests to each component to make sure they render on screen properly. 

The page would automatically load the full track list, with the favourites drop-down above. This would draw the users attention first to the complete list of tracks, and then to the options to narrow down. 
