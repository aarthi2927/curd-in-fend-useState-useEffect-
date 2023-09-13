import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export function MovieDetails({ movielist }) {
  const { id } = useParams();
  console.log(id, movielist);
  const movie = movielist[id];
  const nav=useNavigate();
  return (
    <div>
        <div class="movie-detail-container">
        <div class="movie-space">
         <br/>
          <img width="100%" height="750" src={movie.poster} title="YouTube video player"  allowfullscreen/>
          <h3>{movie.name}</h3>
          <h3>{movie.rating}</h3>
        </div>
        <p>{movie.starCast}</p>
        <p>{movie.summary}</p>
        <br/>
        <button variant="outlined"  onClick={()=>nav('/movie')}>
      Back
      </button>
   
      </div>
    </div>

  );

}
