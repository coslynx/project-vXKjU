import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('api/reviews');
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews: ', error);
      }
    }

    fetchReviews();
  }, []);

  const renderReviews = () => {
    return reviews.map(review => (
      <div key={review.id}>
        <h3>{review.title}</h3>
        <p>{review.content}</p>
        <p>Rating: {review.rating}</p>
      </div>
    ));
  }

  return (
    <div>
      <h2>User Reviews</h2>
      {renderReviews()}
    </div>
  );
}

export default UserReview;