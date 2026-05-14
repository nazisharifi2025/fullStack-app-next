import React from 'react'
import ReviewCart from './review-cart'

function ReviewList({reviews}: {reviews: any}) {
  return (
    <div className=' flex w-full flex-col'>
        {reviews.map((re:any , index: number)=>(
            <ReviewCart key={index} review={re} />
        ))}
    </div>
  )
}

export default ReviewList