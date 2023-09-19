import React from 'react'
import './Header.css'
import logo from '../../assets/logo.jpeg'
function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
            <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
            <img src={logo} alt='logo' style={{width:'30px',height:'30px'}} />
            <div style={{display:'flex',fontWeight:700}}><p >Tax</p><p style={{color:'#1967d2'}}>Pal</p></div>
            </div>
            <div style={{display:'flex',gap:'10px',color:"#595957",fontSize:'14px'}}>
                <p>Feactures</p>
                <p>Testimonials</p>
                <p>Pricing</p>
            </div>
        </div>
        <div className='header__right'>
            <p style={{color:"#595957",fontSize:'14px'}}>Sign in</p>
            <button style={{padding:'7px 11px',borderRadius:'30px',backgroundColor:'#1967d2',border
        :"none",color:'white',fontSize:'15px'}}>Get Started Today</button>
        </div>

    </div>
  )
}

export default Header