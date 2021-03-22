
import createServer from '../api/mockserver';
import React, { useState} from "react";


const Hotel = (props) => {

  const handleToggle = () =>{
    setIsExpanded(!isExpanded)
 }
  const [isExpanded, setIsExpanded] = useState(false)
  return(
    <div>
      <h2>{props.name}</h2>
      <createServer/>
      {!isExpanded ? null : <div>{props.stars}{props.city}</div>}
      {<button onClick={handleToggle}>{isExpanded?'Show less':'Show more'}</button>}
    </div>
  )
};

export default Hotel;