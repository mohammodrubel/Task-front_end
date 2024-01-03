import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div className='bg-slate-100'>
        <div className='container mx-auto'>
            <div className='flex justify-between items-center'>
                <div><h3 className='text-3xl p-2 font-bold uppercase'>Logo</h3></div>
                <div>
                    <ul className='flex gap-5'>
                        <li className='font-bold text-gray-600'><Link to='/add-contact'>Add Contact</Link></li>
                        <li className='font-bold text-gray-600'><Link to='/all-contacts'>All Contacts</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navigation
