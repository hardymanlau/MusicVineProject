The files in the repo are from the travel website my group created as part of the CFG degree. The music vine project is under the folder 'musicvinesongs'. 



## How to create your own API key 

### Fixer API 
To create your own Fixer API key, follow these instructions:
- Navigate to https://fixer.io/
- Click the "Get free API key" button from the navigation bar
- Click on the "subscribe" button under the Free $0 plan
- Fill out the form and click the "subscribe" button
- Once you have successfully subscribed, you will be redirected to a page where you can click the "visit dashboard"
- In your dashboard you will now see "Your API access key" 
- Paste the api key in the src/components/Resources/CurrencyConverter.js on line 16.

### Trip Advisor Api
To create your own Fixer API key, follow these instructions: 
- Navigate to https://rapidapi.com/DataCrawler/api/tripadvisor16
- On the page, the middle section will show details of each endpoint. If you scroll, it should 'sign up for key'
- On the top right of the page, click sign up and enter details for an account
- After signing up, naviagte back to the same page and you should be provided with a key
- Copy and paste the key in the src/pages/Restaurants/Restaurants.js in the 'apiKey' variable

## Overview of project 

**NS Travel Services is a website designed to help users to plan their holiday, providing:**

- City break recommendations depending on the user
- Sightseeing recommendations including maps to see where each sight is
- Resources including currency conversion and links to Booking.com to book hotels, Skycanner to book flights, travel map to keep track of where you’ve been, and Government Foreign Travel advice
- Restaurants listing the top restaurants for the user’s inputted city
- Itinerary planning, where the user can add activities they want to do on which days, and download this as a pdf

## Navigating the website
At the top of each page is a navbar, where the user will be able to seamlessly switch between the tabs. 

Users will begin on the Home page.
Underneath the Header on the Home page, the user can link to the City Breaks page, and see a selection of a few top cities. 
Below, there is a carousel of the top sightseeing attractions for each city, followed by reviews at the bottom so the user can see what people think about NS Travel Services. 

From the home page, the user can navigate to the City Breaks page using the nav bar at the top. This then gives the user the option to select recommended city breaks for couples (22-35 y/o), families, solo travellers (18-22 y/o) and a list of all our recommended cities. 

Once they’ve seen which city they would like to visit, the user can head to the Sightseeing tab, and see a list of top sights to see, followed by a map pinpointing their locations.

Using the navbar at the top of the page, the user can navigate to the Resources tab, where they can use the cards in the centre of the page to go to Booking.com for hotels, Skyscanner for flights, Gov.uk for Government Foreign Travel advice, and Been Travel Map to log where they’ve been before. Below is the currency converter, where the user can enter the amount they would like to convert and the currency they need to convert it into. 

At this point, the user can have their holiday booked, and continue to use our site for further holiday planning. The Restaurants tab will provide them with a list of the top restaurants in the city they’re visiting. 

With the recommendations for which city to visit, sights to see and their locations and restaurants, the client can then use the Itinerary page to plan out what they want to do, adding dates and times to the activity. This itinerary can be downloaded, and using the icon at the bottom of the pdf, the client can navigate back to our website to see further recommendations. 





