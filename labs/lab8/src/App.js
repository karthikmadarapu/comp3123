import React, { useState } from 'react';

function App() {
  // State to hold live values as the user types in the form
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    agreed: false
  });

  // State to freeze and store data when Submit is clicked
  const [submittedData, setSubmittedData] = useState(null);

  // Canadian provinces list from the lab instruction
  const provinces = [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Nova Scotia",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan"
  ];

  // Generic handler for all input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Handle form submission (Part II requirement)
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '30px', border: '3px solid #28a745', borderRadius: '8px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Data Entry Form</h2>
      
      {/* Part I: Data Entry Form */}
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
              required
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
              required
            />
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Address</label>
          <input
            type="text"
            name="address"
            placeholder="1234 Main St"
            value={formData.address}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
            required
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Address 2</label>
          <input
            type="text"
            name="address2"
            placeholder="Apartment, studio, or floor"
            value={formData.address2}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
              required
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Province</label>
            <select
              name="province"
              value={formData.province}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
              required
            >
              <option value="">Choose...</option>
              {provinces.map((prov, index) => (
                <option key={index} value={prov}>{prov}</option>
              ))}
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
              required
            />
          </div>
        </div>

        <div style={{ marginBottom: '25px', textAlign: 'center' }}>
          <label style={{ cursor: 'pointer' }}>
            <input
              type="checkbox"
              name="agreed"
              checked={formData.agreed}
              onChange={handleChange}
              style={{ marginRight: '8px' }}
            />
            Agree Terms & Condition?
          </label>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            type="submit"
            style={{ backgroundColor: '#28a745', color: 'white', padding: '10px 30px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}
          >
            Submit
          </button>
        </div>
      </form>

      {/* Part II: Submission Details Output Display */}
      {submittedData && (
        <div style={{ marginTop: '40px', borderTop: '2px solid #ddd', paddingTop: '20px' }}>
          <h3>Submission Details</h3>
          <p><strong>Email:</strong><br /> | {submittedData.email}</p>
          <p><strong>Full Name:</strong><br /> | {submittedData.name}</p>
          <p><strong>Address:</strong><br /> | {submittedData.address} {submittedData.address2 ? `, ${submittedData.address2}` : ''}</p>
          <p><strong>City:</strong><br /> | {submittedData.city}</p>
          <p><strong>Province:</strong><br /> | {submittedData.province}</p>
          <p><strong>Postal Code:</strong><br /> | {submittedData.postalCode}</p>
        </div>
      )}
    </div>
  );
}

export default App;