import React from 'react'

const CVVModal = (props) => {

  return (
    <div className='cvv-modal-container page-overlay'>
      <div className="close-btn-container" onClick={() => props.onChange()}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2.29297 3.70706L10.5859 12L2.29297 20.2928L3.70718 21.7071L12.0001 13.4142L20.293 21.7071L21.7072 20.2928L13.4143 12L21.7072 3.70706L20.293 2.29285L12.0001 10.5857L3.70718 2.29285L2.29297 3.70706Z" fill="#333"></path></svg>
      </div>
      <div className="desc-part">
        <p>The cryptogram (CVV) of your card corresponds to the 3 or 4 digit number located on the front or back of the card.</p>
      </div>
      <div className="help-part"><img src={process.env.REACT_APP_CLIENT_URL + "assets/visa_cvv_2x.png"} alt="" /></div>
      <div className="amex-part"><img src={process.env.REACT_APP_CLIENT_URL + "assets/amex_cvv_2x.png"} alt="" /></div>
    </div>
  )
}

export default CVVModal