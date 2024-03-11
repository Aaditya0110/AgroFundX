import '../assets/css/loanList.css';
import { PieChart } from '@mui/x-charts/PieChart';

const LoanList = ({ loan }) => {
  // console.log(loan);
  // Prepare data for the PieChart component
  const data = [
    { label: 'Payed Amount', value: loan.payedAmount },
    { label: 'Remaining Amount', value: loan.amt - loan.balance },
  ];
console.log(loan);
  return (
    <div className="loan-list">
      <div className="loan-item">
        <div className='item.list'>
          {/* Display loan details */}
          <h3>{loan.loans.loanName} :</h3>
          <p>Principal Amount: {loan.amt}</p>
          <p>Interest Rate: {loan.loans.roi}%</p>
          <p>Payback Period: {loan.loans.maxLoanPeriod} months</p>
          <p>Remaining Amount: {loan.amt - loan.payedAmount}</p>
          <p>Payed Amount: {loan.payedAmount}</p>
        </div>
        {/* Display PieChart */}
        <div className='ind-loans'>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: loan.amt, label: 'Principal Amount' },
                  { id: 1, value: loan.payedAmount, label: 'Payed Amount' },
                  { id: 2, value: loan.amt - loan.payedAmount, label: 'Remaining Amount' },
                ],
                innerRadius: 60,
                outerRadius: 100,
                paddingAngle: 5,
                cornerRadius: 5,
                startAngle: -90,
                endAngle: 180,
                cx: 90,
                cy: 100,
              },
            ]}
            width={400}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default LoanList;
