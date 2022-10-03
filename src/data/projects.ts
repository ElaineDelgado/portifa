import superarj from '../assets/images/superarj.png'
import pactorj from '../assets/images/pactorj.png'
import album from '../assets/images/album.png'
import quiz from '../assets/images/quiz.png'
import weatherapp from '../assets/images/weatherapp.png'
import feedapp from '../assets/images/feedapp.png'

export const works = [
  {
    title: 'SuperaRJ',
    description:'trabalho nesse projeto desde sua criação em 2021. Iniciei fazendo as telas da aplicação, e hoje além de contribuir com código, também participo das decisões para melhorias e novas implementações.',
    image: superarj,
    url: "https://superarj.rj.gov.br/",
  },
  {
    title: 'PactoRJ',
    description:'contribuí no desenvolvimento e manutenção do Portal Transparência do PactoRJ, onde era possível conferir o andamento de cada um dos projetos que integram o pacote de obras. Essa versão do portal deixou de existir em agosto de 2022.',
    image: pactorj,
    url:"",
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
    title: 'Current Weather',
    description:'projeto desenvolvido durante treinamento de Javascript CJRM. O projeto utiliza Javascript e a API utilizada para as requisições foi a Weather API.',
    image: weatherapp,
    url: "https://picweather.netlify.app",
  },
  {
    title: 'Feed App',
    description:'projeto desenvolvido durante Ignite da Rocketseat, onde desenvolvemos uma página de feed de posts e comentários.',
    image: feedapp,
    url: "https://ignitefeedapp.netlify.app",
  },
]