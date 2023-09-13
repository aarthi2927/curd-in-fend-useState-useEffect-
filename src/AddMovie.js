import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
export function AddMovie({ movielist, setMovieList }) {
  const [name, setName] = useState(" ");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [starCast, setStarCast] = useState("");
  const history=useNavigate();
  return (
    <div className="add-movie-form">
      <input label="Movie Name" placeholder="name" type="text" onChange={(event) => setName(event.target
        .value)} />
      <input label="Movie poster" placeholder=" poster" onChange={(event) => setPoster(event.target
        .value)} />
      <input label="Movie rating" placeholder=" rating" onChange={(event) => setRating(event.target
        .value)} />
      <input label="Movie starCast" placeholder="starCast" onChange={(event) => setStarCast(event.target
        .value)} />
      <input label="Movie summary" placeholder=" summary" onChange={(event) => setSummary(event.target
        .value)} />
      <button variant="contained" onClick={() => {
        const newMovie = {
          name: name,
          poster: poster,
          summary: summary,
          starCast: starCast,
          rating: rating
        };
        setMovieList([...movielist, newMovie]);
        history("/movie");
      }}>Add movie</button>
    </div>
  );

}
