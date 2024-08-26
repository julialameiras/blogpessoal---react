import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Cadastro from "./pages/cadastro/Cadastro"
import Login from "./pages/login/Login"


function App() {


  return (
    <>


    <BrowserRouter>
    <Navbar />
    <div className="min-h-[80h]">
    <Routes>
    <Route path="/" element={<Cadastro />} />
    <Route path="/login" element={<Login />} />
    <Route path="/cadastro" element={<Cadastro />} />
    <Route path="/home" element={<Home />} />
    </Routes>
    </div>

    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App
