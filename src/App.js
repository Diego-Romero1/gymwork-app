import React from 'react';
import { ContextProvider } from "./ContextProvider";
import Home from "./Pages/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import NewVideo from "./Pages/NewVideo";
import NewCategory from "./Pages/NewCategory";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <ContextProvider>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/NewVideo' element={<NewVideo />} />
            <Route path='/NewCategory' element={<NewCategory />} />
        </Routes>
      </ContextProvider>
      <Footer />
    </Router>




  );
}

export default App;
