// src/components/Recipe1.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Recipe.css';

export default function Recipe1() {
  return (
    <article className="recipe">
      <h2>Ensalada Mediterránea</h2>

      <section className="ingredients">
        <h3>Ingredientes</h3>
        <ul>
          <li>2 tomates maduros</li>
          <li>1 pepino</li>
          <li>100 g de queso feta</li>
          <li>Aceitunas negras</li>
          <li>Aceite de oliva virgen extra</li>
          <li>Orégano seco</li>
          <li>Sal y pimienta</li>
        </ul>
      </section>

      <section className="preparation">
        <h3>Preparación</h3>
        <ol>
          <li>Cortar los tomates y el pepino en cubos.</li>
          <li>Desmenuzar el queso feta y mezclar con los vegetales.</li>
          <li>Agregar aceitunas, un chorrito de aceite y espolvorear orégano.</li>
          <li>Salpimentar al gusto y servir fresca.</li>
        </ol>
      </section>

      <Link to="/" className="back-btn">← Volver al inicio</Link>
    </article>
  );
}
