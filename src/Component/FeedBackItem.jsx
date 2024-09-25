

//how the feedback card will be look like

import Card from "./Shared/Card";
import propTypes from "prop-types";
function FeedBackItem({item}){

    return(
        <>
             <Card>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
             </Card>
           
        </>
 )
}

FeedBackItem.propTypes = {
    item:propTypes.object.isRequired
}
export default FeedBackItem;