import './App.css';
import { useInput } from './useInput.js'
import { useTitle } from './useTitle';
import { useClick } from './useClick';
import { useConfirm } from './useConfirm';
import { usePreventLeave } from './usePreventLeave';
import { useBeforeLeave } from './useBeforeLeave';
import { useFadeIn } from './useFadeIn';

export default function App() {

  const begForLife = () => console.log("Plz don't leave")
  useBeforeLeave(begForLife);

  const deleteWord = () => console.log('Deleting');
  const abort = () => console.log('Aborted')
  const confirmData = useConfirm('Are you sure?', deleteWord, abort)

  const {enablePrevent, disablePrevent} = usePreventLeave();

  const sayHello = () => {
    console.log('Hello!');
  }
  const title = useClick(sayHello)

  const animation = useFadeIn(2, 0.5);

  const validator = (value) => value.length <= 10;

  const name = useInput("Mr.1", validator);
  const titleUpdater = useTitle('Loading...');

  setTimeout(() => titleUpdater('Home'), 3000);
  return (
    <div className="App">
      <h1 ref={title}>Hello</h1>
      <p {...animation}>Lorem ipsum dolor sit.</p>
      <input placeholder="Name" {...name} />
      <button onClick={confirmData}>confirm</button>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
}

