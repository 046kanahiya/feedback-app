import React, { useState } from "react"
import { v4 as uuidv4 } from 'uuid' //to generate new id 
import Header from "./Component/Header";
import FeedBackData from "./Data/FeedBackData";
import FeedBackList from "./Component/FeedBackList";
import FeedBackStatus from "./Component/FeedBackStatus";
import FeedBackForm from "./Component/FeedBackForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutIconLink from "./Component/AboutIconLink";
import AboutPage from "./Pages/AboutPage";
function App() {
    const [feedback, setFeedback] = useState(FeedBackData)
    const deleteFeedback = (id) => {

        //console.log('app',id)
        if (window.confirm('Are you sure you want to delete?'))
            setFeedback(feedback.filter((item) => {
                return item.id !== id; // ie jo id match nhi hai usse chod kr sab dede
            }))
    }

    const addFeedback = (newFeedBack) => {
        newFeedBack.id = uuidv4()
        //console.log(newFeedBack)
        //now to add new feedback..its state th4 we cant directly push it th4 we make copy using spread operator
        setFeedback([newFeedBack, ...feedback])
    }
    return (
        <>
            <Router>
                <Header text={"FeedBack UI"} bgColor="black" textColor="red" />
                <div className="container">
                    <Routes>

                        <Route exact path='/' element={
                            <>
                                <FeedBackForm handleAdd={addFeedback} />
                                <FeedBackStatus feedback={feedback} />
                                <FeedBackList feedback={feedback} handleDelete={deleteFeedback} />
                            </>
                        }>
                        </Route>
                        <Route path='/about' element={<AboutPage/>} />
                    </Routes>
                    <AboutIconLink/>
                </div>
            </Router>
        </>
    )
}
export default App;