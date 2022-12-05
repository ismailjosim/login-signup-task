import React, { useState, useEffect } from 'react';

const employs = [
    {
        id: 1,
        date: '11/7/16',
        name: "Arlene McCoy",
        status: "present"
    },
    {
        id: 2,
        date: '2/11/12',
        name: "Eleanor Pena",
        status: "Absent"
    },
    {
        id: 3,
        date: '4/21/12',
        name: "Wade Warren",
        status: "present"
    },
    {
        id: 4,
        date: '8/15/17',
        name: "Jacob Jones",
        status: "Absent"
    },
    {
        id: 6,
        date: '6/19/14',
        name: "Darlene Robertson",
        status: "present"
    },
    {
        id: 7,
        date: '6/21/19',
        name: "Floyd Miles",
        status: "Absent"
    },
    {
        id: 8,
        date: '5/19/12',
        name: "Ralph Edwards",
        status: "present"
    },
    {
        id: 9,
        date: '5/7/16',
        name: "Leslie Alexander",
        status: "present"
    }
]




const AttendanceTable = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://test.nexisltd.com/test', {
            headers: {
                authorization: `bearer token`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setData(data)
            })

    }, [])

    console.log(data);


    return (
        <div className='w-11/12 mx-auto'>
            <div className='text-center my-5'>
                <h2 className='bg-primary text-center inline-block text-white px-5 py-3 text-3xl rounded-md font-semibold'>Attendance information</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>date</th>
                            <th>Employ Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employs.map(data => {
                                const { date, name, status } = data;

                                return (
                                    <tr key={data.id}>
                                        <td>{date}</td>
                                        <td>{name}</td>
                                        {
                                            status === 'present' ?
                                                <td>
                                                    <button className='btn btn-xs btn-success font-thin text-white'>{status}</button>
                                                </td>
                                                :
                                                <td>
                                                    <button className='btn btn-xs btn-error font-thin text-white'>{status}</button>
                                                </td>
                                        }
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
                <p className='text-error font-semibold my-1'>* Here fetch Data is Not found. so I use static Data to show the table</p>
            </div>
        </div>
    );
};

export default AttendanceTable;
