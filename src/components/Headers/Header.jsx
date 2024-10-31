import reactImg from '../../assets/react-core-concepts.png'
const list = ['sawar', 'sawar']
export default function Header() {
  return (<header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {list[0]} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>);
}