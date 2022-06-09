import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
import Banner from './component/Banner';
import MoviesList from './component/MoviesList';
import Favourites from './component/Favourites';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path='/' element={<> <Banner /> <MoviesList /> </>} />
        <Route path='/favourites' element={<Favourites />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
