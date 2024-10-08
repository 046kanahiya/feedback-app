import React from 'react'
// import FeedbackData from '../Data/FeedBackData'
import FeedBackItem from './FeedBackItem'
function FeedBackList({feedback}) {
    if(!feedback || feedback.length===0) return <p>No Feedback yet</p>
  return (
    <>
        <div className="feedback-list"> {feedback.map((item)=>(
            <FeedBackItem key ={item.id} item ={item}/>
        ))}

        </div>

    </>
  )
}

export default FeedBackList