import { useState, useEffect } from 'react';
import './FetchHero.scss';
import '../Research/Research';
import Research from '../Research/Research';

const API_URL = 'https://www.superheroapi.com/api.php/925cd44e05e19a39af750b862a982e8f/';

export default function FetchHero() {
  const [heroes, setHeroes] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeros = async () => {
      try {
        const response = await fetch(`${API_URL}search/a`);
        const data = await response.json();
        console.log(data.results); 
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
    <div>
      <Research heroes={heroes} setHeroes={setHeroes} />
    </div> 
  );
}