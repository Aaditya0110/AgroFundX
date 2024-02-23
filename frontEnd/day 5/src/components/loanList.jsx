import '../assets/css/loanList.css';
import { PieChart } from '@mui/x-charts/PieChart';

const LoanList = ({ loan }) => {
  // const data = [
  //   { label: 'Payed Amount', value: 10 },
  //   { label: 'Remaining Amount', value: 20 },
  // ];
  const data = [
    { label: 'Payed Amount', value: 10 },
    { label: 'Remaining Amount', value: 20 },
  ];

  return (
    <div className="loan-list">
      <div className="loan-item">
        <div className='item.list'>
        <h3>{loan.name} :</h3>
        <p>Principal Amount: {loan.principal}</p>
        <p>Interest Rate: {loan.interestRate}%</p>
        <p>Payback Period: {loan.paybackPeriod} months</p>
        <p>Remaining Amount: {loan.remainingAmount}</p>
        <p>Payed Amount: {loan.payedAmount}</p>
        </div>
      <div className='ind-loans'>
            <PieChart
        series={[
          {
            data: [
              { id: 0, value: loan.principal, label: 'series A' },
              { id: 1, value: loan.payedAmount, label: 'series B' },
              { id: 2, value: loan.remainingAmount, label: 'series C' },
            ], innerRadius: 60,
            outerRadius: 100,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: -90,
            endAngle: 180,
            cx: 150,
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
