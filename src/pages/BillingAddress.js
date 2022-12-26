import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { isEmpty } from '../components/Utils'

const BillingAddress = () => {
  const { state } = useLocation()
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
  const [name, setName] = useState("")
  const [lName, setLName] = useState("")
  const [cc, setCc] = useState("")
  const [expDate, setExpDate] = useState("")
  const [CVV, setCVV] = useState("")
  const [clickInput1, setClickInput1] = useState(false)
  const [clickInput2, setClickInput2] = useState(false)
  const [clickInput3, setClickInput3] = useState(false)
  const [clickInput4, setClickInput4] = useState(false)
  const [clickInput5, setClickInput5] = useState(false)

  useEffect(() => {
    function handleClickOutside(event) {
      if (refIC1.current && !refIC1.current.contains(event.target)) {
        if (isEmpty(name)) {
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
  }, [name, lName, expDate, cc, CVV, clickInput1, clickInput2, clickInput3, clickInput4, clickInput5])

  return (
      <div className="billing-page">
        <div className="header">
          <div className="logo-container">
            <svg viewBox="0 0 111 30" className="svg-icon-netflix-logo" focusable="false"><g id="netflix-logo"><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" id="Fill-14"></path></g></svg>
          </div>
          <div className="logout-btn">
            <span>Logout</span>
          </div>
        </div>
        
        <div className="form-container display">
          <div className="form-content">
            <div className="form-form">
              <div className="title">
                <h2>Insert your billing information</h2>
              </div>
              <div className="field-container">
                <div className="input-container">
                  <div className="field-input" ref={refIC1}> 
                    <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} onFocus={() => {
                        refLabel1.current.classList.add('active')
                        setClickInput1(true)
                      }} />
                    <label htmlFor="name" ref={refLabel1}>Name</label>
                  </div>
                  <div className="error-container" ref={refError1}>
                    <p>Please enter a name.</p>
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
                  </div>
                  <div className="error-container" ref={refError4}>
                    <p>Please insert a cryptogram (CVV).</p>
                  </div>
                </div>
              </div>
              <div className="submit-btn-container">
                <div className="btn-submit" onClick={() => window.location = "/payment"}>
                  <p>Save</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {state.email}
        {state.password}
      </div>
  )
}

export default BillingAddress
