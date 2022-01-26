import { HomeWork1 } from './home-works/homework1';
import { HomeWork3 } from './home-works/homework3';
import { HomeWork4 } from './home-works/homework4';

function App() {
  const arr = ['JS', 'React', 'component', 'Props'];
  return (
    <div className="container">
      <HomeWork1 arr={arr} />
      <hr />
      <HomeWork3 />
      <hr />
      <HomeWork4 arr={arr} />
    </div>
  );
}

export default App;
