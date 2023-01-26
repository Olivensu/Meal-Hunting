import React from 'react';
import './Meal.css';

const Meal = (props) => {
    const {addToCart} = props;
    const { strMeal, strInstructions, strMealThumb, idMeal } = props.meal;
    
    return (
        <div className="meal">
            <img src={strMealThumb} alt="" />
            <h4>{strMeal}</h4>
            <p>{strInstructions.slice(0, 100)}</p>
            <button onClick={()=>addToCart(idMeal)} className='bg-info border-0 rounded p-2'>Add this Food</button>
        </div>
    );
};

export default Meal;