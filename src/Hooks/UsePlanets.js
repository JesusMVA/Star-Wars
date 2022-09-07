import './App.css';
import NavScrollExample from './components/Navbar/NavbarApp'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Cards from '../pages/Personajes';
import Paginacion from './components/Pagination/Paginacion';





function Home() {

  const onPrevious = () => {
    fetchCharacters(info.prev);
  }

  const onNext = () => {
    fetchCharacters(info.next);
  }

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);

  const initialUrl = "http https://swapi.dev/api/people/";

  const fetchCharacters = (url) => {
  fetch (url)
  .then(response => response.json())
  .then((data) => {
    setCharacters(data.results)
    setInfo(data.info)
  })
  .catch(error => console.log(error))
  };

  useEffect (() =>{
    fetchCharacters(initialUrl)
  }, [])

  return (
    <div className="App">
      <NavScrollExample/>
      <Paginacion prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
      <Cards characters={characters}/>
      <Paginacion prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
    </div>
  );
}

export default Home;