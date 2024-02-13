import { useState, useEffect } from 'react'

function Curtains() {
  return (
    <>
      <div className="curtain">
        <div className="curtain-wrapper">
          <input type="checkbox" checked></input>
          <div className="curtain_panel curtain_panel--left"></div>
          <div className="curtain_prize"></div>
          
          <div className="curtain_panel curtain_panel--right"></div>
        </div>
      </div>
    </>
  )
}
export default Curtains
