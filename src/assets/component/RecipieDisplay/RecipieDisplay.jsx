// import React from 'react';
import { useEffect, useState } from 'react';
import './RecipieDisplay.css'

const RecipieDisplay = () => {
    const [myRecipie, setMyRecipie] = useState([]) ;
    
    useEffect( () => {
        fetch('recipie.json')
        .then(res => res.json())
        .then(data => setMyRecipie(data))
    },[] )
    console.log(myRecipie);

    return (
        <div  className="">
            <div className='myClassForRecipie lg:grid grid-cols-3 gap-4'>
                {
                    myRecipie.map(recipie => {
                        return (
                            <div key={recipie.recipe_id} className="card bg-base-100 shadow-xl">
                                <div className="myImageClass"> <img src={recipie.recipe_img} alt="recipe Image" /></div>
                                <div className=" card-body p-2">
                                    <h2> {recipie.recipe_name} </h2>
                                    <p> {recipie.short_description} </p>
                                    <h2> ingredients ({recipie.ingredients.length}) </h2>
                                    {
                                        recipie.ingredients.map( (item, idx) => {
                                            
                                            return (
                                                <div key={idx} className='ml-10'>
                                                    <li className='text-left'> {idx}. {item} </li>
                                                </div>
                                            )
                                        } )
                                    }
                                    <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default RecipieDisplay;