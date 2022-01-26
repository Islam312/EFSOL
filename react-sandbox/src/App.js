import { HomeWork1 } from './home-works/homework1';
import { HomeWork3 } from './home-works/homework3';
import { HomeWork4 } from './home-works/homework4';
import HomeWork5_1 from './home-works/homework5';
import { HomeWork5_2 } from './home-works/homework5.2';

function App() {
  const arr = ['JS', 'React', 'component', 'Props'];
  return (
    <div className="container">
      <HomeWork1 arr={arr} />
      <hr />
      <HomeWork3 />
      <hr />
      <HomeWork4 arr={arr} />
      <hr />
      <HomeWork5_1 />
      <hr/>
      <HomeWork5_2 />
      <hr/>
    </div>
  );
}

export default App;
