import React, {useState} from "react";
import Card from "./Shared/Card";
import Button from "./Shared/Button";
function FeedBackForm() {
    //this is store/fetch whatever user writes on input
    const [text,setText] = useState('');
    
    const handleInputChange=(e)=>{
        //console.log(e.target.value)
        setText(e.target.value)
    }
    return (
        
            <Card>
                <form action="">
                    <h2>How much do you rate our service</h2>
                    <div className="input-group">

                    <input type="text"  onChange={handleInputChange} value={text} placeholder="Write your feedback here" />
                        <Button type='submit' >Submit</Button>
                    </div>
                </form>
            </Card>
        
    )
}

export default FeedBackForm;