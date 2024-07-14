import Izzi from '../assets/izzi.png'

function AboutUs() {

  return (
    <>
      <div className="container about-us">
        
        <div className="card">
          <div className="card-body text-inform fs-5">
            Uma breve informação sobre a papelaria.
          </div>
        </div>

        <div className="card style-us">
          <img src={Izzi} className="img-about" alt="Izzi" />
          <div className="card-body">
            <p className="card-text text-inform">Aqui pode ser uma historia sua, ou suas informações sobre você.</p>
          </div>
          <div>
            <a href='https://www.instagram.com/izzibr/' target='_blank' className='m-2'><i className="bi bi-instagram fs-1 color-icon"></i></a>
            <a href='https://www.linkedin.com/in/izzibr/' target='_blank' className='m-2'><i className="bi bi-linkedin fs-1 color-icon"></i></a>
          </div>
        </div>

      </div>
    </>
  )
}

export default AboutUs
