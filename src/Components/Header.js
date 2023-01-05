import React from 'react';

const Header = () => {
    return (
        <div className='px-10 mt-10 flex'>
            <div className='grid grid-cols-3 bg-gray-400 p-5 w-1/3 font-semibold text-white text-center items-center mr-3'>
                <h1 className='bg-indigo-600 p-3 mr-2'>Max Profit Max loss</h1>
                <h1 className='bg-indigo-600 p-3 mr-2'>Premium received</h1>
                <h1 className='bg-indigo-600 p-3 py-6'>P&L</h1>
            </div>
            <div className='w-2/3 bg-gray-400 flex p-3'>
                <h1 className='w-3/4'>time slider</h1>
                <div className='w-1/4 grid grid-cols-2 gap-5'>
                    <div className='w-full'>
                        <input type="date"  className='py-1  mb-3 pl-3 text-white bg-indigo-600 rounded-2xl  font-semibold w-full' />
                        <input type="time" className='py-1 rounded-2xl text-white bg-indigo-600   pl-3 font-semibold w-full'/>
                    </div>
                    <div  className='w-full'>
                        <input type="text" placeholder='contract..' className='py-1 rounded-2xl text-white bg-indigo-600  pl-3 font-semibold w-full'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;