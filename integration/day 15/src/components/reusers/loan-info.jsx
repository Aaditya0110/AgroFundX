import React from 'react';
import './loan-info.css';

const LoanInfo = ({ scheme }) => {
  // console.log(scheme);
  return (
    <div className={'loan-info'}>
      <div className='loan-subinfo'>
        <h3>{scheme.loanName}:</h3>
        {/* <p>Description: {scheme.description}</p> */}
        <p>Interest Rate: {scheme.roi}</p>
        <p>Amount Range: {`${scheme.minLoanAmount} - ${scheme.maxLoanAmount}`}</p>
        <p>Payment Period Range: {`${scheme.minLoanPeriod} - ${scheme.maxLoanPeriod}`}</p>
      </div>
    </div>
  );
};

export default LoanInfo;


