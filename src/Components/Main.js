import React from 'react';

const Main = () => {
    const btnBlClasses = 'rounded-lg text-white bg-black py-2 px-3 font-semibold hover:bg-black/80 ease-in-out duration-300';
    const btnIndigoClass = 'rounded-lg text-white bg-indigo-500 shadow-lg mr-3 py-2 px-3 font-semibold hover:bg-indigo-600 ease-in-out duration-300';
    const btnRedClass = 'rounded-lg text-white bg-orange-600 shadow-lg mr-3 py-2 px-3 font-semibold hover:bg-orange-700 ease-in-out duration-300';

    return (
        <div className='flex px-10 mt-5 w-full'>
            <div className='w-1/3 border border-black'>
                <h1>
                    Chart
                </h1>
            </div>
            <div className='w-2/3 flex flex-col justify-center items-center px-10'>
                <button className='rounded-lg text-white bg-indigo-600 py-2 px-3 font-semibold hover:bg-indigo-700 ease-in-out duration-300 '>
                    Add navigation to positions table and greeks table
                </button>
                <div className='flex my-3'>
                    <button className={`${btnBlClasses} mr-4`}>Symbol</button>
                    <button className={`${btnBlClasses} mr-4`}>Valuation Date </button>
                    <button className={`${btnBlClasses} mr-4`}>Time</button>
                    <button className={`${btnBlClasses}`}>Expiry Date</button>
                </div>
                <div className='flex justify-center items-center mb-8'>
                    <h1 className='mr-5'>
                        Option type XX
                    </h1>
                    <button className={`${btnRedClass}`}>FUT B</button>
                    <button className={`${btnIndigoClass}`}>FUT S</button>
                    <input type="text" defaultValue='1' className='w-16 mr-3 border py-2 text-center' />
                    <input type="text" placeholder='Search Strike' className=' mr-3 border py-2 text-center' />
                </div>
                <div className='w-full'>
                    <hr className=" w-full  bg-black border dark:bg-black" />
                    <div className='flex justify-between items-center mx-5 font-semibold text-gray-500 my-1'>
                        <h1>Call LTP</h1>
                        <h1>Strike</h1>
                        <h1>Put LTP</h1>
                    </div>
                    <hr className=" w-full  bg-black border dark:bg-black" />
                </div>

                {/* json data should be map here -start*/}

                <div className='flex justify-between items-center mx-10 font-semibold text-black my-1 w-full'>
                    <h1 className='mr-3 pl-5'>3689.65</h1>
                    <div className='flex justify-center items-center'>
                        <input type="text" defaultValue='1' className='w-16 mr-3 border py-2 text-center' />
                        <button className={`${btnRedClass}`}>B</button>
                        <button className={`${btnIndigoClass}`}>S</button>
                        <h1 className='mr-3'>14500</h1>
                        <button className={`${btnRedClass}`}>B</button>
                        <button className={`${btnIndigoClass}`}>S</button>
                        <input type="text" defaultValue='1' className='w-16 mr-3 border py-2 text-center' />
                    </div>
                    <h1 className='pr-5'>3689.65</h1>
                </div>
                <hr className=" w-full  bg-black border dark:bg-black" />

                {/* json data should be map here -end*/}
            </div>
        </div>
    );
};

export default Main;