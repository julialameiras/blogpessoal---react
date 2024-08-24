import { FacebookLogo, InstagramLogo, LinkedinLogo, GithubLogo } from '@phosphor-icons/react'

function Footer() {
  let data = new Date().getFullYear();  

  return (
    <>
        <div className="flex justify-center bg-indigo-900 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl'>Blog pessoal de Júlia Lameiras | {data} </p>
            <p className='text-lg'>Acesse minhas redes sociais</p>
            <div className='flex gap-2'>
              <LinkedinLogo size={40} />
              <InstagramLogo size={40} />
              <FacebookLogo size={40} />
              <GithubLogo size={40} />
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer