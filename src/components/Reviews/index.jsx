import React from 'react'
// Styles
import { ReviewContainer } from './styles';

const Reviews = (props) => {
  const { reviews } = props;

  if (reviews[0] === '') return <ReviewContainer><p>There are no reviews yet!</p></ReviewContainer>

  return (
    <>
      {reviews.map((review, index) => {
        return (
          <ReviewContainer key={index}>
            <p>{review}</p>
          </ReviewContainer>
        )
      })}
    </>
  )
}

export default Reviews;