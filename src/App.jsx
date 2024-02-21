import { useState } from "react";
import Header from "./components/Header";
import IconNewExpense from "./img/nuevo-gasto.svg";
import Modal from "./components/Modal";

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);

  const handleNewExpense = () => {
    setModal(true);
  }

  return (
    <>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />
      {isValidBudget && (
        <div className="nuevo-gasto">
          <img src={IconNewExpense} alt="New Expense" onClick={handleNewExpense}/>
        </div>
      )}
      {modal && (
        <Modal setModal={setModal}/>
      )}
    </>
  );
}

export default App;
