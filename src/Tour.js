import React, { useState } from 'react';

const Tour = ({id,image,price,info,name,removeTour}) => {
  const [readMore, setreadMore] = useState(false);
  return <article className='single-tour'>
    <img src={image} alt={name}/>
      <footer className='tour-info'>
        <h4>{name}</h4>
        <h4 className='tour-price'>${price}</h4>
      </footer>      
      <p> {readMore ? info : info.substring(0,200)}
        <button onClick={() => {setreadMore(!readMore)}}>
          {readMore? 'show less' : 'show more...'}
        </button>
      </p>
      <button className='delete-btn' onClick = {() => {removeTour(id)}}>Not interested</button>
  </article>
};

export default Tour;
