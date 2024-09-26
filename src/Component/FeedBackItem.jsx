//how the feedback card will be look like
import {FaTimes} from 'react-icons/fa'
import Card from "./Shared/Card";
import propTypes from "prop-types";
function FeedBackItem({item,handleDelete}){

    // //this is for deleting the card/feedback
    // const handleClick = (id)=>{
    //     console.log(id);
    // }
    return(
        <>
             <Card>
            <div className="num-display">{item.rating}</div>
                <button onClick={()=> handleDelete(item.id)} className="close">
                    <FaTimes color='purple'/>

                </button>
            <div className="text-display">{item.text}</div>
             </Card>
           
        </>
 )
}

FeedBackItem.propTypes = {
    item:propTypes.object.isRequired
}
export default FeedBackItem;