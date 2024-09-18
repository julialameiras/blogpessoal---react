import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../utils/toastAlerta'

function Perfil() {
  let navigate = useNavigate()

  const { usuario } = useContext(AuthContext)

  useEffect(() => {
    if (usuario.token === "") {
      toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'erro')
      navigate("/login")
    }
  }, [usuario.token])

  return (
    <div className='container mx-auto mt-4 rounded-2xl overflow-hidden'>
      <img className='w-full h-72 object-cover border-b-8 border-white' src="https://media.licdn.com/dms/image/v2/C4E16AQHlmpiGFYsZfw/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1559359577578?e=1732147200&v=beta&t=d9BzAX_srOaCRc4KWDJCJOlWdmg_Grlvc3fY8UxwbJ4" alt="Capa do Perfil" />
      <img src="https://media.licdn.com/dms/image/v2/C5603AQFLrUOf_XtPoA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1647292944283?e=1732147200&v=beta&t=XWAhiyzDhrKpYUYf_vfO-4wuRCgXnTCWqhC3B-gEMDc" alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10' />
      <div className="relative mt-[-6rem] h-72 flex flex-col bg-sky-500 text-white text-2xl items-center justify-center">
        <p>Nome: {usuario.nome} </p>
        <p>Email: {usuario.usuario}</p>
      </div>
    </div>
  )
}

export default Perfil;