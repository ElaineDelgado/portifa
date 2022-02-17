import sakura from '../sakurapng.png'

const Home = () => {
  return (
    <main className="App-home">      
      <div className='apresentacao'>
        <img src={sakura}className="App-logo" alt="logo" />
        <code><h1> Elaine Delgado </h1></code> 
        <p> &#60; front end developer &#47;&#62;</p>
      </div>
    </main>
  )
}

export default Home