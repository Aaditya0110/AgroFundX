import { useState, useEffect } from 'react';
import '../../assets/css/profile.css'; 

const Profile = () => {
  const [user, setUser] = useState({
    name: 'John Farmer',
    location: 'Green Valley, Anytown, USA',
    age: 38,
    contact: 'johnfarmer@email.com | (555) 123-4567',
    phoneNumber: '(555) 123-4567',
    email: 'johnfarmer@email.com',
    address: '123 Green St, Anytown, USA',
    bankName: 'Farmers Bank',
    bankBranch: 'Anytown Branch',
    accountNumber: '1234567890',
    ifscCode: 'ABCD0123456',
  });

  const [editedUser, setEditedUser] = useState({ ...user });
  const [isUserEditing, setIsUserEditing] = useState(false);

  const handleUserEdit = () => {
    setIsUserEditing(true);
  };

  const handleUserSave = () => {
    setUser({ ...editedUser });
    setIsUserEditing(false);
    window.alert("User profile change succesfully");
  };

  const handleUserCancel = () => {
    setEditedUser({ ...user });
    setIsUserEditing(false);
  };

  useEffect(() => {
    // Fetch user data from an API and set initial state
    // Example:
    // fetchUserData(userId)
    //   .then((userData) => {
    //     setUser(userData);
    //     setEditedUser(userData);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching user data:', error);
    //   });
  }, []); // Add dependencies based on your actual implementation

  return (
    <div className='profile-body'>
    <div className="profile-container">


      <section className="user-details">
      <h1 className="profile-title">{user.name} Profile</h1>
        
        {isUserEditing ? (
          <>
          <div className='profile-detailse'>
           <div className='user-detailspe'>
            <label>Name: </label>
            <input
              className="input-field"
              type="text"
              value={editedUser.name}
              onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
            />
            <br />
            <label>Location: </label>
            <input
              className="input-field"
              type="text"
              value={editedUser.location}
              onChange={(e) => setEditedUser({ ...editedUser, location: e.target.value })}
            />
            <br />
            <label>Age: </label>
            <input
              className="input-field"
              type="number"
              value={editedUser.age}
              onChange={(e) => setEditedUser({ ...editedUser, age: parseInt(e.target.value, 10) || 0 })}
            />
            <br />
            
            <label>Contact: </label>
            <input
              className="input-field"
              type="text"
              value={editedUser.contact}
              onChange={(e) => setEditedUser({ ...editedUser, contact: e.target.value })}
            />
            <br />
            
            <label>Phone Number: </label>
            <input
              className="input-field"
              type="text"
              value={editedUser.phoneNumber}
              onChange={(e) => setEditedUser({ ...editedUser, phoneNumber: e.target.value })}
            />
            <br />
            
            <label>Email: </label>
            <input
              className="input-field"
              type="text"
              value={editedUser.email}
              onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
            />
            <br />
            <label>Address: </label>
            <input
              className="input-field"
              type="text"
              value={editedUser.address}
              onChange={(e) => setEditedUser({ ...editedUser, address: e.target.value })}
            />
            </div>
            <div className='bank-detailspe'>
            <label>Bank Name: </label>
            <input
              className="input-field"
              type="text"
              value={editedUser.bankName}
              onChange={(e) => setEditedUser({ ...editedUser, bankName: e.target.value })}
            />
            <br />
            <label>Bank Branch: </label>
            <input
              className="input-field"
              type="text"
              value={editedUser.bankBranch}
              onChange={(e) => setEditedUser({ ...editedUser, bankBranch: e.target.value })}
            />
            <br />
            <label>Account Number: </label>
            <input
              className="input-field"
              type="text"
              value={editedUser.accountNumber}
              onChange={(e) => setEditedUser({ ...editedUser, accountNumber: e.target.value })}
            />
            <br />
            <label>IFSC Code: </label>
            <input
              className="input-field"
              type="text"
              value={editedUser.ifscCode}
              onChange={(e) => setEditedUser({ ...editedUser, ifscCode: e.target.value })}
            />
            <br />
            </div>
            <button className="btn-edit" onClick={handleUserSave}>Save</button>
            <button className="btn-edit" onClick={handleUserCancel}>Cancel</button>
            </div>
          </>
        ) : (
          <>
          <div className='profile-details'>
          <div className='user-detailsp'>
            <h3>User Details</h3>
            <p>Name: {user.name}</p>
            <p>Location: {user.location}</p>
            <p>Age: {user.age}</p>
            <p>Contact: {user.contact}</p>
            <p>Phone Number: {user.phoneNumber}</p>
            <p>Email: {user.email}</p>
<p>Address: {user.address}</p>
</div>
<div className='bank-detailsp'>
            <h3>Bank Details</h3>
<p>Bank Name: {user.bankName}</p>
<p>Bank Branch: {user.bankBranch}</p>
<p>Account Number: {user.accountNumber}</p>
<p>IFSC Code: {user.ifscCode}</p>
</div>
</div>
<button className="btn-edit" onClick={handleUserEdit}>Edit</button>
</>
)}

</section>
</div>

<div id="uploadDiv" className='uploadDiv'>
  <h3>Upload Documents</h3>
  <form action="/upload" method="post" enctype="multipart/form-data" className='lbt2'>
    <input type="file" name="file" id="file"/>
    <button type="submit" name="submit" className=''>Upload</button>
  </form>
</div>
</div>
);
};

export default Profile;
