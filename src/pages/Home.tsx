import sakura from '../sakurapng.png'

const Home = () => {
  return (
    <main className="App-home">      
      <div className='apresentacao'>
        <img src={sakura}className="App-logo" alt="logo" />
        <h1 className="special-title"> Elaine Delgado </h1>
        <h2 className="monospace-font"> &#60; front end developer &#47;&#62;</h2>
      </div>
    </main>
  )
}

export default Home