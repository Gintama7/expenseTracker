
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App= () => {
 
  return (
    <div className="app">
      <h2>Expense Tracker</h2>
      <NewExpense/>
     <Expenses />
     
    </div>
  );
}

export default App;
