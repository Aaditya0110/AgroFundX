import '../../assets/css/admin-dash.css'
import { PieChart } from '@mui/x-charts';
import { useNavigate } from 'react-router-dom';

function AdminDash(){
    const ongoingLoans = 25;
    const numberOfCustomers = 50;
    const  ongoingloanAmount= "$500,000";
    const todaysLoanAmount = "$10,000";
    const todaysPayment = "$5,000";

    let navigate = useNavigate();
  const handleApproveClick = (dest) => {
    let path = '/loneApproval';
    navigate(path);
  };
    return(
        <div className='admindash-body'>
            <div className='admindash-container'>
                <div className="loans-summary2">
                    <div className="summary-item2">
                        <h4>Number of Customers</h4>
                        <p>{numberOfCustomers}</p>
                    </div>
                    <div className="summary-item2">
                        <h4>Ongoing Loans</h4>
                        <p>{ongoingLoans}</p>
                    </div>
                    <div className="summary-item2">
                        <h4>Ongoing Loans Amount</h4>
                        <p>{ongoingloanAmount}</p>
                    </div>
                    <div className="summary-item2">
                        <h4>Today's Loan Amount</h4>
                        <p>{todaysLoanAmount}</p>
                    </div>
                    <div className="summary-item2">
                        <h4>Today's Payment</h4>
                        <p>{todaysPayment}</p>
                    </div>
                </div>
                <div className='loans-summary3'>
                    <div className='summary2-item1'>
                        <h3>Loan Approval:</h3>
                    <PieChart
                        series={[
                        {
                            data: [
                            { id: 0, value: 1567, label: 'Approved Loans' },
                            { id: 1, value: 667, label: 'Pending Loans' },
                            { id: 2, value: 267, label: 'Rejected Loans' },
                            ], innerRadius: 60,
                            outerRadius: 100,
                            paddingAngle: 5,
                            cornerRadius: 5,
                            startAngle: -90,
                            endAngle: 90,
                            cx: 130,
                            cy: 130,
                        },
                        ]}
                        width={440}
                        height={200}
                    />
                    <button className='app-btt' onClick={handleApproveClick}>Approve Loans</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDash;