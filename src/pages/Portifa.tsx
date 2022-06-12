import Title from '../components/Title'
import '../styles/Portifa.css'
import {works} from '../data/projects'
import {personal} from '../data/projects'
import Subtitle from '../components/Subtitle'

const Portifa = () => {
  return (
    <section className="portifa-section" id="portifa">
      <Title title='Portifolio'/>    
  
      <Subtitle title={'principais projetos profissionais e pessoais'} /> 

        <article className="works-cards-container grid mt-8">
          {works.map((item, index) => (
            <div key={index} className="work-card lg:flex-row flex-col-reverse flex p-8">
              <section  className=" img-section">
                <img src={item.image} alt={item.title} /> 
              </section>
              <section className="details-text py-3">
                <h3>{item.title}</h3>
                <div className="linkToProject">
                  <p>Link:</p> 
                  <a href={item.url} target="_blank" rel="noreferrer">Clique aqui</a>
                </div>
                <p>{item.description}</p>
              </section>              
            </div>
          ))}
        </article> 

        <article className="works-cards-container grid mt-8">
          {personal.map((item, index) => (
            <div key={index} className="work-card lg:flex-row flex-col-reverse flex">
              <section  className=" img-section">
                <img src={item.image} alt={item.title} /> 
              </section>
              <section className="details-text py-3">
                <h3>{item.title}</h3>
                <div className="linkToProject">
                  <p>Link:</p> 
                  <a href={item.url} target="_blank" rel="noreferrer">Clique aqui</a>
                </div>
                <p>{item.description}</p>
              </section>              
            </div>
          ))}
        </article>      
    </section>
  )
}

export default Portifa 