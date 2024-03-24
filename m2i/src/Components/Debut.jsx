import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Debut = () => {

  const navigate = useNavigate();

  // Configuration de l'authentification par défaut avec axios
  axios.defaults.withCredentials = true;

  // Utilisation de useEffect pour effectuer une action après le rendu initial du composant
  useEffect(() => {
    // Envoi d'une requête GET pour vérifier l'état de l'utilisateur connecté
    axios.get('http://localhost:3000/verify')
      .then(result => {
        // Si la requête réussit et renvoie un statut
        if (result.data.Status) {
          // Si l'utilisateur est administrateur, redirection vers le tableau de bord
          if (result.data.role === "admin") {
            navigate('/dashboard');
          } else {
            // Sinon, redirection vers la page de détails du formateur avec son ID
            navigate('/formateur_detail/' + result.data.id);
          }
        }
      })
      .catch(err => console.log(err)); // Gestion des erreurs en cas d'échec de la requête
  }, []); // Le tableau de dépendances est vide, donc cette fonction useEffect ne sera exécutée qu'une seule fois après le rendu initial

  // Rendu du composant
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
      <div className="p-3 rounded w-25 border loginForm">
        <h2 className="text-center">Se connecter en tant que</h2>
        <div className="d-flex justify-content-between mt-5 mb-2">
          {/* Bouton pour se connecter en tant que formateur */}
          <button type="button" className="btn btn-primary" onClick={() => { navigate('/formateur_login') }}>
            Formateur
          </button>
          {/* Bouton pour se connecter en tant qu'administrateur */}
          <button type="button" className="btn btn-success" onClick={() => { navigate('/adminlogin') }}>
            Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Debut;
