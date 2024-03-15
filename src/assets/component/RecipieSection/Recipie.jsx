
import React, { useEffect, useState } from 'react';


const Recipie = () => {
    const [cardList, setCardList] = useState( [] );

    useEffect( () => {
        fetch('recipie.json')
        .then(res => res.json())
        .then( data => setCardList(data))
    },[])
    console.log(cardList)



    return (
        <div>
            <h1 className="mb-5 text-2xl lg:text-5xl font-bold"> Our Recipe1 </h1>


            <div className='grid grid-cols-3 gap-4'>

                <div className='col-span-2'>
                    <div className='grid grid-cols-2 border-4 border-gray-500 gap-4'>

                        {/* maping */}

                           {
                            cardList.map( recipie => (
                                <div key={recipie.recipe_id} className="card bg-gray-100 ">
                                <figure><img src= {recipie.recipe_img} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title "> {recipie.recipe_name} </h2>
                                    <p> {recipie.short_description} </p>
                                    <h2> Impliments : 6 </h2>
                                    <ul>
                                        <li> {} </li>
                                    </ul>
                                    <div className="card-actions">
                                    <button className="btn border-none btn-primary">Buy Now</button>
                                    </div>
                                </div>
                                </div>
                            ) )
                           } 

                        {/* maping */}
                    </div>
                </div> 

                <div className='col-span-1'>
                    <div>
                        <div className='border-2 border-gray-500' > <h3>Want to cook: 777 </h3> </div>
                        <table className='flex items-center justify-between'>
                            <th>Name</th>
                            <th>time</th>
                            <th>About</th>
                        </table>
                            <ol>
                                <li > 
                                    <div className='flex items-center justify-between' >
                                        <h2>Name</h2> 
                                        <h2>About</h2>
                                        <h2>time</h2>
                                        <h2></h2>
                                    </div>
                                </li>
                            </ol>
                    </div>

                    <div>
                        <div className='border-2 border-gray-500' > <h3>Want to cook: 01 </h3> </div>
                        <table className='flex items-center justify-between'>
                            <th>Name</th>
                            <th>time</th>
                            <th>About</th>
                        </table>
                            <ol>
                                <li > 
                                    <div className='flex items-center justify-between' >
                                        <h2>Name</h2> 
                                        <h2>About</h2>
                                        <h2>time</h2>
                                        <h2></h2>
                                    </div>
                                </li>
                            </ol>
                    </div>

                </div>    
            
            </div>

        </div>
    );
};

export default Recipie;