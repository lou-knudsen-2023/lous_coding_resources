import { ChangeEvent, useState, FormEvent } from 'react'
import Formerrors from './Formerrors'
import { Link, useNavigate } from 'react-router-dom'

interface Form extends FormData {
  formErrors: Errors
  firstNameValid: boolean
  lastNameValid: boolean
  companyValid: boolean
  emailValid: boolean
  phoneValid: boolean
  passwordValid: boolean
  reenterPasswordValid: boolean
}

export interface Errors {
  firstName: string
  lastName: string
  company: string
  email: string
  phone: string
  password: string
  reenterPassword: string
}

export interface FormData {
  firstName: string
  lastName: string
  company: string
  email: string
  phone: string
  password: string
  reenterPassword: string
}

function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    password: '',
    reenterPassword: '',
    formErrors: {
      firstName: '',
      lastName: '',
      company: '',
      email: '',
      phone: '',
      password: '',
      reenterPassword: '',
    },
    firstNameValid: false,
    lastNameValid: false,
    companyValid: false,
    emailValid: false,
    phoneValid: false,
    passwordValid: false,
    reenterPasswordValid: false,
  } as Form)

  const nav = useNavigate()

  function changeHandler(e: ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  function submitHandler(e: FormEvent) {
    e.preventDefault()
    formData.firstNameValid = formData.firstName !== ''
    formData.formErrors.firstName = formData.firstNameValid
      ? ''
      : 'First Name must not be blank'
    formData.lastNameValid = formData.lastName !== ''
    formData.formErrors.lastName = formData.lastNameValid
      ? ''
      : 'Last Name must not be blank'

    formData.companyValid = formData.company !== ''
    formData.formErrors.company = formData.companyValid
      ? ''
      : 'Company Name must not be blank'
    formData.emailValid = formData.email !== ''
    formData.formErrors.email = formData.emailValid
      ? ''
      : 'Email must not be blank'
    formData.phoneValid = formData.phone !== ''
    formData.formErrors.phone = formData.phoneValid
      ? ''
      : 'Phone must not be blank'
    if (!formData.phone.indexOf(' ')) {
      formData.formErrors.phone = 'Phone must not be blank'
    }
    formData.passwordValid = formData.password !== ''
    formData.formErrors.password = formData.passwordValid
      ? ''
      : 'Password must not be blank'
    formData.reenterPasswordValid =
      formData.reenterPassword === formData.password
    formData.formErrors.reenterPassword = formData.reenterPasswordValid
      ? ''
      : 'Password must match'
    if (linkValid()) {
      nav('/captcha')
    }
    setFormData({ ...formData })
  }

  function setFormFields(formFields: FormData): void {
    setFormData({ ...formData, ...formFields })
  }

  function linkValid() {
    return (
      formData.firstNameValid &&
      formData.lastNameValid &&
      formData.companyValid &&
      formData.emailValid &&
      formData.passwordValid &&
      formData.phoneValid &&
      formData.reenterPasswordValid
    )
  }

  return (
    <div className="tos">
      <h2>Very Important Form</h2>
      <div className="form">
        <form onSubmit={submitHandler}>
          <div className="formdata">
            <div className="name">
              <div className="firstName">
                <label htmlFor="firstName">First Name:</label>
                <input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={changeHandler}
                />
              </div>
              <div className="lastName">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="company">
              <label htmlFor="company">Company:</label>
              <input
                id="company"
                name="company"
                value={formData.company}
                onChange={changeHandler}
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email address:</label>
              <input
                id="email"
                name="email"
                value={formData.email}
                onChange={changeHandler}
              />
            </div>
            <div className="phone">
              <label htmlFor="phone">Phone Number:</label>
              <input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={changeHandler}
              />
            </div>
            <div className="password">
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                name="password"
                value={formData.password}
                onChange={changeHandler}
                type="password"
              />
              <div className="reenterPassword">
                <label htmlFor="reenterPassword">Reenter password:</label>
                <input
                  id="reenterPassword"
                  name="reenterPassword"
                  value={formData.reenterPassword}
                  onChange={changeHandler}
                  type="password"
                />
              </div>
            </div>
          </div>
          <div className="form-buttons">
            <button type="submit" className="formButton">
              Sign Up
            </button>
          </div>
        </form>
        <div className="formErrors">
          <Formerrors {...formData.formErrors} />
        </div>
      </div>
    </div>
  )
}

export default Form
