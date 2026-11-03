// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  const goToRecipe = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <section className="home">
      <h1 className="title">Mi Recetario</h1>
      <button className="recipe-btn" onClick={() => goToRecipe(1)} aria-label="Abrir Receta 1">
        Receta 1
      </button>
      <button className="recipe-btn" onClick={() => goToRecipe(2)} aria-label="Abrir Receta 2">
        Receta 2
      </button>
    </section>
  );
}
