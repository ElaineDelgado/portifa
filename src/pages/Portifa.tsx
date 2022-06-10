import Title from '../components/Title'
import '../styles/Portifa.css'
import {works} from '../data/work'

const Portifa = () => {
  return (
    <section className="portifa-section" id="portifa">
      <Title title='Portifolio'/> 
      <code>Em construção</code>
            
      <p>
        Aqui se encontram alguns projetos nos quais atuo em meu trabalho e também os que desenvolvi como projetos pessoais ou exercícios dos cursos de desenvolvimento.
      </p>

      <article className="works-cards-container">
        {works.map((item, index) => (
          <div key={index} className="work-card">
            <h2>{item.work}</h2>
            <section className="linkToProject">
              <p>Link Externo:</p> 
              <a href={item.url} target="_blank" rel="noreferrer">Clique aqui</a>
            </section>
            <img src={item.image} alt={item.work} />
          </div>
        ))}
      </article>
    </section>
  )
}

export default Portifa 