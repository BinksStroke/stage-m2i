import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Editformateur = () => {
    const {id} = useParams()
    const [formateur, setFormateur] = useState({
        name: "",
        email: "",
        numero: "",
        address: "",
        formation_id: "",
      });
      const [formation, setFormation] = useState([])
      const navigate = useNavigate()

      useEffect(()=> {
        axios.get('http://localhost:3000/auth/formation')
        .then(result => {
            if(result.data.Status) {
                setFormation(result.data.Result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))

        axios.get('http://localhost:3000/auth/formateur/'+id)
        .then(result => {
            setFormateur({
                ...formateur,
                name: result.data.Result[0].name,
                email: result.data.Result[0].email,
                addresse: result.data.Result[0].addresse,
                numero: result.data.Result[0].numero,
                formation_id: result.data.Result[0].formation_id,
            })
        }).catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/auth/edit_formateur/'+id, formateur)
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/formateur')
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }
    
  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Edit formateur</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputName" className="form-label">
              Nom
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Name"
              value={formateur.name}
              onChange={(e) =>
                setFormateur({ ...formateur, name: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              id="inputEmail4"
              placeholder="Enter Email"
              autoComplete="off"
              value={formateur.email}
              onChange={(e) =>
                setFormateur({ ...formateur, email: e.target.value })
              }
            />
          </div>
          <div className='col-12'>
            <label htmlFor="inputSalary" className="form-label">
              Numero
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputSalary"
              placeholder="Enter Salary"
              autoComplete="off"
              value={formateur.numero}
              onChange={(e) =>
                setFormateur({ ...formateur, salary: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Addresse
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputAddress"
              placeholder="1234 Main St"
              autoComplete="off"
              value={formateur.addresse}
              onChange={(e) =>
                setFormateur({ ...formateur, address: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="formation" className="form-label">
              Formation
            </label>
            <select name="formation" id="formation" className="form-select"
                onChange={(e) => setFormateur({...formateur, formation_id: e.target.value})}>
              {formation.map((c) => {
                return <option value={c.id}>{c.name}</option>;
              })}
            </select>
          </div>
          
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Edit formateur
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Editformateur