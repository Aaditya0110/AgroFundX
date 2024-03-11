import { approveLoan, rejectLoan } from '../../apis/admin/admin';
import { getPendingLoans } from '../../apis/user/Loans';
import '../../assets/css/loanapproval.css';
import { useEffect, useState } from 'react';

function LoanApproval() {
  const [loanApplications, setLoanApplications] = useState([]);
  const[change,setChange]=useState('true');

  useEffect(() => {
    async function fetchPendingLoans() {
      try {
        const pendingLoans = await getPendingLoans();
        setLoanApplications(pendingLoans);
      } catch (error) {
        console.error('Error fetching pending loans:', error);
      }
    }
    fetchPendingLoans();
  }, [change]); 

  
  const handleApproval = async (id) => {
    try {
      await approveLoan(id);
      setChange(!change);
      // setLoanApplications(prevApplications =>
      //   prevApplications.map(application =>
      //     application.id === id
      //       ? { ...application, status: 'approved' }
      //       : application
      //   )
      // );
    
      window.location.reload();
      
    } catch (error) {
      console.error('Error approving loan:', error);
    }
  };
  const handleReject = async (id) => {
    try {
      await rejectLoan(id);
      setChange(!change);
      
      window.location.reload();
      
    } catch (error) {
      console.error('Error rejecting loan:', error);
    }
  };
return (
    <div className="loan-approval-page">
      <h2>Pending Loan Applications</h2>
      <div className="loan-applications">
        {loanApplications.map(application => (
          <div key={application.id} className="application-card">
            <h3>{application.Loan}</h3>
            <p>User: {application.appUser.userName}</p>
            <p>Scheme: {application.loans.loanName}</p>
            <p>Amount: ${application.amt}</p>
            <p>Interest Rate: {application.loans.roi}%</p>
            <p>Interest Amount: {application.loans.roi}</p>
            <p>Payment Period: {application.loans.maxLoanPeriod}</p>
            <p>Status: {application.status}</p>
            <p>Credit Score: 450</p>
            <div className="approval-buttons">
              <button className="approval-buttonp" onClick={() => handleApproval(application.id)}>Approve</button>
              <button className="approval-buttonn" onClick={() => handleReject(application.id)}>Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoanApproval;
