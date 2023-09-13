import { Movie } from './Movie';

export function MovieList({ movielist,setMovieList}) {
  return (
    <div className="movie-list">
      {movielist.map(({ name, poster, starCast, rating, summary }, index) => (
        <Movie key={index} name={name} poster={poster} starCast={starCast}
          rating={rating} summary={summary}
          deleteButton={<button aria-label="delete" color="error" onClick={()=>{console.log(index);
            const copyMovieList=[...movielist];
            copyMovieList.splice(index,1)
            setMovieList(copyMovieList)
        }}>
   delete
    </button>} 
    id={index}
    />
          ))}
      
    </div>
  );
}

