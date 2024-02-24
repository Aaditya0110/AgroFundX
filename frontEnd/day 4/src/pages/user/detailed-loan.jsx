import React, { useState } from 'react';
import '../../assets/css/detailed-loaninfo.css';

const DetailedLoanInfo = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [timePeriod, setTimePeriod] = useState('');
  const [principalAmount, setPrincipalAmount] = useState('');
  const [interestAmount, setInterestAmount] = useState('');

  const handleGetLoan = () => {
    setShowPopup(true);
  };

  const calculateInterest = () => {
    const interestRate = 5;
    const calculatedInterest = (parseFloat(principalAmount) * interestRate * parseFloat(timePeriod)) / 100;
    setInterestAmount(calculatedInterest.toFixed(2)); // Rounded to two decimal places
  };

  return (
    <div className='detailed-loan-body'>
      {showPopup && <div className="overlay"></div>}
      <div className="detailed-loan-info">
        <h2>Detailed Loan Information</h2>
        <div className="info">
          <p><span>ID:</span> 01</p>
          <p><span>Name:</span> Scheme 1</p>
          <p><span>Description:</span> Our loan scheme, named 'Scheme 1', offers flexible financing options tailored to meet your financial needs. With a competitive interest rate of 5%, our loan provides access to funds ranging from $50,000 to $100,000, allowing you to pursue various personal or business ventures. Additionally, our payment period ranges from 6 to 12 months, providing you with the flexibility to repay the loan at a pace that suits your financial circumstances. Whether you're looking to consolidate debt, invest in home improvements, or fund a business expansion, our Scheme 1 loan offers a convenient and affordable solution to achieve your financial goals.</p>
          <p><span>Interest Rate:</span> 5%</p>
          <p><span>Amount Range:</span> $50,000 - $100,000</p>
          <p><span>Payment Period Range:</span> 6 - 12 months</p>
        </div>
        <button onClick={handleGetLoan}>Get Loan</button>
      </div>
      {showPopup && (
        <div className="popup-container">
          <div className="popup">
            <h3>Enter Loan Details</h3>
            <input type="number" placeholder="Time Period (months)" value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)} />
            <input type="number" placeholder="Principal Amount" value={principalAmount} onChange={(e) => setPrincipalAmount(e.target.value)} />
            <button onClick={calculateInterest}>Calculate Interest</button>
            {interestAmount && <p>Interest Amount: ${interestAmount}</p>}
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailedLoanInfo;
