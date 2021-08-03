import React from 'react';
import { Switch, Route,Link } from 'react-router-dom'
import './App.css';
import { UserProvider } from './Components/MyContext'
import BudgetAmount from './Components/BudgetAmount'

class App extends React.Component {
  constructor(props) {
    super(props);
	  this.state = {
		 budget: {
        budgetValue: '',
        expenditures: { expenses: '', amount: ''}
      }
		//   value: ''
	};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	};

//   const [todos, setTodos] = useState({});
	handleChange(event) {
		const NewBudget = { ...this.state.budget }
		this.setState({
			NewBudget, budgetValue: event.target.value
		})
  }

  handleSubmit(event) {
    alert('An amount was submitted: ' + this.state.budgetValue);
    event.preventDefault();
	};

  render() {
	  return (
				<UserProvider value={this.state.budget}>
			   <div className='text-center text-light welcome-h'>
				<h2 className='h1 font-weight-bolder'>Saving Money</h2>
				<p className='lead'>A tool to manage your finances <br /> Full budget control</p>
			<form className='home-f' onSubmit={this.handleSubmit}>
        <label>
			<input className='input-border' placeholder='Enter weekly income'
						type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
						  <Link to='/budgetAmount'>
					  <input className='input-border' type="submit" value="Get started" />
						  </Link>
      </form>				  
	</div>
			  </UserProvider>
    );
  }
}

// class App extends Component {   
// 	render() {
// 		return (
// 			<MyProvider>
// 			<div className='text-center text-light welcome-h'>
// 				<h2 className='h1 font-weight-bolder'>Saving Money</h2>
// 				<p className='lead'>A tool to manage your finances <br /> Full budget control</p>
// 					<BudgetInput/>
// 			</div>
// 			</MyProvider>

// 		);
// 	}
// }

export default App;

function  ToApp() {
		return (
			<main>
				<Switch>
					<Route path='/' component={App} exact />
					<Route path='/budgetAmount' component={BudgetAmount} />
				</Switch>
			</main>
		)
};