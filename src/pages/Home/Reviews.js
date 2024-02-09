import React, { useState } from 'react';
import './Reviews.css';
import Miguel from './homeimages/Miguel.jpeg';
import Jess from './homeimages/Jess.jpeg';



function Reviews () {
  const [reviews] = useState ([
  { id: 1, author: 'Miguel Samuels', review: 'I used NS Travel Services to plan my first solo trip. It\'s a great tool that made planning a walk in the park!',
    avatarImage: Miguel },
  { id: 2, author: 'Jess Kopperman', review: 'Incredibly pleased with this service. Can\'t wait to plan my next trip.',
    avatarImage: Jess },

  ]);

return (
  <div>
  <h1 className='h1-title'>Reviews</h1>
  <div className="reviews-container">
    {reviews.map((review) => (
      <div key={review.id} className="review">
        <div className="avatar-container">
          <img src={review.avatarImage} alt={review.author} className="avatar-image" />
          <div className="avatar-placeholder"></div>
        </div>
        <div className="review-content">
          <p className="review-text">{review.review}</p>
          <p className="review-author">{review.author}</p>
        </div>
      </div>
     ))}
    </div>
    </div>
  );
}

export default Reviews;