import Izzi from '../assets/izzi.png'

function AboutUs() {

  return (
    <>
      <div className="container about-us">

        <div className="card">
          <div className="card-body text-inform fs-5">
            Uma breve informação sobre mim!
          </div>
        </div>

        <div className="card style-us">
          <img src={Izzi} className="img-about" alt="Izzi" />
          <div className="card-body">
            <p className="card-text text-inform">Oi, eu sou a Izzi. Seja bem-vindo à Izzi.paper. Meu amor pela ciência e pela tecnologia sempre esteve ligado aos livros e à arte. Ter uma papelaria online, onde eu possa personalizar os pedidos através do contato direto com o cliente, faz com que a frase "trabalhar com o que gosta" faça todo sentido para mim. Meu objetivo é oferecer artigos de papelaria que inspirem a criatividade e tornem sua rotina de estudos ainda mais especial, além de opções de produtos ecológicos e presenteáveis, feitos com materiais que garantam a sustentabilidade ambiental.</p>
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
