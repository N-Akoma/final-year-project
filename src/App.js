import {useReducer} from 'react';
// import { Switch, Route,Link } from 'react-router-dom'
import './App.css';
import Home from './pages/home';
import DashBoard from './pages/dashboard';
 

const App = (props) => {

	const initialState = {
		totalAmount: 0,
		expenses: []
	}

	const reducer = (state, { type, payLoad }) => {
		switch (type) {
			case "ADD_BUDGET_AMOUNT":

				return { ...state, totalAmount: payLoad }
			
			
			case "ADD_EXPENSES":

				return { ...state, expenses: [...state.expenses, payLoad] }
				
			case "DELETE_EXPENSE_BY_ID":

				let newExpeArr = state.expenses.filter(val => val.id !== payLoad)

				return { ...state, expenses: newExpeArr }
 		
			default: return state
			
		}
	}

	const [state, dispatch] = useReducer(reducer, initialState)

	const getBudgetAmountFromHome = (amount) => {
		console.log(amount)
		//send amount to store
		dispatch({
			type: "ADD_BUDGET_AMOUNT",
			payLoad: amount
		})
	}
 
	return (
		<>
		{
			state.totalAmount !== 0 ?
				<DashBoard state={state} dispatch={dispatch} />
				: 
				<Home getBudgetAmountFromHome={getBudgetAmountFromHome} />
		}
			
			</>
	)
}

export default App;
