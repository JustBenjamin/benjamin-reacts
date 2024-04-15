import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Menu from './pages/Menu';
import Home from './pages/Home';
import Game from './pages/Game';
import Todo from './pages/Todo';
import Trivia from './pages/Trivia';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<Home />} />
          <Route path="Todo" element={<Todo />} />
          <Route path="Game" element={<Game />} />
          <Route path="Trivia" element={<Trivia />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

