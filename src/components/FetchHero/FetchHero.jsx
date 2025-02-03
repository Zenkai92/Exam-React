import React, { useState, useEffect } from 'react';
import './FetchHero.scss';

const API_URL = 'https://www.superheroapi.com/api.php/925cd44e05e19a39af750b862a982e8f/';

export default function FetchHero() {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeros = async () => {
      try {
        const response = await fetch(`${API_URL}search/a`);
        const data = await response.json();
        console.log(data.results); // Ajoutez cette ligne pour vérifier les données
        setHeroes(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des super héros :', error);
        setLoading(false);
      }
    };

    fetchHeros();
  }, []);

  if (loading) {
    return <div className="loader"><div className="loader-icon"></div></div>;
  }

  return (
    <div className="hero-container">
      {heroes.map((hero) => (
        <div key={hero.id} className="hero-card">
          <img src={hero.image.url} alt={hero.name} className="hero-image" />
          <h3>{hero.name}</h3>
          <p><strong>Full Name:</strong> {hero.biography['full-name']}</p>
          <p><strong>Publisher:</strong> {hero.biography.publisher}</p>
        </div>
      ))}
    </div>
  );
}