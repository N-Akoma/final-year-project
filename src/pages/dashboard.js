import { useState } from "react";

const DashBoard = ({ state, dispatch }) => {
 
    const [expenses, setExpenses] = useState({
        item: "", amount: '', id: null
    });

  //get total Expenses

  const getTotalExpenses = (exp = state.expenses) => {
    return exp.map((val) => val.amount).reduce((prev, curr) => prev + curr, 0);
  };

  //handle add expenses
    const handleAddExpenses = () => {
      //add validation method HERE to check if the item to be added is more than the totalAmount
    dispatch({
      type: "ADD_EXPENSES",
      payLoad: {...expenses, id: new Date().getSeconds() + 'ry--3us'},
    });

    setExpenses({ item: "", amount: 0, id: null });
    };
    
    //handle delete expense
    const handleDeleteById = (id) => {
       
        dispatch({
      type: "DELETE_EXPENSE_BY_ID",
      payLoad: id,
    });
   }

  return (
    <>
      {/* show income value */}
      <h1> INCOME {state.totalAmount} </h1>

      {/* show totalExpenses */}
      <h1> EXPENSES {getTotalExpenses()} </h1>

      {/* enter expenses here */}
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          value={expenses.item}
          placeholder="Enter expenses"
          onChange={(e) => setExpenses({ ...expenses, item: e.target.value })}
        />
        <input
          value={expenses.amount}
          placeholder="Amount"
          type="number"
          onChange={(e) =>
            setExpenses({ ...expenses, amount: Number(e.target.value) })
          }
        />

        <button type="submit" onClick={handleAddExpenses}>
          Add
        </button>
      </form>

          {/* show List of expenses */}
          
          <ul>
              {
                  state.expenses.map((val, i) => (
                      <li key={i}>
                          <span> {val.item} </span>
                          <span> N{val.amount} </span>
                          <button onClick={() => handleDeleteById(val.id)}>removeIcon {val.id} </button>
                           
                      </li>
                  ))
              }
          </ul>
    </>
  );
};

export default DashBoard;
