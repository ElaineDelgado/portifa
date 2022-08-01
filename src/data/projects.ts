import superarj from '../assets/images/superarj.png'
import pactorj from '../assets/images/pactorj.png'
import album from '../assets/images/album.png'
import quiz from '../assets/images/quiz.png'
import weatherapp from '../assets/images/weatherapp.png'

export const works = [
  {
    title: 'SuperaRJ',
    description:'trabalho nesse projeto desde sua criação em 2021. Iniciei fazendo as telas da aplicação, e hoje além de contribuir com código, também participo das decisões para melhorias e novas implementações.',
    image: superarj,
    url: "https://superarj.rj.gov.br/",
  },
  {
    title: 'PactoRJ',
    description:'em meu trabalho também contribuo no desenvolvimento e manutenção do Portal Transparência do PactoRJ, em que é possível conferir o andamento de cada um dos projetos que integram o pacote de obras.',
    image: pactorj,
    url:"http://www.pacto.rj.gov.br/",
  },
]

export const personal = [  
  {
    title: 'Photo Album JsonPlaceholder',
    description:'protótipo de ábum de fotos construído com React e Typescript utilizando a API JsonPlaceholder.',
    image: album,
    url:"https://albums-app.netlify.app",
  },
  {
    title: 'Anime Quiz',
    description:'quiz desenvolvido como parte do treianamento CJRM, objetivando a manipulação do DOM através do Javascript.',
    image: quiz,
    url: "https://quiz-cjrm.netlify.app",
  },
  {
    title: 'current weather',
    description:'Projeto desenvolvido durante treinamento de Javascript CJRM. O projeto utiliza Javascript e a API utilizada para as requisições foi a Weather API.',
    image: weatherapp,
    url: "https://picweather.netlify.app",
  },
]