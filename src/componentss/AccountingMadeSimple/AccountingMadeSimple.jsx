import React from "react";
import "./AccountingMadeSimple.css";
import {BsFillPlayFill} from 'react-icons/bs'
import {MdDraw} from 'react-icons/md'
function AccountingMadeSimple() {
  return (
    <div className="AccountingMadeSimple">
      <div
        style={{
          textAlign: "center",
          position: "relative",
          top: "100px",
          fontWeight: 500,
        }}
      >
        <p style={{ color: "black", fontSize: "55px" }}>
          Accounting{" "}
          <span style={{ color: "rgb(25, 103, 210)" }}>made simple</span>
        </p>
        <p style={{ color: "black", fontSize: "55px", fontWeight: 500 }}>
          for small businesses.
        </p>
        <div style={{ color: "#454545", marginTop: "10px", fontSize: "14px" }}>
          <p>
            Most bookkeeping software is accurate, but hard to use.We make the
          </p>
          <p>opposite trade-off, and hope you dont get audited</p>
        </div>
        <div style={{ position: "relative", top: "30px" }}>
          <button
            style={{
              padding: "7px 11px",
              borderRadius: "30px",
              backgroundColor: "black",
              border: "none",
              color: "white",
            }}
          >
            Get 6 months free
          </button>
          <button style={{ marginLeft: "20px",padding: "7px 11px",
              borderRadius: "30px",
              backgroundColor: "white",
              border: "1px solid #ccc",
              color: "black", }}>
            <span>Watch video</span>
          </button>
        </div>
        <p style={{position:'relative',top:'150px'}}>Trusted by these six companies so far</p>
        <div style={{position:'relative',top:'190px',display:'flex',justifyContent:'center',alignItems:'center',gap:'20px',color:'#454545'}}>
        <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
          <MdDraw/>
          <p style={{fontWeight:500}}>Transister</p>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
          <MdDraw/>
          <p style={{fontWeight:900}}>Tupple</p>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
          <MdDraw/>
          <p style={{fontWeight:600}}>StaticKit</p>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
          <MdDraw/>
          <p>Mirage</p>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
          <MdDraw/>
          <p style={{fontWeight:600}}>Laravel</p>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
          <MdDraw/>
          <p style={{fontWeight:600}}>Statamic</p>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default AccountingMadeSimple;
