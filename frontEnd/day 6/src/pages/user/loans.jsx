import React, { useState } from 'react';
import '../../assets/css/loans.css'
import LoanInfo from '../../components/reusers/loan-info';
import { useNavigate } from 'react-router-dom';

const Loans = () => {
  const [selectedScheme, setSelectedScheme] = useState(null);

  let navigate = useNavigate();
  const handleLoanClick = () => {
    let path = '/detailedLoanDetails';
    navigate(path);
  };
  const loanSchemes = [
    { 
      id: 1, 
      name: 'Scheme 1', 
      description: 'Description of Scheme 1', 
      interestRate: '5%', 
      amountRange: '$1000 - $5000',
      paymentPeriodRange: '6 - 12 months'
    },
    { 
      id: 2, 
      name: 'Scheme 2', 
      description: 'Description of Scheme 2', 
      interestRate: '6%', 
      amountRange: '$2000 - $10000',
      paymentPeriodRange: '8 - 24 months'
    },
    { 
      id: 3, 
      name: 'Scheme 3', 
      description: 'Description of Scheme 3', 
      interestRate: '7%', 
      amountRange: '$3000 - $15000',
      paymentPeriodRange: '12 - 36 months'
    },
    { 
      id: 3, 
      name: 'Scheme 3', 
      description: 'Description of Scheme 3', 
      interestRate: '7%', 
      amountRange: '$3000 - $15000',
      paymentPeriodRange: '12 - 36 months'
    },
    { 
      id: 3, 
      name: 'Scheme 3', 
      description: 'Description of Scheme 3', 
      interestRate: '7%', 
      amountRange: '$3000 - $15000',
      paymentPeriodRange: '12 - 36 months'
    },
    
    // Add more loan schemes
  ];

  return (
    <div className='Loan-body'>
      <div className='Loan-container' onClick={handleLoanClick}>
        {loanSchemes.map((scheme, index) => (
          <LoanInfo key={scheme.id} scheme={scheme} align={index % 2 === 0 ? 'left' : 'right'} />
        ))}
      </div>
    </div>
  );
};

export default Loans;
