const CalculatorResults = ({ value, budget, totalValue, monthlyPayments }) => {
  return (
    <>
      <table>
        <tr>
            <td> Monthly Budget  </td>
            <td> £{budget}</td>
        </tr>
        <tr>
            <td>  Max Possible Mortgage </td>
            <td> £{value}</td>
        </tr>
        <tr>
            <td> Total Cost of Mortgage</td>
            <td> £{totalValue}</td>
        </tr>
        <tr>
            <td> Monthly  Payments</td>
            {monthlyPayments == 0 ? <td>Enter Mortgage Length!</td> : <td> £{monthlyPayments}</td>}
        </tr>
      </table>
    </>
  );
};

export default CalculatorResults;
