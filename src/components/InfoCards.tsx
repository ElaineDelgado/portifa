import {skillspl} from '../data/skills'
import {skillsjr} from '../data/skills'

const InfoCards = () => {
  return (
    <article className="skills-container">
      <div>  
        <h3>.skill-experiencia &#123;</h3>      
        <div className="info-item-container">
          { skillspl.map((item, index) => (
            <div className="info-item" key={index}>
              <p>{item.name}: {item.experience}, </p>        
            </div>
          ))}
        </div>
        <h3>	&#125;</h3>
      </div>
      <div>
        <h3>.skill-experiencia &#123;</h3>          
        <div className="info-item-container">
          { skillsjr.map((item, index) => (
            <div className="info-item" key={index}>
              <p>{item.name}: {item.experience}; </p>        
            </div>
          ))}
        </div>
        <h3>	&#125;</h3>
      </div>
    </article>
  )
}

export default  InfoCards