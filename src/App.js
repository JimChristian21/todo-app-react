// import logo from './logo.svg';
import './App.css';
import Todo from "./components/Todo";
import ListItem from "./components/ListItem";
import InlineComponent from "./components/InlineComponent";

function App() {
  return (
    <div className="App">
      <Todo/>
      <InlineComponent/>
    </div>
  );
}

export default App;
