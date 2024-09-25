//-> with help of this whenever we need something in card just import it and wrap in component see FeedBackItem.js
import React from 'react'
import propTypes from 'prop-types'
import FeedBackItem from '../FeedBackItem'
function Card({children,reverse=false}) { //in FeedBackItem--> card mein wrap kra item aur rating ko toh voh uske children hue 
//   return (
//     //this is called as conditional class
//     <div className={`card ${reverse && 'reverse'}`}>{children}</div> //reverse to change the color
//   )

 return(

    //2. this is called as conditional style (change color using style)
    <div className='card' style={{
        backgroundColor:reverse? 'rgba(0,0,0,0.4)': '#fff',
        color:reverse? '#fff':'#000',
    }}> {children}</div>
 )
}

Card.propTypes={
    children: propTypes.any
}
export default Card

