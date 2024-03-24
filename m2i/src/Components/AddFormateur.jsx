import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddFormateur = () => {
  const [formateur, setFormateur] = useState({
    name: "",
    email: "",
    password: "",
    numero: "",
    address: "",
    formation_id: "",
    image: "",
  });
  const [formation, setFormation] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/formation")
      .then((result) => {
        if (result.data.Status) {
          setFormation(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('name', formateur.name);
    formData.append('email', formateur.email);
    formData.append('password', formateur.password);
    formData.append('address', formateur.address);
    formData.append('numero', formateur.numero);
    formData.append('image', formateur.image);
    formData.append('formation_id', formateur.formation_id);

    axios.post('http://localhost:3000/auth/add_formateur', formData)
    .then(result => {
        if(result.data.Status) {
            navigate('/dashboard/formateur')
        } else {
            alert(result.data.Error)
        }
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Ajouter formateur</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputName" className="form-label">
              Nom
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Entrer Nom"
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
              placeholder="Entrer Email"
              autoComplete="off"
              onChange={(e) =>
                setFormateur({ ...formateur, email: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputPassword4" className="form-label">
              Mot de passe
            </label>
            <input
              type="password"
              className="form-control rounded-0"
              id="inputPassword4"
              placeholder="Entrer mot de passe"
              onChange={(e) =>
                setFormateur({ ...formateur, password: e.target.value })
              }
            />
            <label htmlFor="inputNumero" className="form-label">
              Numero de telephone
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputNumero"
              placeholder="Entrer Numero"
              autoComplete="off"
              onChange={(e) =>
                setFormateur({ ...formateur, numero: e.target.value })
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
              placeholder=" Entrer votre adresse"
              autoComplete="off"
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
          <div className="col-12 mb-3">
            <label className="form-label" for="inputGroupFile01">
              Select Image
            </label>
            <input
              type="file"
              className="form-control rounded-0"
              id="inputGroupFile01"
              name="image"
              onChange={(e) => setFormateur({...formateur, image: e.target.files[0]})}
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Ajouter un formateur
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFormateur;