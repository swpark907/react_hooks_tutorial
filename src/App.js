import './App.css';
import { useInput } from './useInput.js'
import { useTitle } from './useTitle';

export default function App() {
  const validator = (value) => value.length <= 10;

  const name = useInput("Mr.1", validator);
  const titleUpdater = useTitle('Loading...');

  setTimeout(() => titleUpdater('Home'), 3000);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}

