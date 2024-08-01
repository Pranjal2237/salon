import React from 'react'
import { useFormik } from "formik";
import * as yup from 'yup'
import './style.css'
import axios from 'axios'

const initialValues = {
    name: "",
    email: "",
    message: "",
    interest: "",
  };

  const FormSchema=yup.object({
    name:yup.string().min(2).required('Please enter your name'),
    email:yup.string().email().required('Please enter your email'),
    message:yup.string().required('Please enter your message'),
    interest:yup.string().required('Please select your interest')
})

const Form = () => {
    let { values, handleBlur, handleChange, handleSubmit, touched, errors,resetForm } =
    useFormik({
      initialValues,
      validationSchema: FormSchema,
      onSubmit: async(values, { resetForm }) => {
        const {data}=await axios.post("http://localhost:4000/api/queryemail",{
          ...values
        })
        resetForm();
      },
    });
  return (
    <div>
        <form className='enquiryForm' onSubmit={handleSubmit} >
      <div className='inputBlock'>
        <input
          type="text"
          autoComplete="off"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='YOUR NAME'
        />
        {errors.name && touched.name ? <p>{errors.name}</p> : null}
      </div>
      <div className='inputBlock'>
        <input
          type="text"
          autoComplete="off"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='YOUR EMAIL'
        />
        {errors.email && touched.email ? <p>{errors.email}</p> : null}
      </div>
      <div className='inputBlock'>
        <select  name='interest' value={values.interest} onChange={handleChange} onBlur={handleBlur}>
            <option>What are you interested in?</option>
            <option>Hair cut</option>
            <option>Colour</option>
            <option>Styling</option>
            <option>Perm</option>
            <option>Other</option>
        </select>
        {errors.interest && touched.interest ? <p>{errors.interest}</p> : null}
      </div>
      <div className='inputBlock'>
        <textarea
          type="text"
          autoComplete="off"
          name="message"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='YOUR MESSAGE'
        />
        {errors.message && touched.message ? <p>{errors.message}</p> : null}
      </div>
        <button type="submit" className='btn'>SUBMIT</button>
    </form>
    </div>
  )
}

export default Form