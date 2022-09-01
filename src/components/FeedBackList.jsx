import React from 'react'
import FeedBackItem from './FeedBackItem'
import PropTypes from "prop-types"

const FeedBackList = ({feedBack}) => {
  if(!feedBack || feedBack.length === 0){
    return <p>No Feddback availble for now .</p>
  }
  return <div className="feedback-list">
    {feedBack.map((item)=>(
      <FeedBackItem key={item.id} item={item}/>
    ))
    }
  </div>
  
}
FeedBackList.prototype = {
  feedBack:PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.number.isRequired,
    rating:PropTypes.number.isRequired,
    text:PropTypes.string.isRequired,
  })),
}

export default FeedBackList