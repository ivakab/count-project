import logo from "./logo.svg";
import "./App.css";
import Tasks from "./components/Tasks/Tasks";
import { useSelector } from "react-redux";

function App() {
  return (
    <div className="App">
      <Tasks />
    </div>
  );
}

export default App;
