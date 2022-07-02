import logo from './logo.svg';
import './App.css';
import Header from './pages/header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Book from './pages/book';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </div>
  );
}

export default App;
