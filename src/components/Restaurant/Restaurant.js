import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import OrderList from '../OrderList/OrderList';
import './Restaurant.css';

const Restaurant = () => {
    const [meals, setMeals] = useState([]);
    const [orders, setOrders] = useState([]);
    const [search, setSearch] = useState('');

        // if(inputvalue){
        //     inputValue = document.getElementById('input').value;
        // }
        // else{
        //     inputValue = 'fish';
        // }

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, [search]);

    // console.log(search)
    // const handleChange =(e)=>{
    //     console.log(e.target.value);
    //     setInputvalue('fish');
    // }

    const addToCart =(id)=>{
        let quantity = 0;
        if(meals.idMeal === id){
            quantity+=1;
        }
        setOrders(quantity)
    }
    /* 
        The above api link or the below method will now work for search. 
        if you want to implement search in this code. 
        1. add a input field 
        2. declare a state to keep search field text
        3. Make meal loading api to dependant on search text
        4. change the meal loading api.you will get the right api link on their website.
        5. make the meal loading api dynamic using template string. 
        6. Also, the useEffect below will not work. Because, search result might not include the meals previously added to the cart
        7. in that case, for each mealId, you have to load the meal from the api (you will find a new pai to load meal by Id) and then add them to the order state.
        ---------------  
        Read carefully, give it a try. [ Ki ache jibone]
        if  you need help, let us know in the support session
    */
    

    return (
        <div>
            <input className='w-25 m-3 bg-info-subtle p-1 rounded text-warning' onChange={(e)=>setSearch(e.target.value)} placeholder='Please Search the food you like' type="text" name="" id="input" />
            <div className="restaurant-menu m-4">
                <div className="meals-container">
                    {
                        meals?.map(meal => <Meal
                            key={meal.idMeal}
                            meal={meal}
                            addToCart={addToCart}
                        ></Meal>)
                    }
                </div>
                <div className="order-list">
                    <OrderList orders={orders}></OrderList>
                </div>
            </div>
        </div>
        

    );
};

export default Restaurant;