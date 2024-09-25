import React, { useState } from "react"
import Header from "./Component/Header";
import FeedBackData from "./Data/FeedBackData";
import FeedBackList from "./Component/FeedBackList";
function App() {
    const [Feedback,SetFeedback] = useState(FeedBackData)
    return (
        <>
        <Header text ={"FeedBack UI"} bgColor="black" textColor="red"/>
        <div className="container">
            <FeedBackList feedback ={Feedback}/>   
        </div>
        </>
    )
}
export default App;