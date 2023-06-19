import Home from "./Pages/Home";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import NewVideo from "./Pages/NewVideo";


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
       <Header/>
       <Banner/>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/NewVideo' element={<NewVideo/>} />
       </Routes>
       <Footer/>
    </Router>
     

  );
}

export default App;
