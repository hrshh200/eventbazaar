import React, { useState } from 'react'
import { Calendar } from 'lucide-react'
import './SignUp.css'

// Custom Button component
const Button = ({ children, type = 'button', className = '', ...props }) => (
  <button
    type={type}
    className={`button ${className}`}
    {...props}
  >
    {children}
  </button>
)

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    if (!formData.fullName) newErrors.fullName = 'Full name is required'
    if (!formData.email) newErrors.email = 'Email is required'
    if (!formData.password) newErrors.password = 'Password is required'
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match'

    if (Object.keys(newErrors).length === 0) {
      // Submit the form data
      console.log('Form submitted:', formData)
      // Here you would typically send the data to your backend
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <div className="signup-page">
      <div className="signup-form">
        <div className="logo-container">
          <Calendar className="logo-icon" />
          <h1 className="logo-text">Event Bazaar</h1>
        </div>
        <h2 className="form-title">Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              className={`form-input ${errors.fullName ? 'error' : ''}`}
            />
            {errors.fullName && <p className="error-message">{errors.fullName}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-input ${errors.email ? 'error' : ''}`}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className={`form-input ${errors.password ? 'error' : ''}`}
            />
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
            />
            {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
          </div>
          <Button type="submit" className="submit-button">Sign Up</Button>
        </form>
        <p className="login-link">
          Already have an account? <a href="#">Log in</a>
        </p>
      </div>
    </div>
  )
}