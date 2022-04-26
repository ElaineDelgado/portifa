import sakura from '../sakurapng.png'
import '../styles/Home.css'
import Subtitle from '../components/Subtitle'

const Home = () => {
  return (
    <main className="home-section">      
      <header className='apresentacao'>
        <div>          
          <img src={sakura} className="sakura-logo" alt="logo" />
          <h1 className="special-title"> Elaine Delgado </h1>
          <Subtitle title={'frontend developer'} />
        </div>
      </header>      
    </main>
  )
}

export default Home