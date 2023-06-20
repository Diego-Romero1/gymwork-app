import Home from "./Pages/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import NewVideo from "./Pages/NewVideo";


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
       <Header/>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/NewVideo' element={<NewVideo/>} />
       </Routes>
       <Footer/>
    </Router>
     

  );
}

export default App;
