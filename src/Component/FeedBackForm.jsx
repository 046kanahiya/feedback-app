import React, {useState} from "react";
import Card from "./Shared/Card";
import Button from "./Shared/Button";
import Rating from "./Rating"
function FeedBackForm({handleAdd}) {
    //this is store/fetch whatever user writes on input  
    const [text,setText] = useState('');
    const [rating,setRating] =useState(10)
    //to handle the input validation
    const [disabled,setDisabled] = useState(true);
    const [message,setMessage] = useState('');
    
    const handleInputChange=(e)=>{
        if(text.length===0){
            setDisabled(true);
            setMessage(null);
        }
        else if(text.length !==0 && text.trim().length<=10){
            setDisabled(true);
            setMessage("Feedback must be 10 character long")
        }
        else{
            setDisabled(false);
            setMessage(null);
        }
        //console.log(e.target.value)
        setText(e.target.value)
    }
    //form ke andar main handle submit
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(text.length>10){
            const newFeedBack ={
                text,
                rating
            }
            handleAdd(newFeedBack);
            setText('')
        }
    }
    return (
        
            <Card>
                <form onSubmit={handleSubmit}>
                    <h2>How much do you rate our service</h2>
                    <Rating select={(rating)=> setRating(rating)}/>
                    <div className="input-group">

                    <input type="text"  onChange={handleInputChange} value={text} placeholder= "Write your feedback here" />
                        <Button childern="random" type='submit' isDisabled={disabled} >Send</Button>
                    </div>
                    {message && <div className="message">{message} </div>}
                </form>
            </Card>
        
    )
}

export default FeedBackForm;