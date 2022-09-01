import React, { useState } from 'react'
import Card from "./shared/Card"
import PropTypes from "prop-types"

const FeedBackItem = ({item}) => {
  const [rating, setrating] = useState(7)
  const [feedBackText, setfeedBackText] = useState("This is my first Feedback")

  return (
  <Card>
    <div className="num-display">{item.rating}</div>
    <div className="text-display">{item.text}</div>
  </Card>        
    
  )
}
FeedBackItem.prototype = {
  item:PropTypes.object.isRequired,
}

export default FeedBackItem
