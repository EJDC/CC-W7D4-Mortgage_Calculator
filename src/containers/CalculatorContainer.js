import React, { useState, useEffect } from "react";
import CalculatorInput from "../components/CalculatorInput";
import CalculatorResults from "../components/CalculatorResults";
import "./CalculatorContainer.css";

const CalculatorContainer = () => {
  const [budget, setBudget] = useState(0);
  const [value, setValue] = useState(0);
  const [totalValue, setTotalValue] = useState(0);
  const [monthlyPayments, setMonthlyPayments] = useState(0);
  const [mainIncome, setMainIncome] = useState(0);
  const [secondIncome, setSecondIncome] = useState(0);
  const [deposit, setDeposit] = useState(0);
  const [monthlyCommitments, setMonthlyCommitments] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [lengthOfMortgage, setLengthOfMortgage] = useState(0);

  useEffect(() => {
    console.log("use effect triggered on budget");
    setBudget(mainIncome + secondIncome - monthlyCommitments + deposit);
  }, [mainIncome, secondIncome, monthlyCommitments, deposit]);

  useEffect(() => {
    console.log("use effect triggered on value");
    setValue(budget * 3);
  }, [budget]);

  useEffect(() => {
    console.log("use effect triggered on total value with interest");
    const totalValue = value + value * (interestRate / 100);
    setTotalValue(totalValue);
  }, [value, interestRate]);

  useEffect(() => {
    console.log("use effect triggered on monthly payments");
    const totalMonths = lengthOfMortgage !== 0 ? lengthOfMortgage * 12 : 0;
    const monthlyPayment = totalMonths === 0 ? 0 : (totalValue / totalMonths).toFixed(2);
    setMonthlyPayments(monthlyPayment);
  }, [totalValue, lengthOfMortgage]);

  const onMainIncomeUpdated = function (amount) {
    const convertedAmount = parseInt(amount);
    isNaN(convertedAmount) ? setMainIncome(0) : setMainIncome(convertedAmount);
  };

  const onSecondIncomeUpdated = function (amount) {
    const convertedAmount = parseInt(amount);
    isNaN(convertedAmount)
      ? setSecondIncome(0)
      : setSecondIncome(convertedAmount);
  };

  const onDepositUpdated = function (amount) {
    const convertedAmount = parseInt(amount);
    isNaN(convertedAmount) ? setDeposit(0) : setDeposit(convertedAmount);
  };

  const onMonthlyCommitmentsUpdated = function (amount) {
    const convertedAmount = parseInt(amount);
    isNaN(convertedAmount)
      ? setMonthlyCommitments(0)
      : setMonthlyCommitments(convertedAmount);
  };

  const onInterestRateUpdated = function (amount) {
    const convertedAmount = parseInt(amount);
    isNaN(convertedAmount)
      ? setInterestRate(0)
      : setInterestRate(convertedAmount);
  };

  const onLengthOfMortgageUpdated = function (amount) {
    const convertedAmount = parseInt(amount);
    isNaN(convertedAmount)
      ? setLengthOfMortgage(0)
      : setLengthOfMortgage(convertedAmount);
  };

  return (
    <>
      <section>
        <div className="input">
          <h3 className="input-details">A few details first...</h3>
          <CalculatorInput
            onMainIncomeUpdated={onMainIncomeUpdated}
            onSecondIncomeUpdated={onSecondIncomeUpdated}
            onDepositUpdated={onDepositUpdated}
            onMonthlyCommitmentsUpdated={onMonthlyCommitmentsUpdated}
            onInterestRateUpdated={onInterestRateUpdated}
            onLengthOfMortgageUpdated={onLengthOfMortgageUpdated}
          />
        </div>
        <div className="output">
          <h3 className="output-details">Let's see the results!</h3>
          {budget !== 0 ? (
            <CalculatorResults
              value={value}
              budget={budget}
              totalValue={totalValue}
              monthlyPayments={monthlyPayments}
            />
          ) : (
            <div className="enter">Please enter a primary income above to begin!</div>
          )}
        </div>
      </section>
    </>
  );
};

export default CalculatorContainer;
