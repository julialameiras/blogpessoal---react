import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import { useContext } from "react";

function Navbar() {

  const navigate = useNavigate();

  const {handleLogout} = useContext(AuthContext)

  function logout(){
    handleLogout();
    alert("O usuário foi desconectado com sucesso!");
    navigate("/")
  }


  return (
    <>
    <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
    <div className="container flex justify-between text-lg">
    <div className='text-2x1 font-bold uppercase'>Blog Pessoal</div>

            <div className='flex gap-4'>
            <Link to='/login' className='hover:underline'> Login</Link>
            <Link to='/home' className='hover:underline'> Home</Link>
              Postagens
              Temas
              Cadastrar tema
              Perfil
              <Link to='' onClick={logout} className="hover:underline">
              Sair
              </Link> 
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar