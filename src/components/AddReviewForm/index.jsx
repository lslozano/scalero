import React, { useState } from 'react'

const AddReviewForm = (props) => {
  const { gamesState, setGames, gameIndex } = props;
  const [review, setReview] = useState('');

  const handleChange = event => {
    const { value } = event.target;
    setReview(value);
  }

  const handleSubmit = event => {
    console.log('A new review was submitted', review);
    const games = [...gamesState];
    const { reviews } = games[gameIndex];

    if (reviews[0] === '') {
      reviews[0] = review;
    } else {
      reviews.push(review);
    }

    const game = {
      ...games[gameIndex],
      reviews,
    }

    games[gameIndex] = game;

    setGames(games);
    setReview('');
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Write a review:</label>
      <textarea
        type="text"
        value={review}
        onChange={handleChange}
        placeholder="Your review here"
      />
      <input type="submit" value="Submit your review" />
    </form>
  )
}

export default AddReviewForm