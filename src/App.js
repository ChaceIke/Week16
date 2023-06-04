import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
// FIrst I import react and the necessary components within react-router-dom to set up a page that can travel between pages. This is an SPA.

// Pages
import LoginPage from './Pages/login-page';
import Home from './Pages/home';
import About from './Pages/about';
import UnicornList from './Pages/company-unicorns';

// This is my App component and it contains the browser router.
// Within the header element are the NavLinks which can be clicked.

// Within the main element the Routes are set up with each one linking to a different page component which are each imported above.
function App() {
  return (
    <BrowserRouter>
    <header>
      <nav>
        <h1>Securicorp</h1>
        <NavLink to='/'>LoginPage</NavLink>
        <NavLink to='home'>Home</NavLink>
        <NavLink to='about'>About</NavLink>
        <NavLink to='unicornlist'>Employee Pet Unicorns</NavLink>
      </nav>
    </header>
    <main>
      <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='home' element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='unicornlist' element={<UnicornList />}/>
      </Routes>
    </main>
    </BrowserRouter>
  );
}


export default App;