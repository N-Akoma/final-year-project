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
      //validation method to check if the item to be added is more than the totalAmount
      if (state.totalAmount >= expenses.amount) {
      dispatch({
        type: "ADD_EXPENSES",
        payLoad: {...expenses, id: new Date().getSeconds()},
      });

        setExpenses({ item: "", amount: '', id: null });
      } else {
          window.alert('Your amount should be less than or equal to budget')
      }
      };
      
      //handle delete expense
      const handleDeleteById = (id) => {
          dispatch({
        type: "DELETE_EXPENSE_BY_ID",
        payLoad: id,
      });
    }

    return (
      <div className='container justify-content-center p-5 mr-auto ml-auto' >
          <h1 className='text-center headerName'>Weekly Budget Assistance</h1>
          
        {/* show income value */}
          <div className='d-flex justify-content-around p-2 m-2'>
          <div className='income p-1 m-3 w-100'>
            <h2 className='text-center'> BUDGET </h2>
              <p className='text-center'>
            #{state.totalAmount}.00
              </p>
          </div>
    
          {/* show totalExpenses */}
          <div className='expenses p-1 m-3 w-100'>
            <h2 className='text-center'>TOTAL EXPENSES</h2>
            <p className='text-center'>
              #{getTotalExpenses()}.00
            </p>
          </div>
          </div>
          
          {/* enter expenses here */}
        <form className='mr-auto ml-auto p-2 m-2 w-100 form-info' onSubmit={(e) => e.preventDefault()}>
          <p className='text-center'>List of items and amount</p>
            <div className='d-flex justify-content-center expendies'>
                <input className='m-2'
                type='text'
                value={expenses.item}
                placeholder="Enter Items"
                onChange={(e) => setExpenses({ ...expenses, item: e.target.value })}
                />
            <input className='m-2'
              value={expenses.amount}
              placeholder="Amount"
              type="number"
              onChange={(e) =>
                setExpenses({ ...expenses, amount: Number(e.target.value) })
              }
            />            
            <input className='m-2'
                  type="submit"
                  value='Add'
                onClick={handleAddExpenses}
              />
            </div>
          </form>
    
              {/* show List of expenses */}
          <div className='list-Exp p-2 m-2 w-100'>
              <ul className='mt-3 list-Exp'>
                <h2>Expenses</h2>
                  {
                      state.expenses.map((val, i) => (
                        <li key={i}>
                          <hr className='horiz'/>
                          <div className='d-flex justify-content-between pr-2 pl-2 ml-4 mr-4'>
                            <div className='val-item w-25'>
                            <span className='text-center' > {val.item} </span>
                            </div>
                            <div className='val-amount'>
                              <span> #{val.amount} </span>
                              <button className='rounded-circle' onClick={() => handleDeleteById(val.id)}>x</button>
                            </div>
                          </div>
                              
                          </li>
                      ))
                    }
                    <hr className='horiz'/>
              </ul>
              </div>
        </div>
      );
  };

  export default DashBoard;
