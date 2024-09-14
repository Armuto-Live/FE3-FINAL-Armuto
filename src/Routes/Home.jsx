import { useContext } from 'react';
import { ContextGlobal } from '../context/GlobalContext';

import Card from '../Components/Card'

const Home = () => {
  const { dentists, addFav, theme } = useContext(ContextGlobal);
  
  return (
    <main className={`main dentist-grid ${theme}`} > 
      <h1>Inicio</h1>
      <section className='card-grid'>
        {
          dentists.map((dentist, index) => (
            <Card key={index} name={dentist.name} username={dentist.username} id={dentist.id} addFav={addFav} theme={theme}/>
          ))
        }
      </section>
    </main>
  )
}

export default Home