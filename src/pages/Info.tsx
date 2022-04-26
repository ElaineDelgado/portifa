import '../styles/Info.css'
import Title from '../components/Title'
import foto from '../foto.jpg'
import InfoCards from '../components/InfoCards'

const Info = () => {
  return (
    <main className="info-section" id="info">
      <Title title={'Info'}/>
      <article className="about-me">     
        <div className="perfil-items">
          <img src={foto} alt="Foto perfil" className="profile-image" />
          <div className="perfil-text">
            <p>
              Olá! Meu nome é Elaine Delgado, sou desenvolvedora frontend e moro no Rio de Janeiro. 
              Comecei a estudar as tecnologias necessárias para desenvolvimento de software em 2019, mas o que conquistou meu coração foi o Frontend.
            </p>
            <p>
              No início de 2020 comecei um trabalho na área de Frontend mas mesmo não paro de estudar novas tecnologias e aquelas já utilizo.        
            </p>          
          </div>
      </div>
      </article>
      <div className="info-skills"> 
          <InfoCards />     
      </div>
      <aside>
        <p className="quote">"Se você acredita que pode, ou que não pode, de qualquer maneira você está certo."</p>
        <span className="author">Henry Ford</span>
      </aside>      
    </main>
  )
}

export default Info