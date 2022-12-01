import './CalculatorInput.css'

const CalculatorInput = ({onMainIncomeUpdated, onSecondIncomeUpdated,onDepositUpdated,onMonthlyCommitmentsUpdated,onInterestRateUpdated,onLengthOfMortgageUpdated}) => {

  const handleMainApplicantSalaryChange = function (event) {
    const updatedMainApplicantBudget = event.target.value
    onMainIncomeUpdated(updatedMainApplicantBudget) 
  };

  const handleSecondApplicantSalaryChange = function (event) {
    const updatedSecondApplicantBudget = event.target.value
    onSecondIncomeUpdated(updatedSecondApplicantBudget) 
  };

  const handleDepositChange = function (event) {
    const updatedDeposit = event.target.value
    onDepositUpdated(updatedDeposit) 
  };

  const handleMonthlyCommitmentsChange = function (event) {
    const updatedMonthlyCommitments = event.target.value
    onMonthlyCommitmentsUpdated(updatedMonthlyCommitments)
  };

  const handleInterestChange = function (event) {
    const updatedInterestRate = event.target.value
    onInterestRateUpdated(updatedInterestRate) 
  };

  const handleLengthofMortgageChange = function (event) {
    const updatedMortgageLength = event.target.value
    onLengthOfMortgageUpdated(updatedMortgageLength) 
  };

  return (
    <>
    <form>
      <ul>
        <li>
          <label htmlFor="main-applicant-salary">Your Annual Salary (£)</label>
          <input
            id="main-applicant-salary"
            type="number"
            onChange={handleMainApplicantSalaryChange}
            required
          />
        </li>
        <li>
          <label htmlFor="second-applicant-salary">
            Your Partner's Salary (£)
          </label>
          <input
            id="second-applicant-salary"
            type="number"
            onChange={handleSecondApplicantSalaryChange}
          />
        </li>
        <li>
          <label htmlFor="deposit">Deposit (£)</label>
          <input
            id="deposit"
            type="number"
            onChange={handleDepositChange}
          />
        </li>
        <li>
          <label htmlFor="monthly-commitments">
            Monthly Commitments (£)
          </label>
          <input
            id="monthly-commitments"
            type="number"
            onChange={handleMonthlyCommitmentsChange}
          />
        </li>
        <li>
          <label htmlFor="interest">Interest Rate (%)</label>
          <input
            id="interest"
            type="number"
            onChange={handleInterestChange}
          />
        </li>
        <li>
          <label htmlFor="length">Length of Mortgage (Years)</label>
          <input
            id="length"
            type="number"
            onChange={handleLengthofMortgageChange}
          />
        </li>
      </ul>
    </form>
    </>
  );
};

export default CalculatorInput;
