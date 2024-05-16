import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import { useDispatch } from 'react-redux'
import { addUsers } from '../redux/slice'
import { List } from './list'


export const UserForms = () => {
    const dispatch = useDispatch()
    const [values, setValue] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const submitVlue = (e) => {
        e.preventDefault();
        console.log(values);

        dispatch(addUsers(values))

    }
    const handleChange = (e) => {
        let { name, value } = e.target;
        setValue({
            ...values, [name]: value
        })

    }

    return (
        <div className='container'>
            <h2 className=''>User Details</h2>
            {/* <Link to='/list'>List</Link> */}
            <form className='mt-3'>
                <div className='col-md-6 col-12' >
                    <label className='form-label'>User Name</label>
                    <input className='form-control form-outline-true' name='name' type='text' value={values.name} onChange={handleChange} />
                </div>
                <div className='col-md-6 col-12 mt-3' >
                    <label className='form-label'>Email</label>
                    <input className='form-control form-outline-true' name='email' type='text' value={values.email} onChange={handleChange} />
                </div>
                <div className='col-md-6 col-12 mt-3' >
                    <label className='form-label'>Phone</label>
                    <input className='form-control form-outline-true' name='phone' type='tel' value={values.phone} onChange={handleChange} />
                </div>
                <div className='col-md-6 col-12 mt-3' >
                    <button className='btn btn-success' onClick={submitVlue}>Submit</button>
                </div>
            </form>
            <List />
        </div>
    )
}
