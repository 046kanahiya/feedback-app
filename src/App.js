import React, { useState } from "react"
import Header from "./Component/Header";
import FeedBackData from "./Data/FeedBackData";
import FeedBackList from "./Component/FeedBackList";
function App() {
    const [Feedback,setFeedback] = useState(FeedBackData)
    const deleteFeedback = (id)=>{
        
        //console.log('app',id)
        if(window.confirm('Are you sure you want to delete?'))
       setFeedback(Feedback.filter((item)=>{
            return item.id !==id; // ie jo id match nhi hai usse chod kr sab dede
       }))
    }
    return (
        <>
        <Header text ={"FeedBack UI"} bgColor="black" textColor="red"/>
        <div className="container">
            <FeedBackList feedback ={Feedback} handleDelete={deleteFeedback}/> 
            
        </div>
        </>
    )
}
export default App;