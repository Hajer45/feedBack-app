import React from 'react'
import PropTypes from "prop-types"

const Card = ({children,isReversed}) => {
  return (
    <div className='card' style={{
        backgroundColor:isReversed ? 'rgb(0,0,0,0.4)' :"#fff",
        color: isReversed ? "#fff" : "#000",
    }}>{children}</div>
  )
}
Card.defaultProps = {
    isReversed:false,
}
Card.propTypes = {
    isReversed:PropTypes.bool,
    children:PropTypes.node.isRequired,
}
export default Card