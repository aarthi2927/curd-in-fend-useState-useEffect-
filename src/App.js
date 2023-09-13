import './App.css';
import {useState} from 'react';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { MovieList } from './MovieList.1';
import { initial_MovieList } from './initial_MovieList';
import { MovieDetails } from './MovieDetails';
import { AddMovie } from './AddMovie';
import { EditMovie } from './EditMovie';

function App() {
    const [movielist,setMovieList]=useState(initial_MovieList);
           const name1 = "movie app";
        
    return (
      <div className="App">
                <h1>Hello {name1}</h1>
                <Router>
                 <Routes>
                  <Route path='/movie/:id' element={<MovieDetails movielist={movielist}/>}/>
         <Route path='/movie/add' element={<AddMovie movielist={movielist} setMovieList={setMovieList}/>}/>
         <Route path='/movie/edit/:id' element={<EditMovie movielist={movielist} setMovieList={setMovieList}/>}/>
          <Route path='/movie' element={<MovieList movielist={movielist} setMovieList={setMovieList}/> }/>
           </Routes></Router>
              </div>
    );
     }
    export default App;