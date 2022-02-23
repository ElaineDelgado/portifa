import foto from '../foto.jpg'
import '../App.css'

const Info = () => {
  return (
    <section className="info-section" id="info">
      <h1> &#60; Sobre mim &#47;&#62;</h1>
      <div className="info-items">
        <img src={foto} alt="Foto perfil" className="profile-image" />
        <div className="info-text">
          <p>
            Meu nome é Elaine Delgado, sou front end developer e moro no Rio de Janeiro. 
            Estudo HTML, CSS  e Javascript há 2 anos e recentemente entrei no mundo do ReactJS com Typescript.    
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut recusandae dignissimos eius veniam amet? Assumenda, ea odit nulla vel aliquid itaque corporis, eligendi pariatur blanditiis dignissimos quod provident nobis dolor!         
          </p>          
        </div>
      </div>
    </section>
  )
}

export default Info