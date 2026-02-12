import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function App() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      age: '',
      gender: '',
      interests: [],
      dateOfBirth: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      phoneNumber: Yup.string().required('Phone Number is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
      age: Yup.number().min(18, 'You must be at least 18').required('Age is required'),
      gender: Yup.string().required('Gender is required'),
      interests: Yup.array().min(1, 'Select at least one interest'),
      dateOfBirth: Yup.date().required('Date of Birth is required').typeError('Invalid Date'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} style={{ maxWidth: 400, margin: 'auto' }}>
      <div>
        <label>First Name</label><br />
        <input name="firstName" value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.touched.firstName && formik.errors.firstName ? <div style={{color:'red'}}>{formik.errors.firstName}</div> : null}
      </div>

      <div>
        <label>Last Name</label><br />
        <input name="lastName" value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.touched.lastName && formik.errors.lastName ? <div style={{color:'red'}}>{formik.errors.lastName}</div> : null}
      </div>

      <div>
        <label>Email</label><br />
        <input name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.touched.email && formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div> : null}
      </div>

      <div>
        <label>Phone Number</label><br />
        <input name="phoneNumber" value={formik.values.phoneNumber} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? <div style={{color:'red'}}>{formik.errors.phoneNumber}</div> : null}
      </div>

      <div>
        <label>Password</label><br />
        <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.touched.password && formik.errors.password ? <div style={{color:'red'}}>{formik.errors.password}</div> : null}
      </div>

      <div>
        <label>Confirm Password</label><br />
        <input type="password" name="confirmPassword" value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div style={{color:'red'}}>{formik.errors.confirmPassword}</div> : null}
      </div>

      <div>
        <label>Age</label><br />
        <input type="number" name="age" value={formik.values.age} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.touched.age && formik.errors.age ? <div style={{color:'red'}}>{formik.errors.age}</div> : null}
      </div>

      <div>
        <label>Gender</label><br />
        <select name="gender" value={formik.values.gender} onChange={formik.handleChange} onBlur={formik.handleBlur}>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        {formik.touched.gender && formik.errors.gender ? <div style={{color:'red'}}>{formik.errors.gender}</div> : null}
      </div>

      <div>
        <label>Interests</label><br />
        <label>
          <input
            type="checkbox"
            name="interests"
            value="Coding"
            onChange={formik.handleChange}
            checked={formik.values.interests.includes('Coding')}
          /> Coding
        </label>
        <label>
          <input
            type="checkbox"
            name="interests"
            value="Sports"
            onChange={formik.handleChange}
            checked={formik.values.interests.includes('Sports')}
          /> Sports
        </label>
        <label>
          <input
            type="checkbox"
            name="interests"
            value="Reading"
            onChange={formik.handleChange}
            checked={formik.values.interests.includes('Reading')}
          /> Reading
        </label>
        {formik.touched.interests && formik.errors.interests ? <div style={{color:'red'}}>{formik.errors.interests}</div> : null}
      </div>

      <div>
        <label>Date of Birth</label><br />
        <input type="date" name="dateOfBirth" value={formik.values.dateOfBirth} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? <div style={{color:'red'}}>{formik.errors.dateOfBirth}</div> : null}
      </div>

      <button type="submit" style={{ marginTop: 10 }}>Submit</button>
    </form>
  );
}
