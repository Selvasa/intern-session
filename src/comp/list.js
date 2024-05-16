import React from 'react'
import { useSelector } from 'react-redux'

export const List = () => {
    const select = useSelector((val) => val.userInfo.userState)
    console.log(select);
    return (
        <div className='container my-5'>
            <div className='table-responsive-lg'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            select?.map((data, i) =>
                            (<tr key={i} className=''>
                                <td className='' >{data.name}</td>
                                <td className=''>{data.email}</td>
                                <td className=''>{data.phone}</td>
                            </tr>)
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
