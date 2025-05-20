import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import Categories from './pages/CategoriesPage';
import FavoritesPage from './pages/FavoritesPage';
import AboutPage from './pages/AboutPage';
import Nav from './components/Nav';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';

function App() {
  return (
    <>
    <Header/>
      <Nav/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/books' element={<BooksPage />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/favorites' element={<FavoritesPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/*' element={<NotFoundPage/>}/>
      </Routes>
    </>
  );
}

export default App