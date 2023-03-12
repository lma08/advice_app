import { useEffect, useState } from 'react';
import './App.css';
import video from './video.mp4';

function App() {

  const [advice, setAdvice] = useState('');

  useEffect( () => {
    newAdvice();
  }, [])

  const newAdvice = async() => {
    const response = await fetch ('http://www.boredapi.com/api/activity/');
    const data = await response.json();
    setAdvice(data.activity);
  }

  return (
    <div className='container'>
      <video autoPlay muted loop>
        <source src={video} type='video/mp4'/>
      </video>
        <h1>Let's find out what to do next</h1>
        <h3>{advice}</h3>
        <button onClick={newAdvice}>Next Advice</button>
    </div>
  );
}

export default App;
