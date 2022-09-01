import { useState } from "react"
import FeedBackItem from "./components/FeedBackItem"
import FeedBackList from "./components/FeedBackList"
import Header from "./components/Header"
import FeedBack from "./data/feedBack"
function App(){
    const [feedBack,setFeedback]= useState(FeedBack)
    return (
        <>
        <Header/>
        <div className="container">
        <FeedBackList feedBack={feedBack}/>
        </div>
    </>
    
    )
}
export default App 