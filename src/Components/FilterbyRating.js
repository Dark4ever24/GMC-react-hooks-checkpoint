import React from 'react'
import ReactStars from "react-rating-stars-component";


function FilterbyRating({rating}) {
    return (
        <div style={{display:"flex" , justifyContent:"center" }}   >
            <ReactStars
    count={5}
    onChange={(newRating)=>rating(newRating)}
    size={32}
    activeColor="purple"
  />, 
        </div>
    );
};

export default FilterbyRating;
