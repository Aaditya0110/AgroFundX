import { useState, useEffect } from 'react';
import LoanInfo from '../../components/reusers/loan-info';
import { useNavigate } from 'react-router-dom';
import { getLoans, addLoan } from '../../apis/user/Loans'; // Import the addLoan function
import '../../assets/css/loans.css';

const Loans = () => {
  const [loans, setLoans] = useState([]);
  const [showAddLoanPopup, setShowAddLoanPopup] = useState(false); // State to toggle add loan popup
  const [loanData, setLoanData] = useState({
    loanName: '',
    description: '',
    roi: '',
    minLoanPeriod: '',
    maxLoanPeriod: '',
    minLoanAmount: '',
    maxLoanAmount: ''
  });
  const navigate = useNavigate();
  const userRole = localStorage.getItem('role');

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const fetchedLoans = await getLoans();
        setLoans(fetchedLoans);
      } catch (error) {
        console.error('Error fetching loans:', error);
      }
    };
    
    fetchLoans();
  }, []);

  const handleLoanClick = (scheme) => {
    let path = `/detailedLoanDetails/${scheme.loanId}`;
    navigate(path);
  };

  const handleAddLoanClick = () => {
    setShowAddLoanPopup(true); 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoanData({ ...loanData, [name]: value });
  };

  const handleAddLoan = async () => {
    try {
      await addLoan(loanData);
      setShowAddLoanPopup(false);
      window.location.reload();
    } catch (error) {
      console.error('Error adding loan:', error);
      // Optionally, you can display an error message to the user
    }
  };

  return (
    <div className='Loan-body'>
      <div className='Loan-container'>
        {loans.map((scheme) => (
          <div key={scheme.loanId} onClick={() => handleLoanClick(scheme)}>
            <LoanInfo scheme={scheme} />
          </div>
        ))}
      </div>
      {userRole === 'ADMIN' && (
        <div className='admin-buttons'>
          <button onClick={handleAddLoanClick}>Add Loan</button>
        </div>
      )}
      {showAddLoanPopup && (
        <div className="add-loan-popup">
          <h2>Add Loan</h2>
          <input type="text" name="loanName" placeholder="Loan Name" value={loanData.loanName} onChange={handleInputChange} />
          <input type="text" name="description" placeholder="Description" value={loanData.description} onChange={handleInputChange} />
          <input type="number" name="roi" placeholder="Interest Rate" value={loanData.roi} onChange={handleInputChange} />
          <input type="number" name="minLoanPeriod" placeholder="Min Loan Period" value={loanData.minLoanPeriod} onChange={handleInputChange} />
          <input type="number" name="maxLoanPeriod" placeholder="Max Loan Period" value={loanData.maxLoanPeriod} onChange={handleInputChange} />
          <input type="number" name="minLoanAmount" placeholder="Min Loan Amount" value={loanData.minLoanAmount} onChange={handleInputChange} />
          <input type="number" name="maxLoanAmount" placeholder="Max Loan Amount" value={loanData.maxLoanAmount} onChange={handleInputChange} />
          <button onClick={handleAddLoan}>Add</button>
          <button onClick={() => setShowAddLoanPopup(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Loans;
