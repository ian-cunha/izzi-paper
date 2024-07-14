import Logo from '../assets/logo.png'

function Home() {

  return (
    <>
      <div className="container home">
        <div className='flex-home'>
          <div>
            <h1 className='fhome-1'><b className='text-different'>compre</b> na izzi.paper</h1>
            <h2 className='fhome-2 mb-5'>aproveite nossos produtos únicos!</h2>
            <a className='btn-meet' href='/'>Conheça nossos produtos <i className="bi bi-arrow-right"></i></a>
          </div>
          <img className='logo-home m-5' src={Logo} />
        </div>
      </div>
    </>
  )
}

export default Home
