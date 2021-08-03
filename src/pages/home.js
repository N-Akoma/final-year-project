import { useState } from 'react'

const Home = (props) => {

    const [budgetAmount, setBudgetAmount] = useState(0)


    const handleInitialAmount = () => {
         
        props.getBudgetAmountFromHome(budgetAmount)
    }


    return (
        <div className='text-center text-light welcome-h'>
            <h2 className='h1 font-weight-bolder'>Saving Money</h2>
				<p className='lead'>A tool to manage your finances <br /> Full weekly budget control</p>
            <form className='home-f' onSubmit={e => e.preventDefault()}>

             <label>
                    <input
                        className='input-border'
                        placeholder='Enter weekly income'
                        type="number"
                        onChange={(e) => setBudgetAmount(e.target.value)}
                    />
            </label>
                <input
                    className='input-border'
                    type="submit"
                    value="Get started"
                    onClick={() => handleInitialAmount()}
                />
            </form>
            
            </div>
     );
}
 
export default Home;