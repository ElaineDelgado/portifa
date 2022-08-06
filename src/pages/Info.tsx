import '../styles/Info.css'
import Title from '../components/Title'
import foto from '../foto.jpg'
import InfoCards from '../components/InfoCards'
import Subtitle from '../components/Subtitle'

const Info = () => {
  return (
    <main className="info-section" id="info">
      <Title title={'Info'}/>
      <Subtitle title={'um pouco sobre mim'} />    
      <article className="about-me">     
        <div className="perfil-items">
          <img src={foto} alt="Foto perfil" className="profile-image" />
          <div className="perfil-text">
            <p>
              Olá! Meu nome é Elaine Delgado, sou desenvolvedora frontend e moro no Rio de Janeiro. 
              Comecei a estudar desenvolvimento web em 2019, e após alguns cursos percebi que transformar design em código era o que queria fazer. Gosto da parte visual, de criar a interface com a qual a usuário irá interagir de forma que ele tenha a melhor experiência possível. Atualmente curso Sistemas Para Internet na IBMR, o que está me trazendo uma nova visão da profissão.        
              No início de 2021 veio o meu primeiro emprego, onde estou até hoje, que está sendo essencial para meu crescimento profissional e expansão de horizontes.         
            </p>          
          </div>
      </div>
      </article>
      <Title title={'Habilidades'}/>
      <div className="info-skills"> 
          <InfoCards />     
      </div>
      <aside className="mb-8 lg:mt-16">
        <p className="quote">
          "Se você acredita que pode, ou que não pode, de qualquer maneira você está certo."
        </p>
        <span className="author">Henry Ford</span>
      </aside>      
    </main>
  )
}

export default Info