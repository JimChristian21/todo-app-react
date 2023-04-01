// import logo from './logo.svg';
import './App.css';
import Todo from "./components/Todo";
import ListItem from "./components/ListItem";
import InlineComponent from "./components/InlineComponent";
import StylesheetComponent from "./components/StylesheetComponent";

function App() {
  return (
    <div className="App">
      <Todo/>
      <InlineComponent/>
      <StylesheetComponent/>
    </div>
  );
}

export default App;
