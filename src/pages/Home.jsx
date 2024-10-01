import { useEffect, useState } from 'react';
import Logo from '../assets/logo.png';

function Home() {
  const [text, setText] = useState('');
  const targetText = 'izzi.paper';
  const typingSpeed = 150;

  useEffect(() => {
    let index = 0;

    const type = () => {
      if (index < targetText.length) {
        setText(targetText.slice(0, index + 1));
        index++;
        setTimeout(type, typingSpeed);
      }
    };

    type();

    return () => clearTimeout(type);
  }, []);

  return (
    <div className="container home">
      <div className='flex-home'>
        <div>
          <h1 className='fhome-1'>
            <b className='text-different'>Compre</b> na<br/>
            {text}
          </h1>
          <h2 className='fhome-2 mb-5'>Aproveite nossos produtos únicos!</h2>
          <a className='btn-meet' href='/produtos'>
            Conheça nossos produtos <i className="bi bi-arrow-right"></i>
          </a>
        </div>
        <div>
          <img className='logo-home' src={Logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default Home;
