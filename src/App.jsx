import Todo from "./components/Todo";
import { Provider } from "react-redux";
import Store from "./app/store";
import "./App.css";

function App() {
  return (
    <Provider store={Store}>
      <Todo />
    </Provider>
  );
}

export default App;
