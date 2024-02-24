// Importing CSS file using 'use'
import '../../assets/css/loanapproval.css';
import { useState } from 'react';

function LoanApproval() {
  const [loanApplications, setLoanApplications] = useState([
    {
      id: 1,
      name: 'John Doe',
      scheme: 'scheme 1',
      amount: 5000,
      interestRate: 8.5,
      paymentPeriod: '12 months',
      creditScore: 720,
      status: 'pending'
    },
    {
      id: 2,
      name: 'John Doe',
      scheme: 'scheme 2',
      amount: 5000,
      interestRate: 8.5,
      paymentPeriod: '12 months',
      creditScore: 720,
      status: 'pending'
    },
    {
      id: 3,
      name: 'John Doe',
      scheme: 'scheme 3',
      amount: 5000,
      interestRate: 8.5,
      paymentPeriod: '12 months',
      creditScore: 720,
      status: 'pending'
    },
    {
      id: 4,
      name: 'John Doe',
      scheme: 'scheme 4',
      amount: 5000,
      interestRate: 8.5,
      paymentPeriod: '12 months',
      creditScore: 720,
      status: 'pending'
    },
    {
      id: 5,
      name: 'John Doe',
      scheme: 'scheme 5',
      amount: 5000,
      interestRate: 8.5,
      paymentPeriod: '12 months',
      creditScore: 720,
      status: 'pending'
    },
    {
      id: 6,
      name: 'John Doe',
      scheme: 'scheme 6',
      amount: 5000,
      interestRate: 8.5,
      paymentPeriod: '12 months',
      creditScore: 720,
      status: 'pending'
    },
    {
      id: 7,
      name: 'John Doe',
      scheme: 'scheme 7',
      amount: 5000,
      interestRate: 8.5,
      paymentPeriod: '12 months',
      creditScore: 720,
      status: 'pending'
    },
    {
      id: 8,
      name: 'John Doe',
      scheme: 'scheme 8',
      amount: 5000,
      interestRate: 8.5,
      paymentPeriod: '12 months',
      creditScore: 720,
      status: 'pending'
    },
    {
      id: 9,
      name: 'John Doe',
      scheme: 'scheme 9',
      amount: 5000,
      interestRate: 8.5,
      paymentPeriod: '12 months',
      creditScore: 720,
      status: 'pending'
    },
  ].map(application => ({
    ...application,
    intrestamt: Math.round(application.amount * (application.interestRate / 100))
  })));
  
  const handleApproval = (id, isApproved) => {
    if (!isApproved) {
      setLoanApplications(prevApplications =>
        prevApplications.filter(application => application.id !== id)
      );
    } else {
      setLoanApplications(prevApplications =>
        prevApplications.map(application =>
          application.id === id
            ? { ...application, status: 'approved' }
            : application
        )
      );
    }
    // You can perform further actions here, like updating the database, sending notifications, etc.
  };

  return (
    <div className="loan-approval-page">
      <h2>Pending Loan Applications</h2>
      <div className="loan-applications">
        {loanApplications.map(application => (
          <div key={application.id} className="application-card">
            <h3>{application.name}</h3>
            <p>Scheme: {application.scheme}</p>
            <p>Amount: ${application.amount}</p>
            <p>Interest Rate: {application.interestRate}%</p>
            <p>Interest Amount: {application.intrestamt}</p>
            <p>Payment Period: {application.paymentPeriod}</p>
            <p>Credit Score: {application.creditScore}</p>
            <div className="approval-buttons">
              <button className="approval-buttonp" onClick={() => handleApproval(application.id, true)}>Approve</button>
              <button className="approval-buttonn" onClick={() => handleApproval(application.id, false)}>Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoanApproval;
