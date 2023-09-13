import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
export function EditMovie({ movielist, setMovieList }) {
    const history=useNavigate();
    const {id}=useParams();
    console.log(id,movielist);
    const movie=movielist[id];
    console.log(movie);
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [starCast, setStarCast] = useState(movie.starCast);
  
  return (
    <div className="add-movie-form">
      <input label="Movie Name" placeholder="name" type="text"
       onChange={(event) => setName(event.target.value)} value={name}/>
      <input label="Movie poster" placeholder=" poster" onChange={(event) => setPoster(event.target
        .value)} value={poster}/>
      <input label="Movie rating" placeholder=" rating" onChange={(event) => setRating(event.target
        .value)} value={rating}/>
      <input label="Movie starCast" placeholder="starCast" onChange={(event) => setStarCast(event.target
        .value)} value={starCast}/>
      <input label="Movie summary" placeholder=" summary" onChange={(event) => setSummary(event.target
        .value)} value={summary}/>
      <button variant="contained" onClick={() => {
        const updateMovie = {
          name: name,
          poster: poster,
          summary: summary,
          starCast: starCast,
          rating: rating
        };
        const copymovielist=[...movielist];
        copymovielist[id]=updateMovie;
        setMovieList(copymovielist);
        history("/movie");
      }}>save</button>
    </div>
  );

}
