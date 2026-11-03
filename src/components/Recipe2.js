// src/components/Recipe2.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Recipe.css';

export default function Recipe2() {
  return (
    <article className="recipe">
      <h2>Espaguetis Aglio e Olio</h2>

      <section className="ingredients">
        <h3>Ingredientes</h3>
        <ul>
          <li>200 g de espaguetis</li>
          <li>3 dientes de ajo</li>
          <li>Chili flakes al gusto</li>
          <li>Aceite de oliva</li>
          <li>Perejil fresco picado</li>
          <li>Sal</li>
        </ul>
      </section>

      <section className="preparation">
        <h3>Preparación</h3>
        <ol>
          <li>Cuocer los espaguetis en agua salada según indicaciones.</li>
          <li>Mientras, sofreír el ajo laminado y los chili flakes en aceite.</li>
          <li>Escurrir la pasta y mezclar con el aceite aromatizado.</li>
          <li>Espolvorear perejil y servir caliente.</li>
        </ol>
      </section>

      <Link to="/" className="back-btn">← Volver al inicio</Link>
    </article>
  );
}
