import React from 'react'
import './rate.css'
import {GrCheckboxSelected} from 'react-icons/gr';
function Rate() {
    const dataPrice=[{
        price:'$45',
        starter:'starter',
        desc:"Good for anyone who is self-employed and just getting started",
    },
    {
        price:'$45',
        starter:'small bussiness',
        desc:"Good for anyone who is self-employed and just getting started",
    },
    {
        price:'$45',
        starter:'starter',
        desc:"Good for anyone who is self-employed and just getting started",
    }]
  return (
    <div className='rate'>
        <div style={{paddingTop:'80px'}}>
        <p style={{textAlign:'center',fontSize:'30px',color:'white'}}>Simple pricining for everyone</p>
        <p style={{textAlign:'center',fontSize:'14px',color:'rgba(204, 204, 204, 0.8)',marginTop:'20px'}}>It doesn't matter what size your bussiness is, our software wont work well for you</p>
        </div>
        <div style={{display:'flex',justifyContent:'center',gap:'18px',marginTop:'30px'}}>
            {
                dataPrice.map((itm,idx)=>(
                    <div style={{padding:'28px',width:'300px',height:'450px',backgroundColor:itm.starter==="small bussiness" ? "rgb(25, 103, 210)":null,borderRadius:'20px',color:'white'}}>
                 <p style={{fontSize:'35px'}}>{itm.price}</p>
                 <p style={{fontSize:'15px',marginTop:'12px'}}>{itm.starter}</p>
                 <p style={{fontSize:'13px',marginTop:'12px'}}>{itm.desc}</p>
                 {itm.starter==="small bussiness"?
                 <button style={{padding:'7px 46px',borderRadius:'30px',backgroundColor:'white',border
        :"none",color:'black',fontSize:'15px',marginTop:'20px'}}>Get Started Today</button>
        :
        <button style={{padding:'7px 21px',borderRadius:'30px',backgroundColor:'#01052A',border
        :"1px solid #454545",color:'white',fontSize:'15px',marginTop:'20px'}}>Get Started Today</button>        
      }
      <div style={{display:'flex',alignItems:'center',gap:'10px',margin:'10px'}}>
    <GrCheckboxSelected /> 
    <p style={{fontSize:'13px'}}>select 10 quotes and invoice</p>
</div>   
<div style={{display:'flex',alignItems:'center',gap:'10px',margin:'10px'}}>
    <GrCheckboxSelected /> 
    <p style={{fontSize:'13px'}}>connect upto 2 banks</p>
</div>   
<div style={{display:'flex',alignItems:'center',gap:'10px',margin:'10px'}}>
    <GrCheckboxSelected /> 
    <p style={{fontSize:'13px'}}>track upto 15 expense per month</p>
</div>   
<div style={{display:'flex',alignItems:'center',gap:'10px',margin:'10px'}}>
    <GrCheckboxSelected /> 
    <p style={{fontSize:'13px'}}>Manual payroll support</p>
</div>   
<div style={{display:'flex',alignItems:'center',gap:'10px',margin:'10px'}}>
    <GrCheckboxSelected /> 
    <p style={{fontSize:'13px'}}>Export upto  3 reports</p>
</div>   

                    </div>
                ))
            }
            
        </div>
    </div>
  )
}

export default Rate