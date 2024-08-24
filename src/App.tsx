import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"

function App() {
//código typescript

  return (
    //código tsx = html + css
    <>
    {/* <h1>Turma Javascript 05</h1>
    <h2>React é divertido!</h2>*/}
    <BrowserRouter>
    <Navbar />
    <div className="min-h-[80h]">
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Home />} />
    </Routes>
    </div>

    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App
