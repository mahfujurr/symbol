import React from 'react';

const GreeksTable = () => {
    return (
        <div>
            <table className="table text-center w-full backdrop-blur-sm bg-white/30">
                <thead className=''>
                    <tr>
                        <th>B/S</th>

                        <th>CE/PE</th>
                        <th>Strike</th>
                        <th>Delta</th>
                        <th>Theta</th>
                        <th>Vega</th>
                        <th>Gamma</th>
                        <th>IV</th>
                        
                    </tr>
                </thead>
                <tbody>

                    <tr className="border">
                        <th>s</th>
                        <td>c</td>
                        <td>18000.00</td>
                        <td>-0.63</td>
                        <td>5.77</td>
                        <td>-17.29</td>
                        <td>-0.0005</td>
                        <td>15.35</td>
                        
                    </tr>
                    <tr className="border">
                        
                        <td></td>
                        <td></td>
                        <td>Totals:</td>
                        <td>-0.63</td>
                        <td>5.77</td>
                        <td>-0.0005</td>
                        <td>15.35</td>
                    </tr>


                </tbody>
            </table>
        </div>
    );
};

export default GreeksTable;