import React, { useState } from "react"
import Header from "./Component/Header";
import FeedBackData from "./Data/FeedBackData";
import FeedBackList from "./Component/FeedBackList";
import FeedBackStatus from "./Component/FeedBackStatus";
import FeedBackForm from "./Component/FeedBackForm";
function App() {
    const [feedback,setFeedback] = useState(FeedBackData)
    const deleteFeedback = (id)=>{
        
        //console.log('app',id)
        if(window.confirm('Are you sure you want to delete?'))
       setFeedback(feedback.filter((item)=>{
            return item.id !==id; // ie jo id match nhi hai usse chod kr sab dede
       }))
    }
    return (
        <>
        <Header text ={"FeedBack UI"} bgColor="black" textColor="red"/>
        <div className="container">
            <FeedBackForm/>
            <FeedBackStatus feedback= {feedback}/>
            <FeedBackList feedback ={feedback} handleDelete={deleteFeedback}/> 
            
        </div>
        </>
    )
}
export default App;