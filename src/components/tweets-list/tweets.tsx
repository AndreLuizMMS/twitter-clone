import profile1 from '../../assets/tweets-assests/profile1.svg';
import profile2 from '../../assets/tweets-assests/profile2.svg';
import profile3 from '../../assets/tweets-assests/profile3.svg';
import profile4 from '../../assets/tweets-assests/profile4.svg';
import profile5 from '../../assets/tweets-assests/profile5.svg';

export const tweets = [
  {
    name: 'John Travolta',
    tweet: (
      <span>
        Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os
        resultados foram: <br /> <br /> ✅ npm start: De 32s para 400ms (sim, demorava
        30s)
        <br /> ✅ npm build: De 120s para 22s <br /> <br /> Além disso, troquei do Yarn
        para o PNPM e o install das deps mudou de 24s para 8s 🔥
      </span>
    ),
    user: '@john',
    id: 0,
    avatar: profile1,
    likes: 1
  },
  {
    name: 'Angela Arden',
    tweet: (
      <span>
        Estamos vivendo um momento interessante no mercado de startups. <br /> <br /> ✅
        Soluções que resolvem problemas de forma semelhante, mas com precificação mais
        simples, usabilidade e foco em dev first. <br /> <br /> Tudo começa com um projeto
        open source/free 👀
      </span>
    ),
    user: '@angela_arden',
    id: 1,
    avatar: profile2,
    likes: 56
  },
  {
    name: 'Julia Stone',
    tweet: (
      <span>
        Se você quer se destacar no universo da programação web, é importante manter-se
        atualizado com as últimas tendências e tecnologias.
        <br /> <br /> Participe de conferências, siga blogs e sites de tecnologia, e
        junte-se a comunidades online para aprimorar suas habilidades #programação #webdev
      </span>
    ),
    user: '@julia',
    id: 2,
    avatar: profile3,
    likes: 8
  },
  {
    name: 'Robert Julio',
    tweet: (
      <span>
        lidar com datas continua sendo uma das coisas mais chatas em programação... por
        exemplo: <br /> <br />
        - o mês no JS começa em 0 (janeiro = 0) <br />
        - a semana começa em 0 (domingo = 0) <br />
        - o mês no MySQL começa em 1 (janeiro = 1) <br />
        - a semana no MySQL começa na segunda-feira (domingo = 6) <br />
      </span>
    ),
    user: 'john',
    id: 3,
    avatar: profile4,
    likes: 1
  },
  {
    name: 'Joey Tribiani',
    tweet: <span>melhor velocidade pra vídeos do youtube: 1.75x</span>,
    user: '@joey',
    id: 4,
    avatar: profile5,
    likes: 120
  }
];
