import React, { useState } from 'react'
// Styles
import { FormContainer, Label, TextArea, SubmitInput, CancelButton } from './styles';

const AddReviewForm = (props) => {
  const { gamesState, setGames, gameIndex, closeForm } = props;
  const [review, setReview] = useState('');

  const handleChange = event => {
    const { value } = event.target;
    setReview(value);
  }

  const handleSubmit = event => {
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
    closeForm();
    event.preventDefault();
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label>Write a review:</Label>
      <TextArea
        type="text"
        value={review}
        onChange={handleChange}
        placeholder="Your review here"
      />
      <SubmitInput type="submit" value="Submit your review" disabled={!review} />
      <CancelButton type="button" onClick={() => closeForm()}>Cancel</CancelButton>
    </FormContainer>
  )
}

export default AddReviewForm