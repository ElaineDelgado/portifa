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

        <article className="works-cards-container grid mt-8 lg:max-w-5xl w-full">
          {works.map((item, index) => (
            <div key={index} className="work-card lg:flex-row flex-col-reverse lg:justify-between flex p-8">
              <section  className=" img-section">
                <img src={item.image} alt={item.title} /> 
              </section>
              <section className="details-text py-3 mb-8 lg:mb-0">
                <h3>{item.title}</h3>
                
                  {/* <a href={item.url} target="_blank" rel="noreferrer">Ir para {item.title}</a> */}
                  {item.url === "" ?
                  ""
                :
                <div className="linkToProject">
                  <p>link:</p> 
                  <a href={item.url} target="_blank" rel="noreferrer">Ir para {item.title}</a>
                </div>
                }
                <p className="mt-2">{item.description}</p>
              </section>              
            </div>
          ))}
        </article> 

        <article className="works-cards-container grid mt-8 lg:max-w-5xl w-full">
          {personal.map((item, index) => (
            <div key={index} className="work-card lg:flex-row flex-col-reverse lg:justify-between flex p-8">
              <section  className=" img-section">
                <img src={item.image} alt={item.title} /> 
              </section>
              <section className="details-text py-3 mb-8 lg:mb-0">
                <h3>{item.title}</h3>
                <div className="linkToProject">
                  <p>link:</p> 
                  <a href={item.url} target="_blank" rel="noreferrer">clique aqui</a>
                </div>
                <p className="mt-2">{item.description}</p>
              </section>              
            </div>
          ))}
        </article>      
    </section>
  )
}

export default Portifa 