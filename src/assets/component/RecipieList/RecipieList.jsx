import React from 'react';

const RecipieList = () => {
    return (
        <div className='myClassForRecipie'>
            <div className='border-b-2 border-solid border-red-400'>
                <div className=''>
                    <h2>This is Recipie List 0</h2>
                    <div className='flex justify-between px-2'>
                        <h2 className='w-1/4'>Name</h2>
                        <h2 className='w-1/4'>Time</h2>
                        <h2 className='w-1/4'>Callorie</h2>
                        <h2 className='w-1/4'> </h2>
                    </div>
                </div>
                
                <div>
                    <div className='flex justify-between px-2'>
                        <p className='mr-2'> 1 </p>
                        <p className='w-1/4 text-left' >Name</p>
                        <p className='w-1/4 text-left' >Time</p>
                        <p className='w-1/4 text-left' >Callorie</p>
                        <button className='w-1/4 bg-[#0be58a] rounded-full border-none cursor-pointer' > Prepairing </button>
                    </div>
                </div>
            </div>

            <div className='mt-10'>
                <h2>This is Recipie List 00002</h2>
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