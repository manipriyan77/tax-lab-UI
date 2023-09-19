import React from 'react'
import {MdDraw} from 'react-icons/md'
import './simplifytask.css'
import { Flex } from '@chakra-ui/react'
import {BiDotsVerticalRounded} from 'react-icons/bi';
import {IoIosAddCircleOutline} from 'react-icons/io'
function SimplifyTask() {

    const reportData=[{
        icons:<MdDraw/>,
        title:"Reporting",
        desc:"Stayed on top of things with always up-to-date reporting feactures.",
        details:"We talked about  reporting in the section  above but we needed three items here, so mentioning it one more time for post"
    },
    {
        icons:<MdDraw/>,
        title:"Inventory",
        desc:"Stayed on top of things with always up-to-date reporting feactures.",
        details:"We talked about  reporting in the section  above but we needed three items here, so mentioning it one more time for post"
    },
    {
        icons:<MdDraw/>,
        title:"Contacts",
        desc:"Stayed on top of things with always up-to-date reporting feactures.",
        details:"We talked about  reporting in the section  above but we needed three items here, so mentioning it one more time for post"
    },

]

const contactReport=[{
    profile:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-QRGfIoJ4aYi-VZPD6b6GF4RSP-MMFO4QHtcfguo&s',
    name:"Eric Johnson",
    position:"CEO of Plonker, Inc",
    rate:"$104,091",
    invoice:43,
    inventory:153,   
},{
    profile:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-QRGfIoJ4aYi-VZPD6b6GF4RSP-MMFO4QHtcfguo&s',
    name:"Eric Johnson",
    position:"CEO of Plonker, Inc",
    rate:"$104,091",
    invoice:43,
    inventory:153,   
},
{
    profile:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-QRGfIoJ4aYi-VZPD6b6GF4RSP-MMFO4QHtcfguo&s',
    name:"Eric Johnson",
    position:"CEO of Plonker, Inc",
    rate:"$104,091",
    invoice:43,
    inventory:153,   
},
{
    profile:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-QRGfIoJ4aYi-VZPD6b6GF4RSP-MMFO4QHtcfguo&s',
    name:"Eric Johnson",
    position:"CEO of Plonker, Inc",
    rate:"$104,091",
    invoice:43,
    inventory:153,   
},
{
    profile:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-QRGfIoJ4aYi-VZPD6b6GF4RSP-MMFO4QHtcfguo&s',
    name:"Eric Johnson",
    position:"CEO of Plonker, Inc",
    rate:"$104,091",
    invoice:43,
    inventory:153,   
}



]
  return (
    <div className='simplifytask'>
        <h1 style={{textAlign:'center',position:'relative',fontSize:'40px'}}>Simplify everyday business tasks</h1>
        <div style={{textAlign:'center',position:'relative',top:'30px',fontSize:'17px'}}>
        <p>Because You'd probably be a little  confused if we suggested you complicate </p>
        <p>Your everyday bussiness  tasks instead</p>
        </div>
        <div style={{position:'relative',top:'50px',display:'flex'}}>
            {reportData.map((itm,idx)=>(
                <div style={{padding:'20px'}}>
                    <div style={{width:'50px',height:'50px',backgroundColor:"#ccc",borderRadius:'10px',fontSize:'30px',display:'flex',justifyContent:'center',alignItems:'center',color:itm.title==='Contacts' ?"blue":"white"}}>{itm.icons}</div>    
                    <p style={{color:itm.title==='Contacts' ?"blue":'rgb(154, 160, 166)',marginTop:'15px',fontSize:'13px'}}>{itm.title}</p>
                    <p style={{fontSize:'16px',marginTop:'15px'}}>{itm.desc}</p>   
                    <p style={{fontSize:'14px',marginTop:'15px',color:'rgb(154, 160, 166)'}}>{itm.details}</p>     
                </div>
            ))}
        </div>
        <div style={{height:'70vh',width:'100%',backgroundColor:'lightgray',position:'relative',top:'55px',borderRadius:'30px',padding:'50px 43px'}}>
                <div style={{height:'auto',width:'70%',backgroundColor:'white',borderRadius:'15px'}}>
                   <div style={{display:"flex",justifyContent:'space-between',padding:'15px'}}>
                    <p>Contacts</p>
                    <p style={{color:'#0197f6',display:'flex',alignItems:'center',gap:'10px'}} >
                        <IoIosAddCircleOutline   className='icons__color'/>
                        <span>Add Contact</span></p>
                   </div>
                   <hr/>
                   <div>
                    {
                        contactReport.map((itm,idx)=>(
                            <div style={{display:"flex",justifyContent:"space-between",padding:'15px',alignItems:'center',gap:'100px'}}>
                                <div style={{display:'flex',gap:'15px',alignItems:'center'}}>
                                     <img src={itm.profile} alt={itm.name} style={{width:'50px',height:'50px',borderRadius:'50%'}}/>
                                     <div>
                                     <p style={{fontSize:'14px'}}>{itm.name}</p>
                                     <p style={{fontSize:'13px',color:'rgb(154, 160, 166)'}}>{itm.position}</p>
                                     </div>
                                </div>
                                <div style={{display:'flex',gap:'49px',alignItems:'center'}}>
                                    <div>
                                    <p  style={{fontSize:'14px',textAlign:'center'}}>{itm.rate}</p>
                                    <p style={{fontSize:'13px',color:'rgb(154, 160, 166)'}}>Total sales</p>
                                    </div>
                                    <div>
                                    <p  style={{fontSize:'14px',textAlign:'center'}}>{itm.rate}</p>
                                    <p style={{fontSize:'13px',color:'rgb(154, 160, 166)'}}>Invoices</p>
                                    </div>
                                    <div>
                                    <p  style={{fontSize:'14px',textAlign:'center'}}>{itm.rate}</p>
                                    <p style={{fontSize:'13px',color:'rgb(154, 160, 166)'}}>Inventory</p>
                                    </div>
                                    <button style={{backgroundColor:'#0197f6',padding:'5px 19px',borderRadius:'11px',color:'white'}}>Send message</button>
                                    <BiDotsVerticalRounded/>
                                </div>
                            </div>
                        ))
                    }
                   </div>
                </div>
              
        </div>
    </div>
  )
}

export default SimplifyTask