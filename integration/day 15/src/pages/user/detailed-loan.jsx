import  { useEffect, useState } from 'react';
import '../../assets/css/detailed-loaninfo.css';
import { Navigate, useParams } from 'react-router-dom';
import { deleteLoans, getLoanById, updateLoan } from '../../apis/user/Loans';
import { getLoan } from '../../apis/user/Users';

const DetailedLoanInfo = () => {
  const [loan, setLoan] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [timePeriod, setTimePeriod] = useState('');
  const [principalAmount, setPrincipalAmount] = useState('');
  // const [editedLoanData, setEditedLoanData] = useState({});
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [interestAmount, setInterestAmount] = useState('');
  const [editedLoanData, setEditedLoanData] = useState({
    LoanName: '',
    Description: '',
    ROI: '',
    minLoanPeriod: '',
    maxLoanPeriod: '',
    minLoanAmount: '',
    maxLoanAmount: ''
  });
  const { id } = useParams();
  const userRole = localStorage.getItem('role');
  
  
  useEffect(() => {
    const fetchLoan = async () => {
      try {
        const fetchedLoan = await getLoanById(id);
        setLoan(fetchedLoan);
        setEditedLoanData({ ...fetchedLoan }); // Initialize edited loan data with fetched loan data
      } catch (error) {
        console.error('Error fetching loan:', error);
      }
    };
    
    fetchLoan();
  }, [id]);
  const handleEditClick = () => {
    setShowEditPopup(true);
  };

  useEffect(() => {
    
    const fetchLoan = async () => {
      try {
        const fetchedLoan = await getLoanById(id);
        setLoan(fetchedLoan);

      } catch (error) {
        console.error('Error fetching loan:', error);
      }
    };
    
    fetchLoan();
  }, [id]);
  const handleGetLoan = () => {
    setShowPopup(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedLoanData({ ...editedLoanData, [name]: value });
  };

  const handleUpdateLoan = async () => {
    try {
      console.log(editedLoanData);
      await updateLoan(editedLoanData);
      setShowEditPopup(false);
      return <Navigate to="/loans" />;
    } catch (error) {
      console.error('Error updating loan:', error);
    }
  };

    const [errorMessage, setErrorMessage] = useState(''); 
  
    const handleDeleteClick = async () => {
      try {
        await deleteLoans(id);
        Navigate('/loans'); 
      } catch (error) {
        console.error('Error deleting loan:', error);
        setErrorMessage(error.response.data.message);
      }
    };

  if (!loan) {
    return <div>Loading...</div>;
  }

  const handlegetLoan = async () => {
    const userId = localStorage.getItem('UsersId'); 
    const loaninfo = {
      amt: principalAmount,
      status: 'pending',
      balance: 0,
    };
    try {
      await getLoan(userId, id, loaninfo); 
      setShowPopup(false); 
    } catch (error) {
      console.error('Error getting loan:', error);
    }
  };
  
  const calculateInterest = () => {
    const interestRate = loan.roi;
    const calculatedInterest = (parseFloat(principalAmount) * interestRate * parseFloat(timePeriod)) / 100;
    setInterestAmount(calculatedInterest.toFixed(2)); // Rounded to two decimal places
  };
  
  if (!loan) {
    return <div>Loading...</div>;
  }
  // console.log(loan);
  return (
    <div className='detailed-loan-body'>
      {showPopup && <div className="overlay"></div>}
      <div className="detailed-loan-info">
        <h2>Detailed Loan Information</h2>
        <div className="info">
          {/* <p><span>ID:</span> {loan.loanId}</p> */}
          <p><span>Name:</span> {loan.loanName}</p>
          <p><span>Description:</span> {loan.description}</p>
          <p><span>Interest Rate:</span> {loan.roi}%</p>
          <p><span>Amount Range:</span> ${loan.minLoanAmount} - ${loan.maxLoanAmount}</p>
          <p><span>Payment Period Range:</span> {loan.minLoanPeriod} - {loan.maxLoanPeriod} months</p>
        </div>
        <button onClick={handleGetLoan}>Get Loan</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {userRole === 'ADMIN' && (
          <div className='admin-buttons'>
            <button onClick={handleEditClick}>Edit Loans</button>
            {/* <button>Add Loan</button> */}
            <button onClick={handleDeleteClick}>Delete Loan</button>
          </div>
        )}
      </div>
      {showPopup && (
  <div className="popup-container">
    <div className="popup">
      <h3>Enter Loan Details</h3>
      <div>
        <label htmlFor="principalAmount">Principal Amount:</label>
        <input 
          type="number" 
          id="principalAmount" 
          placeholder="Enter Principal Amount" 
          value={principalAmount} 
          onChange={(e) => setPrincipalAmount(e.target.value)} 
        />
          <button 
          className={`time-period-button ${timePeriod === '6' ? 'selected' : ''}`} 
          onClick={() => setTimePeriod('6')}
        >
          6 months
        </button>
        <button 
          className={`time-period-button ${timePeriod === '12' ? 'selected' : ''}`} 
          onClick={() => setTimePeriod('12')}
        >
          1 year
        </button>
        <button 
          className={`time-period-button ${timePeriod === '24' ? 'selected' : ''}`} 
          onClick={() => setTimePeriod('24')}
        >
          2 years
        </button>
        <button 
          className={`time-period-button ${timePeriod === '36' ? 'selected' : ''}`} 
          onClick={() => setTimePeriod('36')}
        >
          3 years
        </button>
        <button className={'popup-button'} onClick={calculateInterest}>Calculate Interest</button>
        <button className={'popup-button'} onClick={handlegetLoan}>Get Loan</button>
        <button onClick={() => setShowPopup(false)} className={'popup-button'}>Close</button>
      </div>
    </div>
  </div>
)}

      {showEditPopup && (
        <div className="popup-container">
          <div className="popup">
            <h3>Edit Loan Details</h3>
            <div>
            <label htmlFor="LoanName">Loan Name:</label>
            <input 
              type="text" 
              id="LoanName" 
              name="LoanName" 
              placeholder="Enter Loan Name" 
              value={editedLoanData.LoanName} 
              onChange={handleInputChange} 
            />
            <label htmlFor="Description">Description:</label>
            <input 
              type="text" 
              id="Description" 
              name="Description" 
              placeholder="Enter Description" 
              value={editedLoanData.Description} 
              onChange={handleInputChange} 
            />
            <label htmlFor="ROI">Interest Rate:</label>
            <input 
              type="number" 
              id="ROI" 
              name="ROI" 
              placeholder="Enter Interest Rate" 
              value={editedLoanData.ROI} 
              onChange={handleInputChange} 
            />
            <label htmlFor="minLoanPeriod">Minimum Loan Period:</label>
            <input 
              type="number" 
              id="minLoanPeriod" 
              name="minLoanPeriod" 
              placeholder="Enter Minimum Loan Period" 
              value={editedLoanData.minLoanPeriod} 
              onChange={handleInputChange} 
            />
            <label htmlFor="maxLoanPeriod">Maximum Loan Period:</label>
            <input 
              type="number" 
              id="maxLoanPeriod" 
              name="maxLoanPeriod" 
              placeholder="Enter Maximum Loan Period" 
              value={editedLoanData.maxLoanPeriod} 
              onChange={handleInputChange} 
            />
            <label htmlFor="minLoanAmount">Minimum Loan Amount:</label>
            <input 
              type="number" 
              id="minLoanAmount" 
              name="minLoanAmount" 
              placeholder="Enter Minimum Loan Amount" 
              value={editedLoanData.minLoanAmount} 
              onChange={handleInputChange} 
            />
            <label htmlFor="maxLoanAmount">Maximum Loan Amount:</label>
            <input 
              type="number" 
              id="maxLoanAmount" 
              name="maxLoanAmount" 
              placeholder="Enter Maximum Loan Amount" 
              value={editedLoanData.maxLoanAmount} 
              onChange={handleInputChange} 
            />
            <button onClick={handleUpdateLoan}>Update</button>
            <button onClick={() => setShowEditPopup(false)}>Cancel</button>
          </div>
          </div>
        </div>
      )}
    </div>
  );
  
};

export default DetailedLoanInfo;
