import React, {useState} from 'react'

function DynamicRender() {
    const [showComment,setShowComment] = useState(true);
    const title = "Blog post"
    const body = "This is my blog post channel!!"
    const comments = [ // array of object
        { id: 1, text: "comment 1" },
        { id: 2, text: "comment 2" },
        { id: 3, text: "comment 3" },
        { id: 4, text: "comment 4" }
    ]  
        const HandleClick = ()=>{
            console.log("clicked")
            setShowComment((prev)=>!prev); //toggle state 
        }
  
   //m1
    // const loading = false
    //if(loading) return <h1>loading...</h1>
    
    // return (
    //     <div className="container">

    //         <h1> {title.toUpperCase()}</h1>
    //         <p>{body}</p>
    //         <button onClick={HandleClick}>{showComment?'Show Comment' : 'Hide Comment'}</button>
    //         {showComment && (<div className="comments">
    //             <h4>Total Comments are {comments.length}</h4>
    //             <ul>
    //                 {comments.map((comment, index) => (
    //                     <li key={index}>
    //                         {comment.text}
    //                     </li>
    //                 ))}
    //             </ul>
    //         </div>)}
    //         {!showComment && (<h4>no comments are there</h4>)}
            
            
    //     </div>
    // )
    return (
        <div className="container">

        <h1> {title.toUpperCase()}</h1>
        <p>{body}</p>
        <button onClick={HandleClick}>{showComment?'Show Comment' : 'Hide Comment'}</button>
        {showComment? (<div className="comments">
            <h4>Total Comments are {comments.length}</h4>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>
                        {comment.text}
                    </li>
                ))}
            </ul>
        </div>):
         (<h4>no comments are there</h4>)}
        
        
    </div>
  )
}

export default DynamicRender