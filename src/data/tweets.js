import avatar1 from '../assets/tweets-assests/profile1.svg';
import avatar2 from '../assets/tweets-assests/profile2.svg';
import avatar3 from '../assets/tweets-assests/profile3.svg';
import avatar4 from '../assets/tweets-assests/profile4.svg';
import avatar5 from '../assets/tweets-assests/profile5.svg';

export const tweets = [
  {
    text: `Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados foram: ✅ npm start: De 32s para 400ms (sim, demorava 30s) ✅ npm build: De 120s para 22s Além disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥`,
    user: '@maykao',
    name: 'Mayk',
    likes: 7,
    liked: false,
    avatar: avatar1,
    id: 0
  },
  {
    text: 'Se você quer se destacar no universo da programação web, é importante manter-se atualizado com as últimas tendências e tecnologias. Participe de conferências, siga blogs e sites de tecnologia, e junte-se a comunidades online para aprimorar suas habilidades #programação #webdev',
    user: '@Juju',
    name: 'Julia Stone',
    likes: 4,
    liked: false,
    avatar: avatar2,
    id: 2
  },
  {
    text: 'lidar com datas continua sendo uma das coisas mais chatas em programação... por exemplo: - o mês no JS começa em 0 (janeiro = 0) - a semana começa em 0 (domingo = 0) - o mês no MySQL começa em 1 (janeiro = 1) - a semana no MySQL começa na segunda-feira (domingo = 6)',
    user: '@robert',
    name: 'Robert Julio',
    likes: 42,
    liked: false,
    avatar: avatar3,
    id: 3
  },
  {
    text: 'melhor velocidade pra vídeos do youtube: 1.75x',
    user: '@joel',
    name: 'Joel Campbell',
    likes: 8,
    avatar: avatar4,
    id: 4
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    user: '@terry',
    name: 'Terick Jhon',
    likes: 12,
    liked: false,
    avatar: avatar5,
    id: 5
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    user: '@mark',
    name: 'Marquinho Zuck',
    likes: 1,
    liked: false,
    avatar: avatar1,
    id: 6
  }
];
