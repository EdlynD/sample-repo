import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import expenses from "./Components/Utils/ListExpenses";

function App() {
  return (
    <div className="App">
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
