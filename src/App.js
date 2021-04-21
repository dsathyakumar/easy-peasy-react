import "./styles.css";
import { CounterOne } from "./counterone";
import { CounterTwo } from "./countertwo";
import { DisplayOne } from "./displayone";
import { DisplayTwo } from "./displaytwo";

export default function App() {
  return (
    <div className="App">
      <CounterOne />
      <DisplayOne />
      <CounterTwo />
      <DisplayTwo />
    </div>
  );
}
