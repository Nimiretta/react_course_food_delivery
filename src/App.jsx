import './App.css';
import { Menu } from './pages/Menu';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useState } from 'react';

function App() {
  const [cartCounter, setCartCounter] = useState(0);

  return (
    <>
      <Header cartCounter={cartCounter} />
      <Menu setCartCounter={setCartCounter} />
      <Footer />
    </>
  );
}

export default App;
