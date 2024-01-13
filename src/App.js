import './App.css';
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contacts from "./pages/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import FAQ from "./pages/FAQ/FAQ";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/portfolio"} element={<Portfolio/>}/>
                <Route path={"/faq"} element={<FAQ/>}/>
                <Route path={"/contacts"} element={<Contacts/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
