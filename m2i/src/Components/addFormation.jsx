// Importation des dépendances
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Définition du composant AddFormation
const addFormation = () => {
  // État pour la formation
  const [formation, setFormation] = useState()
  const navigate = useNavigate()

  // Gestionnaire de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault()
    // Requête pour l'ajout de la formation
    axios.post('http://localhost:3000/auth/add_formation', {formation})
    .then(result => {
        if(result.data.Status) {
            // Redirection vers la page de gestion des formations
            navigate('/dashboard/formation')
        } else {
            // Affichage de l'erreur
            alert(result.data.Error)
        }
    })
    .catch(err => console.log(err))
  }

  // Affichage du composant
  return (
    <div className='d-flex justify-content-center align-items-center h-75'>
      <div className='p-3 rounded w-25 border'>
          <h2>Ajouter une formation</h2>
          <form onSubmit={handleSubmit}>
              <div className='mb-3'>
                  <label htmlFor="formation"><strong>Formation:</strong></label>
                  <input type="text" name='formation' placeholder='Enter Formation'
                   onChange={(e) => setFormation(e.target.value)} className='form-control rounded-0'/>
              </div>
              <button className='btn btn-success w-100 rounded-0 mb-2'>Ajouter formation</button>
          </form>
      </div>
    </div>
  )
}

// Exportation du composant AddFormation
export default addFormation