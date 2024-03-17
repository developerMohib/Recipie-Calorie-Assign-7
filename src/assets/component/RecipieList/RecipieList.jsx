import React from 'react';

const RecipieList = ( {cook} ) => {
    // console.log(cook = cook);
    return (
        <div className='myClassForRecipie'>
            <div className=''>
                <div className=''>
                    <h2>This is Recipie List {cook.length} </h2>
                    <div className='flex justify-between px-2'>
                        <h2 className='w-1/4'>Name</h2>
                        <h2 className='w-1/4'>Time</h2>
                        <h2 className='w-1/4'>Callorie</h2>
                        <h2 className='w-1/4'> </h2>
                    </div>
                </div>
                {
                    cook.map( (item, idx) => {
                        return (
                            <div key={idx} className='flex justify-between px-2 bg-gray-300 my-5 rounded-lg'>
                            <p className='mr-2'> {idx + 1}. </p>
                            <p className='w-1/4 text-left' > {item.recipe_name} </p>
                            <p className='w-1/4 text-left' > {item.preparing_time} </p>
                            <p className='w-1/4 text-left' >{item.calories} Cal</p>
                            <button className='w-1/4 bg-[#0be58a] rounded-full border-none cursor-pointer' > Prepairing </button>
                    </div>
                        )
                    } )
                }
            </div>

            <div className='mt-10'>
                <h2>This is Recipie List {cook.length} </h2>
                <div className='flex justify-between px-2'>
                        <h2 className='w-1/4'>Name</h2>
                        <h2 className='w-1/4'>Time</h2>
                        <h2 className='w-1/4'>Callorie</h2>
                        <h2 className='w-1/4'> </h2>
                </div>
                
                <div className=''>
                    <div className='flex justify-between px-2 border-b-2 border-solid border-gray-500'>
                        <p className=''> 1 </p>
                        <p className=' ' >Name</p>
                        <p className=' ' >Time</p>
                        <p className=' ' >Callorie</p>
                    </div>
                </div>

                <div className='grid grid-cols-2'>
                    <div className='grid-cols-1'></div>
                    <div className='grid-cols-1'>
                        <h3> total time = <span>100</span> minutes </h3>
                        <h3> total Callorie = <span>11111</span> jull </h3>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RecipieList;