import React from 'react'

const Reviews = (props) => {
  const { reviews } = props;

  if (reviews[0] === '') return <p>There are no reviews yet!</p>

  return (
    <div>
      {reviews.map(review => <p>{review}</p>)}
    </div>
  )
}

export default Reviews;