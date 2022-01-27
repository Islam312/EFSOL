import { HomeWork1 } from './home-works/homework1';
import { HomeWork3 } from './home-works/homework3';
import { HomeWork4 } from './home-works/homework4';
import HomeWork51 from './home-works/homework5.1';
import { HomeWork52 } from './home-works/homework5.2';
import HomeWork6 from './home-works/homework6';

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
      <HomeWork51 />
      <hr />
      <HomeWork52 />
      <hr />
      <HomeWork6 />
    </div>
  );
}

export default App;
