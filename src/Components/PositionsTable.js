import React from 'react';

const PositionsTable = () => {
    return (
        <div>
            <table className="table text-center w-full backdrop-blur-sm bg-white/30">
                <thead className=''>
                    <tr>
                        <th>Entry Date</th>
                        <th>Strike</th>
                        <th>CE/PE</th>
                        <th>Buy/Sell</th>
                        <th>Lots</th>
                        <th>Price</th>
                        <th>LTP</th>
                        <th>Booked Price</th>
                        <th>Booked Date</th>
                        <th>P&L</th>
                        <th>Book/Cancel</th>
                    </tr>
                </thead>
                <tbody>

                    <tr className="border">
                        <th>2022-11-01</th>
                        <td>18000</td>
                        <td>C</td>
                        <td>S</td>
                        <td>1</td>
                        <td>399.1</td>
                        <td>399.1</td>
                        <td>-</td>
                        <td>-</td>
                        <td>0.00</td>
                        <td><button className='btn btn-xs btn-danger'>Delete</button></td>
                    </tr>
                    <tr className="border">
                        <th></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Total P&L</td>
                        <td>0.00</td>
                        <td></td>
                    </tr>


                </tbody>
            </table>
        </div>
    );
};

export default PositionsTable;