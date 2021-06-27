import React, { Component } from 'react';
import './App.css'

class App extends Component {
	constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An amount was submited: ' + this.state.value);
    event.preventDefault();
  }
	render() {
		return (
			<div className='text-center text-light welcome-h'>
				<h2 className='h1 font-weight-bolder'>Saving Money</h2>
				<p className='lead'>A tool to manage your finances <br /> Full budget control</p>
		<form className='home-f' onSubmit={this.handleSubmit}>
        <label>
          <input className='input-border' placeholder='Enter weekly income' type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input  className='input-border' type="submit" value="Get started" />
      </form>
			</div>
		);
	}
}

export default App;