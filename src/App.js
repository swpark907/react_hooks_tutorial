import './App.css';
import { useInput } from './useInput.js'

export default function App() {
  const validator = (value) => value.length <= 10;

  const name = useInput("Mr.1", validator);

  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}
