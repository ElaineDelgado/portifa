import React from 'react' 

const Contactme = () => {
  const [name, setName] = React.useState('')
  const [subject, setSubject] = React.useState('')
  const [email, setEmail] = React.useState('')

  type InputChangeEvent = React.ChangeEvent<HTMLInputElement> 
  type ChangeEvent = React.ChangeEvent<HTMLTextAreaElement>

  const handleName = (event: InputChangeEvent) =>  setName(event.target.value)  
  const handleEmail = (event: InputChangeEvent) => setEmail(event.target.value)
  const handleSubject = (event: ChangeEvent) => setSubject(event.target.value)

  return (
    <div className="contactme-container" id="contato">

      <h1> &#60; Contato &#47;&#62;</h1>
      <form method="POST" action="https://formsubmit.co/delgado.elaine03@gmail.com">

        <div className="flexDiv">
          <label htmlFor="contact-name">Nome:</label>
          <input value={name} type="text" name="contact-name" id="contact-name" placeholder="Digite seu nome" onChange={handleName}/>
        </div>
        <div className="flexDiv">
          <label htmlFor="email">E-mail:</label>
          <input value={email} type="email" name="email" id="email"  placeholder="Digite seu email" onChange={handleEmail}/>
        </div>
        <div className="flexDiv">
          <label htmlFor="subject">Assunto:</label>
          <textarea rows={5} cols={20} value={subject} name="subject" id="subject" onChange={handleSubject}></textarea>
        </div>           
        {/* <input value={subject} type="text" name="subject" id="subject"  placeholder="Digite o assunto" onChange={handleSubject}/> */}      
        <button type="submit" className="btnSubmit">Enviar</button>
      </form>
    </div>
  )
}

export default Contactme