const CalculatorResults = ({ value, budget, totalValue, monthlyPayments, deposit}) => {
  return (
    <>
      <table>

        <tr>
          <td> Deposit </td>
          <td> £{deposit}</td>
        </tr>

        <tr>
          <td> Amount Able to Borrow</td>
          <td> £{budget *3}</td>
        </tr>

        <tr>
            {/* budget *3 and deposit */}
          <td> Max Possible House Price </td>
          <td> £{value}</td>
        </tr>
        <tr>
          <td> Total Interest Payable</td>
          <td> £{totalValue}</td>
        </tr>
        <tr>
          <td> Total Cost of Loan</td>
          <td> £{value - deposit + totalValue}</td>
        </tr>
        <tr>
          <td> Monthly Payments</td>
          {monthlyPayments == 0 ? (
            <td>Enter Mortgage Length!</td>
          ) : (
            <td> £{monthlyPayments}</td>
          )}
        </tr>
      </table>
    </>
  );
};

export default CalculatorResults;
