import foto from '../foto.jpg'

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
            Atualmente trabalho no PRODERJ - Centro de Tecnologia de Informação e Comunicação do Estado do Rio de Janeiro atuando principalmente no front end dos projetos.          
          </p>          
        </div>
      </div>
    </section>
  )
}

export default Info