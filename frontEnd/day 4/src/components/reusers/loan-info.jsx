import React from 'react';
import './loan-info.css';

const LoanInfo = ({ scheme}) => {
  return (
    <div className={'loan-info'}>
      <div className='loan-subinfo'>
        <h3>{scheme.name} :</h3>
        <p>Description: {scheme.description}</p>
        <p>Interest Rate: {scheme.interestRate}</p>
        <p>Amount Range: {scheme.amountRange}</p>
        <p>Payment Period Range: {scheme.paymentPeriodRange}</p>
      </div>
    </div>
  );
};

export default LoanInfo;