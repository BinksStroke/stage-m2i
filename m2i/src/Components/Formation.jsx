import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Formation = () => {

    const [formation, setFormation] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3000/auth/formation')
        .then(result => {
            if(result.data.Status) {
                setFormation(result.data.Result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }, [])
  return (
    <div className='px-5 mt-3'>
        <div className='d-flex justify-content-center'>
            <h3>Liste des formations</h3>
        </div>
        <Link to="/dashboard/add_formation" className='btn btn-success'>Ajouter formation</Link>
        <div className='mt-3'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        formation.map(c => (
                            <tr>
                                <td>{c.name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default Formation