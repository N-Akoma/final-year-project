import React, { Component } from 'react'
import MyContext from './MyContext.js';


class MyProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: {
        inputBudget: '',
        expenditures: { expenses: '', amount: ''}
      }
    };
    
  }


  render() {
    return (
      <MyContext.Provider
        value={{
          budget: this.state.budget,
          handleChange(e, i) {
            console.log('e=',e)
            console.log('i=',i)
            const Newbudget = { ...this.budget };
            Newbudget[e.inputBudget] = e;
                        console.log(Newbudget)
            setState({budget: Newbudget})
          //  console.log(event)
  },

    handleSubmit(event) {
    alert('An amount was submited: ' + this.state.amount);
    event.preventDefault();
          }
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;