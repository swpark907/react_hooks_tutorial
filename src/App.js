import "./App.css";
import { useInput } from "./useInput.js";
import { useTitle } from "./useTitle";
import { useClick } from "./useClick";
import { useConfirm } from "./useConfirm";
import { usePreventLeave } from "./usePreventLeave";
import { useBeforeLeave } from "./useBeforeLeave";
import { useFadeIn } from "./useFadeIn";
import { useNetwork } from "./useNetwork";
import useAxios from "./useAxios";

export default function App() {
  const { loading, error, data, refetch } = useAxios({
    url: "https://api.publicapis.org/entries",
  });

  console.log(data);

  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>

      <button onClick={refetch}>refetch</button>
    </div>
  );
}
