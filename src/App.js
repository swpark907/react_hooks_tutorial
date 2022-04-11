import './App.css';
import { useInput } from './useInput.js'
import { useTitle } from './useTitle';
import { useClick } from './useClick';
import { useConfirm } from './useConfirm';

export default function App() {

  const deleteWord = () => console.log('Deleting');
  const abort = () => console.log('Aborted')
  const confirmData = useConfirm('Are you sure?', deleteWord, abort)

  const sayHello = () => {
    console.log('Hello!');
  }
  const title = useClick(sayHello)

  const validator = (value) => value.length <= 10;

  const name = useInput("Mr.1", validator);
  const titleUpdater = useTitle('Loading...');

  setTimeout(() => titleUpdater('Home'), 3000);
  return (
    <div className="App">
      <h1 ref={title}>Hello</h1>
      <input placeholder="Name" {...name} />
      <button onClick={confirmData}>confirm</button>
    </div>
  );
}

