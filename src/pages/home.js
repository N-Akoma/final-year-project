import { useState } from 'react'

const Home = (props) => {

    const [budgetAmount, setBudgetAmount] = useState(0)


    const handleInitialAmount = () => {
         
        props.getBudgetAmountFromHome(budgetAmount)
    }


    return (
        <>
            <form onSubmit={e => e.preventDefault()}>
                <input                     type="number"
 placeholder="enter budget amount" onChange={(e) => setBudgetAmount(e.target.value)} />
                <button type="submit" onClick={() => handleInitialAmount()}>submit</button>

            </form>
            
            </>
     );
}
 
export default Home;