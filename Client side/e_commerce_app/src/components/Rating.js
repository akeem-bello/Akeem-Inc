import React from 'react'

const Rating = ({rating})=> {
  return (
    <div>
        <span style={{color:'black'}}>
            <i className={rating >= 1 ? 'fa-solid fa-star' : rating >= 0.5 ? 'fa-solid fa-star-half-alt' : 'fa-regular fa-star'}></i>
        </span>

        <span style={{color:'black'}}>
            <i className={rating >= 2 ? 'fa-solid fa-star' : rating >= 1.5 ? 'fa-solid fa-star-half-alt' : 'fa-regular fa-star'}></i>
        </span>

        <span style={{color:'black'}}>
            <i className={rating >= 3 ? 'fa-solid fa-star' : rating >= 2.5 ? 'fa-solid fa-star-half-alt' : 'fa-regular fa-star'}></i>
        </span>

        <span style={{color:'black'}}>
            <i className={rating >= 4 ? 'fa-solid fa-star' : rating >= 3.5 ? 'fa-solid fa-star-half-alt' : 'fa-regular fa-star'}></i>
        </span>

        <span style={{color:'black'}}>
            <i className={rating >= 5 ? 'fa-solid fa-star' : rating >= 4.5 ? 'fa-solid fa-star-half-alt' : 'fa-regular fa-star'}></i>
        </span>
    </div>
  )
}

export default Rating