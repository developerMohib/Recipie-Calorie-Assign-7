// import React from 'react';
import { useEffect, useState } from 'react';
import './RecipieDisplay.css'

const RecipieDisplay = ( {handleCook} ) => {
    const [myRecipie, setMyRecipie] = useState([]) ;
    
    useEffect( () => {
        fetch('recipie.json')
        .then(res => res.json())
        .then(data => setMyRecipie(data))
    },[] )
    // console.log(myRecipie);

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
                                                    <li className='text-left'> {idx + 1}. {item} </li>
                                                </div>
                                            )
                                        } )
                                    }
                                    <div className='flex justify-around'>
                                        <h5 className='text-gray-600'> {recipie.preparing_time} Minutes </h5>
                                        <h5 className='text-gray-600'> {recipie.calories} Callories </h5>
                                    </div>
                                    <div className="card-actions justify-end">
                                    <button onClick={ () => handleCook(recipie) } className="btn bg-[#0be58a] text-black hover:bg-slate-200 border-none rounded-full ">Want to Cook</button>
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