import React from "react";
import propTypes from "prop-types";
function FeedBackStatus({feedback}){
    //cal average rating 
    let average = feedback.reduce((acc,cur)=>{
            return acc+cur.rating;
    },0)/feedback.length 

    average= average.toFixed(1)
   return (
    <div className="feedback-status">

        <h4> {feedback.length} Review </h4>
        <h4> Average Rating: {isNaN(average)?0 : average} </h4>
    </div>

   )
}

FeedBackStatus.prototype={
    feedback: propTypes.array.isRequired
}
export default FeedBackStatus;