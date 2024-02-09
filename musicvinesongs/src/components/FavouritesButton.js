import React, { useEffect} from 'react';
import axios from 'axios';

function FavouriteButton(props) {

  function whenButtonPressed() {
    useEffect(() => {
        // will need to make sure there is a way for to take the unique song the 
        // user wants to add as favourite and target that specifically
        axios.post('/id', {
            favourite: 'Favourite'
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }, []);

  return (
    <>
      <button
        onClick = {whenButtonPressed}
      >
        😍
      </button>
    </>
  );
  }
}

export default FavouriteButton;
