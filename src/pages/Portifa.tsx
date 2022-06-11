import Title from '../components/Title'
import '../styles/Portifa.css'
import {works} from '../data/work'
import Subtitle from '../components/Subtitle'

const Portifa = () => {
  return (
    <section className="portifa-section" id="portifa">
      <Title title='Portifolio'/> 
      <Subtitle title={'em construção'} />     
  
      <Subtitle title={'principais projetos profissionais e pessoais'} />

      <article className="works-cards-container">
        {works.map((item, index) => (
          <div key={index} className="work-card">
            <h2>{item.work}</h2>
            <section className="linkToProject">
              <p>Link:</p> 
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