
import { useState } from 'react';
import './Research.scss';

const API_URL = 'https://www.superheroapi.com/api.php/925cd44e05e19a39af750b862a982e8f/search/';

export default function Research() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedHero, setSelectedHero] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}${query}`);
      const data = await response.json();
      setResults(data.results || []);
    } catch (error) {
      console.error('Erreur lors de la recherche des super-héros :', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="research-container">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher un super-héros"
          className="search-input"
        />
        <button type="submit" className="search-button">Rechercher</button>
      </form>
      
      {loading && <p>Chargement...</p>}

      <div className="results-container">
        {results.map((hero) => (
          <div key={hero.id} className="hero-card" onClick={() => setSelectedHero(hero)}>
            <h3>{hero.name}</h3>
            <img src={hero.image.url} alt={hero.name} className="hero-thumbnail" />
          </div>
        ))}
      </div>
      
      {selectedHero && (
        <div className="hero-details">
          <h2>{selectedHero.name}</h2>
          <img src={selectedHero.image.url} alt={selectedHero.name} className="hero-image" />
          <p><strong>Nom complet:</strong> {selectedHero.biography['full-name']}</p>
          <p><strong>Éditeur:</strong> {selectedHero.biography.publisher}</p>
          <p><strong>Première apparition:</strong> {selectedHero.biography['first-appearance']}</p>
          <p><strong>Alignement:</strong> {selectedHero.biography.alignment}</p>
          <p><strong>Lieu de naissance:</strong> {selectedHero.biography['place-of-birth']}</p>
          <p><strong>Occupation:</strong> {selectedHero.work.occupation}</p>
          <p><strong>Genre:</strong> {selectedHero.appearance.gender}</p>
          <p><strong>Race:</strong> {selectedHero.appearance.race}</p>
          <p><strong>Taille:</strong> {selectedHero.appearance.height.join(', ')}</p>
          <p><strong>Poids:</strong> {selectedHero.appearance.weight.join(', ')}</p>
          <p><strong>Couleur des yeux:</strong> {selectedHero.appearance['eye-color']}</p>
          <p><strong>Couleur des cheveux:</strong> {selectedHero.appearance['hair-color']}</p>
          <p><strong>Affiliation:</strong> {selectedHero.connections['group-affiliation']}</p>
          <p><strong>Parents:</strong> {selectedHero.connections.relatives}</p>
          <button onClick={() => setSelectedHero(null)} className="close-button">Fermer</button>
        </div>
      )}
    </div>
  );
}
