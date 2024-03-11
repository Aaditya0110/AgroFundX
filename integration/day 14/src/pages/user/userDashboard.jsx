import '../../assets/css/userDash.css';
import ReactSpeedometer from "react-d3-speedometer/slim"
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import LoanList from '../../components/loanList';
import { useEffect, useState } from 'react';
import { getLoansByUserId } from '../../apis/user/Loans';

function UserDashboard(){

  const [userLoans, setUserLoans] = useState([]);
    useEffect(() => {
        const userId = localStorage.getItem('UsersId');
        getLoansByUserId(userId)
            .then(loans => setUserLoans(loans))
            .catch(error => console.error("Error fetching user loans:", error));
    }, []);
    const loans = [
        {
          name: 'Loan 1',
          principal: 10000,
          interestRate: 5,
          paybackPeriod: 12,
          remainingAmount: 5000,
          payedAmount: 0,
        },
        {
          name: 'Loan 2',
          principal: 15000,
          interestRate: 7,
          paybackPeriod: 24,
          remainingAmount: 10000,
          payedAmount: 0,
        },
        // Add more loan objects here as needed
      ];

      loans.forEach(loan => {
        loan.payedAmount = loan.principal - loan.remainingAmount;
      });

 const ongoingLoans = 5;
  const totalAmount = 10000;
  const dueNextMonth = 2000;
  const paidAmount = 8000;
  const pendingAmount = 2000;

  const data = [
    { value: totalAmount, label: 'Total Amount' },
    { value: paidAmount, label: 'Paid Amouont' },
    { value: 1000, label: 'Intrests' },
  ];

  const size = {
    width: 500,
    height: 250,
  };

  const paymentInfo = {
    amount: 500,
    dueDate: '2024-03-01',
    loanName: 'Home Loan',
    paymentMethod: 'Auto Debit',
    // Add more payment details as needed
  };

    return(
        <div className="uDash-body">
            <div className='uDash-container'>
            {/* {/* <h1>DashBoard</h1> */}
                <div className='uDash-content1'>
                    <div className='credit-meter' >
                        <h2 className='dash-titles'>
                        Your Credit Score:
                        </h2>
                        <ReactSpeedometer value='560' maxValue={850} className='c-meter'/>
                    </div>
                    <div className="dashboard-summary">
                        <h2>Dashboard Summary</h2>
                        <div className="summary-item">
                            <p><span className="summary-label">Ongoing Loans:</span> <span className="summary-value">{ongoingLoans}</span></p>
                            </div>
                            <div className="summary-item">
                            <p><span className="summary-label">Total Amount:</span> <span className="summary-value">${totalAmount}</span></p>
                            </div>
                            <div className="summary-item">
                            <p><span className="summary-label">Due Next Month:</span> <span className="summary-value">${dueNextMonth}</span></p>
                            </div>
                            <div className="summary-item">
                            <p><span className="summary-label">Paid Amount:</span> <span className="summary-value">${paidAmount}</span></p>
                            </div>
                            <div className="summary-item">
                            <p><span className="summary-label">Pending Amount:</span> <span className="summary-value">${pendingAmount}</span></p>
                            </div>
                        </div>
              </div>
                <div className='dash-container2'>
                    <div className='dash-visual'>
                        <h2>Overview:</h2>
                        <PieChart
                            series={[
                                {
                                arcLabel: (item) => `(${item.value})`,
                                arcLabelMinAngle: 45,
                                data,
                                },
                            ]}
                            sx={{
                                [`& .${pieArcLabelClasses.root}`]: {
                                fill: 'white',
                                fontWeight: 'bold',
                                },
                            }}
                            {...size}
                        />
                   </div>
                   <div className='upcoming-payment'>
                        <h2 className='dash-titles'>Next-Payment:</h2>
                        <div className="uDash-body">
                            <p className="payment-info"><span className="payment-label">Loan Name:</span> {paymentInfo.loanName}</p>
                            <p className="payment-info"><span className="payment-label">Amount:</span> ${paymentInfo.amount}</p>
                            <p className="payment-info"><span className="payment-label">Due Date:</span> {paymentInfo.dueDate}</p>
                            <p className="payment-info"><span className="payment-label">Payment Method:</span> {paymentInfo.paymentMethod}</p>
                        </div>
                    </div>
                <div className='loan-bar'>
                  <h2>All Loans:</h2>
                  <BarChart xAxis={[{ scaleType: 'band', data: ['loan 1', 'loan 2', 'loan 3'] }]}
                   series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]} width={700} height={300}/>
                </div>
              </div>
              <div className='dash-container3'> 
            <div className='dash-container3'>
                <h2>Loan Details:</h2>
                {userLoans.map((loan, index) => (
                    <LoanList key={index} loan={loan} />
                ))}
            </div>
        </div>
            </div>
        </div>
    )
}

export default UserDashboard;