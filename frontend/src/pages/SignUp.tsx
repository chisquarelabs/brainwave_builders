import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const Signup: React.FC = () => {
  const [role, setRole] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const validateForm = () => {
    if (!role) return 'Please select a role.';
    if (!firstName || !lastName) return 'Name fields are required.';
    if (!email || !email.includes('@')) return 'A valid email is required.';
    if (!phone || !/^\d{10}$/.test(phone)) return 'A valid 10-digit phone number is required.';
    if (!location) return 'Please select a location.';
    if (!password || password.length < 6) return 'Password must be at least 6 characters long.';
    if (password !== confirmPassword) return 'Passwords do not match.';
    if (!consent) return 'You must agree to the terms and conditions.';
    return '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errorMessage = validateForm();
    if (errorMessage) {
      setError(errorMessage);
      return;
    }
    const id = role === 'patient' ? `P${Math.random().toString(36).substring(2, 8)}` : '';
    console.log({
      role,
      firstName,
      lastName,
      email,
      phone,
      location,
      id,
    });

    // Navigate to a confirmation or dashboard page
    alert(`Signup successful! Your Patient ID is : ${id} (save this id for future login)`);
    navigate('/');
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1>Sign Up</h1>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
        <div className="form-group">
  <label>Role</label>
  <div className="checkbox-group">
    <label>
      <input
        type="checkbox"
        value="patient"
        checked={role === 'patient'}
        onChange={() => setRole('patient')}
      />
      Sign up as a Patient
    </label>
    <label>
      <input
        type="checkbox"
        value="physician"
        checked={role === 'physician'}
        onChange={() => setRole('physician')}
      />
      Sign up as a Physician
    </label>
  </div>
</div>

          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Location</label>
            <select value={location} onChange={(e) => setLocation(e.target.value)} required>
              <option value="">Select Location</option>
              <option value="New York">New York</option>
              <option value="California">California</option>
              <option value="Texas">Texas</option>
            </select>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
              />
              I agree to the terms and conditions
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
